<script>
export default {
    name: 'CounterCards',
    props: {
        counters: Array
    }

}
</script>
<template>
    <div class="row d-flex">
        <div class="col-lg-3 col-sm-6" v-for="  counter   in   counters  ">
            <div class="counter-card">
                <h3 class="counter-number">{{ counter.number }}</h3>
                <span class="counter-name">{{ counter.platform }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/vars' as *;

.counter-card {
    border: 1px solid $bg-card;
    padding: 60px 50px;
    border-radius: 60px;
    text-align: center;
}

.counter-number {
    font-family: $orbitron-font ;
    font-size: 53px;
    color: white;
}



.counter-name {
    color: $color-secondary;
    font-family: $barlow-font ;
}
</style>