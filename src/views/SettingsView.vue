<template>
    <v-container fluid>
      <h2 class="text-h4 font-weight-bold mb-6" :class="isDark ? 'text-white' : 'text-primary'">
        Settings
      </h2>
  
      <v-row dense>
        <!-- Theme Toggle Card -->
        <v-col cols="12" md="6">
          <v-card :class="isDark ? 'bg-grey-darken-3' : 'bg-grey-lighten-5'" class="pa-6" elevation="10" rounded="xl">
            <h3 class="text-h6 font-weight-medium mb-4">Theme Preference</h3>
            <v-switch
              v-model="dark"
              inset
              :label="dark ? 'Dark Mode' : 'Light Mode'"
              color="cyan"
              hide-details
              @change="toggleTheme"
            />
          </v-card>
        </v-col>
  
        <!-- Profile Form Card -->
        <v-col cols="12" md="6">
          <v-card :class="isDark ? 'bg-grey-darken-3' : 'bg-grey-lighten-5'" class="pa-6" elevation="10" rounded="xl">
            <h3 class="text-h6 font-weight-medium mb-4">Profile Information</h3>
            <v-form @submit.prevent="submitForm">
              <v-text-field
                v-model="form.name"
                label="Full Name"
                variant="outlined"
                class="mb-4"
                prepend-inner-icon="mdi-account"
                required
              />
              <v-text-field
                v-model="form.email"
                label="Email"
                variant="outlined"
                class="mb-4"
                prepend-inner-icon="mdi-email"
                required
              />
              <v-select
                v-model="form.role"
                :items="roles"
                label="Role"
                variant="outlined"
                class="mb-4"
                prepend-inner-icon="mdi-account-tie"
                required
              />
  
              <v-btn color="cyan-darken-2" block type="submit" class="mt-2 glow-btn">
                Save Changes
              </v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useTheme } from 'vuetify'
  import { useThemeStore } from '@/stores/theme'
  
  const theme = useTheme()
  const store = useThemeStore()
  const dark = ref(store.dark)
  const isDark = computed(() => store.dark)
  
  const toggleTheme = () => {
    store.toggleTheme()
    store.dark ? theme.change('dark') : theme.change('light')
  }
  
  const form = ref({
    name: 'Farhan Hussain',
    email: 'farhan@email.com',
    role: 'Admin',
  })
  
  const roles = ['Admin', 'Moderator', 'Viewer']
  
  const submitForm = () => {
    alert(`Saved:\n${form.value.name}\n${form.value.email}\n${form.value.role}`)
  }
  </script>
  
  <style scoped>
  .glow-btn {
    transition: all 0.3s ease;
  }
  .glow-btn:hover {
    box-shadow: 0 0 20px rgba(0, 188, 212, 0.5);
  }
  </style>
  