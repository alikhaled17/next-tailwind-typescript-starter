const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00766D",
        secondary: "#818E94",
        tirnary: "#3A567F",
        "secondary-500": "#F8F8F6",
        "secondary-900": "#818E94",
        "primary-500": "#DFEBE8",
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1300px",
      },
    },
  },
  plugins: [],
};
export default config;
