<template>
    <div>
        <header class="header">
        <Navigation/>
            <section>
                <homeBanner v-if="isHome" />

                <articleBanner v-else />
            </section>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer style="height:40px; width:100%;background-color:green;margin-botton:50px;">

        </footer>
    </div>
</template>

<script>
    import Navigation from './navigationComponent';
    import Swal from 'sweetalert2'
    export default {
        name:'main-app',
        components:{
            Navigation,
            homeBanner :() => import(/*webpackChunkName: 'homeBanner'  */ './homeBanner.vue'),
            articleBanner :() => import(/*webpackChunkName: 'articleBanner'  */ './articleBanner.vue'),
        },
        computed:{
            isHome(){
                if(this.$route.name !== "article"){
                    return true;
                }
                return false;
            }
        },
    }
</script>
