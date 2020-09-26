<template>
    <nav>
        <div class="brand">
            <router-link to="/">
              <img :src="logo" alt="" class="logo" :alt="logo">
            </router-link>
            <div class="hamburger-wrapper">
                <div class="hamburger first-hamburger"></div>
                <div class="hamburger middle-hamburger"></div>
                <div class="hamburger last-hamburger"></div>
            </div>
        </div>
        <div class="navbar-wrapper">
            <div class="search-wrapper">
                <input type="search" placeholder="search" class="search">
                <button class="btn-search">search</button>
            </div>
           <div class="special-links">
               <router-link to="/" class="decor account">Account</router-link>
               <router-link to="/" class="decor donate">Donate</router-link>
           </div>
        </div>
    </nav>
</template>

<script>
 export default {
     data(){
         return{
             'logo': './img/logo.png'
         }

     }
 }
</script>

