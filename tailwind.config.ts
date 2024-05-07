import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        grey1: "#3E3232",
        grey2: "#503C3C",
        grey3: "#7E6363",
        grey4: "#A87C7C",
        xoxfordblue: "#020227ff",
        xhonolulublue: "#0077b6ff",
        xpacificcyan: "#00b4d8ff",
        xnonphotoblue: "#90e0efff",
        xlightcyan: "#caf0f8ff"
      },
    },
  },
  plugins: [],
};
export default config;
