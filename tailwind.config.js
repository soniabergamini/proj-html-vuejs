/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#7ABC64',
        secWhite: '#FFFFFF',
        terLightGrey: '#F6F6F6',
        colDarkGrey: '#494C4E',
        colGrey: '#929AA3'
      },
      backgroundImage: {
        'hero-section': "url('../assets/images/homepage-hero-background.jpg')",
        'cta-banner': "url('../assets/images/horizontal-cta-background.jpg')"
      },
      fontFamily: {
        'nunito-sans': 'Nunito Sans, sans-serif'
      }
    },
  },
  plugins: [],
}
