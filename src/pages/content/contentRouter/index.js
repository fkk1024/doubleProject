import Vue from 'vue'
import contentRouter from 'vue-router'
import HelloWorld from '../contentSrc/helloworld/index'
import testVue from '../contentSrc/testVue/index'

Vue.use(contentRouter)

export default new contentRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/testVue',
      name: 'testVue',
      component: testVue
    }
  ]
})
