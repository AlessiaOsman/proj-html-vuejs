<script>
import MatchCard from './MatchCard.vue';
export default {
    name: 'MatchSection',
    components: {MatchCard},
    data: ()=>({
        cards:[
            {
                id: 1,
                firstTeam: 'game-img-1.png',
                secondTeam: 'game-img-2.png',
                name: 'Call Of Deauty',
                date: 'December 25, 2022 4:00 PM'
            },
            {
                id: 1,
                firstTeam: 'game-img-3.png',
                secondTeam: 'game-img-4.png',
                name: 'Legendary Battles',
                date: 'December 25, 2022 4:00 PM'
            },
            {
                id: 1,
                firstTeam: 'game-img-5.png',
                secondTeam: 'game-img-6.png',
                name: 'Nay Corral Gundown',
                date: 'December 25, 2022 4:00 PM'
            },
            {
                id: 1,
                firstTeam: 'game-img-7.png',
                secondTeam: 'game-img-8.png',
                name: 'League Of Legends',
                date: 'December 25, 2022 4:00 PM'
            },
        ]
    })
}
</script>
<template>
    <section id="match-section">
        <div class="container text-center ">
            <h2>Trending Battle</h2>
            <h1>Keep Eyes & Menage Upcoming Battle</h1>
            <p>libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras
                ultricies ligula sed magna dictum porta.</p>
            <div class="cards-container row mx-auto">
            <MatchCard v-for="card in cards" :item="card"/>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    
    #match-section{
        background-color: #222833 ;

        h2{
            color: #94CB53;
        }
        h1{
            color: #ffffff;
        }
        p{
            color: #EBEBEB;
        }
    }


</style>