import {createStore} from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        token: null,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
        },
    },
    actions: {
        async login({commit}, credentials) {
            await axios.post('/auth', credentials).then(function (response) {
                commit('setToken', response.data.token);
                localStorage.setItem('token', response.data.token);
            });
        },
        logout({commit}) {
            localStorage.removeItem('token');
            commit('setToken', null);
        },
        initializeAuth({ commit }, token) {
            commit('setToken', token);
        },
    },
    getters: {
        isAuthenticated(state) {
            return !!state.token;
        }
    }
} )

export default store;
