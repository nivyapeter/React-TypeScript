module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontSize:{
      'heading-01':['54px',{lineHeight: '62px'}],
    },
    colors: {
      'dark-black' : '#1A1F26',
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}