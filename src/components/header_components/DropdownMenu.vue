<script>
export default {
    name: 'DropdownMenu',
    props: {
        dropdown: Array
    }
}
</script>

<template>
    <ul class="dropdown-menu">
        <li v-for="link in dropdown"><a class="dropdown-item" href="#">{{ link }}</a></li>
    </ul>
</template>


<style lang="scss" scoped>
@use "../../assets/scss/vars" as *;
    .dropdown-menu{
        top: 40px;
        translate: -25%;
        background-color: #1b222e;

        &:hover{
            display: block;
            
            a{
                color: $color-secondary;
            }
        }
        
        a{
            color: $color-link;
            font-family: $orbitron-font;
            font-weight: 600;
            font-size: 18px;
            
        }
    }
</style>