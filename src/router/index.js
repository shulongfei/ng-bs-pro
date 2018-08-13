import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import Hello from '@/components/Hello'
import Main from '@/components/Main'
import Index from '@/components/Index'
import MyChart from '@/components/MyChart'
import ProductList from '@/components/ProductList'
import UserList from '@/components/UserList'
import header from '@/components/include/header'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },

    {
      path:'/header',
      component:header,

      children:[
        {
          path:'/main',
          component:Main
        },

        // {
        //   path:'/productList',
        //   component:ProductList
        // },
        // {
        //   path:'/myChart',
        //   component:MyChart
        // },

        // {
        //   path:'/productList',
        //   component:ProductList
        // },

        // {
        //   path:'/userList',
        //   component:UserList
        // }
        
      ]

    }
    
  ]
})
