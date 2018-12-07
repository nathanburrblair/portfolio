import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HeaderNav from '@/components/HeaderNav'
import Work from '@/components/Work'
import VueMq from 'vue-mq'

Vue.use(Router)

Vue.use(VueMq, {
  breakpoints: {
    sm: 769,
    md: 992,
    lg: Infinity
  }
})

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
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
