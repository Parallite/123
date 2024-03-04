import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          middle: '#72CEC1',
          light: '#C2E8E4'
        },
        orange: {
          dark: '#E88468',
          middle: '#FF7F5D',
          light: '#D4A5B1'
        },
        blue: {
          dark: '#434A75',
          middle: '#40bCE1',
          light: '#B6E5F3'
        },
        purple: {
          middle: '#4849A1',
          dark: '#27295e'
        },
        'white': '#F6F6F6',
        'red': "#E94C89"
      },
      backgroundImage: {
        "bg-gradient":
          "linear-gradient(90deg, #1f243b 0%, #5f6b7e 20%, #8aa1a8 40%, #ebd1cd 60%, #c1a4a6 80%, #9d7b82 100%)",
        // "linear-gradient(90deg, rgba(83,88,120,1) 0%, rgba(157,176,206,1) 20%, rgba(184,216,227,1) 40%, rgba(254,225,221,1) 60%, rgba(233,194,197,1) 80%, rgba(206,160,170,1) 100%)",
        // 'bg-img-1': "url('/img-1.png')",
        // 'bg-img-2': "url('/img-2.png')",
        // 'feature-bg': "url('/feature-bg.png')",
        // pattern: "url('/pattern.png')",
        // 'pattern-2': "url('/pattern-bg.png')",
      },
      // screens: {
      //   xs: '400px',
      //   '3xl': '1680px',
      //   '4xl': '2200px',
      // },
      // maxWidth: {
      //   '10xl': '1512px',
      // },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ],
}
export default config
