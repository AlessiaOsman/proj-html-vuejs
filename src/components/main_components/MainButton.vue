<script>
export default {
    // Javascript Logic
    name: 'MainButton',

    props: {
        button: Object
    },

    computed: {
        imagePath() {
            const url = new URL(`../../assets/svg/${this.button.image}`, import.meta.url)
            return url.href
        }
    }
};
</script>
 
<template>
    <div>
        <span>
            <a :class="{'d-flex': button.display === 'd-flex',
                        'gap-2': button.gap === 'gap-2',
                        'align-items-center' : button.align_items === 'center' 
        }" href="#">{{ button.label.toUpperCase() }}

                <img :src="imagePath" alt="">
            </a>
        </span>
    </div>
    <!-- Template -->
</template>
 
<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

div {
    display: inline-block;

    span {
        border: 1px solid $color-primary;
        padding: 5px 5px;
        border-radius: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            border-color: $color-secondary;
            cursor: pointer;
        }

        &:hover a {
            background-color: $color-secondary;
        }

        a {
            font-family: $barlow-font;
            font-weight: 800;
            font-size: 18px;
            background-color: $color-primary;
            text-decoration: none;
            color: black;
            padding: 10px 20px;
            border-radius: 35px;
            //display: flex;
            //align-items: center;
            //gap: 10px;
        }

        img {
            filter: invert(1);
            right: 10px;
        }
    }
}
</style>