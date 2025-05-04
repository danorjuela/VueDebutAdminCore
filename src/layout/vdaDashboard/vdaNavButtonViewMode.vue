<template>
    <span @click="changeVdaThemeMode" :class="{'bi mx-3' : true, 'bi-brightness-high-fill':vdaThemeMode =='ligth', 
      'bi-moon-stars-fill':vdaThemeMode =='dark', 'bi bi-brilliance':vdaThemeMode =='auto'
    } "></span>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { ThemeModeMonitor} from '@/utils/ThemeModeMonitor'
  import {useVdaDashboardStore} from '@/stores/vdaDashboardStore.ts'
  import { ThemeModeComposable } from '@/utils/ThemeModeComposable.ts'
  const {setThemeBasedOnSystemPreference} = ThemeModeComposable();
  const vdaDashboardStore = useVdaDashboardStore();
  const vdaThemeMode = computed(() => vdaDashboardStore.vdaThemeMode);

  const changeVdaThemeMode = () => {
    if (vdaThemeMode.value === 'auto'){
      vdaDashboardStore.ChangeViewMode('ligth')
    }else if (vdaThemeMode.value === 'ligth'){
      vdaDashboardStore.ChangeViewMode('dark')
    }else if (vdaThemeMode.value === 'dark'){
      vdaDashboardStore.ChangeViewMode('auto')
    }
    setThemeBasedOnSystemPreference()
  };
</script>

