<script>
import CounterCards from './CounterCards.vue';
import MainSection from './MainSection.vue';
export default {
    name: 'CounterSection',
    components: { CounterCards, MainSection },
    data() {
        return {
            counters: [
                {
                    platform: "Twitch Streams",
                    number: Math.floor(Math.random() * 2000) + 1
                },
                {
                    platform: "Total Games",
                    number: Math.floor(Math.random() * 200) + 1
                },
                {
                    platform: "Youtube Streams",
                    number: Math.floor(Math.random() * 1000) + 1
                },
                {
                    platform: "Pro Team",
                    number: Math.floor(Math.random() * 100) + 1
                }
            ],

        }
    },

}
</script>
<template>
    <MainSection subTitle="Futio Quick Facts">
        <CounterCards :counters="counters" />
    </MainSection>
</template>

<style scoped lang="scss">
@use '../../assets/scss/vars' as *;
</style>