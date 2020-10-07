<template>
   <div>
       <main>
           <div class="content">
               <div class="card" v-for="articles in article" :key="articles.id">
                   <img :src="articles.image_url" alt="" class="card-img">
                   <div class="card-content">
                    <h2 class="card-title card-link" v-text="articles.title" @click="readArticle(articles.slug)"></h2>
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
               <button class="next" v-if="next_btn" @click="loadNext" v-show="loaded">Next</button>
               <div class="loading-wrapper" v-if="next_btn" v-show="!loaded" disabled>
                   <img :src="loader" alt="" class="loader_img">
               </div>
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
              'loader':'../img/loading.gif',
              'scrollHeight': null,
              'no_article' :false,
              'selectedSlug':null,
              'loaded':true,
          }
        },
        computed:{
            ...mapGetters({
                article:'GET_ALL_ARTICLES',
                current_page: 'CURRENT_PAGE',
                last_page:'LAST_PAGE',
                next_page_url:'NEXT_URL',
                next_btn: 'NEXT_BTN',
            })
        },
        watch:{
            loaded: function(){
                return this.next_label="loading"
            }
        },
        beforeRouteEnter(to, from, next){
            if(from.name === null){
                next(vm=>{
                    vm.getAxios();
                })
            }else{
                next();
            }
        },

        beforeRouteLeave(to, from, next){
            if(to.name === 'article'){
                next(vm=>{
                    vm.getPost(this.selectedSlug);
                })
            }else{
                next();
            }
        },
        methods: {

            getAxios(nextPage = `/api/posts`) {

                let result = this.article;
                axios.get(nextPage, {
                    headers: {
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
                                    next_btn : (responseBody.meta.current_page !== responseBody.meta.last_page)// && (this.next_btn != true),
                                });
                        this.loaded = true;
                    })
                    .catch(err => {
                        // this.no_article = true;
                    });
            },
            getPost(slug){
                axios.get(`/api/posts/${slug}`)
                    .then(response =>{
                        this.$store.dispatch('storeArticle',{article: response.data })
                        this.is_loaded = true

                    })
                    .catch(err =>{
                        this.is_loaded = false
                        // tell the user what happened and then
                        // return the user to the home path immediately
                    })
            },
            loadNext() {
                this.loaded = false;
                this.getAxios(this.next_page_url);
            },
            readArticle: function (slug) {
                // this.selectedSlug = slug;
                this.$router.push({name: 'article', params: {'slug': slug}})
            },
        }
    }

</script>
