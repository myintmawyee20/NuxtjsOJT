<template>
    <Bar :data="chartData" :options="options" />
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
    label: String,
});
let nuxtApp = useNuxtApp() as any;
const weekday: any = [];
const countDay: any = {};

let res = await nuxtApp.db.collection("posts").orderBy("created_at", "desc").get();
res.docs.forEach((day: any) => {
    const createdDatetime = day.data().created_at.toDate();
    const days = createdDatetime.toLocaleString('en-US', { weekday: 'long' });
    weekday.push(days);
});
weekday.forEach((value: any) => {
    countDay[value] = (countDay[value] || 0) + 1; 
});
interface ChartData {
    labels: string[];
    datasets: ChartDataset[];
}

interface ChartDataset {
    label: string;
    backgroundColor: string;
    data: number[];
}

const chartData: ChartData = {
    labels: Array.from(new Set(weekday)),
    datasets: [
        {
            label: `${props.label}`,
            backgroundColor: '#f87979',
            data: Object.values(countDay)
        }
    ]
};
interface ChartOptions {
    responsive: boolean;
    maintainAspectRatio: boolean;
}
const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
};
</script>

<style scoped></style>
