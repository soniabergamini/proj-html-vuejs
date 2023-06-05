<script>

export default {
    name: "FooterBanner"
}

</script>

<template>
    <section class="bg-footerDark">
        <div class="max-w-[920px] mx-auto flex justify-between items-center pt-9 pb-2.5">

            <!-- Copyright -->
            <p class="text-xs">
                <font-awesome-icon :icon="['far', 'copyright']" size="xs" class="inline" />
                <span> Copyright 2012 - 2020 | Avada Theme by </span>
                <a href="#" class="text-primarySalmon">ThemeFusion</a>
                <span> | All Rights Reserved | Powered by </span>
                <a href="#" class="text-primarySalmon">WordPress</a>
            </p>

            <!-- Social Icons -->
            <div class="text-white">
                <a href="#">
                    <font-awesome-icon :icon="['fab', 'facebook-f']" class="hover:text-primarySalmon inline px-1.5"
                        size="xs" />
                </a>
                <a href="#">
                    <font-awesome-icon :icon="['fab', 'twitter']" class="hover:text-primarySalmon inline px-1.5"
                        size="xs" />
                </a>
                <a href="#">
                    <font-awesome-icon :icon="['fab', 'youtube']" class="hover:text-primarySalmon inline px-1.5"
                        size="xs" />
                </a>
                <a href="#">
                    <font-awesome-icon :icon="['fab', 'instagram']" class="hover:text-primarySalmon inline px-1.5"
                        size="xs" />
                </a>
            </div>

        </div>

        <!-- Button Up -->
        <div class="text-right px-10 py-1 text-white">
            <a href="headerSec" class="bg-colDarkGrey px-2 py-0.5 hover:bg-primarySalmon hover:scale-125">
                <font-awesome-icon :icon="['fas', 'chevron-up']" size="xs" class="inline" />
            </a>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>