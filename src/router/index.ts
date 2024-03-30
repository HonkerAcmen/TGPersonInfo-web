import {
    createRouter,
    createWebHashHistory
} from "vue-router"


import Home from '@/view/home.vue'
import Login from '@/view/login.vue'
import Register from '@/view/register.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/login",
            component: Login,
            beforeEnter(to, from, next) {
                if (localStorage.getItem('token')){
                    next('/')
                }else{
                    next()
                }
            }
        },
        {
            path: "/register",
            component: Register,
            beforeEnter(to, from, next){
                if (localStorage.getItem('token')){
                    next('/')
                }else{
                    next()
                }
            }
        }
    ],
})

router.beforeEach((to, from, next) => {
    let isLogin = false
    if (localStorage.getItem('token') != null) {
        isLogin = true
    }
    else {
        isLogin = false
    }

    if (isLogin || to.path === '/login' || to.path === 'register'){
        next()
    }else{
        next('/login')
    }
})

export default router