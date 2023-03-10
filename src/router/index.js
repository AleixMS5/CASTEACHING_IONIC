import {createRouter, createWebHistory} from '@ionic/vue-router';

const routes = [{
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

export default router
