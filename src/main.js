import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import animate from 'animate.css'
<<<<<<< HEAD

=======
>>>>>>> 805671e1815e6d85c50a83c4f8708a7b0fdd1122
Vue.use(animate);

Vue.config.productionTip = false
Vue.use(ElementUI);

const app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

