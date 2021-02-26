import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Projects from '../pages/Projects.vue'
import AppLayout from '../layouts/AppLayout.vue'

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      { path: '', component: Home },
      { path: '/projects', component: Projects },
      { path: '/about', component: About },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
