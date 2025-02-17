import './assets/main.css'
import axios from 'axios';
import {createApp} from 'vue'
import App from './App.vue'
import router from './router/main.js'
import store from './store/store.js'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'


axios.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    if (process.env.NODE_ENV === 'production') {
        config.baseURL = 'https://chronox-backend.robbyte.net/'
    } else {
        config.baseURL = 'https://localhost/'
    }

    return config;
});


library.add(far, fas, fab);
const app = createApp(App);


app.component('fa-icon', FontAwesomeIcon)
app.use(router);
app.use(store);

const token = localStorage.getItem('token');
if (token) {
    store.dispatch('initializeAuth', token).then();
}

app.mount('#app');
