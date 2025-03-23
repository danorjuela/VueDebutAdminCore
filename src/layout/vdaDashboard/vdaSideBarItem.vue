<template>
  <li>
    <router-link :to="to" :class="['base-class',icon]" active-class="active">
      <i class="bi me-2" ></i>
      {{ text }}
    </router-link>
  </li>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: "vda-sidebar-item",
  props:{
    icon: {
      type: String,
      required: true
    },
    text:{
      type: String,
      required: true
    },
    to:{
      type: String,
      required: true
    }
  }
})
</script>