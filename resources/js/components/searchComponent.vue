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
<!--                <button class="next" v-if="next_btn" @click="loadNext"> Next</button>-->
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

        }
    },
    computed:{
        ...mapGetters({
            article:'S_GET_ALL_ARTICLES',
            current_page: 'S_CURRENT_PAGE',
            last_page:'S_LAST_PAGE',
            next_page_url:'S_NEXT_URL',
            next_btn: 'S_NEXT_BTN',
        })
    },
    methods: {
        readArticle: function (slug) {
            this.$router.push({name: 'article', params: {'slug': slug}})
        },
    }
}

</script>

