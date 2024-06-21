import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sfBold: ["SF-Bold", "sans-serif"],
        sfMEd: ["SF-Med", "sans-serif"],
        sfReg: ["SF-Reg", "sans-serif"],
      },
      colors: {
        primary: "#688CEC",
        primaryTransparent: "#688CEC80",
        dark: "#05070C",
        customGray: "#1C1B20",
        customGrayTransparent: "#1C1B2099",
        customGrayLight: "#363636",
        customGrayLightTRansparent: "#71717180",
        transparent: "#221F3599",
        input: "#ECECEC99",
        error: "#df0000",
        success: "#00C620",
      },
    },
  },
  plugins: [],
};
export default config;
