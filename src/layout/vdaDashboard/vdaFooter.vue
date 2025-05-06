<template>
  <footer class="px-3 pt-0 pb-3 mt-auto">
    <hr>
    <div class="row justify-content-between py-1">
      <div class="col">
        &copy; 2025 Danorjuela | v0.1

      </div>
      <div class="col text-end">
        <i class="bs-icon" /> + <i class="vue-icon " /> + <i class="pinia-icon" /> =  &#10084;&#65039; 
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  margin-top: auto;
}

.vue-icon {
  background-image: url('src/assets/vue.svg');
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: contain;
  background-repeat: no-repeat;
}

.bs-icon {
  background-image: url('src/assets/Bootstrap.svg');
  display: inline-block;
  width: 20px;
  height: 15px;
  background-size: contain;
  background-repeat: no-repeat;
}


.pinia-icon {
  background-image: url('src//assets/Pinialogo.svg');
  display: inline-block;
  width: 15px;
  height: 15px;
  background-size: contain;
  background-repeat: no-repeat;
}


</style>