<template>
  <div>
    <RouterView v-if="vdaLoad" />
    <vdaLoading v-else />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useVdaDashboardStore } from "@/stores/vdaDashboardStore";
import vdaLoading from "@/layout/vdaDashboard/vdaLoading.vue";
import { ThemeModeMonitor } from "@/utils/ThemeModeMonitor";
import { ThemeModeComposable } from "@/utils/ThemeModeComposable.ts";
import { vdaAppInfo } from "@/api/services/vdaAppInfo.ts";

const { setThemeBasedOnSystemPreference, vdaThemeMode } = ThemeModeComposable();
const vdaDashboardStore = useVdaDashboardStore();
const vdaAppData = computed(() => vdaDashboardStore.VdaAppData);
const vdaLoad = computed(() => vdaDashboardStore.vdaLoad);

onMounted(() => {
  setThemeBasedOnSystemPreference();
  vdaAppInfo.GetAppInfo()
    .then((appInfo) => {
      console.log(appInfo)
      vdaDashboardStore.SetVdaLoad(true)
      vdaDashboardStore.SetVdaAppData(appInfo)
    })
    .catch((error) => {
      console.error("Error al obtener la información de la app:", error);
    });
});
</script>

