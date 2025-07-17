<template>
  <v-app>
    <!-- Responsive Sidebar -->
    <v-navigation-drawer
      v-model="drawer"
      :permanent="mdAndUp"
      :temporary="!mdAndUp"
      app
      width="240"
      :color="isDark ? 'grey-darken-4' : 'grey-lighten-4'"
    >
      <v-list>
        <v-list-item class="text-h6 font-weight-bold" :class="isDark ? 'text-white' : 'text-primary'">
          Admin<span style="color:#00bcd4">.Dev</span>
        </v-list-item>

        <v-divider class="mb-4" />

        <v-list-item
          v-for="link in links"
          :key="link.name"
          :to="link.path"
          link
          exact
        >
          <v-list-item-icon>
            <v-icon color="cyan">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main :class="isDark ? 'bg-grey-darken-3 text-white' : 'bg-grey-lighten-4 text-black'">
      <!-- Topbar -->
      <v-app-bar app flat :color="isDark ? 'grey-darken-4' : 'grey-lighten-4'">
        <!-- Toggle Sidebar on Small Screens -->
        <v-btn icon class="d-md-none" @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <v-spacer />

        <!-- Theme Toggle -->
        <v-btn icon @click="toggleTheme">
          <v-icon>
            {{ isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}
          </v-icon>
        </v-btn>

        <!-- Logout Button -->
        <v-btn icon @click="logout" v-if="isLoggedIn">
          <v-icon color="red">mdi-logout</v-icon>
        </v-btn>
      </v-app-bar>

      <!-- Page Content -->
      <v-container fluid class="pa-6">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'
import { useDisplay } from 'vuetify'
import { useThemeStore } from '@/stores/theme'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const store = useThemeStore()
const theme = useTheme()
const auth = useAuthStore()
const router = useRouter()
const display = useDisplay()

const drawer = ref(true)
const isDark = computed(() => store.dark)
const isLoggedIn = computed(() => auth.isLoggedIn)
const mdAndUp = computed(() => display.mdAndUp.value)

const toggleTheme = () => {
  store.toggleTheme()
  store.dark ? theme.change('dark') : theme.change('light')
}

const logout = () => {
  auth.logout()
  router.push('/login')
}

const links = [
  { name: 'Dashboard', path: '/', icon: 'mdi-view-dashboard' },
  { name: 'Users', path: '/users', icon: 'mdi-account-group' },
  { name: 'Charts', path: '/charts', icon: 'mdi-chart-line' },
  { name: 'Settings', path: '/settings', icon: 'mdi-cog' },
]
</script>

<style scoped>
.v-main {
  min-height: 100vh;
}
</style>
