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
]

const router = createRouter(
    {
        history:createWebHashHistory(),
        routes
    }
)

export default router