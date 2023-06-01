<script>

export default {
    name: "MainCourses",
    props: {
        courseList: Array
    },
    methods: {
        getImgPath(img) {
            return new URL(`../assets/images/${img}`, import.meta.url).href;
        }
    }
}

</script>

<template>
    <section id="coursesSec" class="bg-courses-section bg-cover bg-bottom">
        <div class="max-w-[920px] mx-auto border flex justify-between gap-x-10 items-start h-[475px]">

            <!-- Courses Card Info -->
            <div class="w-[40%] rounded-xl z-10 bg-white shadow-xl text-center pt-7 px-8 pb-14 mt-[-25px] relative">
                <h3 class="text-colDarkGrey text-2xl text-center mb-8 font-bold">Courses</h3>
                <small class="mb-7 block px-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora iusto
                    assumenda, pariatur animi sed corporis ipsam.</small>
                <button
                    class="bg-primaryGreen border-2 border-primaryGreen py-2 px-4 rounded-full hover:bg-white hover:text-primaryGreen hover:border-primaryGreen text-white font-bold text-xs">
                    COURSE INFORMATION</button>
                <img src="../assets/images/new-corner.jpg" alt="new-img" class="absolute top-0 left-0 rounded-tl-xl w-1/5">
            </div>

            <!-- All Courses -->
            <div class="w-[60%] border flex justify-between text-center items-center pt-4 pb-2">
                <div v-for="course in courseList">
                    <a href="#">
                        <img :src="getImgPath(course.img)" :alt="`${course.name}-img`" class="max-h-[150px] max-w-[150px]">
                    </a>
                    <h4 class="font-bold text-colBlue my-2">{{ course.name }}</h4>
                    <button
                        class="border-2 border-colBlue py-1 px-3 rounded-full hover:bg-colBlue hover:text-white hover:border-colBlue text-colBlue font-bold text-[10px]">
                        LEARN MORE</button>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

#coursesSec {
    // border-bottom-left-radius: 10% 70%;
    // border-bottom-right-radius: 10% 70%;
    clip-path: polygon(-30px -30px, 100% -30px, 100% 84%, 50% 100%, 0 84%);
}
</style>
