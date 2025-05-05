<template>
  <div class="bar d-flex flex-column flex-shrink-0 px-3 pt-1 pb-3">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
      <i class="bi me-2 bi-bootstrap-fill"></i>
      <span class="fs-4 d-none-colapse">Sidebar</span> <!-- Agregar clase para ocultar -->
    </a>
    <hr>
    <ul class="nav nav-pills flex-column nav-flush mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <i class="bi me-2 bi-speedometer2"></i>
          <span class="d-none-colapse">Dashboard</span> <!-- Agregar clase para ocultar -->
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">
          <i class="bi me-2 bi-speedometer2"></i>
          <span class="d-none-colapse">Orders</span> <!-- Agregar clase para ocultar -->
        </a>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center nav-link">
        <i class="bi me-2 bi-gear-wide-connected" style="font-size: 21px;"></i>
        <strong class="d-none-colapse">Configuracion</strong> <!-- Agregar clase para ocultar -->
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false,
      showMobileSidebar: false
    }
  },
  methods: {
    toggleSidebar() {
      if (window.innerWidth < 768) {
        this.showMobileSidebar = !this.showMobileSidebar
      } else {
        this.isCollapsed = !this.isCollapsed
      }
    },
    closeSidebar() {
      this.showMobileSidebar = false
    }
  }
}
</script>



<style lang="scss">
.bar {
  transition: all 0.3s;
  width: 250px;
  
  &.colapse {
    width: 80px;
    
    // Ocultar textos
    .d-none-colapse {
      display: none;
    }
    
    // Ajustar iconos
    .bi {
      margin: 0 auto; // Centrar iconos
      font-size: 1.5rem; // Tamaño consistente
    }
    
    // Ajustar padding
    .px-3 {
      padding-left: 0.5rem !important;
      padding-right: 0.5rem !important;
    }
    
    // Centrar elementos
    .nav-link, .dropdown > a {
      justify-content: center !important;
    }
    
    // Reducir espacio entre iconos
    .me-2 {
      margin-right: 0 !important;
    }
    
    // Ajustar título principal
    .fs-4 {
      font-size: 0 !important;
    }
  }
}

@media (prefers-color-scheme: light) {
  .bar {
    border-right: var(--bs-border-width) solid var(--bs-border-color);
  }
}
@media (prefers-color-scheme: dark) {
  .bar {
    border-right: var(--bs-border-width) solid var(--bs-border-color);
  }
}

</style>