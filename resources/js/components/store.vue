<script>
    import Vue from 'vue';
    import Vuex from 'vuex';

    Vue.use(Vuex);

    export const store = new Vuex.Store({
        state:{
            article:{},
            image_url:'',
            all_article:{
                'article' :[],
                'current_page' :null,
                'last_page' : null,
                'next_page_url':null,
            }
        },
        getters:{
            GET_ARTICLE:(state)=>{
                return state.article[0];
            },
            GET_IMAGE:(state)=>{
                return state.image_url;
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

        },

        mutations:{
            changeArticles(state,payload){
                state.article = payload.article;
                state.image_url = payload.article[0].image_url;
            },
            getAllArticle(state, payload){
                const app_state = state.all_article;
                app_state.article = payload.article;
                app_state.current_page = payload.current_page;
                app_state.last_page = payload.last_page;
                app_state.next_page_url = payload.next_page_url;
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
