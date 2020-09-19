<template>
   <div>
       <main>
           <div class="content">
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
           <div class="next-wrapper">
               <button class="next" v-if="nextPagepresent" @click="loadNext"> Next</button>
           </div>


       </main>
   </div>

</template>
<style scoped>
    .next-wrapper{
        width:100%;
        padding:20px;
        /*background-color:#011b31;*/
        background-color:white;
        margin:auto;
        display: flex;
        align-items: center;
        justify-content: center;

    }
    .next{
        width:max-content;
        margin:auto;
        padding:10px 20px;
        border-radius: 4px;
        color:white;
        border:transparent;
        font-family: 'Roboto, sans-serif';
        font-weight: 600;
        cursor:pointer;
        background-image: linear-gradient(45deg, rgba(0, 0, 255, 0.82), #00a6ff);
        text-transform: uppercase;
    }
    .next:hover{
        box-shadow: 0px 0px 4px 0px gray;
    }
    .next:active{
        animation-name: bounce;
        animation-direction:normal;
        animation-iteration-count: 1;
        animation-timing-function: ease-in-out;
        animation-duration: 400s;
    }

    @keyframes bounce {
        0%,40%{
            transform:translateY(-10px);
        }
        100%{
            transform:translateY(0px);
        }
    }
</style>

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
          }
        },
        created() {
           this.getAxios();
        },
        methods:{
            getAxios(nextPage = '/api/posts'){
                axios.get(nextPage)
                    .then(resolve=>{
                        console.log(resolve)
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
        // destroyed() {
        //     this.observer.disconnect();
        // }
    }

</script>

