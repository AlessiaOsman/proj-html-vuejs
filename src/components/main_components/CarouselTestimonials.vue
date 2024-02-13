<script>
export default {
    name: 'TestimonialSection',
    components: {},
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
    <div class="carousel-testimonials-container">
        <div class="carousel row d-flex">
            <div class="col-4" v-for="testimonial in testimonials">
                <div class="testimonial-card">
                    <div class="rating">
                        <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
                    </div>
                    <p class="review">"{{ testimonial.text }}"</p>
                    <div class="user-box d-flex gap-3">
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
</template>

<style scoped lang="scss">
@use '../../assets/scss/vars' as *;

.testimonial-card {
    background-color: #273449;
    border-radius: 30px;
    padding: 10px 40px;
    margin: 0 10px;

    .rating {
        color: $color-star;
        font-size: 20px;
    }

    .review {
        font-size: 24px;
        font-family: $barlow-font;
        color: #FFFFFF;
    }

    .testimonial-name {
        font-family: $orbitron-font ;
        color: white;
    }

    .testimonial-region {
        font-family: $barlow-font;
        color: $color-secondary;
    }

}
</style>