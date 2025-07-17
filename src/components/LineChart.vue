<template>
  <v-sheet height="300" rounded="lg" class="pa-4">
    <Line :data="chartData" :options="chartOptions" />
  </v-sheet>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js'

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale)

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Visitors',
      data: [500, 700, 900, 1200, 1000, 1400],
      borderColor: '#00bcd4',
      backgroundColor: 'rgba(0, 188, 212, 0.1)',
      fill: true,
      tension: 0.4,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: '#888',
      },
    },
  },
  scales: {
    x: {
      ticks: { color: '#888' },
      grid: { color: 'rgba(136,136,136,0.2)' },
    },
    y: {
      ticks: { color: '#888' },
      grid: { color: 'rgba(136,136,136,0.2)' },
    },
  },
}
</script>
