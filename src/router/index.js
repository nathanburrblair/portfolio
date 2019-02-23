import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HeaderNav from '@/components/HeaderNav'
import Work from '@/components/Work'
import Skills from '@/components/Skills'
import Inspiration from '@/components/Inspiration'
import Testing from '@/components/Testing'
import Javascript30 from '@/components/Javascript30'
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
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/inspiration',
      name: 'Inspiration',
      component: Inspiration
    },
    {
      path: '/testing',
      name: 'Testing',
      component: Testing
    },
    {
      path: '/javascript30',
      name: 'Javascript30',
      component: Javascript30
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return { selector: to.hash }
    } else {
      return { x: 0, y: 0 }
    }
  }
})
