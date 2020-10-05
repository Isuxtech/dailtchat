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
                'next_btn':false
            },
            search_article:{
                'article' :[],
                'current_page' :null,
                'last_page' : null,
                'next_page_url':null,
                'next_btn':false
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
            NEXT_BTN:(state)=>{
                return state.all_article.next_btn;
            }
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
                     app_state.next_btn = payload.next_btn;
            },
            searchResult(state, payload){
                const app_state = state.search_article;
                app_state.article = payload.article;
                app_state.current_page = payload.current_page;
                app_state.last_page = payload.last_page;
                app_state.next_page_url = payload.next_page_url;
                app_state.next_btn = payload.next_btn;
            }
        },
        actions:{
            storeArticle({commit},payload){
               commit('changeArticles',payload);
            },
            commitAllArticle({commit},payload){
                commit('getAllArticle',payload);
            },
            searchArticle({commit},payload){
                commit('searchResult',payload);
            }
        }
    });

    export default {}

</script>
