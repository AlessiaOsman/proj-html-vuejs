<script>
import NewsLetters from './components/footer_components/NewsLetters.vue';
import FooterTop from './components/footer_components/FooterTop.vue';
import FooterBottom from './components/footer_components/FooterBottom.vue';
export default{
    name: 'AppFooter',
    components: {NewsLetters, FooterTop, FooterBottom}
}
</script>
<template>
    <footer>
        <NewsLetters/>
        <FooterTop/>
        <FooterBottom/>
    </footer>
</template>