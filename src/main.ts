import './assets/main.css'

import { createApp } from 'vue'
import '@formkit/themes/genesis'
import { plugin, defaultConfig } from '@formkit/vue'
import { createPinia } from 'pinia'
import VueApexCharts from "vue3-apexcharts";
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(plugin, defaultConfig)
app.use(VueApexCharts);

app.mount('#app')
