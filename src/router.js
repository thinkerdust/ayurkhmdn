import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
                {
                    path: '/',
                    name: 'Index',
                    component: Home                     
                }
            ]
});

export default router;