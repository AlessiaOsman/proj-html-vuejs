<script>
import MainButton from '../main_components/MainButton.vue';
import SmallButton from '../main_components/SmallButton.vue';
export default {
    name: 'HeaderJumbotron',
    components: { MainButton, SmallButton },

    data: () => ({
        button: {
            label: 'Explore games',
            image: 'e-double-right-arrow.svg',
            display: 'd-flex',
            gap: 'gap-2',
            align_items: 'center',
        }
    })
};
</script>

<template>
    <div id="jumbo-box" class="container">
        <div class="row">
            <div class="col">
                <div>
                    <img id="controller" src="../../assets/img/game-controler.png" alt="controller">
                    <img id="soldier" src="../../assets/img/index-banner-illus.png" alt="soldier">
                </div>

                <div id="esport-text">
                    <h4>Game With Live Stearming</h4>
                    <h1>Future Of Esports</h1>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                    </p>
                    <div class="d-flex align-items-center gap-4">
                        <MainButton :button="button" />
                        <SmallButton />

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../assets/scss/vars" as *;


#jumbo-box {
    margin-top: -40px;
}

#esport-text {
    width: 40%;
    margin-top: 300px;

    position: relative;
    z-index: 1;
}

.col {
    height: 900px;
}

#controller {
    position: absolute;
    top: 460px;
    left: 50px;
    width: 560px
}

#soldier {
    position: absolute;
    translate: +50%;

}

h4 {
    color: $color-secondary;
    font-family: $orbitron-font;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
}

h1 {
    color: $color-white;
    font-family: $orbitron-font;
    font-weight: 700;
    font-size: 76px;
    margin-bottom: 24px;
}

p {
    color: $color-link;
    font-family: $barlow-font;
    font-size: 24px;
    font-weight: 400;
}
</style>