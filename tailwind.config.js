module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.svelte'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'color-teal': '#1abc9c',
        'atom-dark': '#2c3e50', 
        'atom-light-dark': '#34495e'
      },
      fontFamily:{
        // due to an unexplainable reason, the @import rule doesn't work and I had to place the link of google fonts cdn on the index.html file :) 
        handlee: ["'Handlee'", "cursive"]
      },
      height: {
        'nav-after': '3px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
