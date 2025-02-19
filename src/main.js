import Vue from 'vue'
import App from './App.vue'
import store from "@/store"
import router from "@/init/router";

require("@/init/firebase")
require("@/init/bootstrap")
require("@/init/vue")
require("@/init/dayjs")

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
