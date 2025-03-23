<template>
  <div class="bar d-flex flex-column flex-shrink-0 px-3 pt-1 pb-3" style="width: 250px;">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
      
      <i class="bi me-2 bi-bootstrap-fill"></i>
     
      <span class="fs-4">Sidebar</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          <i class="bi me-2 bi-speedometer2"></i>
          Dashboard
        </a>
      </li>
     
      <li class="nav-item">
        <a href="#" class="nav-link">
          <i class="bi me-2 bi-speedometer2"></i>
          Orders
        </a>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center nav-link">
        <i class="bi me-2 bi-gear-wide-connected" style="font-size: 21px;"></i>
        <strong>Configuracion</strong>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
  @media (prefers-color-scheme: light) {
    .bar {
      border-right: var(--bs-border-width) solid var(--bs-gray-400);
    }
  }
  @media (prefers-color-scheme: dark) {
    .bar {
      border-right: var(--bs-border-width) solid var(--bs-gray-dark);
    }
  }
</style>