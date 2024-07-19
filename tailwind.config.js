/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins, sans-serif",
        jakarta: 'Jakarta, sans-serif' // Adds a new `font-poppins` class
      },
      backgroundImage: {
        'custom-gradient' : 'linear-gradient(45deg, #BAC8ff 0%, #546fff 30%, #fff 70%)'
      },
      boxShadow: {
        'thick-gray': '0 4px 8px rgba(0, 0, 0, 0.3)', // Custom shadow with more thickness and gray color
      },
      colors: {
        'custom-purplish-blue': '#546fff',
        'login-button-gray': '#c2c6e8',
        'grayish-list' : '#54577a',
        primary: {
         100: "#546FFF",
          200: "#acc7de",
          300: "#83abcd",
          400: "#5a8ebc",
          500: "#3072ac",
          600: "#064881",
          700: "#053967",
          800: "#042b4e",
          900: "#021d34",
          1000: "#01111f",
        },

        secondary: {
          100: "#FEE7CC",
          200: "#FED6AA",
          300: "#FDC280",
          400: "#FCAE55",
          500: "#FC992B",
          base: "#FB8500",
          600: "#D16F00",
          700: "#A75900",
          800: "#7E4300",
          900: "#542C00",
          1000: "#321B00",
        },
        gray: {
          950: "#1a1a1a", // Custom gray color example
        },

        shades: {
          100: "#D4D4D5",
          200: "#B7B8B9",
          300: "#929495",
          400: "#6E7072",
          500: "#4A4D4F",
          600: "#202225",
          700: "#191B1D",
          800: "#131516",
          900: "#0D0E0F",
          1000: "#080809",
        },

        success: {
          100: "#CFEAD8",
          200: "#AFDCBE",
          300: "#87CB9E",
          400: "#5FBA7E",
          500: "#37A85D",
          600: "#0D7E33",
          700: "#0A6529",
          800: "#084C1F",
          900: "#053214",
          1000: "#031E0C",
        },

        error: {
          100: "#F6D4D2",
          200: "#F1B7B5",
          300: "#E9928F",
          400: "#E26E6A",
          500: "#DB4A45",
          600: "#B1201B",
          700: "#8D1915",
          800: "#6A1310",
          900: "#470D0B",
          1000: "#2A0806",
        },
      },
    },
  },
  boxShadow: {
    "custom-large": "0 10px 20px rgba(0, 0, 0, 0.25)",
    custom:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 -6px 6px -2px rgba(0, 0, 0, 0.05)",
  },
  fontWeight: {
    lighter: "600",
    moreLight: "400",
  },

  variants: {},

  plugins: [],
};
