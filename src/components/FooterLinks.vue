<script>
export default {
    name: "FooterLinks",
    props: {
        phoneNum: String,
        address: String,
        email: String,
        website: String,
        courseList: Array
    }
}

</script>

<template>
    <section class="bg-cover py-5">
        <div class="max-w-[920px] mx-auto flex justify-between py-10 text-xs">

            <!-- Logo & About  -->
            <div class="w-[calc(100%/4-10px)]">
                <img src="src/assets/images/avada-drivers-logo-2x-200x39.png" alt="avada-logo">
                <p class="text-colGrey mt-3">Avada Driving School is the right choice for experienced drivers lookinf for a
                    refresher
                    course, or the brand new driver wanting to pass fort time.</p>
            </div>

            <!-- Contact Details -->
            <div class="w-[calc(100%/4-10px)] px-3">
                <h4 class="font-bold text-sm tracking-[2px]">CONTACT DETAILS</h4>
                <ul class="text-colGrey">
                    <li class="hover:text-primarySalmon my-3">
                        <a href="#" class="flex">
                            <font-awesome-icon :icon="['fas', 'house-chimney']" size="sm"
                                class="inline mx-2 self-center text-white" />
                            <span>{{ address }} </span>
                        </a>
                    </li>
                    <li class="hover:text-primarySalmon my-3">
                        <a :href="`tel:${phoneNum}`">
                            <font-awesome-icon :icon="['fas', 'phone-flip']" size="sm" class="inline mx-2 text-white" />{{
                                phoneNum }}
                        </a>
                    </li>
                    <li class="hover:text-primarySalmon my-3">
                        <a :href="`mailto:${email}`">
                            <font-awesome-icon :icon="['far', 'envelope']" size="sm" class="inline mx-2 text-white" />{{
                                email }}
                        </a>
                    </li>
                    <li class="hover:text-primarySalmon my-3">
                        <a :href="`https://${website}`">
                            <font-awesome-icon :icon="['fas', 'link']" size="sm" class="inline mx-2 text-white" />{{ website
                            }}
                        </a>
                    </li>
                </ul>
            </div>

            <!-- All Courses -->
            <div class="w-[calc(100%/4-10px)] text-sm">
                <h4 class="font-bold tracking-[2px]">COURSES</h4>
                <ul>
                    <li class="text-primarySalmon my-3" v-for="item in courseList">
                        <a href="#coursesSec" class="hover:text-colGrey">
                            <font-awesome-icon :icon="['far', 'circle-right']" class="inline mx-2" />{{ item.name }}
                        </a>
                    </li>
                    <li class="text-primarySalmon my-3">
                        <a href="#coursesSec" class="hover:text-colGrey">
                            <font-awesome-icon :icon="['far', 'circle-right']" class="inline mx-2" />Automatic
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Benefits -->
            <div class="w-[calc(100%/4-10px)] flex flex-col items-center gap-y-4 text-white">
                <img src="../assets/images/footer-ad-grid-200x178.png" alt="benefits-img">
                <a href="#coursesSec"
                    class="font-bold bg-primarySalmon border-2 border-primarySalmon py-2 px-4 rounded-full hover:bg-white hover:text-primarySalmon hover:border-primarySalmon w-[50%]">
                    BOOK NOW</a>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

section {
    background-image: url('../assets/images/footer-background-color.jpg');
}
</style>