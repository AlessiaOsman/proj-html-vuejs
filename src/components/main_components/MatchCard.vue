<script>

    export default{
        name: 'MatchCard',
        props:{
            items: Array
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
    <div class="cards-container row mx-auto">
    <div v-for="item in items" class="match-card col-lg-6">
        <div class="match-card-header">
            <img :src="createImagePath(item.firstTeam)" alt="team">
            <img :src="createImagePath('verus-icon.png')" alt="versus icon">
            <img :src="createImagePath(item.secondTeam)" alt="team">
        </div>
        <div class="match-card-body">
            <h2>{{ item.name }}</h2>
            <p>{{ item.date }}</p>
        </div>
        <div class="match-card-footer">
            <div>
            <img :src="createIconPath('youtube-icon.png')" alt="">
            <p>Youtube</p>
            </div>
            <div>
            <img :src="createIconPath('twitch-icon.png')" alt="">
            <p>Twitch</p>
            </div>

        </div>

    </div>
</div>
</template>

<style lang="scss" scoped>
    .match-card{
        background-color: #283449;
        border: 1px solid #556f9c;
        border-radius: 20px;
        padding: 40px 0;

        .match-card-body{
            background-color: #30405F;
        }
    }
</style>