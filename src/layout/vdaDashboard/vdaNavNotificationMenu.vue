<template>
  <div class="dropdown">
    <div
      class="me-3 text-decoration-none"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i class="bi bi-bell-fill"></i>
    </div>
    <ul
      class="dropdown-menu dropdown-menu-end pt-0"
      aria-labelledby="dropdownMenuButton"
    >
      <li class="dropdown-header">Notificaciones</li>
      <li class="item-title">
        <div>No tiene notificaciones pendientes</div>


      </li>
    </ul>
  </div>
</template>

<style scoped>

  .dropdown-menu {
    min-width: 240px;
    margin-top:20px
  }

  .item-title{
    padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  }

</style>


