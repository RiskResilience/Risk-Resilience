import {createRouter,createWebHashHistory} from "vue-router"

const routes = [
    {
        path:'/',
        name:'home',
        component:()=>import(/*webpackChunkName:'Login'*/'@/page/home/home.vue')
    },
    {
        path:'/academic',
        name:'academic',
        component:()=>import(/*webpackChunkName:'Login'*/'@/page/academic/academic.vue')
    },
    {
        path:'/honors',
        name:'honors',
        component:()=>import(/*webpackChunkName:'Login'*/'@/page/honors/honors.vue')
    },
    {
        path:'/members',
        name:'members',
        component:()=>import(/*webpackChunkName:'Login'*/'@/page/members/members.vue')
    },
    {
        path:'/research',
        name:'research',
        component:()=>import(/*webpackChunkName:'Login'*/'@/page/research/research.vue')
    },
<<<<<<< HEAD
    {
        path: '/progress',
        name: 'progress',
        component: () => import('../page/progress/progress.vue')
    },
    {
        path: '/team-building',
        name: 'team-building',
        component: () => import('../page/team-building/team-building.vue')
    },
    {
        path: '/advertisement',
        name: 'advertisement',
        component: () => import('../page/advertisement/advertisement.vue')
    },
    {
        path:'/resources',
        name:'resources',
        component:()=>import('@/page/resources/resources.vue')
    }
=======
>>>>>>> 7d34d15706e3b25335c6766b745ce64d93514324
]

const router = createRouter(
    {
        history:createWebHashHistory(),
        routes
    }
)

export default router