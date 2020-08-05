import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: process.env.VUE_APP_MODE === 'production' ? '/' : '/ayurkhmdn/',
    routes: [
                {
                    path: '/',
                    name: 'home',
                    component: Home                     
                }
            ]
});

export default router;