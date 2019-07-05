import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Cart from './components/cart.vue';
import Error404 from './components/er404.vue';
import Products from './components/product.vue';

import {store} from './store/store.js';

const routes = [
    {
        path: '/product',
        component: Products
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/er404',
        component: Error404
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'
});