module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      //'sans': ['ui-sans-serif', 'system-ui', ...],
      //'serif': ['ui-serif', 'Georgia', ...],
      //'mono': ['ui-monospace', 'SFMono-Regular', ...],
      //'display': ['Oswald', ...],
      'body': ['"Montserrat"', 'Arial', 'Helvetica', 'sans-serif'],
     },
    
  
    
    extend: {
      screens: {
        'xs': '400px',
      },
      boxShadow: (theme) => ({
        underline: 'inset 0 -.3em 0 0 gray',
        'underline-yellow': 'inset 0 -.3em 0 0 ' + theme('colors.yellow.DEFAULT'),
        'underline-purple': 'inset 0 -.3em 0 0 ' + theme('colors.purple.light'),
        'underline-orange': 'inset 0 -.3em 0 0 ' + theme('colors.orange.light'),
        }),
      colors: {
        'orange': {
          dark: '#9c5b00',
          DEFAULT: '#fd9300',
          light: '#ffb959',
        },
        'orangered': {
          DEFAULT: '#ee3724',
          light: '#f06a53',
        },
        'red': {
          DEFAULT: '#e41d37',
          light: '#e74273',
          dark: '#c52035',
        },
        'purple': {
          DEFAULT: '#c6338a',
          light: '#d875ac',
        },
        'yellow': {
          DEFAULT: '#f1be45',
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#666',
            strong: {
              fontWeight: '800',
            },
            // ...
          },
        },
        'blog': {
          css: {
            //fontSize: '1rem',
            h1: {
              //fontSize: '5em',
            },
            h2: {
              //fontSize: '4em',
            },
            h3: {
              //fontSize: '2.5em',
            },
            h4: {
              //fontSize: '1em',
            },
            h5: {
              //fontSize: '0.5em',
            },
            blockquote: {
              border: '1px solid red',
            },
            '.byline': {
              color: theme('colors.orange.dark'),
            },
            '.byline time': { 
              fontWeight: 'bold'
            },
            '.byline .author': {
              fontStyle: 'italic',
            },
            '.byline .position': {
              fontStyle: 'italic',
            },

          },
        },
      }),
    },
  },
  variants: {
    aspectRatio: ['responsive', 'hover'],
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    //require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
