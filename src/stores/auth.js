import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    login(email, password) {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || []
      const user = storedUsers.find(u => u.email === email && u.password === password)
      if (user) {
        this.user = user
        localStorage.setItem('user', JSON.stringify(user))
        return true
      }
      return false
    },
    register(name, email, password) {
      const users = JSON.parse(localStorage.getItem('users')) || []
      if (users.some(u => u.email === email)) {
        return false // Email already registered
      }
      const newUser = { name, email, password }
      users.push(newUser)
      localStorage.setItem('users', JSON.stringify(users))
      this.user = newUser
      localStorage.setItem('user', JSON.stringify(newUser))
      return true
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
    },
  },
})
