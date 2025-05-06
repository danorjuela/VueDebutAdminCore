import { createWebHashHistory, createRouter } from 'vue-router'
// Layout
import vdaDashboard from '@/layout/vdaDashboard.vue'
// Views - examples
import HomeView from '@/views/HomeView.vue'
import AnimationUtilitiesView from '@/views/AnimationUtilitiesView.vue'
import BorderUtilitiesView from '@/views/BorderUtilitiesView.vue'
import ButtomsView from '@/views/ButtomsView.vue'
import CardsView from '@/views/CardsView.vue'
import ColorUtilitiesView from '@/views/ColorUtilitiesView.vue'
import OtherUtilitiesView from '@/views/OtherUtilitiesView.vue'
import TablesView from '@/views/TablesView.vue'


// Vda pages
import VdaConfigPage from '@/vdaPages/VdaConfigPage.vue'


const routes = [
  {
    path: '/',
    component: vdaDashboard,
    redirect : '/home' ,
    children: [
      {path: '/home', component: HomeView},
      {path: '/config', component: VdaConfigPage},
      {path: '/components/buttons', component: ButtomsView},
      {path: '/components/cards', component: CardsView},
      {path: '/components/tables', component: TablesView},
      {path: '/utils/colors', component: ColorUtilitiesView},
      {path: '/utils/borders', component: BorderUtilitiesView},
      {path: '/utils/animations', component: AnimationUtilitiesView},
      {path: '/utils/other', component: OtherUtilitiesView},
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router