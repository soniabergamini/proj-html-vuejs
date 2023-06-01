<script>

export default {
    name: "MainForm"
}

</script>

<template>
    <section>
        <div class="max-w-[920px] mx-auto flex justify-between gap-x-7 items-start pb-16">

            <!-- Text -->
            <div class="w-1/2 self-center">
                <h2 class="text-3xl mb-4 text-colDarkGrey font-bold">Get Behind The Wheel</h2>
                <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis hic voluptates fugiat
                    libero, rem at
                    a,
                    nesciunt cupiditate vel veritatis, quod est tenetur. Asperiores saepe aut, nisi sapiente alias dicta.
                </p>
                <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis hic voluptates fugiat libero,
                    rem at
                    a, nesciunt cupiditate vel veritatis, quod est tenetur. Asperiores saepe aut, nisi sapiente alias dicta.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis hic voluptates fugiat libero, rem
                    at a,
                    nesciunt cupiditate vel veritatis, quod est tenetur. Asperiores saepe aut, nisi sapiente alias
                    dicta.</small>
            </div>

            <!-- Form -->
            <div class="w-1/2 p-8 rounded-xl mt-[-42px] z-10 bg-white shadow-xl">
                <h3 class="text-primarySalmon text-2xl text-center mb-8 font-bold">First Lesson Free!</h3>
                <small class="mb-7 block px-3"> When you make a block booking with us your first lesson is
                    included
                    free.</small>
                <form action="#" class="text-xs flex flex-col gap-y-6 justify-center">
                    <div class="relative">
                        <input class="border bg-terLightGrey p-3 w-full" type="text" name="formName" id="formName"
                            placeholder="Your Name*" required>
                        <img src="../assets/images/image.png" alt="input-icon" class="absolute top-[35%] right-1">
                    </div>
                    <input class="border bg-terLightGrey p-3" type="email" name="formEmail" id="formEmail"
                        placeholder="Email*" required>
                    <input class="border bg-terLightGrey p-3" type="tel" name="formPhone" id="formPhone"
                        placeholder="Telephone" pattern="[0-9]{10}">
                    <input class="border bg-terLightGrey p-3" type="text" name="formLocation" id="formLocation"
                        placeholder="Location">
                    <button type="submit"
                        class="bg-primarySalmon border-2 border-primarySalmon py-2 px-4 rounded-full hover:bg-white hover:text-primarySalmon hover:border-primarySalmon text-white font-bold self-center">REQUEST
                        A CALLBACK</button>
                </form>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>