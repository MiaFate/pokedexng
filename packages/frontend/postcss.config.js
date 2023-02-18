// ./postcss.config.js file at nxRoot

const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
    require('postcss-import'),
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
  ],
}
