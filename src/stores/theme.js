import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    dark: true,
  }),
  actions: {
    toggleTheme() {
      this.dark = !this.dark
    },
  },
})
