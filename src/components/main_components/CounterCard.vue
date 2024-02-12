<script>
export default {
    name: 'CounterCard',
    props: {
        platform: String,
        number: Number
    }

}
</script>
<template>
    <div class="counter-card">
        <h3 class="counter-number">{{ number }}</h3>
        <span class="counter-name">{{ platform }}</span>
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
}



.counter-name {
    color: $color-secondary;
    font-family: $barlow-font ;
}
</style>