import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PhoneDisplayState from '../src/components/phone/PhoneDisplayState'
import PhoneMutateState from '../src/components/phone/PhoneMutateState'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/phone-display-state',
      name: 'PhoneDisplayState',
      component: PhoneDisplayState
    },
    {
      path: '/phone-mutate-state',
      name: 'PhoneMutateState',
      component: PhoneMutateState
    }
  ]
})
