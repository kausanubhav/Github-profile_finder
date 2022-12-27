/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./pages/**/*.{js,ts,jsx}",
    "./components/**/*.{js,ts,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),require('tailwind-scrollbar-hide')
  ]
};
