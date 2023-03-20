import {createRouter, createWebHistory} from '@ionic/vue-router';

import store from "../store";

const routes = [{
    path: '/login', component: () => import (/* webpackChunkName: "Login" */'../views/Login.vue'), name: 'LoginA'
},{
    path: '/Dashboard', component: () => import (/* webpackChunkName: "Dashboard" */'../views/Dashboard.vue'), name: 'DashBoard',meta: {private: true}
},
    {
        path: '/logout',
        component: () => import (/* webpackChunkName: "Logout" */'../views/Logout.vue'),
        name: 'LogOut'
    }, {
    path: '/user',
    component: () => import (/* webpackChunkName: "User" */'../views/User.vue'),
    name: 'UserU',
    meta: {private: true}
}, {
    path: '', redirect: '/folder/Inbox'
}, {
    path: '/folder/:id', component: () => import ('../views/Folder.vue')
}, {
    path: '/video/:id', component: () => import ('../views/Video.vue')
}, {
    path: '/videos', component: () => import ('../views/Videos.vue')
}, {
    path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import ('../views/NotFound.vue')
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})
router.beforeEach(async (to, from, next) => {
    var autenticated = false;
    const user = await store.get('user')
    if (user != null) autenticated = true;
    if (to.meta.private && !autenticated) {
        next({
            name: 'LoginA', params: {wantedRoute: to.fullPath,},
        })
        return
    }
    next()
});
export default router
