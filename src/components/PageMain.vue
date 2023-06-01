<script>
import MainForm from './MainForm.vue'
import MainCTABanner from './MainCTABanner.vue'
import MainCourses from './MainCourses.vue'

export default {
    name: "PageMain",
    components: {
        MainForm,
        MainCTABanner,
        MainCourses,
    },
    props: {
        phoneNum: String,
        courseList: Array
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

    <!-- Instructors Section -->
    <!-- Testimonials Section -->
    <!-- News Section -->
    <!-- Newsletter Banner -->
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>