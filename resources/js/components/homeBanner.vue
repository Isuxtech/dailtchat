<template>
    <div class="banner">
        <section class="banner-roller" v-if="shows">
            <h2>{{quotes[current_count].title}}</h2>
            <p>{{quotes[current_count].body}}</p>
            <strong>{{quotes[current_count].name}}</strong>
        </section>
    </div>
</template>

<script>
 export default {
     data(){
         return{
             current_count: 0,
             quotes:[
                 {
                     title:'the king is God',
                     body:' There is no King but God who sits in heaven and on earth',
                     name:'James Bond'

                 },
                 {
                     title:'Amen to the king is God',
                     body:' There is no King but God who sits in heaven and on earth',
                     name:'James Bond'

                 },
                 {
                     title:'again the king is God',
                     body:' There is no King but God who sits in heaven and on earth',
                     name:'James Bond'

                 },
                 {
                     title:'last the king is God',
                     body:' There is no King but God who sits in heaven and on earth',
                     name:'James Bond'

                 },
             ],
             shows:false,
             duration:8000,
             timer:null,
             loopinterval:null
         }
     },
     computed:{

       del(){
           this.loopinterval =  setInterval(()=>{
             this.getQuote()
           },this.duration);
       }
     },
     methods:{
          getQuote() {
              this.timer = setTimeout(()=>{
                  this.shows = !this.shows;
                  if(this.current_count < this.quotes.length - 1){
                      this.current_count++;
                  }else{
                      this.current_count = 0;
                  }
              }, 7000)

              this.shows = !this.shows;
          },

     },
     mounted() {
         this.del
     },

     beforeDestroy() {
        clearInterval(this.loopinterval);
        clearTimeout(this.timer);
     }
 }
</script>
