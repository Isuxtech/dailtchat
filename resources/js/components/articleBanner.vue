<template>
    <div :style="`background-color:${article.color};background-image:url(${image_url})`" :class="['banner']"> </div>
</template>


<script>
 import { mapGetters} from 'vuex'
    export default{

      computed:{
          ...mapGetters({
              'image_url':'GET_IMAGE',
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
