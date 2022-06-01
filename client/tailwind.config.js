module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('daisyui')],
  daisyui: {
    styled: true,
    themes: [
      {
        winter: {
          ...require('daisyui/src/colors/themes')['[data-theme=winter]'],
          warning: '#548CA8',
        },
        dracula: {
          ...require('daisyui/src/colors/themes')['[data-theme=dracula]'],
          primary: '#f6f8fa',
        },
      },
    ],

    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dracula',
  },
};
