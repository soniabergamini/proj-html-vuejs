<script>

export default {
    name: "MainNewsletter"
}

</script>

<template>
    <section class="bg-newsletter-section bg-cover py-7 flex justify-center items-center">
        <div class="max-w-[920px] mx-auto text-center py-6">
            <h3 class="text-colDarkGrey text-2xl font-bold">Sign up to our Newsletter</h3>
            <form class="flex flex-col items-center mb-5">
                <input type="email" name="FormNewsletter" id="FormNewsletter"
                    class="border border-terLightGrey w-full py-2 px-3 mt-7 mb-5">
                <button type="submit"
                    class="bg-primarySalmon border-2 border-primarySalmon py-2 px-4 rounded-full hover:bg-white hover:text-primarySalmon hover:border-primarySalmon text-white font-bold text-xs w-full">SUBSCRIBE</button>
            </form>
            <small class="text-xs px-5">(We do not share your data with anybody, and only use it for its intended
                purpose)</small>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>