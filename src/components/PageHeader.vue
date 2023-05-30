<script>

export default {
    name: "PageHeader",
    props: {
        phoneNum: String
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

    <!-- Nav Banner with Logo and Links -->
    <!-- Hero Section -->
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>