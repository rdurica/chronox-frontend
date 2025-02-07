import './assets/main.css'
import axios from 'axios';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/main.js'
import store from './store/store.js'

axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


const app = createApp(App);

app.use(router);
app.use(store);

const token = localStorage.getItem('token');
if (token) {
    store.dispatch('initializeAuth', token).then();
}

app.mount('#app');
