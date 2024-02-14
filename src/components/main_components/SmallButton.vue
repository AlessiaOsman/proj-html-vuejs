<script>
export default {
    name: 'SmallButton',
};
</script>
 
<template>
    <span class="play-container pulse">
        <img class="play" src="../../assets/icon/play-icon.png" alt="icon">
    </span>
</template>
 
<style lang="scss" scoped>
@use '../../assets/scss/vars' as *;

span {
    position: relative;
    cursor: pointer;
    background-color: white;
    border-radius: 50%;
    display: inline-block;

    &::before {
        position: absolute;
        translate: -11% -10%;
        content: "";
        border-radius: 50%;
        background-color: rgba(61, 87, 17, 0);
        border: 1px solid $color-primary;
        padding: 31px;
        animation: pulse 4s linear infinite;
    }

    .play {
        padding: 15px;
        width: 50px;
        height: 50px;
    }

}

@keyframes pulse {
    0% {
        transform: scale(1, 1);
    }

    50% {
        transform: scale(1.1, 1.1);
    }

    100% {
        transform: scale(1, 1);
    }
}
</style>