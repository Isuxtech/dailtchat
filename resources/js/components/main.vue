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
        <footer>
             <div class="f-wrapper">
                 <div>
                     <img :src="footer_logo" alt="" class="footer-logo">
                     <p class="copy">&copy; copyright 2020</p>
                 </div>
                 <div class="social-wrapper">
                     <img :src="facebook" alt="" class="social-img">
                     <img :src="twitter" alt="" class="social-img">
                     <img :src="linkedin" alt="" class="social-img">
                 </div>
             </div>
            <div class="designed_by">
                <span>designed by:</span>
                <a href="mailto:omokpogabriel@gmail.com">Isuxtech</a>
            </div>
        </footer>
    </div>
</template>

<script>
    import Navigation from './navigationComponent';
    import Swal from 'sweetalert2';
    export default {
        name:'main-app',
        data(){
            return{
                footer_logo:'../img/footer-logo.png',
                facebook:'../img/facebook.png',
                twitter:'../img/twitter.png',
                linkedin:'../img/linkedin.png',
            }
        },
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


