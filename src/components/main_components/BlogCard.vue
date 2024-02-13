<script>

export default {
    name: 'BlogCard',
    props: {
        posts: Array
    },

    methods: {
        createImagePath(image) {
            const url = new URL(`../../assets/img/${image}`, import.meta.url)
            return url.href;
        },

        createIconPath(image) {
            const url = new URL(`../../assets/icon/${image}`, import.meta.url)
            return url.href;
        }
    }

}
</script>
<template>
    <div class="posts-container row mx-auto">
        <div v-for="post in posts" :key="post.id">
            <div class="post-card" col-6>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_vars.scss' as *;
</style>

