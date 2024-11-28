import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import paginationUI from './components/index';

const app = createApp(App);
app.use(paginationUI);
app.mount('#app');
