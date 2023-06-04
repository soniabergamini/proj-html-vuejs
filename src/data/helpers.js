export const helpers = {
    getImgPath(img) {
        return new URL(`../assets/images/${img}`, import.meta.url).href;
    }
}