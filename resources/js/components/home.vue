<template>
   <div>
       <main>
           <div class="content" ref="observeTarget" >
               <div class="card" v-for="articles in article" :key="articles.id">
                   <img :src="'../img/sample.jpg'" alt="" class="card-img">
                   <div class="card-content">
                    <h3 class="card-title" v-text="articles.title"></h3>
                    <p class="card-text" v-text="articles.post"></p>
                   </div>
                   <div class="card-date card-bk-color">
                       <h4 v-text="articles.dayName"></h4>
                       <h4 class="card-day" v-text="articles.day">12</h4>
                       <h4 class="card-year" v-text="articles.month">FEB</h4>
                   </div>
               </div>

           </div>
       </main>
   </div>

</template>

<script>

    export default {
        name:'home',
        data(){
          return {
              'article' :null,
              'scrollHeight': null,
              'current_page' :null,
              'last_page' : null,
              'next_page_url':null,
          }
        },
        created() {
           axios.get('/api/posts')
            .then(resolve=>{
                const page_result = resolve.data;
                this.article = page_result.data;
                this.postLoader()
                this.current_page = page_result.current_page;
                this.last_page = page_result.last_page;
                this.next_page_url = page_result.next_page_url;
            })
            .catch(err=>{
                console.log('error was encountered')
            });


        },
        methods:{
            getAxios(nextPage){
                axios.get(nextPage)
                    .then(resolve=>{
                        const page_result = resolve.data;
                        for(let more_articles of page_result.data){
                            this.article.push(more_articles);
                        }
                        this.current_page = page_result.current_page;
                        this.last_page = page_result.last_page;
                        this.next_page_url = page_result.next_page_url;
                    })
                    .catch(err=>{
                        console.log(err,'error was encountered in the auto getter')
                    });
            },
           postLoader(){
                const obs = this.$refs['observeTarget'];
               const observer = new IntersectionObserver((entries,onserver)=>{
                       entries.forEach((entry)=>{
                           if(entry.isIntersecting)
                           {
                               // console.log(entry)
                               if(this.current_page !== this.last_page){
                                   this.getAxios(this.next_page_url)
                                   console.log(window.screenX)
                               }else{
                                   onserver.unobserve(obs);
                               }
                           }


                       })
                   }, {root:null, threshold:1, rootMargin:'0px 0px 100px 0px'}
               )
               observer.observe(this.$refs['observeTarget'])
           }
        }
    }

</script>
