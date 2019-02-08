import Vue from 'vue'
import Content from './content.vue'
import router from './contentRouter/index'

Vue.config.productionTip = false
new Vue({
  el: '#content', // 这里参考content.html和content.vue的根节点id，保持三者一致
  router,
  // render: h => h(content),
  components: { Content },
  template: '<Content/>'
})
