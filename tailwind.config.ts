import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: '#5747EA',
        'desaturated-blue': '#7078C9',
        'dark-blue': '#1C204B',
        'pale-blue': '#BBC0FF',
        'very-dark-blue': '#0E1323',
        'light-orange': '#FF8B64',
        'soft-blue': '#55C2E6',
        'light-red': '#FF5E7D',
        'lime-green': '#4BCF82',
        violet: '#7335D2',
        'soft-yellow': '#F1C75B',
      },
      fontFamily: {
        rubik: ['var(--font-rubik)'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const typographyUtilities = {
        '.text-user-name': {
          fontFamily: 'var(--font-rubik)',
          fontSize: '24px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '28px',
        },
        '.text-report-title': {
          fontFamily: 'var(--font-rubik)',
          fontSize: '15px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '18px',
        },
        '.text-tab': {
          fontFamily: 'var(--font-rubik)',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '21px',
        },
        '.text-card-title': {
          fontFamily: 'var(--font-rubik)',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: '22px',
        },
        '.text-hours': {
          fontFamily: 'var(--font-rubik)',
          fontSize: '32px',
          fontStyle: 'normal',
          fontWeight: '200',
          lineHeight: '38px',
        },
        '.text-previous': {
          fontFamily: 'var(--font-rubik)',
          fontSize: '15px',
          fontStyle: 'normal',
          fontWeight: '300',
          lineHeight: '18px',
        },
      };

      addUtilities(typographyUtilities);
    }),
  ],
};
export default config;
