/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
        xs: "360px",
        sm: "480px",
        base: "680px",
        md: "800px",
        lg: "1076px",
        xl: "1440px",
    },
    extend: {
        colors: {
            purple_100: '#fff',
            purple_500: '#676cff',
            purple_600: '#663dff',
            purple_700: '#913bc2',
            purple_800: '#b32aee',
            black_50: '#E6E6E6',
            black_100: '#B0B0B0',
            black_500: '#666A72',
            black_800: '#1A202C',
            black_900: '#000000',
        },

        fontSize: {
            xxs: "",
            xs: "0.625rem", //10px
            s: "0.75rem", //12px
            sm: "0.875rem", //14px
            base: "1rem", //16px
            md: "1.125rem", //18px
            lg: "1.25rem", //20px
            xl: "1.5rem", //24px
            xxl: "2rem", //32px
            xxxl: "3rem", //32px
        },
    },
},
  plugins: [],
};
