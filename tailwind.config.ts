import type { Config } from "tailwindcss";
// import flowbite from "flowbite-react/tailwind";

import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      xl: "1312px",
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(40deg, #000D88 -24.29%, #000E8E 18.78%, #000960 59.93%, #000 104.82%)",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        main: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: "#1a64f0",
        secondary: "#ffb258",
        secondary2: "#00bcd4",

        neutral1: "#111111",
        neutral2: "#333333",
        neutral3: "#7d7d7d",
        neutral4: "#d0d0d2",
        neutral5: "#ededed", // Wrong neutral5
        neutral55: "#f6f6f6",
        neutral6: "#ffffff",
        neutral7: "#edeef1",

        blueLight: "#f4f9ff",
        blueLight2: "#f0f7ff",
      },
      fontSize: {
        xxl: "1.75rem",
      },
      lineHeight: {
        "1": "1",
        "1.5": "1.5",
        "1.94": "1.94",
      },
      spacing: {
        15: "3.75rem",
        18: "4.5rem",
        30: "7.5rem",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-radix")({ variantPrefix: "" }),
    require("flowbite/plugin"),
  ],
};
export default config;
