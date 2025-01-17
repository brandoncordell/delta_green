/** @type {import('tailwindcss').Config} */
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

