/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '60px': '60px',
        '258': '258px',
        '294': '294px',
        '271': '271px',
        '593': '593px',
        '94': '94px',
        '758': '758px',
        '511': '511px',
        '355': '355px',
      },
      maxWidth: {
        'base': '1080px',
        'uber': '1338px',
      },
      backgroundImage: {
        'hero-header': "url('../img/header-bg.png')",
      },
      backgroundPosition: {
        "hero": 'center right -10rem'
      },
      fontFamily: {
        'Inter': ['Inter'],
      },
      colors: {
        'brad': {
          '100': '#0C224A',
          '200': '#002B64',
          '300': '#949494',
          '400': '#FAFAFA'
        },
      },
    },
  },
  plugins: [],
}

