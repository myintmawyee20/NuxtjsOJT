<template>
    <Pie :data="data" :options="options" />
</template>

<script setup lang="ts">

interface ChartData {
    labels: string[];
    datasets: ChartDataset[];
}

interface ChartDataset {
    label: string;
    backgroundColor: string;
    data: number[];
}

interface ChartOptions {
    responsive: boolean;
    maintainAspectRatio: boolean;
}

const data = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
        {
            backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [40, 20, 80, 10]
        }
    ]
}

const options = {
    responsive: true,
    maintainAspectRatio: false
}
</script>

<style scoped></style>
