<template>
  <div>
    <RouterView />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useVdaDashboardStore } from '@/stores/vdaDashboardStore'
import { mapStores, mapState, mapActions } from 'pinia'
import { ThemeModeMonitor} from '@/utils/ThemeModeMonitor'
export default defineComponent({
  name: "VueDebutAdmin",
  mounted() {
    this.setThemeBasedOnSystemPreference();
  },
  computed: {
    ...mapStores(useVdaDashboardStore),
    ...mapState(useVdaDashboardStore, ['vdaThemeMode']),
  },
  methods: {
    setThemeBasedOnSystemPreference() {
      if (this.vdaThemeMode === 'auto'){
        let osMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-bs-theme', osMode?'dark':'ligth');
        ThemeModeMonitor.MountMonitor();
      }else{
        document.documentElement.setAttribute('data-bs-theme', this.vdaThemeMode);
        ThemeModeMonitor.RemoveMonitor();
      }
    }
  }
})
</script>