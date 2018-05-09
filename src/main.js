import Vue from 'vue'
import App from './App.vue'
import Routes from './routes/routes.js'
import VueRouter from 'vue-router'

import FlatSurfaceShader from 'vue-flat-surface-shader'

import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 
import DataTables from 'vue-data-tables'

Vue.use(FlatSurfaceShader);

Vue.use(DataTables)

Vue.use(VueRouter);

Vue.use(ElementUI);


locale.use(lang)

const router = new VueRouter({
  routes: Routes
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
})
