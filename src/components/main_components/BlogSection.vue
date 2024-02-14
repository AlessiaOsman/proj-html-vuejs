<script>
    import MainSection from './MainSection.vue';
    import BlogCard from './BlogCard.vue';
    export default{
        name: 'BlogSection',
        components: {MainSection, BlogCard},
        data: ()=>({
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
        })
    }
</script>
<template>
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
</template>
<style lang="scss" scoped>
    .posts-container{
        padding-bottom: 120px;
    }
</style>