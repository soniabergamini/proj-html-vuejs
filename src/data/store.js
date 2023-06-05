import { reactive } from 'vue'

export const store = reactive({
    loading: true,

    // Avada Contact Details
    phoneNumber: "1-800-555-555",
    address: "12345 North Moin Street, New York, NY 555555",
    email: "info@avada.com",
    website: "Theme-Fusion.com",

    // Menu Items 
    menuItems: [
        "home",
        "about",
        "prices",
        "courses",
        "locations",
        "blog"
    ],

    // Courses List
    courseList: [
        { name: 'Pass Plus', img: 'courses-passplus.jpg' },
        { name: 'Intensive Course', img: 'course-intensive.jpg' },
        { name: 'Instructors', img: 'courses-instructor.jpg' }
    ],

    // Avada Success Rates
    succesRate: [
        { name: 'Pass Rate', percentage: '95' },
        { name: 'Referral Rate', percentage: '100' },
        { name: 'Accident Rate', percentage: '0' }
    ],

    // Instructors Details
    instructors: [
        { name: 'Mike Hart', img: 'instructor-mikehart-200x127.jpg' },
        { name: 'John Smith', img: 'instructor-johnsmith-200x127.jpg' },
        { name: 'Angela Hart', img: 'instructor-angelahart-200x127.jpg' }
    ],

    // Testimonials Details
    testimonials: [
        { name: 'Sophia Jones', img: 'testimonial-sophia.png', bio: 'Avada Driving School really helped my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.' },
        { name: 'Kelly Miller', img: 'testimonial-kelly.png', bio: 'Avada Driving School really helped my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.' },
        { name: 'Kate Smith', img: 'testimonial-kate.png', bio: 'Avada Driving School really helped my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.' },
        { name: 'Harold Garcia', img: 'testimonial-harold.png', bio: 'Avada Driving School really helped my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.' },
        { name: 'Grant Johnson', img: 'testimonial-grant.png', bio: 'Avada Driving School really helped my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.' },
    ],

    // Latest News List & Contents
    news: [
        {
            title: "What Car to Start With?",
            date: "February 7th, 2019",
            comments: 0,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero excepturi, repellendus laborum ab nihil dolore earum deserunt nisi dicta? Facilis cumque, illo at omnis nulla in ipsum esse nesciunt.",
            img: "blog-choosecar-320x202.jpg"
        },
        {
            title: "Avada Driving School Expanding",
            date: "April 14th, 2019",
            comments: 0,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero excepturi, repellendus laborum ab nihil dolore earum deserunt nisi dicta? Facilis cumque, illo at omnis nulla in ipsum esse nesciunt.",
            img: "blogpost-10and2-320x202.jpg"
        },
        {
            title: "Basic Car Maintenance",
            date: "October 24th, 2018",
            comments: 1,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero excepturi, repellendus laborum ab nihil dolore earum deserunt nisi dicta? Facilis cumque, illo at omnis nulla in ipsum esse nesciunt.",
            img: "courses-instructor.jpg"
        },
        {
            title: "Excellence of Avada Driving School",
            date: "Novembre 26th, 2018",
            comments: 0,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga libero excepturi, repellendus laborum ab nihil dolore earum deserunt nisi dicta? Facilis cumque, illo at omnis nulla in ipsum esse nesciunt.",
            img: "driving_preview.jpg"
        }
    ]
});