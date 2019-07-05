import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import cart from './modules/cart';
import error404 from './modules/error404';
import products from './modules/products';
import menu from './modules/menu';

export const store = new Vuex.Store({
    modules: {
        cart,
        error404,
        products,
        menu
    },
    strict: process.env.NODE_ENV !== 'production'
});