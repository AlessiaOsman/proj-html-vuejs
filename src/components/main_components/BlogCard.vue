<script>

export default {
    name: 'BlogCard',
    props: {
        post: Object
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
    <div class="post-card">
        <div class="post-card-image">
            <img :src="createImagePath(post.image)" alt="image">
        </div>

        <div class="post-card-info p-4">
            <div class="d-flex gap-3 mb-4">
                <span>
                    <img :src="createIconPath('clock.png')" alt="reading time">
                    {{ post.reading_time }}
                </span>
                <span>
                    <img :src="createIconPath('eye.png')" alt="views">
                    {{ post.views }}
                </span>
                <span>
                    <img :src="createIconPath('calendar.png')" alt="date">
                    {{ post.date }}
                </span>
            </div>
            <a href="#">
                <h4>{{ post.title }}</h4>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/_vars.scss' as *;

.post-card {
    background-color: #283449;
    border-radius: 20px;

    &.flex {
        display: flex;
        margin-bottom: 20px;

        .post-card-image {
            img {
                height: 100%;
                width: auto;
            }
        }

        h4 {
            font-size: 24px;
        }
    }

    &.none {
        display: none;
    }

    .post-card-image {
        img {
            width: 100%;
            border-radius: 20px;
        }
    }



    span {
        color: $color-secondary;
        display: inline-flex;
        align-items: center;
        margin-right: 25px;
        font-family: $barlow-font;


        img {
            max-width: 100%;
            height: auto;
            margin-right: 10px;
        }
    }

    h4 {
        font-family: $orbitron-font;
        color: $color-white;
        font-weight: bold;
        font-size: 32px;
    }
}
</style>

