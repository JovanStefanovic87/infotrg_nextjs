import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#1f1c17',
        blue: '#00aaff',
        blueLight: '#40c9ff',
        blueLighter: '#76d1ff',
        blueLightest: '#9ddeff',
        blueMain: '#111827',
        grayDarkest: '#1a1a1a',
        grayMedium: '#374151',
        grayLight: '#9c9c9c',
        yellowLighter: 'rgb(254 240 138)',
        hyperlink: '#0000EE',
      },
      height: {
        main: 'calc(100dvh - 68px)',
        content: '10000px',
      },
      maxHeight: {
        main: 'calc(100dvh - 68px)',
        content: '10000px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      margin: {
        header: '68px',
      },
      zIndex: {
        '45': '45',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
export default config;
