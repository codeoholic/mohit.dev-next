const colors = require("tailwindcss/colors")
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [{
    pattern: /hljs+/,
  }],
  theme: {
    extend: {},
    colors: {
      purple: colors.purple,
      slate: colors.slate,
    },
    hljs: {
      theme: 'night-owl',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-highlightjs')
  ],
}
