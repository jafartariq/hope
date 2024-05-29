/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
'hero-pattern': "url('./../src/img/bg.jpg')",
'hero-pattern2': "url('./../src/img/bg2.jpg')",
'hero-pattern3': "url('./../src/img/1-contact.jpg')",
'hero-pattern4': "url('./../src/img/1-about.jpg')",
'hero-pattern5': "url('./../src/img/1-services.jpg')",
'hero-pattern6': "url('./../src/img/2-services.jpg')"

      }
    },
  },
  plugins: [],
}

