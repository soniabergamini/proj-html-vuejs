<script>
import FooterLinks from './FooterLinks.vue';

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
        FooterLinks
    }
}

</script>

<template>
    <!-- Footer Links -->
    <FooterLinks :phoneNum="phoneNum" :address="address" :email="email" :website="website" :courseList="courseList" />

    <!-- Bottom Banner with Copyright and Social Icons -->
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>