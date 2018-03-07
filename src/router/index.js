import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import User from '@/components/User'
import UserOne from '@/components/UserOne'
import UserOneOne from '@/components/UserOneOne'
import UserTwo from '@/components/UserTwo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      component: User,
      children: [{
        path: 'one',
        component: UserOne,
        children: [{
          path: 'one',
          component: UserOneOne,
        }]
      },{
        path: 'two',
        component: UserTwo
      }]
    }
  ]
})
