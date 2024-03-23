/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "1015px",
      // => @media (min-width: 640px) { ... }

      laptop: "1258px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1657px",
      // => @media (min-width: 1280px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      aspectRatio: {
        "244/300": "244 / 300",
      },
    },
  },
  plugins: [],
  "editor.quickSuggestions": {
    strings: "on",
  },
};
