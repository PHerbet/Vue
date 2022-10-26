import { createRouter, createWebHistory, useRoute } from "vue-router";
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import User from '../views/User.vue';
import NotFound from '../views/NotFound.vue';
import GetRequest from '../views/GetRequest.vue';
import GetRequestAsyncAwait from '../views/GetRequestAsyncAwait.vue';
import GetRequestSetHeader from '../views/GetRequestSetHeader.vue';
import GetRequestErrorHandling from '../views/GetRequestErrorHandling.vue';
import PostRequest from '../views/PostRequest.vue';

const routes=[
    {
        name: 'Home',
        path: '/',
        alias: '/home',
        component:Home,
        meta:{
            title:'Accueil'
        }
    },
    {
        name: 'About',
        path: '/about',
        component:About
    },
    {
        name: 'User',
        path: '/user/:id',
        component:User,
        props:true
    },
    {
        //Tout les url qui ne marchent pas 
        name: 'NotFound',
        path: '/:pathMatch(.*)',
        component:NotFound,
    },
    {
        name: 'GetRequest',
        path: '/test-api',
        component:GetRequest,
        meta:{
            title:'Test API Fetch'
        }
    },
    {
        name: 'GetRequestAsyncAwait',
        path: '/test-api-async-await',
        component:GetRequestAsyncAwait,
        meta:{
            title:'Test API Async Await'
        }
    },
    {
        name: 'GetRequestSetHeader',
        path: '/test-api-set-header',
        component:GetRequestSetHeader,
        meta:{
            title:'Test API Set Header'
        }
    },
    {
        name: 'GetRequestErrorHandling',
        path: '/test-api-error',
        component:GetRequestErrorHandling,
        meta:{
            title:'Erreur'
        }
    },
    {
        name: 'PostRequest',
        path: '/test-api-post',
        component:PostRequest,
        meta:{
            title:'Post'
        }
    },
];

const router= createRouter({
    history: createWebHistory(),
    routes
});

router.afterEach((to,from)=>{
    console.log(from,to);
    document.title = to.meta.title
})

export default router;