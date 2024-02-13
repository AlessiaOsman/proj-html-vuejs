<script>
export default {
    name: 'FooterTop',

    props: {
        left: Object,
        right: Object,
        contacts: Object
    },
    methods: {
        imagePath(image) {
            const url = new URL(`../../assets/img/${image}`, import.meta.url)
            return url.href
        }
    }
};
</script>

<template>
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="left col-4">
                    <img :src="imagePath(left.image)" alt="logo-futio">
                    <p>{{ left.text }}</p>
                    <ul class="d-flex gap-2 mt-5">
                        <li class="social-icon"><a href="#"><font-awesome-icon :icon="['fab', 'youtube']" /></a></li>
                        <li class="social-icon"><a href="#"><font-awesome-icon :icon="['fab', 'twitch']" /></a></li>
                        <li class="social-icon"><a href="#"><font-awesome-icon :icon="['fab', 'facebook-f']" /></a></li>
                        <li class="social-icon"><a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a></li>
                    </ul>
                </div>
                <div class="center col-6 d-flex gap-2 justify-content-between pe-5">
                    <div v-for="(item, i) in right" :key="i" class="list ">
                        <h4>{{ item.title }}</h4>
                        <ul class="list">
                            <li class="py-1" v-for="(link, i) in right[i].links || right[i].contacts" :key="i">
                                <a href="#">{{ link }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="right contacts col-2">
                    <h4>{{ contacts.title }}</h4>
                    <div class="location mb-1">
                        <p class="contact-type">Location:</p>
                        <p>{{ contacts.address }}</p>
                    </div>
                    <div class="phone">
                        <p class="contact-type">Phone:</p>
                        <p>{{ contacts.phone }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

p {
    margin: 0;
}

img {
    max-width: 100%;
    display: inline-block;
}

.footer-top {
    background-color: #283449;
    color: $color-link;
    padding-bottom: 30px;
    font-family: $barlow-font;
    position: relative;
    bottom: 50px;

    h4 {
        font-family: $orbitron-font;
    }

    .list a {
        text-decoration: none;
        color: $color-link;

        &:hover {
            color: $color-secondary;
        }
    }

    .contact-type {
        color: $color-secondary
    }

    .social-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid $bg-card;
        border-radius: 50%;
        padding: 15px;
        width: 35px;
        height: 35px;
        font-size: 16px;

        &:hover {
            cursor: pointer;
            background-color: $color-secondary;
        }

        a {
            color: $color-link;
        }

    }

}
</style>