<template>
    <Line :data="data" :options="options" />
</template>

<script setup lang="ts">
interface ChartOptions {
    responsive: boolean;
    maintainAspectRatio: boolean;
}
interface LineDataset {
    label: string;
    backgroundColor: string;
    data: number[];
}

interface LineData {
    labels: string[],
    datasets: LineDataset[];
}

const data: LineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 39, 10, 40, 39, 80, 40]
        }
    ]
}

const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false
}
</script>

<style scoped></style>
