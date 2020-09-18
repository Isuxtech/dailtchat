
require('./bootstrap');

import Vue from 'vue';
import Vuerouter from 'vue-router';


Vue.use(Vuerouter);

 const router = new Vuerouter({
     routes: [ {
         path:'/',
         name:'home',
         component: ()=> import('./components/home.vue'),
        },
         {
             path:'/article',
             name:'articles',
             component: ()=> import('./components/articleComponent.vue'),
         }
     ],
     mode: 'history'

 })
import MainApp from './components/main.vue';

const app = new Vue({
    el: '#app',
    router,
    components:{
        MainApp
    }
});
