module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in": {
          '0%': { transform: 'translateX(-100vw)' },
          '100%': { transform: 'translateX(0)' },
        },
        "slide-out": {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100vw)' },
        },
      },
      animation: {
        enter: 'slide-in 1s ease-in-out',
        exit: 'slide-out 1s ease-in-out',
      }
    },
  },
  plugins: [],
}