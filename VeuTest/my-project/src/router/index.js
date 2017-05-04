import Vue from 'vue'
import Router from 'vue-router'
import jiangHao from '@/components/jiangHao'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'jiangHao',
      component: jiangHao
    }
  ]
})
