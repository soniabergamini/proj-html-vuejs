import { reactive } from 'vue'

export const store = reactive({
    loading: true,
    phoneNumber: "1-800-555-555",
    menuItems: [
        "home",
        "about",
        "prices",
        "courses",
        "locations",
        "blog"
    ]
});