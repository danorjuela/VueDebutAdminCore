<template>
  <div class="row">
    <div @click="changeVdaThemeMode('auto')" :class="{'py-1 col-4 menu-item':true,'active': vdaThemeMode =='auto' }">
      <i class="bi bi-cpu"></i>
      <span>Sistema</span>
    </div>
    <div @click="changeVdaThemeMode('ligth')"  :class="{'py-1 col-4 menu-item':true,'active': vdaThemeMode =='ligth' }">
      <i class="bi bi-brightness-high-fill"></i>
      <span>Claro</span>
    </div>
    <div  @click="changeVdaThemeMode('dark')" :class="{'py-1 col-4 menu-item':true,'active': vdaThemeMode =='dark' }">
      <i class="bi bi-moon-stars-fill"></i>
      <span>Oscuro</span>
    </div>
  </div>
</template>

<style scoped>
.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  border-radius: var(--bs-border-radius);
}
.menu-item.active {
  background-color: var(--bs-primary) !important;
  color: #fff;
}


.menu-item i {
  font-size: 1.5rem;
  transition: color 0.3s ease;
}


</style>


<script setup>
  import { ref, computed } from 'vue';
  import { ThemeModeMonitor} from '@/utils/ThemeModeMonitor'
  import { useVdaDashboardStore} from '@/stores/vdaDashboardStore.ts'
  import { ThemeModeComposable } from '@/utils/ThemeModeComposable.ts'
  const {setThemeBasedOnSystemPreference} = ThemeModeComposable();
  const vdaDashboardStore = useVdaDashboardStore();
  const vdaThemeMode = computed(() => vdaDashboardStore.vdaThemeMode);

  const changeVdaThemeMode = (mode) => {
    vdaDashboardStore.ChangeViewMode(mode)
    setThemeBasedOnSystemPreference()
  };

</script>
