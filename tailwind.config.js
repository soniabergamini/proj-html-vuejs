/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarySalmon: '#EC7357',
        // primaryGreen: '#7ABC64',
        secWhite: '#FFFFFF',
        terLightGrey: '#F6F6F6',
        colDarkGrey: '#494C4E',
        colGrey: '#929AA3',
        colBlue: '#7799AD'
      },
      backgroundImage: {
        'hero-section': "url('../assets/images/homepage-hero-background.jpg')",
        'cta-banner': "url('../assets/images/horizontal-cta-background.jpg')",
        'courses-section': "url('../assets/images/promise-background.jpg')",
        'testimonials-section': "url('../assets/images/testimonial-background.jpg')",
        'news-section': "url('../assets/images/latestnews-background.jpg')"
      },
      fontFamily: {
        'nunito-sans': 'Nunito Sans, sans-serif'
      },
      keyframes: {
        progress: {
          '0%': { 'stroke-dasharray': '0 100' },
        }
      },
      animation: {
        rotate: 'progress 1s ease-out forwards'
      },
      boxShadow: {
        '3xl': '0 40px 50px -10px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}