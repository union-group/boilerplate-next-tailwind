module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#851d86',
        secondary: '#0048fe',
      },
      borderRadius: {
        10: '10px',
      },
    },
  },
  plugins: [],
}
