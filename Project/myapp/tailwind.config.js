
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Open Sans',
      secondary:'Late',
    },
    container: {
      padding:{
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl:'1170px',
    },
    extend: {
      colors:{
        primary: '#131620',
        secondary:'#4B5D68',
        accent: {
            primary: '#131620',
            primary_hover: '#9059DB',
            secondary: '#F063B8',
            secondary_hover: '#E350A9',
            tertiary: '#68C9BA',
        },
      },
    },

  },
  plugins: [],
}
