<template>
  <!-- Backdrop para móvil -->
  <div
    class="sidebar-backdrop"
    :class="{ show: showMobileSidebar }"
    @click="closeSidebar"
  ></div>

  <!-- Sidebar -->
  <div
    class="bar bg-body d-flex flex-column flex-shrink-0 pb-3"
    :class="{ colapse: isCollapsed, 'mobile-active': showMobileSidebar }"
  >
    <RouterLink to="/home" class="title-logo">
      <span :class="{ 'd-none': !isCollapsed }">VDA</span>
      <span class="fs-4 ms-2 d-none-collapse">VueDebutAdmin</span>
    </RouterLink>
    <hr class="mt-0 mx-3" />
    <ul class="nav nav-pills flex-column nav-flush mb-auto px-3">

      <vdaSideBarItem v-for="(item, index) in vdaAppData.user.sidebar" :key="index" :icon = "item.icon" :text="item.name" :to="item.to"  :childrens="item.childrens"/>

    </ul>
    <hr class="d-none-collapse mx-3" />
    <div class="dropdown py-1 px-3">
      <RouterLink to="/config" class="nav-link d-flex align-items-center">
        <i class="nav-icon bi bi-gear-wide-connected config-icon"></i>
        <strong class="d-none-collapse">Configuracion</strong>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useVdaDashboardStore } from "@/stores/vdaDashboardStore";
import vdaSideBarItem from '@/layout/vdaDashboard/vdaSideBarItem.vue'

const vdaDashboardStore = useVdaDashboardStore();

const isCollapsed = computed(() => vdaDashboardStore.vdaSidebarOpened);
const vdaAppData = computed(() => vdaDashboardStore.vdaAppData);

const showMobileSidebar = computed(
  () => vdaDashboardStore.vdaSidebarMobileOpened
);

function closeSidebar() {
  vdaDashboardStore.CloseMobileSideBar();
}
</script>

<style lang="scss" >

.nav-link{
  color : var(--bs-body-color) !important
}
.nav-link.active{
  color : var(--bs-nav-pills-link-active-color  ) !important
}

.nav-link.active:hover{
  color : var(--bs-nav-pills-link-active-color  ) !important
}


.nav-item:hover{
  background-color: var(--bs-border-color );
  border-radius: var(--bs-nav-pills-border-radius);
}


.bar {
  transition: all 0.3s;
  width: 250px;
  height: 100vh;
  position: relative;
  z-index: 1001;
  border-right: var(--bs-border-width) solid var(--bs-border-color);
  i {
    margin-right: 0.5rem !important;
  }

  // Estilos para desktop (md y arriba)
  @media (min-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;

    &.colapse {
      width: 72px;
      //padding-left: 0px !important;
      //padding-right: 0px !important;
      //align-items: center;

      .d-none-collapse {
        display: none;
      }

      .bi {
        font-size: 1.5rem;
      }

      .px-3 {
        padding-left: 0.25rem !important;
        padding-right: 0.25rem !important;
      }

      .nav-item {
        text-align: center;
      }

      .nav-link,
      .dropdown > a {
        justify-content: center !important;
        padding-left: 0.5rem !important;
        padding-right: 0.5rem !important;
        //border-radius:  0px;
      }

      .fs-4 {
        font-size: 0 !important;
      }

      .nav-icon {
        margin-right: 0rem !important;
      }
    }
  }

  // Estilos para móvil
  @media (max-width: 767px) {
    position: fixed;
    left: -250px;
    top: 0;
    bottom: 0;
    box-shadow: 5px 0 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;

    &.mobile-active {
      transform: translateX(250px);
    }
  }
}

.title-logo {
  text-align: center;
  min-height: 56px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  color: var(--bs-body-color);
}

.sidebar-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;

  &.show {
    opacity: 1;
    pointer-events: all;
  }
}
</style>


