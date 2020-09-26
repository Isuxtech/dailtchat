<script>
    import Vue from 'vue';
    import Vuex from 'vuex';

    Vue.use(Vuex);

    export const store = new Vuex.Store({
        state:{
            article:{},
            image_url:'',
        },
        getters:{
            GET_ARTICLE:(state)=>{
                return state.article[0]
            },
            GET_IMAGE:(state)=>{
                return state.image_url
            }

        },

        mutations:{
            changeArticles(state,payload){
                state.article = payload.article;
                state.image_url = payload.article[0].image_url;
            }
        },
        actions:{
            storeArticle({commit},payload){
               commit('changeArticles',payload);
            }
        }
    });

    export default {}

</script>
