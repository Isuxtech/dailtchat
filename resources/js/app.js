
require('./bootstrap');

import Vue from 'vue';
import Vuerouter from 'vue-router';

Vue.use(Vuerouter);


 const router = new Vuerouter({
     // mode: 'history',
     // history: true,
     routes: [
         {
         path:'/',
         name:'home',
         component: ()=> import('./components/home.vue'),
        },
         {
             path:'/article/:slug',
             name:'article',
             component: ()=> import('./components/articleComponent.vue'),
         },
     ],


 });


import MainApp from './components/main.vue';
import {store} from './components/store.vue';

const app = new Vue({
    el: '#app',
    router,
    store,
    components:{
        MainApp
    }
});
