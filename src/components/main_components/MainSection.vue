<script>
export default {
    name: 'MainSection',
    props: {
        title: String,
        subTitle: String,
        paragraph: String
    }
}
</script>
<template>
    <section id="main-section">
        <div class="container">
            <div class="section-header text-center mx-auto col-7">
            <h4>{{ title }}</h4>
            <h1>{{ subTitle }}</h1>
            <p>{{ paragraph }}</p>  
        </div>
            
            <slot></slot>
            
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../../assets/scss/_vars.scss' as *;

    #main-section{
        background-color: #222833;
        padding: 120px 0;

        .section-header{
            margin-bottom: 54px;

            h4{
            color: $color-secondary;
            font-family: $orbitron-font;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 24px;
        }
        h1{
            color: $color-white;
            font-family: $orbitron-font;
            font-weight: 700;
            font-size: 54px;
            margin-bottom: 24px;
        }
        p{
            color: $color-link;
            font-family: $barlow-font;
            font-size: 16px;
            font-weight: 400;
        }

        }

        
    }


</style>