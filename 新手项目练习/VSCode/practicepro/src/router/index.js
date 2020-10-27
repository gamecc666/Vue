import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ElForm from '@/components/Elform'
import Com from '@/components/Com'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/com',
      name:'COM',
      component:Com
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
