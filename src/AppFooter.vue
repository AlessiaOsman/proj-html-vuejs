<script>
import { footerData } from './data/footer_data';
import NewsLetters from './components/footer_components/NewsLetters.vue';
import FooterTop from './components/footer_components/FooterTop.vue';
import FooterBottom from './components/footer_components/FooterBottom.vue';
const { left, right, contacts, copyright, newsletter } = footerData;
export default {
    name: 'AppFooter',

    data: () => ({
        left,
        right,
        contacts,
        copyright,
        newsletter
    }),

    components: { NewsLetters, FooterTop, FooterBottom }
}
</script>
<template>
    <footer>
        <NewsLetters :newsletter="newsletter" />
        <FooterTop :left="left" :right="right" :contacts="contacts" />
        <FooterBottom :copyright="copyright" />
    </footer>
</template>

<style lang="scss" scoped>
@use './assets/scss/vars' as *;


footer {
    position: relative;
    background-color: #283449;
}
</style>