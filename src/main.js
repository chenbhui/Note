import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/global.css'
import '@/assets/font/iconfont.css'
import router from '@/router/index'
const app = createApp(App);
app.use(router);
app.mount('#app')