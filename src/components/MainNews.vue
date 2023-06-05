<script>
import { helpers } from '../data/helpers';

export default {
    name: "MainNews",
    props: {
        news: Array
    },
    data() {
        return {
            helpers,
            newsToShow: 2
        }
    }
}

</script>

<template>
    <section class="bg-news-section bg-cover bg-bottom">
        <div
            class="max-w-[920px] mx-auto border-t-colBlue border-t-4 rounded-t-lg bg-white shadow-3xl relative top-[-50px] text-center pt-14">
            <h2 class="text-3xl mb-4 text-colDarkGrey font-bold">Latest News</h2>

            <!-- News Cards -->
            <div class="flex justify-center gap-8 items-start my-10 mx-10 flex-wrap">
                <template v-for="(article, i) in news">
                    <article v-show="i < newsToShow" class="w-[calc(100%/2-32px)]">
                        <figure>
                            <img :src="helpers.getImgPath(article.img)" alt="blog-news"
                                class="w-[400px] h-[250px] object-cover cursor-pointer">
                        </figure>
                        <div class="w-full px-7">
                            <h4 class="font-bold text-primarySalmon mt-4 text-lg cursor-pointer">{{ article.title }}</h4>
                            <small class="text-xs"> {{ article.date }} | <a href="#" class="text-primarySalmon">{{
                                article.comments }} Comments</a></small>
                            <p class="mt-4 whitespace-nowrap text-ellipsis overflow-hidden cursor-pointer">{{ article.text
                            }}</p>
                        </div>
                    </article>
                </template>
            </div>

            <!-- News Button -->
            <button @click.once="newsToShow += 2" :class="newsToShow >= news.length ? 'invisible' : null"
                class="bg-primarySalmon border-2 border-primarySalmon py-2 px-4 rounded-full hover:bg-white hover:text-primarySalmon hover:border-primarySalmon text-white font-bold text-xs">
                MORE FROM THE BLOG</button>

        </div>

        <!-- Latest News Section: Background Triangle -->
        <svg class="fusion-big-triangle-candy max-w-[920px] mx-auto relative top-[-50px]" xmlns="http://www.w3.org/2000/svg"
            version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none"
            style="fill:#FFFFFF;padding:0;">
            <path d="M-1 -1 L50 99 L101 -1 Z"></path>
        </svg>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/variables.scss' as *;
</style>
