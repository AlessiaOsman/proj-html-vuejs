<script>
import CarouselTestimonials from './CarouselTestimonials.vue';
import BannerDiscount from './BannerDiscount.vue'
import MainSection from './MainSection.vue';
export default {
    name: 'TestimonialSection',
    components: { CarouselTestimonials, BannerDiscount, MainSection },
    data: () => ({

    })
}
</script>
<template>
    <MainSection subTitle="What Our Gamers Say" title="Futio Feedback"
        paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, eum sapiente. Saepe explicabo itaque ullam officiis, quia modi hic beatae minima iure sequi natus error vel quisquam officia incidunt architecto.">
        <CarouselTestimonials />
    </MainSection>


    <BannerDiscount />
</template>

<style scoped lang="scss">
@use '../../assets/scss/vars' as *;
</style>