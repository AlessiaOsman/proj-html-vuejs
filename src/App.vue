<script>
import { store } from './data/store';
import AppHeader from './AppHeader.vue'
import AppMain from './AppMain.vue';
import AppFooter from './AppFooter.vue';
export default {
  name: 'Futio',
  components: { AppHeader, AppMain, AppFooter }
}
</script>

<template>
  <AppHeader />
  <AppMain/>
  <AppFooter/>
</template>

<style lang="scss">
@use './assets/scss/style.scss'
</style>


