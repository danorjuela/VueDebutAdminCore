import { defineStore } from 'pinia';

export const useVdaDashboardStore = defineStore('vdaDashboardStore', {
  state: () => {
    let lcSidebarOpened = localStorage.getItem('vdaSidebarOpened') === 'true'
    let lcBsTheme = localStorage.getItem('bsTheme') || 'auto';
    return {
      vdaSidebarOpened : lcSidebarOpened || false, 
      vdaThemeMode : lcBsTheme,
      vdaToken: localStorage.getItem('vdaToken'),
      vdaLoad: false
    }
  },
  actions: {
    ChangeSideBar() {
      this.vdaSidebarOpened = !this.vdaSidebarOpened
      localStorage.setItem('vdaSidebarOpened',String(this.vdaSidebarOpened)) 
    },
    ChangeViewMode(mode:string){
      this.vdaThemeMode = mode
      localStorage.setItem('bsTheme',mode) 
    },
    SetVdaToken(token:string) {
      this.vdaToken = token
      localStorage.setItem('vdaToken',token) 
    },
    SetVdaLoad(state:boolean){
      this.vdaLoad = state
    }
  }
});