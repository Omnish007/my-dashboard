/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#1F2029",
        "secondary-bg": "#7292FC",
        "text-color": "#FFFFFF",
        "text-subtle": "#AAAAAA",
      },
    },
  },
  plugins: [],
}
