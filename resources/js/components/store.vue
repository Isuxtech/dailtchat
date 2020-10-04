<script>
    import Vue from 'vue';
    import Vuex from 'vuex';

    Vue.use(Vuex);

    export const store = new Vuex.Store({
        state:{
            article:{},
            all_article:{
                'article' :[],
                'current_page' :null,
                'last_page' : null,
                'next_page_url':null,
            },
            // will_duplicate:null
        },
        getters:{
            GET_ARTICLE:(state)=>{
                return state.article;
            },
            GET_ALL_ARTICLES:(state)=>{
                return state.all_article.article;
            },
            CURRENT_PAGE:(state)=>{
                return state.all_article.current_page;
            },
            LAST_PAGE:(state)=>{
                return state.all_article.last_page;
            },
            NEXT_URL:(state)=>{
                return state.all_article.next_page_url;
            },
            // WILL_DUPLICATE:(state)=>{
            //     return state.will_duplicate;
            // }
        },

        mutations:{
            changeArticles(state,payload){
                state.article = payload.article.data;
            },
            getAllArticle(state, payload){
                const app_state = state.all_article;
                     app_state.article = payload.article;
                     app_state.current_page = payload.current_page;
                     app_state.last_page = payload.last_page;
                     app_state.next_page_url = payload.next_page_url;

                // const slug_exist =  app_state.article.find( (search)=>{
                //         return (search.slug ==payload.article[0].slug)
                //      })
                // state.will_duplicate = slug_exist ? true :null
            }
        },
        actions:{
            storeArticle({commit},payload){
               commit('changeArticles',payload);
            },
            commitAllArticle({commit},payload){
                commit('getAllArticle',payload);
            }
        }
    });

    export default {}

</script>
