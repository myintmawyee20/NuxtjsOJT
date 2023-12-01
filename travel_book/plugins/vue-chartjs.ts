/* eslint-disable vue/one-component-per-file */
import { Bar, Line, Doughnut, Pie, Bubble } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    ArcElement
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    PointElement,
    BarElement,
    CategoryScale,
    LinearScale,
    LineElement,
    ArcElement
)

export default defineNuxtPlugin((nuxtApp: any) => {
    nuxtApp.vueApp.component('Bar', Bar);
    nuxtApp.vueApp.component('Line', Line);
    nuxtApp.vueApp.component('Doughnut', Doughnut);
    nuxtApp.vueApp.component('Pie', Pie);
    nuxtApp.vueApp.component('Bubble', Bubble);
})
