<script>
import FooterLinks from './FooterLinks.vue';
import FooterBanner from './FooterBanner.vue'

export default {
    name: "PageFooter",
    props: {
        phoneNum: String,
        address: String,
        email: String,
        website: String,
        courseList: Array
    },
    components: {
        FooterLinks,
        FooterBanner
    }
}

</script>

<template>
    <!-- Footer Links -->
    <FooterLinks :phoneNum="phoneNum" :address="address" :email="email" :website="website" :courseList="courseList" />

    <!-- Bottom Banner with Copyright and Social Icons -->
    <FooterBanner />
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>