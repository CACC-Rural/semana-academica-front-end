import { createApp } from 'vue';
import './style.css';
import VueGtag from 'vue-gtag';
import App from './App.vue';

createApp(App)
  .use(VueGtag, {
    config: {
      id: import.meta.env.VITE_ANALYTICS_METRIC_ID,
      params: {
        anonymize_ip: true,
      },
    },
    enabled: !!import.meta.env.VITE_ANALYTICS_METRIC_ID,
  })
  .mount('#app');
