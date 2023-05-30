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
    <section class="bg-hero-section bg-cover h-[580px] relative">

        <!-- Nav Banner with Logo and Menu Links -->
        <PageNavMenu :menuItems="menuItems" />

        <!-- Hero MVP & CTA Buttons -->
        <section class="max-w-[920px] mx-auto border flex flex-col justify-center gap-y-3 text-white h-[484px]">

            <!-- MVP -->
            <h1 class="text-4xl">Drive with Avada</h1>
            <p>We offer the finest driving tuition money can buy</p>

            <!-- CTA -->
            <div
                class="h-14	w-14 absolute top-20 right-2 bg-white rounded-md text-black p-2 flex flex-col items-center justify-center cursor-pointer">
                <font-awesome-icon icon="fa-solid fa-window-restore" size="xl" />
                <small class="text-[10px]">Demos</small>
            </div>
            <div
                class="h-14 w-14 absolute top-36 right-2 bg-white rounded-md text-black p-2 flex items-center flex-col justify-center cursor-pointer">
                <span class="text-[#66BC7B] font-bold text-lg"><span class="text-xs align-top">$</span>39</span>
                <small class="text-[10px]">On Sale</small>
            </div>

        </section>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>