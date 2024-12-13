import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        red: '#f21515',
        green: '#15f26e',
        primary: {
          color01: '#162a41',
          color02: '#fa983a',
          color03: '#a3cb38',
          color04: '#10ac84',
        },
        heading: {
          head01: '#263048',
          head02: '#2a2c30',
        },
        paragraph: {
          para01: '#d5e0ea',
          para02: '#7b7b7b',
          para03: '#333333',
        },
        background: {
          bg01: '#f8f8fb',
          bg02: '#f9fcff',
          bg03: '#25517a',
        },
        shape: {
          shape01: '#d3dee8',
          shape02: '#eef7ff',
          shape03: '#33628d',
        },
        multiply: {
          bg1: '#33485c',
          bg2: '#51789d',
          bg3: '#465f78',
          bg4: '#444444',
          bg5: '#455463',
        },
      },
      fontSize: {
        base: '0.75rem',
        lg: '0.875rem',
        xl: '1rem',
        '2xl': '1.125rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
        '5xl': '1.875rem',
        '6xl': '2.375rem',
        '7xl': '2.875rem',
        '8xl': '3.125rem',
        '9xl': '3.75rem',
        '10xl': '12.5rem',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      borderRadius: {
        'rounded-0': '0rem',
        'rounded-1': '0.25rem',
        'rounded-2': '0.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
