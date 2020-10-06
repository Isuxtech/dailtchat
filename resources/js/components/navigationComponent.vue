<template>
    <nav>
        <div class="brand">
            <router-link to="/">
              <img :src="logo" alt="" class="logo" :alt="logo">
            </router-link>
            <div class="hamburger-wrapper">
                <div class="hamburger first-hamburger"></div>
                <div class="hamburger middle-hamburger"></div>
                <div class="hamburger last-hamburger"></div>
            </div>
        </div>
        <div class="navbar-wrapper">
            <div class="search-wrapper">
                <input type="search" placeholder="search" class="search" v-model="searchQuery" @keydown.enter="getResult">
                <button class="btn-search" @click="getResult">search</button>
            </div>
           <div class="special-links">
               <router-link to="/" class="decor account">Account</router-link>
               <router-link to="/" class="decor donate">Donate</router-link>
           </div>
        </div>
    </nav>
</template>

<script>
import Swal from 'sweetalert2';
 export default {
     data(){
         return{
             'logo': './img/logo.png',
             searchQuery:null
         }
     },
     methods:{
         getResult:function(){
             if(this.searchQuery === null){
                 return false;
             }
             const notValidQuery = ['','has','got','are','the'];
             const query = this.searchQuery.trim();

             const checker = notValidQuery.includes(query);
             if(!checker){
                 axios.get(`/api/search?term=${this.searchQuery}`, {
                     headers: {
                         'Content-Type': 'application/json'
                     }

                 })
                     .then(response => {

                         const responseBody = response.data;
                         if(responseBody.data.length === 0){
                             Swal.fire({
                                 icon: 'error',
                                 title: 'Oops...',
                                 text: 'Search not found!',
                             })
                             return false;
                         }
                          const result = responseBody;
                         this.$store.dispatch('searchArticle',
                             {
                                 article: result.data,
                                 current_page: responseBody.meta.current_page,
                                 last_page: responseBody.meta.last_page,
                                 next_page_url: responseBody.links.next,
                                 next_btn : (this.current_page !== this.last_page) && (this.next_btn != true),
                             });
                         if(this.$route.params.term !==this.searchQuery){
                           this.$router.push({name: 'search', params: {'term': this.searchQuery}});
                             this.searchQuery=null;
                        }

                     })
                     .catch(err => {
                         // this.no_article = true;
                         console.log('err is', err)
                     });
             }
         },

     }
 }
</script>

