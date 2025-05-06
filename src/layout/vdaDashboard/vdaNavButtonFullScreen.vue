<template>
    <span  @click="toggleFullscreen"  :class="{'bi mx-3':true, 'bi-fullscreen' : !isFullscreen , 'bi-fullscreen-exit' : isFullscreen }"/>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isFullscreen = ref(false);

// Función para activar/desactivar pantalla completa
const toggleFullscreen = () => {
  if (!document.fullscreenElement) {
    // Entrar en pantalla completa
    document.documentElement.requestFullscreen().catch((err) => {
      console.error("Error al activar pantalla completa:", err);
    });
  } else {
    // Salir de pantalla completa
    document.exitFullscreen();
  }
};

// Escuchar cambios en el estado de pantalla completa
const handleFullscreenChange = () => {
  isFullscreen.value = !!document.fullscreenElement;
};

// Agregar event listeners
onMounted(() => {
  document.addEventListener('fullscreenchange', handleFullscreenChange);
});

// Limpiar event listeners al desmontar
onUnmounted(() => {
  document.removeEventListener('fullscreenchange', handleFullscreenChange);
});
</script>