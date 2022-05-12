module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
          // info: '#79C0FF',
          // primary: '#334257',
          // secondary: '#548CA8',
          // 'base-100': '#FFFFFF',
          // 'base-300': '#FBFBFB',
          // neutral: '#222831',
          // info: '#dc6972',
          // success: '#538e65',
          // 'neutral-content': '#dc6972',
        },
        business: {
          ...require('daisyui/src/colors/themes')['[data-theme=business]'],
          // neutral: '#eeeeee',
          // ,
          // success: '#7BC284',
          // secondary: '#79C0FF',
          primary: '#f6f8fa',
          // 'neutral-content': '#dc6972',
          // 'base-100': '#0d1118',
          // 'base-300': '#161c22',
        },
      },
    ],

    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
  },
};
