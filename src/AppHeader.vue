<script>
import HeaderNav from './components/header_components/HeaderNav.vue'
import HeaderJumbotron from './components/header_components/HeaderJumbotron.vue'
export default {
    name: 'AppHeader',
    components: { HeaderJumbotron, HeaderNav },

}


</script>
<template>
    <header id="header">
        <div class="container">
            <HeaderNav />
            <HeaderJumbotron />
        </div>
    </header>
</template>

<style scoped lang="scss">
#header {
    background-image: url(./assets/img/index-banner-bg.png);
    height: 1400px;
    background-repeat: no-repeat;

    padding: 25px 0;
}
</style>