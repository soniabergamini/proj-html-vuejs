<script>
import MainForm from './MainForm.vue'
import MainCTABanner from './MainCTABanner.vue'
import MainCourses from './MainCourses.vue'
import MainSuccessRate from './MainSuccessRate.vue'
import MainInstructors from './MainInstructors.vue'
import MainTestimonials from './MainTestimonials.vue'
import MainNews from './MainNews.vue'
import MainNewsletter from './MainNewsletter.vue'

export default {
    name: "PageMain",
    components: {
        MainForm,
        MainCTABanner,
        MainCourses,
        MainSuccessRate,
        MainInstructors,
        MainTestimonials,
        MainNews,
        MainNewsletter
    },
    props: {
        phoneNum: String,
        courseList: Array,
        succesRate: Array,
        instructors: Array,
        testimonials: Array,
        news: Array
    }
}

</script>

<template>
    <!-- Form Section -->
    <MainForm />

    <!-- Call CTA Banner-->
    <MainCTABanner :phoneNum="phoneNum" />

    <!-- Courses Section -->
    <MainCourses :courseList="courseList" :phoneNum="phoneNum" />
    <MainSuccessRate :succesRate="succesRate" />

    <!-- Instructors Section -->
    <MainInstructors :instructors="instructors" />

    <!-- Testimonials Section -->
    <MainTestimonials :testimonials="testimonials" />

    <!-- Latest News Section -->
    <MainNews :news="news" />

    <!-- Newsletter Banner -->
    <MainNewsletter />
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>