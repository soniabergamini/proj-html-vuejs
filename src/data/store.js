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
    ],
    courseList: [
        { name: 'Pass Plus', img: 'courses-passplus.jpg' },
        { name: 'Intensive Course', img: 'course-intensive.jpg' },
        { name: 'Instructors', img: 'courses-instructor.jpg' }
    ],
    succesRate: [
        { name: 'Pass Rate', percentage: '95' },
        { name: 'Referral Rate', percentage: '100' },
        { name: 'Accident Rate', percentage: '0' }
    ],
    instructors: [
        { name: 'Mike Hart', img: 'instructor-mikehart-200x127.jpg' },
        { name: 'John Smith', img: 'instructor-johnsmith-200x127.jpg' },
        { name: 'Angela Hart', img: 'instructor-angelahart-200x127.jpg' }
    ],
    testimonials: [
        { name: 'Sophia Jones', img: 'testimonial-sophia.png', bio: 'Avada Driving School really helped my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.' },
        { name: 'Kelly Miller', img: 'testimonial-kelly.png', bio: 'Avada Driving School really helped my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.' },
        { name: 'Kate Smith', img: 'testimonial-kate.png', bio: 'Avada Driving School really helped my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.' },
        { name: 'Harold Garcia', img: 'testimonial-harold.png', bio: 'Avada Driving School really helped my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.' },
        { name: 'Grant Johnson', img: 'testimonial-grant.png', bio: 'Avada Driving School really helped my confidence behind the wheel and with driving in general, and they got me a first time pass! Highly recommended.' },
    ]
});