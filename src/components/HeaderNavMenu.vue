<script>

export default {
    name: "HeaderNavMenu",
    props: {
        menuItems: Array
    },
}

</script>

<template>
    <section class="bg-colDarkGrey/[0.6] w-full">
        <nav class="max-w-[920px] mx-auto flex justify-between items-center py-7">

            <!-- Brand Logo -->
            <a href="#">
                <img src="../assets/images/avada-drivers-logo-2x-200x39.png" alt="avada-logo">
            </a>

            <!-- Menu Items -->
            <div class="text-white flex items-center gap-x-8 text-sm font-bold">
                <template v-for="item in menuItems">
                    <a href="#" class="hover:text-primarySalmon hover:border-b-2 border-primarySalmon h-6">{{
                        item.toUpperCase() }}</a>
                </template>
                <button
                    class="bg-primarySalmon border-2 border-primarySalmon py-2 px-4 rounded-full hover:bg-white hover:text-primarySalmon hover:border-primarySalmon">BOOK
                    NOW</button>
            </div>

        </nav>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

div>a:nth-child(4)::after {
    content: 'NEW';
    background-color: $primarySalmon;
    margin-left: .5em;
    vertical-align: top;
    font-size: .6rem;
    padding: 0.2em 0.4em;
    border-radius: 5px;
}
</style>