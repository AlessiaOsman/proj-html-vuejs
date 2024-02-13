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
                    number: 268,
                    platform: "Twitch Streams"
                },
                {
                    number: 10,
                    platform: "Total Games"
                },
                {
                    number: 470,
                    platform: "Youtube Streams"
                },
                {
                    number: 43,
                    platform: "Pro Team"
                }
            ],

            subTitle: "Futio Quick Facts"
        }
    }
}
</script>
<template>
    <MainSection :subTitle="subTitle">
        <CounterCards :counters="counters" />
    </MainSection>
</template>

<style scoped lang="scss">
@use '../../assets/scss/vars' as *;
</style>