<script>
export default {
    name: 'MainSection',
    data: ()=>({
        bgColor: ''
    }),
    props: {
        title: String,
        subTitle: String,
        paragraph: String,
        sectionBgColor: String,
    },
}
</script>
<template>
    <section id="main-section" :class="sectionBgColor">
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
        background-color: $color-black;
        padding: 120px 0;

        &.blue{
            background-color: #222833;
        }

        &.bg-image{
            background-image: url('../../assets/img/live-streaming-bg.png');
            background-repeat: no-repeat;
        }

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