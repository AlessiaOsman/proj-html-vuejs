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
                    <ul class="d-flex gap-2">
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                        <li>Link</li>
                    </ul>
                </div>
                <div class="center col-6 d-flex gap-2 justify-content-between pe-5">
                    <div v-for="(item, i) in right" :key="i" class="list">
                        <h4>{{ item.title }}</h4>
                        <ul>
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
    background-color: $bg-card;
    color: $color-link;
    padding: 50px 0;
    font-family: $barlow-font;

    h4 {
        font-family: $orbitron-font;
    }

    a {
        text-decoration: none;
        color: $color-link;

        &:hover {
            color: $color-secondary;
        }
    }

    .contact-type {
        color: $color-secondary
    }



}
</style>