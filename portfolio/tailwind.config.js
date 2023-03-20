module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Orbitron',
    },
    container: {
      padding: {
        DEFAULT: '20px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#799F0C',
      },
      backgroundImage: {
        site: "url('./assets/site-bgg.png')",
        about: "url('./assets/Logo2.png')",
      },
    },
  },
  plugins: [],
};
