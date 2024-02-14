<script>
import MainButton from '../main_components/MainButton.vue';
import DropdownMenu from './DropdownMenu.vue';
export default {
    name: 'HeaderNav',
    data() {
        return {
            links: [
                {
                    text: 'Home',
                    url: '/home',

                },
                {
                    text: 'Games',
                    url: '/games',
                    dropdown: ['Games', 'Games details', 'Match details'],
                    arrow: 'c-down-arrow.svg'
                    

                },
                {
                    text: 'Shop',
                    url: '/shop',
                    dropdown: ['Shop','Shop single','Shop single 2'],
                    arrow: 'c-down-arrow.svg'
                    


                },
                {
                    text: 'Pages',
                    url: '/pages',
                    dropdown: ['About us', 'Team', 'Player' ],
                    arrow: 'c-down-arrow.svg'
                    
                },
                {
                    text: 'Blog',
                    url: '/blog',
                    dropdown: ['Blog', 'Blog single'] ,
                    arrow: 'c-down-arrow.svg'
                    

                },
                {
                    text: 'Contact',
                    url: '/contact'
                },
            ],

        };
    },
    components: { MainButton, DropdownMenu },
    props: {
        button: Object
    },
    methods: {
        imagePath(image) {
            const url = new URL(`../../assets/svg/${image}`, import.meta.url)
            return url.href
        },
    }
};
</script>

<template>
    <div id="navbar">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-3"><img src="../../assets/img/logo.png" alt="logo"></div>
                <div class="col-6">
                    <ul class="d-flex gap-4">
                        <li class="d-flex align-items-center gap-2 links" v-for="(link, i) in links" :key="i">
                            <a :href="link.url">{{ link.text }}</a>
                            <img v-if="link.arrow"  :src="imagePath(link.arrow)" alt="arrow">
                            <DropdownMenu v-if="link.dropdown" :dropdown="links[i].dropdown"/>
                        </li>
dro
                    </ul>
                </div>
                <div class="col-3 d-flex gap-3 align-items-center">
                    <a href="#">
                        <img src="../../assets/icon/cart-icon.png" alt="cart">
                    </a>
                    <MainButton :button="button" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../assets/scss/vars" as *;

#navbar {
    width: 100%;
    max-height: 100px;

    padding: 20px 0;

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

.links{
    position: relative;
    
    &:hover {
        a{
            color: $color-secondary;
        }
       .dropdown-menu{
           display: block; 

       } 
    }
}
</style>