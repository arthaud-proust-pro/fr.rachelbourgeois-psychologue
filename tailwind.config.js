module.exports = {
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        calypso: {
          '50': '#edfdfe',
          '100': '#d2f7fb',
          '200': '#abeef6',
          '300': '#72e0ee',
          '400': '#31c8df',
          '500': '#15abc5',
          '600': '#1589a5',
          '700': '#176c83',
          '800': '#1c5a6e',
          '900': '#1c4b5d',
          '950': '#0c3140',
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '12rem',
      },
    },
  },
  plugins: []
}
