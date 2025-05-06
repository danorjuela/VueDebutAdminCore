<template>
  <li class="nav-item" v-if="to != undefined && childrens == undefined">
    <router-link :to="{ path: to }" class="nav-link " active-class="active">
      <i :class="['nav-icon', 'bi', 'me-2', icon]"></i>
      <span class="d-none-collapse text-capitalize"> {{ text }}</span>
    </router-link>
  </li>

  <li class="nav-item dropend" v-else>
    <div
      class="nav-link d-flex pe-0"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i :class="['nav-icon', 'bi', 'me-2', icon]"></i>
      <span class="d-none-collapse me-auto text-capitalize">{{ text }}</span>
      <i class="bi bi-arrow-right-short d-none-collapse"></i>
      <div class="dropdown-menu">
        <h6 class="dropdown-header text-capitalize">{{ text }}</h6>
        <router-link  @click.prevent="navigate(item.to)" v-for="(item, key) in childrens" :key="key" class="dropdown-item text-capitalize" :to="to + item.to">
          <i :class="['bi', 'me-2', item.icon]"/> {{item.name}} </router-link
        >
      </div>
    </div>
  </li>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "vda-sidebar-item",
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: false,
    },
    childrens: {
      type: Array,
      required: false,
    },
  },methods: {
  navigate(path) {
    this.$router.push(this.to + path);
  },
},

  
});
</script>