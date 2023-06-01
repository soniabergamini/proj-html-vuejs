<script>

export default {
    name: "MainCTABanner",
    props: {
        phoneNum: String
    }
}

</script>

<template>
    <section class="bg-cta-banner bg-cover text-white">
        <div class="max-w-[920px] mx-auto flex justify-between items-center py-14">
            <div class="w-1/2">
                <h2 class="text-3xl mb-2 font-bold">Start Learning To Drive Today</h2>
                <p>Give us a call to schedule your first driving lesson</p>
            </div>
            <div class="text-center w-1/2">
                <a :href="`tel:${phoneNum}`" class="text-lg">
                    <font-awesome-icon icon="fa-solid fa-phone-flip" class="inline mr-4" />{{ phoneNum }}
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>