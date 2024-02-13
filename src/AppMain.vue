<script>
import FeaturesSection from './components/main_components/FeaturesSection.vue';
import CounterSection from './components/main_components/CounterSection.vue';
import StreamingSection from './components/main_components/StreamingSection.vue';
import TestimonialSection from './components/main_components/TestimonialSection.vue';
import BlogSection from './components/main_components/BlogSection.vue';
import MatchCard from './components/main_components/MatchCard.vue';
import MainSection from './components/main_components/MainSection.vue';
import BlogCard from './components/main_components/BlogCard.vue';
export default {
    name: 'AppMain',
    components: { 
        FeaturesSection, 
        CounterSection, 
        StreamingSection, 
        TestimonialSection, 
        BlogSection, 
        MainSection, 
        MatchCard,
        BlogCard
     },
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
        posts: [
            {
                id: 1,
                image: 'blog-item-1.png',
                reading_time: '10 Min',
                views: '240',
                date: 'Apr 11,2022',
                title: 'Secrets To An Amazing Role Playing Game'

            },
            {
                id: 2,
                image: 'blog-item-2.png',
                reading_time: '10 Min',
                views: '240',
                date: 'Apr 11,2022',
                title: 'Top 5 Most Important Aspects Of Your Game'

            },
            {
                id: 3,
                image: 'blog-item-3.png',
                reading_time: '10 Min',
                views: '240',
                date: 'Apr 11,2022',
                title: 'The Rise Of Fantasy Sports And Online Games'

            },
            {
                id: 4,
                image: 'blog-item-4.png',
                reading_time: '10 Min',
                views: '240',
                date: 'Apr 11,2022',
                title: 'Benefits Of Gaming - PC And Video Games'

            },
        ],

    }),
}
</script>
<template>
    <main>
        <FeaturesSection />
        <MainSection sectionBgColor="blue" title="Trending Battle" subTitle="Keep Eyes & Manage Upcoming Battle"
            paragraph="libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.">
            <div class="cards-container row mx-auto">
                <MatchCard v-for="card in cards" :item="card" />
            </div>
        </MainSection>
        <CounterSection />
        <StreamingSection />
        <TestimonialSection />
        <MainSection title="Latest News" subTitle="Stay Updated With Our Latest News Articles"
            paragraph="libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta.">
            <div class="posts-container row mx-auto">
                <div class="left-side col-6">
                    <BlogCard :post="posts[0]"/>
                </div>
                <div class="right-side col-6">
                   <BlogCard :class="{'flex': post.id !== 1, 'none': post.id === 1}" v-for="post in posts" :post="post"/>
                </div>
            </div>
        </MainSection>
    </main>
</template>