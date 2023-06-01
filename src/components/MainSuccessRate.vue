<script>

export default {
    name: "MainSuccessRate",
    props: {
        succesRate: Array
    }
}

</script>

<template>
    <!-- Courses: Success Rates -->
    <section class="z-20 max-w-[920px] mx-auto flex justify-between gap-x-2 items-start mt-[-100px] text-xs text-center">
        <div v-for="rate in succesRate" class="w-1/3 border-t-primarySalmon border-t-4 rounded-lg bg-white shadow-xl">
            <svg viewBox="0 0 36 36" class="block mx-auto h-44 w-44 my-8">
                <path class="fill-none stroke-terLightGrey stroke-2"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path class="circle fill-none stroke-primarySalmon stroke-2 hover:animate-spin animate-rotate"
                    :stroke-dasharray="`${rate.percentage}, 100`"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <text x="10" y="20.8" class="fill-colGrey text-[8px]">{{ rate.percentage }}%</text>
            </svg>
            <h5 class="font-bold mb-12"> {{ rate.name.toUpperCase() }}</h5>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

.circle {
    stroke-linecap: round;
}
</style>
