import { defineStore } from 'pinia';

export const useVdaDashboardStore = defineStore('vdaDashboardStore', {
  state: () => {
    let lcSidebarOpened = localStorage.getItem('vdaSidebarOpened') === 'true'
    let lcBsTheme = localStorage.getItem('bsTheme') || 'auto';
    return {
      vdaSidebarOpened : lcSidebarOpened || Boolean(false), 
      vdaSidebarMobileOpened : false, 
      vdaThemeMode : lcBsTheme,
      vdaToken: localStorage.getItem('vdaToken'),
      vdaLoad: false,
      vdaAppData : {}
    }
  },
  actions: {
    SetVdaAppData(data:any){
      this.vdaAppData = data;
    },
    OpenMobileSideBar(){
      this.vdaSidebarMobileOpened = true
    },
    CloseMobileSideBar(){
      this.vdaSidebarMobileOpened = false
    },
    ChangeSideBar() {
      this.vdaSidebarOpened = !this.vdaSidebarOpened
      localStorage.setItem('vdaSidebarOpened',String(this.vdaSidebarOpened)) 
    },
    CloseSideBar() {
      this.vdaSidebarOpened = false
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