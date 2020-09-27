<template>
   <div>
       <main>
           <h2 v-if="no_article" :class="['empty-post']">no post found</h2>
           <div class="content">

               <div class="card" v-for="articles in article" :key="articles.id">
                   <img :src="articles.image_url" alt="" class="card-img">
                   <div class="card-content">
                    <h2 class="card-title card-link" v-text="articles.title" @click="$router.push({name:'article', params:{'slug':articles.slug}})"></h2>
                    <p class="card-text" v-text="articles.abstract"></p>
                   </div>
                   <div class="card-date" v-bind:style="{'background-color':articles.color}">
                       <h4 v-text="articles.dayName"></h4>
                       <h4 class="card-day" v-text="articles.day">12</h4>
                       <h4 class="card-year" v-text="articles.month">FEB</h4>
                   </div>
               </div>

           </div>
           <div class="next-wrapper">
               <button class="next" v-if="nextPagepresent" @click="loadNext"> Next</button>
           </div>


       </main>
   </div>

</template>

<script>
 import {mapGetters} from 'vuex';

    export default {
        name:'home',
        data(){
          return {
              // 'article' :[],
              'scrollHeight': null,
              // 'current_page' :null,
              // 'last_page' : null,
              // 'next_page_url':null,
              'nextPagepresent': true,
              'no_article' :false,
          }
        },
        created() {
            // this.getAxios();
           // console.log(this.getNumber)
        },
        computed:{
            // explain of getting items in vuex store
            getNumber(){
               return  this.$store.getters.GET_NUMBER
            },
            ...mapGetters({
                article:'GET_ALL_ARTICLES',
                current_page: 'CURRENT_PAGE',
                last_page:'LAST_PAGE',
                next_page_url:'NEXT_URL',
            })
        },
        beforeRouteEnter(to, from, next){
            console.log(to)
            if(to.name !=="quicksearch"){
                next(vm=>{
                    vm.getAxios();
                    // vm.getAxios(`/api/posts/${to.params.term}`);
                    console.log('trying to get the to from here',`/api/posts/?${to.params.term}`)
                })
            }else{
                next(vm=>{
                    vm.getAxios(`/api/posts/${to.params.term}`);
                    console.log('trying to get the to from here',`/api/posts/?${to.params.term}`)
                })
            }


        },
        methods:{
        getAxios(nextPage = `/api/posts?size=2`) {
            let result = this.article;
            axios.get(nextPage,{
                headers:{
                    'Content-Type': 'application/json'
                }

            })
                .then(response => {
                    const responseBody = response.data;
                    for (let post of responseBody.data) {
                        result.push(post);
                    }
                    this.$store.dispatch('commitAllArticle',
                        {
                            article: result,
                            current_page: responseBody.meta.current_page,
                            last_page: responseBody.meta.last_page,
                            next_page_url: responseBody.links.next,
                        });
                     if (this.current_page === this.last_page){
                         this.nextPagepresent = false
                     }
                })
                .catch(err => {
                    console.log(err)
                    // this.no_article = true;
                });
        },
            loadNext(){
            console.log(this.next_page_url)
                this.getAxios(this.next_page_url);
            },
        },
    }

</script>

