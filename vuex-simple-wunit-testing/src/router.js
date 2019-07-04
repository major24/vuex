import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SimpleState from '../src/components/SimpleState'
import MutateSimpleState from '../src/components/MutateSimpleState'
import ActionSimpleState from '../src/components/ActionSimpleState'
import GetterSimpleState from '../src/components/GetterSimpleState'
import ActionCallGetter from '../src/components/ActionCallGetter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/simple-state',
      name: 'simplestate',
      component: SimpleState
    },
    {
      path: '/mutate-simple-state',
      name: 'mutatesimplestate',
      component: MutateSimpleState
    },
    {
      path: '/action-simple-state',
      name: 'actionsimplestate',
      component: ActionSimpleState
    },
    {
      path: '/getter-simple-state',
      name: 'gettersimplestate',
      component: GetterSimpleState
    },
    {
      path: '/action-call-getter',
      name: 'actioncallgetter',
      component: ActionCallGetter
    }
  ]
})
