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
             const notValidQuery = ['','has','got','are','the'];
             const query = this.searchQuery.trim();

             const checker = notValidQuery.includes(query);

             if(!checker){
                 alert(`${query}, ${checker}`);
                 // this.getAxios();
                 this.$router.push({name:'quicksearch',params:{'term':this.searchQuery}})
             }
         },
         // getAxios(nextPage = '/api/posts'){
         //     let result = [];
         //     axios.get(nextPage)
         //         .then(resolve=>{
         //             const page_result = resolve.data;
         //             for(let more_articles of page_result.data){
         //                 result.push(more_articles);
         //             }
         //             this.$store.dispatch('commitAllArticle',
         //                 {
         //                     article:result,
         //                     current_page:page_result.current_page,
         //                     last_page:page_result.last_page,
         //                     next_page_url:page_result.next_page_url,
         //                 });
         //             console.log({article:result});
         //             // if(this.current_page == this.last_page){
         //             //     this.nextPagepresent = false
         //             // }
         //         })
         //         .catch(err=>{
         //             console.log(err,'error was encountered in the auto getter')
         //             this.no_article =true;
         //         });
         // },
     }
 }
</script>

