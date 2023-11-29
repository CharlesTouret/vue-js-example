import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      user: {
        firstName: "",
        lastName: "",
        age: 0,
        accessToken: "",
        isConnected: false,
      }
    }
  },
  getters: {
    getAccessToken: (state) => state.user.accessToken,
    isConnected: (state) => state.user.isConnected,
  },
  actions: {
    init(user: any, accessToken: string) {
      this.user = {
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age,
        accessToken: accessToken,
        isConnected: true,
      }
    },
    empty() {
      this.user = {
        firstName: "",
        lastName: "",
        age: 0,
        accessToken: "",
        isConnected: false,
      }
    }
  }
})
