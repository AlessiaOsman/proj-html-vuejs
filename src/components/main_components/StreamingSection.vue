<script>
export default {
    name: 'StreamingSection'
}
</script>
<template>
    <section class="live-streaming">
        <div class="overlay pt-120">
            <div class="container wow fadeInUp">
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="section-header d-flex flex-column justify-content-between align-items-center">
                            <h5 class="sub-title m-3">Live Streaming</h5>
                            <h2 class="title m-3">Watch The Streams</h2>
                            <p class="text-center p-3">libero malesuada feugiat. Vivamus magna justo, lacinia eget
                                consectetur
                                sed, convallis at
                                tellus. Cras ultricies ligula sed magna dictum porta.</p>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="magnific-area position-relative d-flex align-items-center justify-content-around">
                            <div class="bg-area">
                                <img src="../../assets/img/bg-stream-04.png" alt="image">
                            </div>

                            <a class="d-flex top-area align-items-center justify-content-center">
                                <img src="../../assets/icon/live-icon.png" alt="icon">
                                <span class="ms-1">Live</span>
                            </a>
                            <div class="bottom-area d-flex gap-4 align-items-center">
                                <p><span class="numbers">356,599</span> Viewers</p>
                                <p><span class="numbers">23,599 </span> Likes</p>
                            </div>

                            <div
                                class="content-area text-center position-absolute d-flex align-items-center justify-content-center">
                                <div class="content-box">
                                    <a class="mfp-iframe popupvideo d-flex mb-40 align-items-center justify-content-center"
                                        href="https://www.youtube.com/watch?v=Djz8Nc0Qxwk">
                                        <img class="play" src="../../assets/icon/play-icon.png" alt="icon">
                                    </a>
                                    <h5 class="title-video m-3">League of Legends</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scope lang="scss">
@use '../../assets/scss/vars' as *;

.overlay {
    background-image: url(../../assets/img/live-streaming-bg.png);
    background-repeat: no-repeat;
    padding-top: 100px;
    color: white;
    height: 1000px;
}

.live-streaming {
    background-color: black;
}

.abs-area {
    position: absolute;
}

.top-area {
    position: absolute;
    right: 70px;
    top: 30px;
    background-color: orange;
    padding: 5px 15px;
    border-radius: 20px;
    color: black;
    font-size: 14px;

}

.numbers {
    color: $color-secondary;
}

.play {
    background-color: white;
    padding: 30px;
    border-radius: 48%;
}

.bottom-area {
    height: 80px;
    position: absolute;
    bottom: -20px;
    left: 70px;

}


.bg-area {


    img {
        width: 1000px;
        height: 550px;
    }
}



.sub-title {
    font-size: 30px;
    font-family: $orbitron-font;
    color: $color-secondary;
}

.title {
    font-size: 60px;
    font-family: $orbitron-font;
}

.title-video {
    font-family: $orbitron-font;
}

p {
    font-family: $barlow-font;
    font-size: 18px;
    margin-bottom: 50px;
}
</style>