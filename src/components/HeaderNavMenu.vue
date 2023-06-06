<script>

export default {
    name: "HeaderNavMenu",
    props: {
        menuItems: Array,
        courseList: Array
    },
    data() {
        return {
            showMenu: false
        }
    }
}

</script>

<template>
    <section class="bg-colDarkGrey/[0.6] w-full">
        <nav class="max-w-[920px] mx-auto flex justify-between items-center py-7">

            <!-- Brand Logo -->
            <a href="#">
                <img src="../assets/images/avada-drivers-logo-2x-200x39.png" alt="avada-logo">
            </a>

            <!-- Menu Items (basic solution)-->
            <!-- <div class="text-white flex items-center gap-x-8 text-sm font-bold"> -->
            <!--    <template v-for="item in menuItems"> -->
            <!--        <a href="#" class="hover:text-primarySalmon hover:border-b-2 border-primarySalmon h-6">{{ item.toUpperCase() }}</a> -->
            <!--    </template> -->
            <!--    <button class="bg-primarySalmon border-2 border-primarySalmon py-2 px-4 rounded-full hover:bg-white hover:text-primarySalmon hover:border-primarySalmon">BOOK NOW</button> -->
            <!-- </div> -->

            <!-- Menu Items (dropdown solution)-->
            <div class="text-white flex items-center gap-x-8 text-sm font-bold">
                <a href="#" class="hover:text-primarySalmon hover:border-b-2 border-primarySalmon h-6">HOME</a>
                <a href="#" class="hover:text-primarySalmon hover:border-b-2 border-primarySalmon h-6">ABOUT</a>
                <a href="#" class="hover:text-primarySalmon hover:border-b-2 border-primarySalmon h-6">PRICES</a>

                <!-- Courses Dropdown Menu -->
                <div id="navCourseDrop" class="relative">
                    <button @click="showMenu = !showMenu"
                        class="hover:text-primarySalmon hover:border-b-2 focus:text-primarySalmon focus:border-b-2 border-primarySalmon h-6">
                        COURSES <font-awesome-icon :icon="['fas', 'chevron-down']" size="xs" class="inline" />
                    </button>
                    <div v-show="showMenu" class="bg-white text-colGrey text-xs font-normal w-full absolute z-50">
                        <a v-for="item in courseList" @click="showMenu = !showMenu" href="#coursesSec"
                            class="py-2 px-1 hover:bg-primarySalmon hover:text-white block">{{ item.name }}</a>
                    </div>
                </div>

                <a href="#" class="hover:text-primarySalmon hover:border-b-2 border-primarySalmon h-6">LOCATIONS</a>
                <a href="#" class="hover:text-primarySalmon hover:border-b-2 border-primarySalmon h-6">BLOG</a>
                <a href="#coursesSec"
                    class="bg-primarySalmon border-2 border-primarySalmon py-2 px-4 rounded-full hover:bg-white hover:text-primarySalmon hover:border-primarySalmon">
                    BOOK NOW</a>
            </div>

        </nav>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

// div>*:nth-child(4)::after,
#navCourseDrop>button::after {
    content: 'NEW';
    background-color: $primarySalmon;
    margin-left: .5em;
    vertical-align: top;
    font-size: .6rem;
    padding: 0.2em 0.4em;
    border-radius: 5px;
    color: white;
}
</style>