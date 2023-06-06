<script>

export default {
    name: "MainPriceTable",
    props: {
        courseList: Array,
        phoneNum: String,
        showPriceTable: Boolean
    }
}

</script>

<template>
    <section id="priceTable" v-show="showPriceTable" class="flex flex-col items-center pb-20 mt-[-50px]">
        <h2 class="w-[80%] border-b-2 border-b-primarySalmon text-3xl pb-2 text-colDarkGrey font-bold">Pricing</h2>
        <div class="w-[80%] flex gap-x-3">

            <!-- Courses Cards -->
            <div v-for="(item, i) in courseList"
                class="border-t-2 rounded-lg shadow-xl my-8 p-3 border-primarySalmon relative text-center bg-testimonials-section bg-cover bg-top">

                <!-- Details -->
                <h3 class="font-bold text-primarySalmon text-2xl">{{ item.name }}</h3>
                <p class="text-xs mt-4 mb-2">{{ item.details }} </p>
                <h2 class="text-3xl text-primarySalmon font-bold">$ {{ item.price }},00</h2>
                <p class="text-xs mt-2 mb-5">*Alias laborum, obcaecati vero magnam rem tenetur.</p>

                <!-- CTA: Buy/Contact -->
                <button v-if="i < courseList.length - 1"
                    class="border-2 border-primarySalmon py-1 px-3 bg-primarySalmon rounded-full hover:bg-white hover:text-primarySalmon font-bold text-sm text-white hover:animate-bounce">
                    <font-awesome-icon :icon="['fab', 'shopify']" size="sm" class="inline mr-1" />
                    BUY NOW
                </button>
                <a v-else :href="`tel:${phoneNum}`"
                    class="border-2 border-primarySalmon py-1 px-3 bg-primarySalmon rounded-full hover:bg-white hover:text-primarySalmon font-bold text-sm text-white">
                    <font-awesome-icon :icon="['fas', 'phone-flip']" size="sm" class="inline mr-1" />
                    CONTACT US
                </a>

            </div>
        </div>

        <!-- Additional Purchase Info -->
        <div class="w-[80%] text-center">
            <p class="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis hic voluptates
                fugiat libero. <br> Illo atque vero quod, adipisci quia a ea nobis inventore necessitatibus! Harum,
                adipisci laudantium.
            </p>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;

#priceTable>div>div:nth-child(2) {
    box-shadow: 0 5px 30px 5px rgba(0, 0, 0, 0.6);
    border-color: $colGreen;
    max-width: 40%;
    background-image: none;

    &>h3 {
        color: $colGreen;
    }

    // Add triangle left label on second Course Card
    &::after {
        content: '🥇';
        writing-mode: vertical-lr;
        text-align: start;
        position: absolute;
        top: -2px;
        left: 0;
        font-size: 1.6rem;
        background-color: $colGreen;
        z-index: 999;
        color: white;
        width: 3.5rem;
        height: 3.5rem;
        border-top-left-radius: 5px;
        clip-path: polygon(0 0, 0 100%, 100% 0);
    }
}
</style>
