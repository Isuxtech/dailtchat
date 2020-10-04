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
                <input type="search" placeholder="search" class="search" v-model="searchQuery">
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

 export default {
     data(){
         return{
             'logo': './img/logo.png',
             searchQuery:null
         }
     },
     methods:{
         getResult(){
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
                         console.log(response);
                         // const responseBody = response.data;
                         // const result = responseBody;
                         //    console.log(responseBody.data.length);
                         // this.$store.dispatch('commitAllArticle',
                         //     {
                         //         article: result,
                         //         // current_page: responseBody.meta.current_page,
                         //         // last_page: responseBody.meta.last_page,
                         //         // next_page_url: responseBody.links.next,
                         //     });

                         // if (this.current_page === this.last_page) {
                         //     this.nextPagepresent = false
                         // }
                     })
                     .catch(err => {
                         // this.no_article = true;
                         console.log('err is', err)
                     });
                 // this.$router.push({name:'quicksearch',params:{'term':this.searchQuery}})
             }
         },
         // getAxios(term) {
         //
         // },
     }
 }
</script>

