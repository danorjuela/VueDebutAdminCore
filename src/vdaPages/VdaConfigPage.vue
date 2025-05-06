<template>
  <div class="row">
    <div class="col-lg-6 mb-2">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold">Interfaz</h6>
        </div>
        <div class="card-body">
          <div class="item-title mb-2">
            <i class="bi me-2 bi-brush" /> Preferencias de color
          </div>
          <vdaNavUserMenuViewMode class="item-title px-4 mb-4" />

          <div class="input-group">
            <span class="input-group-text" id="visible-addon">  <i class="bi me-2 bi-translate" />Idioma</span>
            <select
              class="form-select form-select-sm btn-success"
            >
              <option value="es" selected>
                <i class="bi bi-check-circle-fill text-success me-2"></i>
                Español
              </option>
              <option value="en">
                <i class="bi bi-check-circle-fill text-success me-2"></i> Inglés
              </option>
            </select>
          </div>


          <div class="item-title mb-2">
          
          </div>
          <div>
           
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-6 mb-2">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold">Cuenta</h6>
        </div>
        <div class="card-body">
        
        </div>
      </div>
    </div>

    <div class="col-lg-12">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold">Otros Parametros</h6>
        </div>
        <div class="card-body"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import vdaNavUserMenuViewMode from "@/layout/vdaDashboard/vdaNavUserMenuViewMode.vue";
</script>