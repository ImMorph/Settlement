/** @type {import('tailwindcss').Config} */
module.exports = {
    daisyui: {
        themes: ["light"],
    },
  content: [
      "./assets/**/*.{vue,js,ts,jsx,tsx}",
      "./templates/**/*.{html,twig}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
      require("daisyui"),
  ],
}
