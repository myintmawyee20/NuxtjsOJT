<template>
    <Pie :data="chartData" :options="options" />
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps({
    label: String,
});
let nuxtApp = useNuxtApp() as any;
const yearList: any = [];
const countYear: any = {};

let res = await nuxtApp.db.collection("posts").orderBy("created_at", "desc").get();
res.docs.forEach((day: any) => {
    const createdDatetime = day.data().created_at.toDate();
    const years = createdDatetime.getFullYear().toString();
    yearList.push(years);
});
yearList.forEach((value: any) => {
    countYear[value] = (countYear[value] || 0) + 1; 
});
interface ChartData {
    labels: string[];
    datasets: ChartDataset[];
}

interface ChartDataset {
    label: string;
    backgroundColor: string[];
    data: number[];
}

const chartData: ChartData = {
    labels: Array.from(new Set(yearList)),
    datasets: [
        {
            label: `${props.label}`,
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: Object.values(countYear)
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
