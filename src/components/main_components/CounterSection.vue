<script>
import CounterCard from './CounterCard.vue'
export default {
    name: 'CounterSection',
    components: { CounterCard },
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
            ]
        }
    }
}
</script>
<template>
    <div id="counter-section">
        <div class="container counter-container">
            <h1 class="text-center mb-5">Futio Quick Facts</h1>
            <div class="row d-flex">
                <div class="col-lg-3 col-sm-6" v-for="counter in counters">
                    <CounterCard :number="counter.number" :platform="counter.platform" />
                </div>
            </div>
        </div>

    </div>
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