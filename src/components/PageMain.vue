<script>
import MainForm from './MainForm.vue'
import MainCTABanner from './MainCTABanner.vue'
import MainCourses from './MainCourses.vue'
import MainSuccessRate from './MainSuccessRate.vue'

export default {
    name: "PageMain",
    components: {
        MainForm,
        MainCTABanner,
        MainCourses,
        MainSuccessRate
    },
    props: {
        phoneNum: String,
        courseList: Array,
        succesRate: Array
    }
}

</script>

<template>
    <!-- Form Section -->
    <MainForm />

    <!-- Call CTA Banner-->
    <MainCTABanner :phoneNum="phoneNum" />

    <!-- Courses Section -->
    <MainCourses :courseList="courseList" />
    <MainSuccessRate :succesRate="succesRate" />

    <!-- Instructors Section -->
    <!-- Testimonials Section -->
    <!-- News Section -->
    <!-- Newsletter Banner -->
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>