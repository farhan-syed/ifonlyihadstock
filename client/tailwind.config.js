module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        xs: '380px'
      },
      fontFamily : {
        main: ['Nunito']
      },
      colors: {
        'twitter-blue': '#1da1f2',
        'dark': '#181818',
        'dark-menu': '#121212',
        'dark-hover': '#3D3D3D',
        'dark-p': '#FFFFFF',
        'dark-s': '#AAAAAA'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
