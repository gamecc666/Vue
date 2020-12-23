import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ElForm from '@/components/Elform'
import Com from '@/components/Com'
import SpreadJS from '@/components/SpreadJS'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/com',
      name:'COM',
      component:Com
    },
    {
      path:'/spreadjs',
      name:'SpreadJS',
      components:SpreadJS
    },
    {
      path:'/elform',
      name:'ElForm',
      component:ElForm
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
