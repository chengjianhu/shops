import Vue from 'vue'
import Router from 'vue-router'

import home from '@/views/home'
import commodity from '@/views/commodity'
import shopCar from '@/views/shopCar'
import aboutMe from '@/views/aboutMe'

Vue.use(Router)

import VueResource from 'vue-resource'
Vue.use(VueResource);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/commodity',
      name: 'commodity',
      component: commodity
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: shopCar
    },
    {
      path: '/aboutMe',
      name: 'aboutMe',
      component: aboutMe
    }
  ]
})
