module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7e": "#0000007e",
          "900_01": "#0d0c0f",
          "900_99": "#00000099",
        },
        red: { 600: "#ce4848", A100: "#ff7777" },
        gray: {
          100: "#f5f5f5",
          200: "#ebebeb",
          300: "#e3e3e3",
          400: "#c5c7cd",
          800: "#4a4a4a",
          900: "#151718",
          "200_7e": "#ebebeb7e",
          "800_01": "#3b3b3b",
          "900_01": "#1e1f23",
          "400_01": "#b5b7b9",
        },
        deep_purple: { 400: "#694bdb" },
        teal: { 500: "#06aa8c", A400: "#2bebc8" },
        blue_gray: { 100: "#d0d0d0", 900: "#252733", "300_42": "#a3abb942" },
        amber: { 200: "#ffdf90", 400: "#f3c522" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { mulish: "Mulish", inter: "Inter" },
      boxShadow: { bs: "0px 2px  2px 0px #a3abb942" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
