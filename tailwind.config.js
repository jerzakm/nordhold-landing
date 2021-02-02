module.exports = {
  theme: {
    extend: {
      colors: {
        royalblue: {
          '50':  '#f6fbfd',
          '100': '#e7f7fd',
          '200': '#c4e7fb',
          '300': '#9ccffb',
          '400': '#66a4fb',
          '500': '#3575fa',
          '600': '#1654f0',
          '700': '#1f40df',
          '800': '#1931ad',
          '900': '#152885',
        },
        lightblue: {
          '50':  '#f1fafb',
          '100': '#dcf7f9',
          '200': '#b0edf4',
          '300': '#7bdfef',
          '400': '#36c4e8',
          '500': '#14a2de',
          '600': '#1080ca',
          '700': '#1465a5',
          '800': '#144e79',
          '900': '#123f5e',
        },
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... },

      'xxl': '1600px'
      // => @media (min-width: 1600px) { ... },
    }
  },

  variants: {},
}