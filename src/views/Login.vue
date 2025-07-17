<template>
    <v-container class="fill-height d-flex align-center justify-center">
      <v-card
        class="pa-8"
        max-width="500"
        elevation="12"
        rounded="xl"
        :class="isDark ? 'bg-grey-darken-3' : 'bg-grey-lighten-5'"
      >
        <h2 class="text-h5 font-weight-bold mb-6 text-center">
          Login to <span class="text-cyan">Admin.Dev</span>
        </h2>
  
        <v-form @submit.prevent="handleLogin">
          <v-text-field
            v-model="email"
            label="Email"
            prepend-inner-icon="mdi-email"
            variant="outlined"
            class="mb-4"
            density="comfortable"
            required
          />
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            prepend-inner-icon="mdi-lock"
            variant="outlined"
            class="mb-4"
            density="comfortable"
            required
          />
          <v-btn color="cyan-darken-2" block size="large" type="submit">
            Login
          </v-btn>
  
          <v-alert v-if="error" type="error" class="mt-4" border="start" variant="tonal">
            {{ error }}
          </v-alert>
  
          <div class="text-caption mt-6 text-center">
            Don't have an account?
            <RouterLink to="/register" class="text-cyan">Register</RouterLink>
          </div>
        </v-form>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useAuthStore } from '@/stores/auth'
  import { useRouter } from 'vue-router'
  import { useTheme } from 'vuetify'
  
  const email = ref('')
  const password = ref('')
  const error = ref('')
  const router = useRouter()
  const auth = useAuthStore()
  
  const handleLogin = () => {
    const success = auth.login(email.value, password.value)
    if (success) {
      router.push('/')
    } else {
      error.value = 'Invalid email or password'
    }
  }
  
  const theme = useTheme()
  const isDark = computed(() => theme.global.current.value.dark)
  </script>
  