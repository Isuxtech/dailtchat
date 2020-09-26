<template>
   <section v-if="is_loaded">
       <div class="intro" v-bind:style="{'box-shadow': `0px 0px 4px 1px ${article.color}`}">
           <h4 class="category" :style="{'background-color': article.color}" v-text="article.category_name"></h4>

            <h2 class="intro-title" v-text="article.title"></h2>
           <p class="intro-content"><strong>Abstract <br/> </strong>
               {{article.title}}
           </p>
           <div class="article-date" :style="{'color': `${article.color}`,
           'box-shadow':`2px 2px 2px 0px ${article.color}, -2px 2px 2px 0px ${article.color}` }"> {{article.dayName}}
               <span style="font-size:1.3rem;padding:5px;">{{article.day}}</span>
               {{article.month}}
           </div>
       </div>
       <section class="wrapper">
           <article>
             <p>
               {{article.body}}
             </p>
           </article>
       </section>
   </section>
</template>

<script>
 import { mapGetters} from 'vuex'
    export default {
        name:'articles',
        data(){
            return{
                is_loaded:false
            }
        },
        computed: {
            ...mapGetters({
               'article': 'GET_ARTICLE',
            }),
        },

        methods:{
          getPost(slug){
              axios.get(`/api/posts/${slug}`)
              .then(response =>{
                  this.$store.dispatch('storeArticle',{article: response.data })
                  this.is_loaded = true
              })
              .catch(err =>{
                  // tell the user what happened and then
                  // return the user to the home path immediately
              })
          }
        },
        created(){
            this.getPost(this.$route.params.slug)
        }
    }
</script>

<style scoped>
    section{
       background-color: white;
        width:100%;
    }
    .intro{
        transform: translateY(-25%);
        background-color:white;
        width:50%;
        padding:0 20px 30px 30px;
        font-weight:600;
        margin-left:30px;
        box-shadow: 0px 0px 4px 1px gray;
        border-radius: 5px;
        position:relative;
        font-family: 'Roboto', sans-serif !important;
    }
    .category{
        color:white;
        padding:10px;
        background-color:saddlebrown;
        transform:translateY(-4px);
        border-radius: 5px;
    }
    .article-date{
        position:absolute;
        top:95%;
        right:0;
        font-size:0.8rem;
        color:saddlebrown;
        padding:0px 10px 5px 10px;
        background-color: white;
        border-radius:0 0 10px 10px;
    }
    .intro-title{
        margin-bottom: 20px;

    }
    .intro-content{
        font-style: italic;
        color:gray;
        font-family: 'Montserrat', sans-serif!important;
        font-weight: 400;
    }
    .wrapper{
        line-height: 1.4;
        font-size: 1.2rem;
        transform: translateY(-20px);
        font-family: 'Roboto', sans-serif !important;
        margin-top:50px;
    }
    article{
        width:80%;
        margin:auto;
    }
    @media (max-width:440px){
        .intro{
            width:95%;
            font-size: 1em ;
            margin-left:5px;
            padding:0 10px 15px 15px;
            transform: translateY(-15%);
        }
        article{
            width:98%;
            margin:auto;
        }
    }
</style>
