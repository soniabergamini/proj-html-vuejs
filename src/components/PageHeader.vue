<script>

export default {
    name: "PageHeader",
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
            <a href="#">
                <font-awesome-icon icon="fa-solid fa-phone-flip" class="inline mx-2" />
                <small> Give us a call to book your tuition! {{ phoneNum }} </small>
            </a>
        </div>
    </div>

    <!-- Nav Banner with Logo and Menu Links -->
    <section class="h-24 bg-colDarkGrey/[0.6]">
        <nav class="max-w-[920px] mx-auto border flex justify-between items-center py-7">

            <!-- Brand Logo -->
            <a href="#">
                <img src="../assets/images/avada-drivers-logo-2x-200x39.png" alt="avada-logo">
            </a>

            <!-- Menu Items -->
            <div class="text-white flex items-center gap-x-8 text-sm font-bold">
                <template v-for="item in menuItems">
                    <a href="#" class="hover:text-primaryGreen hover:border-b-2 border-primaryGreen h-6">{{
                        item.toUpperCase() }}</a>
                </template>
                <button class="bg-primaryGreen py-2 px-4 rounded-full">BOOK NOW</button>
            </div>

        </nav>

    </section>

    <!-- Hero Section -->
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>