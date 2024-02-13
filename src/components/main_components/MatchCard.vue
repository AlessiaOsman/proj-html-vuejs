<script>

    export default{
        name: 'MatchCard',
        props:{
            item: Object
        },

       methods: {
            createImagePath(image){
                const url = new URL(`../../assets/img/${image}`, import.meta.url)
                return url.href;
            },

            createIconPath(image){
                const url = new URL(`../../assets/icon/${image}`, import.meta.url)
                return url.href;
            }
       }

    }
</script>
<template>
    <div class="col-6">
        <div class="match-card">
        <div class="match-card-header d-flex justify-content-between align-items-center">
            <img :src="createImagePath(item.firstTeam)" alt="team">
            <img :src="createImagePath('verus-icon.png')" alt="versus icon">
            <img :src="createImagePath(item.secondTeam)" alt="team">
        </div>
        <div class="match-card-body text-center">
            <h5>{{ item.name }}</h5>
            <p class="m-0">{{ item.date }}</p>
        </div>
        <div class="match-card-footer d-flex justify-content-center align-items-center gap-4">
            <a href="#" class="d-flex align-items-center gap-1">
            <img :src="createIconPath('youtube-icon.png')" alt="">Youtube</a>

            <a href="#" class="d-flex align-items-center gap-1">
            <img :src="createIconPath('twitch-icon.png')" alt="">Twitch</a>

        </div>
    </div>
    </div>

</template>

<style lang="scss" scoped>
    @use '../../assets/scss/_vars.scss' as *;
    .match-card{
        background-color: #283449;
        border: 1px solid #556f9c;
        border-radius: 20px;
        padding: 40px 0;
        margin-bottom: 30px;

        .match-card-header{
            padding: 0 50px;
        }

        .match-card-body{
            background-color: #30405F;
            margin: 40px 0;
            padding: 30px 0;

            h5{
                font-family: $orbitron-font;
                color: $color-white;
                font-weight: bold;
            }

            p{
                color: $color-secondary;
                font-family: $barlow-font;
            }
        }
        .match-card-footer{
            a{
                color: $color-white;
            }
        }
    }
</style>