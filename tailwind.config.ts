import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '972px',
      'lg': '1264px',
    },
    fontSize: {
      "3xl": ["60px", "72px"],
      "2xl": ["40px", "52px"],
      "xl": ["30px", "36px"],
      "lg": ["24px", "32px"],
      "md": ["20px", "28px"],
      "sm": ["16px", "20px"],
      "xs": ["13px", "16px"],
    },
    extend: {
      zIndex: {
        "1": "1",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
