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
    <section id="counter-section">
        <div class="container counter-container">
            <MainSection :subTitle="subTitle">
                <CounterCards :counters="counters" />
            </MainSection>
        </div>

    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/vars' as *;

#counter-section {
    background-color: black;
    color: white;

    .counter-container {
        padding-top: 120px;
        padding-bottom: 120px;
    }

    h1 {
        font-family: $orbitron-font ;
        font-weight: 700;
        font-size: 55px;

    }

}
</style>