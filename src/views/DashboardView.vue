<template>
    <v-container fluid>
      <!-- Page Title -->
      <h2 class="text-h4 font-weight-bold mb-8" :class="isDark ? 'text-white' : 'text-primary'">
        Dashboard Overview
      </h2>
  
      <!-- Stats Grid -->
      <v-row dense>
        <v-col cols="12" sm="6" md="3" v-for="card in stats" :key="card.title">
          <v-card
            :class="isDark ? 'bg-grey-darken-3 text-white' : 'bg-grey-lighten-4 text-black'"
            elevation="8"
            class="pa-5 rounded-xl d-flex flex-column align-center text-center dashboard-card"
          >
            <v-icon :color="card.color" size="40" class="mb-3">
              {{ card.icon }}
            </v-icon>
            <h3 class="text-h6 font-weight-bold">{{ card.title }}</h3>
            <h1 class="text-h4 font-weight-bold mt-2">{{ card.value }}</h1>
            <p class="text-caption mt-1" style="opacity: 0.7">{{ card.subtitle }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useTheme } from 'vuetify'
  
  const theme = useTheme()
  const isDark = computed(() => theme.global.current.value.dark)
  
  // Fake dashboard stats
  const stats = [
    {
      title: 'Total Users',
      value: '1,245',
      subtitle: 'Active in last 30 days',
      icon: 'mdi-account-group',
      color: 'cyan',
    },
    {
      title: 'Monthly Sales',
      value: '$32,000',
      subtitle: 'Updated just now',
      icon: 'mdi-currency-usd',
      color: 'green',
    },
    {
      title: 'New Visitors',
      value: '3,870',
      subtitle: 'From 120 countries',
      icon: 'mdi-eye',
      color: 'indigo',
    },
    {
      title: 'Revenue',
      value: '$124k',
      subtitle: 'Year to date',
      icon: 'mdi-chart-line',
      color: 'orange',
    },
  ]
  </script>
  
  <style scoped>
  .dashboard-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .dashboard-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  </style>
  