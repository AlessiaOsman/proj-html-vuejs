<script>
import HeaderNav from './components/HeaderNav.vue'
import HeaderJumbotron from './components/HeaderJumbotron.vue'
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
    height: 800px;
    background-repeat: no-repeat;
}
</style>