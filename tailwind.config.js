/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Adicione isso para que o Tailwind possa aplicar as classes nos arquivos JSX/TSX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
