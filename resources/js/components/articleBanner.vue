<template>
    <div :style="`background-color:${article.color};background-image:url(${article.image_url})`" :class="['banner']"> </div>
</template>


<script>
 import { mapGetters} from 'vuex'
    export default{

      computed:{
          ...mapGetters({
              'article':'GET_ARTICLE'
          })

      },
    }
</script>

<style scoped>
 .banner{
     width:100%;
     height:300px;
     background-repeat: no-repeat;
     background-origin: border-box;
     background-size: cover;
     display: grid;
 }

</style>
