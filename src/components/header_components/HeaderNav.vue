<script>
export default {
    name: 'HeaderNav',
    data() {
        return {
            links: [
                { text: 'Home', url: '/home' },
                { text: 'Games', url: '/games' },
                { text: 'Shop', url: '/shop' },
                { text: 'Pages', url: '/pages' },
                { text: 'Blog', url: '/blog' },
                { text: 'Contact', url: '/contact' },
            ]
        };
    }
};
</script>

<template>
    <div id="navbar">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-4"><img src="../../assets/img/logo.png" alt="logo"></div>
                <div class="col-6">
                    <ul class="d-flex gap-4">
                        <li v-for="(link, index) in links" :key="index">
                            <a :href="link.url">{{ link.text }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col-2">
                    <a href="#">
                        <img src="../../assets/icon/cart-icon.png" alt="cart">
                    </a>
                    <button>live stream</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../assets/scss/vars" as *;

#navbar {
    width: 100%;
    height: 100px;

    padding-top: 30px;

    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    left: 0;

    background-color: #1B222E;
}

ul a {
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: $orbitron-font;
}
</style>