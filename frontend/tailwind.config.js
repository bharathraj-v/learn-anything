/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    scrollRestoration: true,
  },
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      },
      fontSize: {

        sm: '0.72rem',
        md: '0.9rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.863rem',
        '3xl': '2.15rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '6xl': '3.815rem',
        '7xl': '4.768rem',
        '8xl': '5.96rem',
      },

      width: {
        '76': '19rem',
        '80': '20rem',
        "86": "21.5rem",
        '96': '24rem',
      },
      spacing: {
        '18': '4.3rem',
        '24': '6rem',
        '63': '15.75rem',
        '108': '27rem',
        '128': '32rem',
        '132': '33rem',
        '144': '36rem',
        '162': '50.5rem',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '1': '1px',
        '2': '1.5px',
        '3': '2.5px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '12': '12px',
        "14": "14px",
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '24': '24px',
        '26': '26px',
        '28': '28px',
        '30': '30px',
      },
      height: {
        '104': '39rem',
        '108': '40rem',
        '132': '44rem',
      },
      dropShadow: {
        '10xl': '0 0 0 10px rgba(0, 0, 0, 0.25)',
      },
      opacity: {
        '92': '.92',
      },
      scale: {
        '200': '2.0',
      },
      animation: {
        fade: 'fadeOut 0.5s ease-in-out',
      },
      borderRadius: {
        'lg': '0.5rem',
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '3.5rem',
        '7xl': '4rem',
        '8xl': '4.5rem',
        '9xl': '5rem',
        '10xl': '5.5rem',
      },
      boxShadow: {
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'inner-md': 'inset 0 4px 6px -1px rgba(0, 0, 0, 0.1), inset 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'inner-lg': 'inset 0 6px 12px -1px rgba(0, 0, 0, 0.1), inset 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'inner-xl': 'inset 0 8px 16px -1px rgba(0, 0, 0, 0.1), inset 0 6px 12px -2px rgba(0, 0, 0, 0.05)',
        'inner-2xl': 'inset 0 12px 24px -1px rgba(0, 0, 0, 0.1), inset 0 8px 16px -2px rgba(0, 0, 0, 0.05)',
        'inner-3xl': 'inset 0 16px 32px -1px rgba(0, 0, 0, 0.1), inset 0 12px 24px -2px rgba(0, 0, 0, 0.05)',
        'inner-4xl': 'inset 0 24px 48px -1px rgba(0, 0, 0, 0.1), inset 0 16px 32px -2px rgba(0, 0, 0, 0.05)',
      },

      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0},
        },
      }),
    },
  },
  plugins: [],
}