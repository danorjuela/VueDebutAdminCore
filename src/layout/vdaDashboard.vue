<template>
  <div class="d-flex">
    <vda-sidebar />
    <div class="content flex-grow-1">
      <!-- Navbar -->
      <vda-nav/>
      <!-- Main Area -->
      <div class="container my-2 px-3">
        <RouterView/>
      </div>
      <vda-footer/>
    </div>

  </div>
</template>

<script setup>
import vdaSidebar from '@/layout/vdaDashboard/vdaSidebar.vue'
import vdaNav from '@/layout/vdaDashboard/vdaNav.vue'
import vdaFooter from '@/layout/vdaDashboard/vdaFooter.vue'


</script>

<style scoped>
#admin-layout {
  min-height: 100vh;
}


.content {
  height: 100vh;
  display: flex;          /* Activamos Flexbox */
  flex-direction: column;
}

.container{
  flex-grow: 1;
}


@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
  }

  .content {
    margin-left: 0;
  }
  
}
@media (min-width: 768px) {

  .content.flex-grow-1 {
  margin-left: 250px; 
  transition: margin-left 0.3s;
  }

/* Cuando el sidebar está colapsado */
.bar.colapse ~ .content.flex-grow-1 {
  margin-left: 72px; /* Igual al ancho colapsado */
}
}


</style>