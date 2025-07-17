<template>
  <v-sheet height="300" rounded="lg" class="pa-4">
    <Bar :data="chartData" :options="chartOptions" />
  </v-sheet>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Title,
  Legend,
} from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Title, Legend)

const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales ($)',
      data: [3000, 4500, 4000, 5000, 4800, 5300],
      backgroundColor: '#42a5f5',
      borderRadius: 6,
      barThickness: 30,
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
      grid: { color: 'rgba(136, 136, 136, 0.2)' },
    },
    y: {
      ticks: { color: '#888' },
      grid: { color: 'rgba(136, 136, 136, 0.2)' },
    },
  },
}
</script>
