<script>
export default {
    name: 'HeaderJumbotron',
};
</script>

<template>
    <div id="jumbo-box" class="container-fluid">
        <div class="row">
            <div class="col">
                <div>
                    <img id="controller" src="../../assets/img/game-controler.png" alt="controller">
                    <img id="soldier" src="../../assets/img/index-banner-illus.png" alt="soldier">
                </div>
                <div class="container">
                    <div id="esport-text">
                        <h4>Game With Live Stearming</h4>
                        <h1>Future Of Esports</h1>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
                        </p>
                        <div class="d-flex align-items-center gap-4">
                            <MainButton :button="button" />
                            <span class="play-container pulse">
                                <img class="play" src="../../assets/icon/play-icon.png" alt="icon">
                            </span>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../assets/scss/vars" as *;


.play-container{
    padding: 5px;
    border-radius: 50%;
    border: 1px solid $color-primary;

    .play {
    background-color: white;
    padding: 16px;
    border-radius: 48%;
}
}


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

    position: relative;
}

#controller {
    position: absolute;
    left: 10px;
    bottom: 80px;
    z-index: 0;
}

#soldier {
    position: absolute;
    right: 0;

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