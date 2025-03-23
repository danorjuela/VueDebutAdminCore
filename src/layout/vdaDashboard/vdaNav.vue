<template>
  <nav class="navbar topbar mb-2 static-top .navbar-expand-md">
    <span class="navbar-toggler-icon mx-3"></span>

    <a class="navbar-brand mx-auto" href="#">DashBoard</a>

    <span class="bi bi-brightness-high-fill mx-3"></span>
    <div class="vr"></div>
    <span class="ms-3">Daniel Orjuela</span>
    <span class=" mx-3 bi bi-layout-wtf"></span>

  </nav>
</template>

<script setup>
import vdaBreadCum from '@/layout/vdaDashboard/vdaBreadCum.vue'
</script>

<style lang="scss" scoped>
  @media (prefers-color-scheme: light) {
    nav {
      border-bottom:  var(--bs-border-width) solid var(--bs-gray-400);
    }
  }
  @media (prefers-color-scheme: dark) {
    nav {
      border-bottom: var(--bs-border-width) solid var(--bs-gray-dark);
    }
  }
</style>