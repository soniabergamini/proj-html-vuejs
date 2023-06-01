<script>

export default {
    name: "MainInstructors",
    props: {
        instructors: Array
    },
    methods: {
        getImgPath(img) {
            return new URL(`../assets/images/${img}`, import.meta.url).href;
        }
    }
}

</script>

<template>
    <section>
        <div class="max-w-[920px] mx-auto my-12">

            <!-- Instructor Presentation -->
            <div class="flex justify-between gap-x-10 items-center py-5">
                <div class="w-2/3">
                    <h2 class="text-3xl mb-4 text-colDarkGrey font-bold">Your Instructors</h2>
                    <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis hic voluptates
                        fugiat libero, rem at a, nesciunt cupiditate vel veritatis, quod est tenetur.
                    </p>
                </div>
                <div class="w-1/3 text-center">
                    <button
                        class="bg-primarySalmon border-2 border-primarySalmon py-2 w-full rounded-full hover:bg-white hover:text-primarySalmon hover:border-primarySalmon text-white font-bold self-center text-xs">
                        MORE ABOUT US</button>
                </div>
            </div>

            <!-- Instructors Cards -->
            <div id="instructorCards" class="flex justify-between items-start py-7 gap-x-7">
                <div v-for="instructor in instructors"
                    class="w-1/3 border-t-primarySalmon border-t-4 rounded-lg bg-white shadow-xl flex flex-col items-center text-center py-6 px-3">
                    <img :src="getImgPath(instructor.img)" :alt="`${instructor.name}-img`" class="mb-7">
                    <h3 class="font-bold">{{ instructor.name }}</h3>
                    <div class="flex text-xs justify-center items-center gap-x-3 my-3">
                        <a href="#">
                            <font-awesome-icon :icon="['fab', 'facebook-f']"
                                class="text-colGrey hover:text-primarySalmon" />
                        </a>
                        <a href="#">
                            <font-awesome-icon :icon="['fab', 'twitter']" class="text-colGrey hover:text-primarySalmon" />
                        </a>
                        <a href="#">
                            <font-awesome-icon :icon="['fab', 'instagram']" class="text-colGrey hover:text-primarySalmon" />
                        </a>
                    </div>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium quae quod!</small>
                </div>
            </div>

        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

#instructorCards>div:nth-child(2) {
    gap: .33rem;

    img {
        width: 13.2rem;
    }
}
</style>