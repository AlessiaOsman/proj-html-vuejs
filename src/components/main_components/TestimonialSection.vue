<script>
import BannerDiscount from './BannerDiscount.vue'
export default {
    name: 'TestimonialSection',
    components: { BannerDiscount },
    data: () => ({
        testimonials: [
            {
                ratings: "",
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
                testimonialPicture: "testimonials-image-1.png",
                testimonialName: "Merle Fisher",
                testimonialRegion: "United States"
            },

            {
                ratings: "",
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
                testimonialPicture: "testimonials-image-2.png",
                testimonialName: "Garry Francis",
                testimonialRegion: "Kiribati"
            },

            {
                ratings: "",
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.',
                testimonialPicture: "testimonials-image-3.png",
                testimonialName: "Kim Ramos",
                testimonialRegion: "Serbia"
            },




        ]
    })
}
</script>
<template>
    <section id="testimonial">
        <div class="container testimonial-container">
            <div class="section-intro row justify-content-center align-items-center">
                <div class="col-lg-7 text-center">
                    <h5 class="secondary-title">Futio Feedback</h5>
                    <h2 class="title">What Our Gamers Say</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, eum sapiente. Saepe explicabo itaque
                        ullam officiis, quia modi hic beatae minima iure sequi natus error vel quisquam officia incidunt
                        architecto.</p>
                </div>
            </div>
            <div class="carousel-testimonials-container">
                <div class="carousel row d-flex">
                    <div class="col-4" v-for="testimonial in testimonials">
                        <div class="testimonial-card">
                            <div class="rating">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
                            <p class="review">"{{ testimonial.text }}"</p>
                            <div class="user-box d-flex gap-3 align-items-center">
                                <figure>
                                    <img :src="`src/assets/img/${testimonial.testimonialPicture}`">
                                </figure>
                                <div>
                                    <h6 class="testimonial-name">{{ testimonial.testimonialName }}</h6>
                                    <p class="testimonial-region"> {{ testimonial.testimonialRegion }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <BannerDiscount />

        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/vars' as *;

#testimonial {
    background-color: black;
    color: white;

    .testimonial-container {
        padding-top: 120px;
        padding-bottom: 120px;
    }

}

.section-intro {
    margin-bottom: 55px;

    .secondary-title {
        color: $color-secondary;
        font-weight: 700;
        margin-bottom: 25px;
        font-family: $orbitron-font;
    }

    .title {
        font-weight: 700;
        margin-bottom: 10px;
        font-size: 57px;
        font-family: $orbitron-font;
    }

    p {
        font-family: $barlow-font;
        color: #CACACA;
    }
}

.testimonial-card {
    background-color: $bg-card;
    border-radius: 30px;
    padding: 32px 40px;
    margin: 0 10px;

    .rating {
        color: $color-star;
        font-size: 20px;
    }

    .review {
        font-size: 24px;
        font-family: $barlow-font;
    }

    .testimonial-name {
        font-family: $orbitron-font ;
    }

    .testimonial-region {
        font-family: $barlow-font;
        color: $color-secondary;
    }

}
</style>