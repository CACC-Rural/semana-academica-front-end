import { createApp } from 'vue';
import './style.css';
import VueCountdown from '@chenfengyuan/vue-countdown';
import App from './App.vue';

createApp(App)
  .component(VueCountdown.name, VueCountdown)
  .mount('#app');
