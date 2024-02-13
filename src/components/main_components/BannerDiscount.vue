<script>
export default {
    name: 'BannerDiscount'
}
</script>
<template>
    <div class="container-fluid row justify-content-center py-5">
        <div class="banner-box col-lg-10">
            <div class="bg-objs d-none d-xxl-block ">
                <img id="phone-obj" src="../../assets/img/banner-item-obj1.png" alt="background object">
                <img id="hp-obj" src="../../assets/img/banner-item-obj2.png" alt="background object">
            </div>
            <div class="banner-content text-white text-center">
                <div class="banner-text">
                    <h5>Make offer</h5>
                    <h2>Get 70% Offer Discount</h2>
                    <div class="banner-button"><a href="#">Get Offers</a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/scss/vars' as *;

.banner-box {
    background-image: url(../../assets/img/banner-item-bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    overflow-y: hidden;

    #phone-obj {
        position: absolute;
        left: 0;
        top: 100px;
    }

    #hp-obj {
        position: absolute;
        right: 30px;
        bottom: 100px;
    }

    .banner-content {
        padding-top: 120px;
        padding-bottom: 120px;
    }

    h5 {
        font-family: $orbitron-font;
        font-weight: 700;
        margin-bottom: 25px;
    }

    h2 {
        font-family: $orbitron-font;
        font-weight: 700;
        margin-bottom: 40px;

    }

    a {
        color: white;
        font-family: $barlow-font;
        padding: 15px 60px;
        border-radius: 30px;
        background-color: #1B8F3D;

    }

    @media only screen and (max-width: 1800px) {
        .bg-objs>* {
            max-width: 250px;
        }

        #phone-obj {
            top: 150px;
        }

        #hp-obj {
            bottom: 150px;
        }
    }
}
</style>