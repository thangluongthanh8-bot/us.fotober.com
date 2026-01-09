import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const themePlugin = plugin(
  ({ addComponents }) => {
    addComponents({
      '.container-custom': {
        maxWidth: '1140px',
        paddingLeft: '16px',
        paddingRight: '16px',
        '@media (min-width: 1536px)': {
          maxWidth: '1250px',
        },
      },
      '.site-content': {
        overflow: 'hidden',
      },
      '.shadow-button': {
        boxShadow: '0 2px 6px rgb(0 0 0 / 15%)',
      },
      '.itemBox': {
        '&:hover': {
          transform: 'translateY(-3px) !important',
          transition: 'transform .195s ease-in-out',
          boxShadow:
            '0 -12px 24px rgb(0 0 0 / 0%), 0 18px 24px rgb(0 0 0 / 8%), 0 20px 10px rgb(0 0 0 / 20%)',
        },
      },
      '.shadow-button-hover': {
        '&:hover': {
          boxShadow: '0 10px 20px rgb(164 155 136 / 30%)',
          transform: ' translateY(-3px)',
          color: '#2e7dff',
        },
      },
      '.skew-bg-top.skew-bg': {
        '&:before': {
          background: '0 0',
        },
        '&:after': {
          background: 'linear-gradient(76.51deg,#ffa03a 14.45%,#e7edfd 77.68%)',
          top: '-10rem',
        },
      },
      '.text-color-theme': {
        color: '#043263',
      },
      '.skew-bg': {
        position: 'relative',
        zIndex: '100',
        '&:before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          transform: 'skewY(-13deg)',
          top: '5rem',
          zIndex: '-1',
          background: 'linear-gradient(162.9deg,rgba(255,255,255,0) 34.65%,#fff 64.62%)',
          height: '42rem',
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          width: '100%',
          top: '5rem',
          background:
            'linear-gradient(180deg, #ffa03a 0%, #ffcc95 50%, rgba(255, 204, 149, .5) 100%)',
          opacity: '.4',
          transform: 'matrix(1, -.23, 0, .98, 0, 0)',
          height: '42rem',
          zIndex: '-1',
        },
      },
      '.text-align-last-center': {
        textAlignLast: 'center',
      },
    })
  },
  {
    theme: {},
  },
)
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './services/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat-alternates': ['Montserrat Alternates', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#043263',
      },
      fontSize: {
        'theme-default': '17px',
      },
    },
  },
  plugins: [themePlugin],
}
export default config
