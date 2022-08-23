import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/RegisterUser'
import Login from '@/components/LoginUser'
import ProductsList from '@/components/ProductsList'
import Create from '@/components/NewItem'
import Edit from '@/components/EditItem'
Vue.use(Router)

export default new Router({


    routes: [
    {
        path: '/products',
        name: 'products',
        component: ProductsList
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/create',
        name: 'create',
        component: Create
    },
    {
        path: '/products/:itemId',
        name: 'product',
        component: Edit
    },

    ]
})