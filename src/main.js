// bootstrap core css
import './assets/css/bootstrap.css';
// font awesome style
import './assets/css/font-awesome.min.css';
// Custom styles for this template
import './assets/css/style.css';
// responsive style
import './assets/css/responsive.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
