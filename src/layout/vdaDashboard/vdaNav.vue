<template>
  <nav class="navbar topbar mb-2 static-top .navbar-expand-md">
    <span @click="toggleSidebar" class="navbar-toggler-icon mx-3"></span>

    <a class="navbar-brand mx-auto" href="#">DashBoard</a>

    <vdaNavNotificationMenu></vdaNavNotificationMenu>
    <div class="vr"></div>
    <span class="ms-3 d-none d-md-block">Daniel Orjuela</span>
    <vda-nav-user-menu/>

  </nav>
</template>

<script setup>
import vdaBreadCum from '@/layout/vdaDashboard/vdaBreadCum.vue'
import vdaNavUserMenu from '@/layout/vdaDashboard/vdaNavUserMenu.vue'
import vdaNavNotificationMenu from '@/layout/vdaDashboard/vdaNavNotificationMenu.vue'



import vdaNavButtonViewMode from '@/layout/vdaDashboard/vdaNavButtonViewMode.vue'
import { useVdaDashboardStore } from '@/stores/vdaDashboardStore'
const vdaDashboardStore = useVdaDashboardStore();

function toggleSidebar() {
    if (window.innerWidth < 768) {
      vdaDashboardStore.CloseSideBar();
      vdaDashboardStore.OpenMobileSideBar();
    } else {
      vdaDashboardStore.ChangeSideBar()
    }
  }
</script>

<style lang="scss" scoped>
  @media (prefers-color-scheme: light) {
    nav {
      border-bottom:  var(--bs-border-width) solid var(--bs-border-color);
    }
  }
  @media (prefers-color-scheme: dark) {
    nav {
      border-bottom: var(--bs-border-width) solid var(--bs-border-color);
    }
  }
</style>