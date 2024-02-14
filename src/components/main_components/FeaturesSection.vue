<script>
import MainButton from './MainButton.vue';

export default {
    name: 'FeaturesSection',
    data: () => ({
        items: [
            {
                image: 'features-icon-1.png',
                title: 'Live Streaming',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
            },
            {
                image: 'features-icon-2.png',
                title: 'Great Tournament',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
            },
            {
                image: 'features-icon-3.png',
                title: 'Gaming News',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
            }
        ],
        button: {
            label: 'Play Now',
            image: 'e-double-right-arrow.svg',
            display: 'd-flex',
            gap: 'gap-2',
            align_items: 'center',
        }

    }),
    components: { MainButton }
}
</script>
<template>
    <!-- feature -->
    <section id="features" class="py-5 d-flex">
        <div class="img-feature">
            <img src="../../assets/img/features-illus.png" alt="features" class="img-fluid pe-5 pt-5">
        </div>
        <div class="text-feature pt-5">
            <h4 class="orbitron">The Ultimate Competitive Gaming Platfrom</h4>
            <h1 class="title py-3 orbitron">Make Your Mark On The Battle Field</h1>
            <p class="barlow">libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Cras
                ultricies ligula sed magna dictum porta.</p>
            <div class="row py-3" v-for="item in items">
                <div class="col-2 icon">
                    <img :src="`src/assets/icon/${item.image}`" :alt="item.title">
                </div>
                <div class="col">
                    <h3 class="orbitron">{{ item.title }}</h3>
                    <p class="barlow">{{ item.text }}
                    </p>
                </div>
            </div>
            <MainButton :button="button" />
        </div>
    </section>
</template>

<style scope lang="scss">
@use '../../assets/scss/vars' as *;


.orbitron {
    font-family: $orbitron-font;
}

.barlow {
    font-family: $barlow-font;
    font-size: 17px;
}

#features {
    background-color: black;
    color: white;

    .img-feature{
        position: relative;
        left: -50px;
    }
}

.text-feature {
    width: 600px;

    h4 {
        color: #94CB53;
        font-size: 24px;
    }

    .title {
        font-size: 50px;

    }
}

.col.icon {
    height: 80px;
    width: 80px;
}
</style>