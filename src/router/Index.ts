import { createMemoryHistory, createRouter } from 'vue-router'
// Layout
import vdaDashboard from '@/layout/vdaDashboard.vue'
// Views
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    component: vdaDashboard,
    redirect : '/home' ,
    children: [
      {path: '/home', component: HomeView}
    ]
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router