<template>
    <Bar :data="chartData" :options="options" />
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

const chartData: ChartData = {
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],
    datasets: [
        {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
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
