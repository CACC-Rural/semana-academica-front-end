import './index.css';
import 'flowbite';
import { createApp } from 'vue';
import VueCountdown from '@chenfengyuan/vue-countdown';
import VueGtag from 'vue-gtag';
import App from './App.vue';

createApp(App)
  .use(VueGtag, {
    config: { id: import.meta.env.VITE_ANALYTICS_METRIC_ID },
  })
  .component(VueCountdown.name, VueCountdown)
  .mount('#app');
