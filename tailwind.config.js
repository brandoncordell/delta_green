/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/views/**/*.{html,html.erb,erb}',
    './app/frontend/components/**/*.{js,vue}',
    './app/frontend/pages/**/*.{js,vue}',
  ],

  theme: {
    extend: {
      colors: {
        'dg-green': {
          DEFAULT: '#009859',
          50: '#ebfef3',
          100: '#d0fbe1',
          200: '#a4f6c7',
          300: '#6aebab',
          400: '#2fd888',
          500: '#0abf70',
          600: '#009859',
          700: '#007c4c',
          800: '#03623d',
          900: '#045034',
          950: '#012d1e'
        },

        smoke: '#231f20'
      },

      fontFamily: {
        sans: [
          '"Inter", sans-serif',
          {
            fontFeatureSettings: '"liga" 1, "calt" 1',
            fontVariationSettings: '"slnt" 0'
          }
        ],
        serif: ['Courier Prime', ...defaultTheme.fontFamily.serif]
      }
    },
  },

  corePlugins: {
    aspectRatio: false,
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

