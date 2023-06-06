<script>

import HeaderNavMenu from './HeaderNavMenu.vue'

export default {
    name: "PageHeader",
    components: {
        HeaderNavMenu
    },
    props: {
        phoneNum: String,
        menuItems: Array,
        courseList: Array
    },
}

</script>

<template>
    <!-- Top Banner Section -->
    <div class="bg-colDarkGrey">
        <div class="max-w-[920px] mx-auto flex justify-between items-center text-gray-400 py-2 text-xs">
            <small>We have a 95% Successful Pass Rate!</small>
            <a :href="`tel:${phoneNum}`" class="px-2">
                <font-awesome-icon icon="fa-solid fa-phone-flip" class="inline mx-2" />
                <small> Give us a call to book your tuition! {{ phoneNum }} </small>
            </a>
        </div>
    </div>

    <!-- Hero Section -->
    <section class="bg-hero-section bg-cover">

        <!-- Nav Menu Banner -->
        <HeaderNavMenu :menuItems="menuItems" :courseList="courseList" />

        <!-- Hero MVP -->
        <section class="max-w-[920px] mx-auto h-[484px] flex flex-col justify-center gap-y-3 text-white">
            <h1 class="text-4xl font-bold">Drive with Avada</h1>
            <p>We offer the finest driving tuition money can buy</p>
        </section>

    </section>

    <!-- Page Fixed Buttons -->
    <div
        class="h-14	w-14 fixed top-28 right-2 bg-white rounded-md text-black p-2 flex flex-col items-center justify-center cursor-pointer hover:bg-primarySalmon hover:text-white shadow-lg z-20">
        <font-awesome-icon icon="fa-solid fa-window-restore" size="xl" />
        <small class="text-[10px]">Demos</small>
    </div>
    <div
        class="h-14 w-14 fixed top-44 right-2 bg-white rounded-md text-black p-2 flex items-center flex-col justify-center cursor-pointer hover:bg-primarySalmon hover:text-white shadow-lg z-20">
        <span class="text-[#66BC7B] hover:text-white font-bold text-lg"><span class="text-xs align-top">$</span>39</span>
        <small class="text-[10px]">On Sale</small>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>