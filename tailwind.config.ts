export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Vérifie que ce chemin inclut bien tous tes fichiers .tsx
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      fontFamily: {
        special: ["Special Elite", "cursive"], 
      },
    },
  },
  plugins: [require('daisyui')],
};
