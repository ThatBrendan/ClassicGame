import { defineStore } from 'pinia'
import { playstation, xbox } from '@/type/storeViews'

export const useStateStore = defineStore('useState', {
  state: () => ({
    currentView: playstation,
  }),

  getters: {
    view: (state) => state.currentView,
    menu: (state) => {
      return [...state.currentView.navMenu.navBarMenu, { title: state.currentView.switchMenu }]
    },
    switchMenu: (state) => state.currentView.switchMenu,
  },

  actions: {
    switchView() {
      this.currentView = this.currentView.isPlayStation() ? xbox : playstation
    },
  },
})
