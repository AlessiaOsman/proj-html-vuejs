<script>
import FeaturesSection from './components/main_components/FeaturesSection.vue';
import CounterSection from './components/main_components/CounterSection.vue';
import StreamingSection from './components/main_components/StreamingSection.vue';
import TestimonialSection from './components/main_components/TestimonialSection.vue';
import MatchSection from './components/main_components/MatchSection.vue';
import BlogSection from './components/main_components/BlogSection.vue';
export default {
    name: 'AppMain',
    components: { 
        FeaturesSection, 
        CounterSection, 
        StreamingSection, 
        TestimonialSection, 
        MatchSection,
        BlogSection
     },
}
</script>
<template>
    <main>
        <FeaturesSection />
        <MatchSection/>
        <CounterSection />
        <StreamingSection />
        <TestimonialSection />
        <BlogSection/>
    </main>
</template>