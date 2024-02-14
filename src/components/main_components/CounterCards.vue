<script>
export default {
    name: 'CounterCards',
    props: {
        counters: Array
    },
    data() {
        return {

        }
    },
}





</script>
<template>
    <div class="row d-flex">
        <div class="col-lg-3 col-sm-6" v-for="  counter   in   counters  ">
            <div class="counter-card">
                <div class="show-number">
                    <h3 class="counter-number">{{ counter.number }}</h3>
                </div>
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
    animation: show-number 2s ease-out forwards;
}



.counter-name {
    color: $color-secondary;
    font-family: $barlow-font ;
}

@keyframes show-number {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>