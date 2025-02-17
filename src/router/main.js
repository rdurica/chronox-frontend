import {createRouter, createWebHistory} from "vue-router";
import {RouteNames, RoutePaths} from "@/router/constants.js";
import store from "../store/store.js";
import LoginView from "@/views/LoginView.vue";
import DashboardView from "@/views/DashboardView.vue";
import DayView from "@/views/DayView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: RoutePaths.LOGIN, component: LoginView, name: RouteNames.LOGIN},
        {path: RoutePaths.DASHBOARD, component: DashboardView, meta: {requiresAuth: true}, name: RouteNames.DASHBOARD},
        {path: RoutePaths.DAY, component: DayView, meta: {requiresAuth: true}, name: RouteNames.DAY},
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.getters['isAuthenticated']) {
        next(RoutePaths.LOGIN);
    }
    else if (!!store.getters['isAuthenticated'] && to.name === RouteNames.LOGIN) {
        next(RoutePaths.DASHBOARD);
    }
    else {
        next();
    }
});

export default router;