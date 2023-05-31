<script>
import PageMainForm from './PageMainForm.vue'
import PageMainCTABanner from './PageMainCTABanner.vue'

export default {
    name: "PageMain",
    components: {
        PageMainForm,
        PageMainCTABanner,
    },
    props: {
        phoneNum: String
    }
}

</script>

<template>
    <!-- Form Section -->
    <PageMainForm />

    <!-- Call CTA Banner-->
    <PageMainCTABanner :phoneNum="phoneNum" />

    <!-- Courses Section -->
    <!-- Instructors Section -->
    <!-- Testimonials Section -->
    <!-- News Section -->
    <!-- Newsletter Banner -->
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>