<template>
  <v-container fluid>
    <h2 class="text-h4 font-weight-bold mb-6" :class="isDark ? 'text-white' : 'text-primary'">
      Analytics & Charts
    </h2>

    <v-row dense>
      <!-- Line Chart -->
      <v-col cols="12" md="6">
        <v-card class="pa-4" :class="isDark ? 'bg-grey-darken-3' : 'bg-grey-lighten-5'" elevation="8">
          <h3 class="text-subtitle-1 font-weight-bold mb-4">Website Visitors</h3>
          <LineChart />
        </v-card>
      </v-col>

      <!-- Bar Chart -->
      <v-col cols="12" md="6">
        <v-card class="pa-4" :class="isDark ? 'bg-grey-darken-3' : 'bg-grey-lighten-5'" elevation="8">
          <h3 class="text-subtitle-1 font-weight-bold mb-4">Monthly Sales</h3>
          <BarChart />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import LineChart from '@/components/LineChart.vue'
import BarChart from '@/components/BarChart.vue'

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)
</script>
