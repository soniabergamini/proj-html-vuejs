<script>
import { helpers } from '../data/helpers';

export default {
    name: "MainTestimonials",
    props: {
        testimonials: Array
    },
    data() {
        return {
            helpers,
            currentSlide: 0
        }
    }
}

</script>

<template>
    <section class="bg-testimonials-section bg-cover border py-20 mt-[-150px]">
        <div class="max-w-[920px] mx-auto my-12 text-center">

            <!-- Testimonials Carousel -->
            <div class="flex flex-col items-center gap-y-4">
                <h2 class="text-3xl mb-4 text-colDarkGrey font-bold">Testimonials</h2>
                <p class="mb-3">Here what's our happy drivers had to say about our services:</p>
                <img :src="helpers.getImgPath(testimonials[currentSlide].img)"
                    :alt="`${testimonials[currentSlide].img}-img`"
                    class="w-[130px] h-[130px] object-cover	object-center rounded-full">
                <small class="w-[50%]">
                    <i>"{{ testimonials[currentSlide].bio }}"</i>
                </small>
                <h5 class="font-bold text-sm my-2">{{ testimonials[currentSlide].name }}</h5>
                <div class="flex gap-x-2">
                    <template v-for="(item, i) in testimonials">
                        <font-awesome-icon :icon="['far', 'circle']" size="2xs"
                            class="hover:bg-colBlue rounded-full cursor-pointer"
                            :class="currentSlide === i ? 'bg-colBlue' : null" @click="currentSlide = i" />
                    </template>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

small>i,
h5 {
    letter-spacing: 1.5px;
}
</style>