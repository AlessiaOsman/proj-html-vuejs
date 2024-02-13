<script>
export default {
    name: 'HeaderNav',
};
</script>

<template>
    <div class="row align-items-center">
        <div class="col-4"><img src="../../assets/img/logo.png" alt="logo"></div>
        <div class="col-6">
            <ul class="d-flex gap-4">
                <li>Home</li>
                <li>Games</li>
                <li>Shop</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        <div class="col-2">
            <img src="../../assets/icon/cart-icon.png" alt="cart">
            <button>live stream</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../assets/scss/vars" as *;

ul {
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: $orbitron-font;
}
</style>