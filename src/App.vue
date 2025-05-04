<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useVdaDashboardStore } from '@/stores/vdaDashboardStore'
  import { ThemeModeMonitor} from '@/utils/ThemeModeMonitor'
  import { ThemeModeComposable } from '@/utils/ThemeModeComposable.ts'
  const {setThemeBasedOnSystemPreference, vdaThemeMode} = ThemeModeComposable();
  
  onMounted(() => {
    setThemeBasedOnSystemPreference();
  })
</script>