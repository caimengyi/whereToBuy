// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Base from './assets/basejs/base.js' 

import router from'./router/index.js' 

Vue.use(VueRouter)


FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.prototype.baseAjax=Base.baseAjax;

/* eslint-disable no-new */
new Vue({
   router,
   el:'#app-box',
   template: '<App/>',
   components: { App }

})
