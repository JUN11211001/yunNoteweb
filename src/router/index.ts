import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Learning from '../pages/Learning.vue'
import Tools from '../pages/Tools.vue'
import Websites from '../pages/Websites.vue'
import Skills from '../pages/Skills.vue'
import Knowledge from '../pages/Knowledge.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/learning',
      name: 'learning',
      component: Learning,
    },
    {
      path: '/tools',
      name: 'tools',
      component: Tools,
    },
    {
      path: '/websites',
      name: 'websites',
      component: Websites,
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills,
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: Knowledge,
    },
  ],
})

export default router
