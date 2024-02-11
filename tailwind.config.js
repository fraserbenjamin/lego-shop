/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#0f62fe",
        "brand-blue-light": "#abd9ff",
        "brand-red": "#ff5630",
        "brand-green": "#36b37e",
        "brand-yellow": "#ffcf00",
        "brand-purple": "#201d48",
        "brand-teal": "#00b8d9",
        "brand-dark": "#172b4d",
        "brand-light": "#f8f8f8",
        "brand-gray": "#42526e",
        "brand-orange": "#fd8024",
        "link-blue": "#006db7",
      },
      fontFamily: {
        "cera-pro": ["Cera Pro", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
