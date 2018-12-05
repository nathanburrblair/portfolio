import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HeaderNav from '@/components/HeaderNav'
import Work from '@/components/Work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/nav',
      name: 'HeaderNav',
      component: HeaderNav
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    }
  ]
})
