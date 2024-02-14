<script>
import MainSection from './MainSection.vue';
import MatchCard from './MatchCard.vue';
export default {
    name: 'MatchSection',
    components: {MainSection, MatchCard},
    data: () => ({
        cards: [
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
        ],
    })
}
</script>
<template>
   <MainSection sectionBgColor="blue" title="Trending Battle" subTitle="Keep Eyes & Manage Upcoming Battle"
            paragraph="libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.">
            <div class="cards-container row mx-auto">
                <MatchCard v-for="card in cards" :item="card" />
            </div>
        </MainSection> 
</template>