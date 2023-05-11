import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GStore from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

createApp(App)
  .use(router)
  .use(VueSweetalert2)
  .provide('GStore', GStore)
  .mount('#app')
