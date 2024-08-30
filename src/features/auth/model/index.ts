import { defineStore } from 'pinia'

export const useAuthStore = defineStore('authStore', {
  state: () => ({ token: "" }),
  actions: {
    auth() {
      this.token = 'not sueta'
    }
  }
})
