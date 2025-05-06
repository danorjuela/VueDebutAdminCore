<template>
  <div class="dropdown me-3">
    <div
      class="mx-2 text-decoration-none"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i class="bi bi-layout-wtf"></i>
    </div>
    <ul
      class="dropdown-menu dropdown-menu-end"
    >
      <li><router-link class="dropdown-item" to="/config"><i class="bi me-2 bi-gear-wide-connected "/>Configuracion</router-link></li>
      <li><hr class="dropdown-divider" /></li>
      <li>
        <div class="item-title"><i class="bi me-2 bi-brush"/> Preferencias de color</div>
        <vdaNavUserMenuViewMode class="item-title px-4"/>
      </li>
      <li><hr class="dropdown-divider" /></li>
      <li><a class="dropdown-item" href="#"><i class="bi text-danger me-2 bi-arrow-bar-right"/> Cerrar sesión</a></li>
    </ul>
  </div>
</template>


<script setup>
import vdaNavUserMenuViewMode from '@/layout/vdaDashboard/vdaNavUserMenuViewMode.vue'
</script>

<style scoped>

  .dropdown-menu {
    min-width: 240px;
    margin-top:20px
  }

  .item-title{
    padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  }

</style>