/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: { 
      'xs': '320px',
      'sm': '375px',
      'mdd': '768',
      'md': '1024px',
      'lg': '1440px'
    },
    extend: {
      colors: {
        "red": "hsl(7, 99%, 70%)",
        "yellow": "hsl(51, 100%, 49%)",
        "darkSaturatedCyan": "hsl(168, 34%, 41%)", // graphic design text
        "darkBlue": "hsl(198, 62%, 26%)", //photography text
        "darkModerateCyan": "hsl(168, 34%, 41%)", //footer
        "darkDesaturatedBlue": "hsl(212, 27%, 19%)",
        "veryDarkGrayishBlue": "hsl(213, 9%, 39%)",
        "darkGrayishBlue": "hsl(232, 10%, 55%)",
        "grayishBlue": "hsl(210, 4%, 67%)",
        "white": "hsl(0, 0%, 100%)"
      },
      fontFamily: { 
        fraunces: "Fraunces, sans",
        barlow: "Barlow, sans"
      }
    }
  },
  plugins: [],
}

