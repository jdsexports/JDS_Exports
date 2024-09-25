/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Make sure this is correctly pointing to your files
  theme: {
    extend: {
      textStrokeWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
      },

      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        brown50: "#fdf7f1",
        brown100: "#f9e7d5",
        brown200: "#f6dbc0",
        brown300: "#f2cba3",
        brown400: "#f0c191",
        brown500: "#ecb176",
        brown600: "#d7a16b",
        brown700: "#a87e54",
        brown800: "#826141",
        brown900: "#634a32",
      },
    },
    container: {
      center: true,
    },
  },

  plugins: [
    function ({ addUtilities, theme }) {
      const strokeWidths = theme("textStrokeWidth");
      const colors = theme("colors");

      const newUtilities = Object.entries(strokeWidths).reduce(
        (acc, [key, width]) => {
          Object.entries(colors).forEach(([colorKey, colorValue]) => {
            acc[`.text-stroke-${key}-${colorKey}`] = {
              "-webkit-text-stroke-width": width,
              "-webkit-text-stroke-color": colorValue,
            };
          });
          return acc;
        },
        {}
      );

      addUtilities(newUtilities);
    },
  ],
};
