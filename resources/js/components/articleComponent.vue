<template>
   <section>
       <div class="intro">
           <h4 class="category">HISTORY/GEOGRAPHY</h4>

            <h2 class="intro-title">Lorem ipsum dolor sit amet.</h2>
           <p class="intro-content"><strong>Abstract <br/> </strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto atque commodi, corporis cupiditate deleniti, ea enim esse eveniet id impedit molestias perferendis placeat porro recusandae saepe soluta totam vero?</p>

           <h4 class="article-date"> MON 25 FEB 2020</h4>
       </div>
       <section class="wrapper">
           <article>
             <p>
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis doloremque magni officiis unde voluptatibus. Doloribus ipsum labore totam voluptas! A cupiditate enim harum id, ipsa necessitatibus officia possimus quod! Ab accusamus consequuntur deleniti quia repudiandae totam voluptates? A, alias autem ea eaque incidunt iure laborum magni minima molestias, necessitatibus nemo praesentium, qui recusandae sequi similique sit totam. Ab, accusamus alias commodi distinctio dolorem eius fuga in ipsa magnam maiores mollitia nam officia possimus quas recusandae soluta veniam. A laboriosam omnis velit voluptatibus? Excepturi expedita incidunt rem sint voluptatibus? Alias amet, architecto deleniti distinctio dolorem earum eos exercitationem expedita iure, labore molestiae natus numquam pariatur perspiciatis porro quibusdam repellendus sed sint soluta suscipit tempora temporibus ullam velit. Accusamus ad asperiores autem, dolorem doloribus ea et eum eveniet ex impedit iure libero magni nostrum odio omnis pariatur quam repellendus soluta tenetur ullam? Animi atque aut consectetur cupiditate eaque esse hic illum impedit in iure maxime minima necessitatibus, possimus quod saepe similique sit temporibus tenetur velit voluptatibus. Architecto atque dicta libero numquam quas quia veritatis. Alias animi dicta, eius facilis fugit, laboriosam modi molestiae mollitia nemo obcaecati perspiciatis provident quae reiciendis repellat sapiente sed sequi, tempora temporibus ut veritatis! Adipisci amet aperiam in itaque molestias reprehenderit voluptates? Accusantium doloremque ea enim est expedita minima, obcaecati odit reprehenderit similique veniam. Commodi cum dignissimos dolorem ducimus eveniet explicabo fugit itaque iure iusto maxime porro repudiandae, temporibus ut? Accusamus ad animi at, consectetur corporis dignissimos distinctio dolor dolore dolores ducimus earum et exercitationem facere fugit hic illum impedit itaque maxime necessitatibus obcaecati odit officiis perferendis perspiciatis praesentium quae quidem quod sapiente sequi sunt tempora tempore temporibus tenetur vel velit vitae voluptas, voluptates? Ea laborum non qui voluptate. Consequuntur dolor dolorum error exercitationem itaque, numquam officia officiis perferendis praesentium provident quo repellendus rerum? Consequatur dolorem nostrum voluptatem!
             </p>
           </article>
       </section>
   </section>
</template>

<script>

    export default {
        name:'articles',
    }
</script>

<style scoped>
    section{
       background-color: white;
        width:100%;
    }
    .intro{
        transform: translateY(-25%);
        background-color:white;
        width:50%;
        padding:0 20px 30px 30px;
        font-weight:600;
        margin-left:30px;
        box-shadow: 0px 0px 4px 1px gray;
        border-radius: 5px;
        position:relative;
    }
    .category{
        color:white;
        padding:10px;
        background-color:saddlebrown;
        transform:translateY(-4px);
        border-radius: 5px;
    }
    .article-date{
        position:absolute;
        top:95%;
        right:0;
        color:saddlebrown;
        padding:5px 10px;
        background-color: white;
        border-radius:0 0 10px 10px;
        box-shadow:2px 2px 2px 0px gray, -2px 2px 2px 0px gray;
    }
    .intro-title{
        margin-bottom: 20px;
    }
    .intro-content{
        font-style: italic;
        color:gray;
    }
    .wrapper{
        line-height: 1.4;
        font-size: 1.2rem;
        transform: translateY(-20px);
    }
    article{
        width:80%;
        margin:auto;
    }
    @media (max-width:440px){
        .intro{
            width:95%;
            font-size: 1em ;
            margin-left:5px;
            padding:0 10px 15px 15px;
            transform: translateY(-15%);
        }
        article{
            width:98%;
            margin:auto;
        }
    }
</style>
