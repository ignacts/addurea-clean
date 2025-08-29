/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}/** @type {import('tailwindcss').Config} */
newFunction();

function newFunction() {
  module.exports = {
    content: [],
    theme: {
      extend: {},
    },
    plugins: [],
  };
}

