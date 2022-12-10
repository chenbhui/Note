import { createRouter, createWebHashHistory } from 'vue-router'
export default new createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/pages/Items.vue') 
        }
    ]
})