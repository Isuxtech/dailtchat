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
    export default {
        name:'home',
        data(){
          return {
              'article' :[],
              'scrollHeight': null,
              'current_page' :null,
              'last_page' : null,
              'next_page_url':null,
              'nextPagepresent': true,
              'no_article' :false,
          }
        },
        created() {
            this.getAxios();
           // console.log(this.getNumber)
        },
        computed:{
            // explain of getting items in vuex store
            getNumber(){
               return  this.$store.getters.GET_NUMBER
            }
        },
        methods:{
            getAxios(nextPage = '/api/posts'){
                axios.get(nextPage)
                    .then(resolve=>{
                        const page_result = resolve.data;
                        for(let more_articles of page_result.data){
                            this.article.push(more_articles);
                        }
                        this.current_page = page_result.current_page;
                        this.last_page = page_result.last_page;
                        this.next_page_url = page_result.next_page_url;
                        if(this.current_page == this.last_page){
                            this.nextPagepresent = false
                        }
                    })
                    .catch(err=>{
                        console.log(err,'error was encountered in the auto getter')
                        this.no_article =true;
                    });
            },
            loadNext(){
                this.getAxios(this.next_page_url);
            },
           // postLoader(){
               //  const obs = this.$refs['observeTarget'];
               // parent.observer = new IntersectionObserver((entries,onserver)=>{
               //         entries.forEach((entry)=>{
               //             if(entry.isIntersecting)
               //             {
               //                 // console.log(entry)
               //                 if(this.current_page !== this.last_page){
               //                     this.getAxios(this.next_page_url)
               //                     console.log(window.screenX)
               //                 }else{
               //                     onserver.unobserve(obs);
               //                 }
               //             }
               //
               //
               //         })
               //     }, {root:null, threshold:1, rootMargin:'0px 0px 0px 0px'}
               // )
               // parent.observer.observe(this.$refs['observeTarget'])
        //   }

        },

        // do the watching here


    }

</script>

