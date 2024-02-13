<script>
import FeaturesSection from './components/main_components/FeaturesSection.vue';
import CounterSection from './components/main_components/CounterSection.vue';
import StreamingSection from './components/main_components/StreamingSection.vue';
import TestimonialSection from './components/main_components/TestimonialSection.vue';
import BlogSection from './components/main_components/BlogSection.vue';
import MatchCard from './components/main_components/MatchCard.vue';
import MainSection from './components/main_components/MainSection.vue'
export default {
    name: 'AppMain',
    components: { FeaturesSection, CounterSection, StreamingSection, TestimonialSection, BlogSection, MainSection, MatchCard },
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
        ]
    })
}
</script>
<template>
    <main>
        <FeaturesSection />
        <MainSection title="Trending Battle" subTitle="Keep Eyes & Manage Upcoming Battle"
            paragraph="libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.">
            <MatchCard :items="cards" />
        </MainSection>
        <CounterSection />
        <StreamingSection />
        <TestimonialSection />
        <BlogSection />
    </main>
</template>