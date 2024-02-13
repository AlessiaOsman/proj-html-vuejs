<script>
export default {
    name: 'FooterBottom',

    props: {
        copyright: Object
    },
};
</script>

<template>
    <div class="footer-bottom">
        <div class="container">

            <p class="copyright">{{ `${this.copyright.main} ${this.copyright.logo}` }}
                <a class="company" href="#">{{ this.copyright.company }}.</a>
                {{ `${this.copyright.text}.` }}
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

.footer-bottom {
    font-family: $barlow-font;
    padding: 25px 0;
    background-color: rgb(30, 41, 61);
    color: $color-white;
    text-align: center;

    .copyright {
        margin: 0
    }

    .company {
        color: $color-secondary;
        text-transform: uppercase;
    }
}
</style>