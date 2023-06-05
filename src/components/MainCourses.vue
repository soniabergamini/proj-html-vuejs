<script>
import { helpers } from '../data/helpers';

export default {
    name: "MainCourses",
    props: {
        courseList: Array
    },
    data() {
        return {
            helpers
        }
    }
}

</script>

<template>
    <section id="coursesSec" class="bg-courses-section bg-cover bg-bottom relative">
        <div class="max-w-[920px] mx-auto">

            <!-- Courses Presentation -->
            <section class="flex justify-between gap-x-10 items-start h-[330px]">

                <!-- Courses Info -->
                <div class="w-[40%] rounded-xl z-10 bg-white shadow-xl text-center pt-7 px-8 pb-14 mt-[-25px] relative">
                    <h3 class="text-colDarkGrey text-2xl text-center mb-8 font-bold">Courses</h3>
                    <small class="mb-7 block px-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iusto
                        assumenda, pariatur animi sed corporis ipsam.</small>
                    <button
                        class="bg-primarySalmon border-2 border-primarySalmon py-2 px-4 rounded-full hover:bg-white hover:text-primarySalmon hover:border-primarySalmon text-white font-bold text-xs">
                        COURSE INFORMATION</button>
                    <img src="../assets/images/new-corner.jpg" alt="new-img"
                        class="absolute top-0 left-0 rounded-tl-xl w-1/5">
                </div>

                <!-- All Courses -->
                <div class="w-[60%] flex justify-between text-center items-center pt-4 pb-2">
                    <div v-for="course in courseList">
                        <a href="#">
                            <img :src="helpers.getImgPath(course.img)" :alt="`${course.name}-img`"
                                class="max-h-[150px] max-w-[150px]">
                        </a>
                        <h4 class="font-bold text-colBlue my-2">{{ course.name }}</h4>
                        <button
                            class="border-2 border-colBlue py-1 px-3 rounded-full hover:bg-colBlue hover:text-white hover:border-colBlue text-colBlue font-bold text-[10px]">
                            LEARN MORE</button>
                    </div>
                </div>

            </section>
        </div>
    </section>

    <!-- Courses Section: Background Triangle -->
    <svg class="fusion-big-triangle-candy" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100"
        viewBox="0 0 100 100" preserveAspectRatio="none" style="fill:#e4eaed;padding:0;">
        <path d="M-1 -1 L50 99 L101 -1 Z"></path>
    </svg>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>
