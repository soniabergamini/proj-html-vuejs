<script>

import PageNavMenu from './PageNavMenu.vue'

export default {
    name: "PageHeader",
    components: {
        PageNavMenu
    },
    props: {
        phoneNum: String,
        menuItems: Array
    },
}

</script>

<template>
    <!-- Top Banner Section -->
    <div class="bg-colDarkGrey">
        <div class="max-w-[920px] mx-auto border flex justify-between items-center text-gray-400 py-2 text-xs">
            <small>We have a 95% Successful Pass Rate!</small>
            <a href="#" class="px-2">
                <font-awesome-icon icon="fa-solid fa-phone-flip" class="inline mx-2" />
                <small> Give us a call to book your tuition! {{ phoneNum }} </small>
            </a>
        </div>
    </div>

    <!-- Hero Section & Nav Menu -->
    <section class="bg-hero-section bg-cover h-[580px]">

        <!-- Nav Banner with Logo and Menu Links -->
        <PageNavMenu :menuItems="menuItems" />

        <!-- Hero MVP -->
        <section class="max-w-[920px] mx-auto border flex flex-col justify-center gap-y-3 text-white h-[484px]">
            <h1 class="text-4xl">Drive with Avada</h1>
            <p>We offer the finest driving tuition money can buy</p>
        </section>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>