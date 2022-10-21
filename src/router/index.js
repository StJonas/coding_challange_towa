//index page containing the routes for the two pages
import {createRouter, createWebHistory} from 'vue-router'
import CardDetail from '../views/CardDetail.vue';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/details',
        name: 'Details',
        component: CardDetail
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router