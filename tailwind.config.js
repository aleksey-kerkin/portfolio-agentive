/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: { sm: '480px', md: '768px', lg: '1024px', xl: '1440px' },
    extend: {
      fontFamily: {
        display: ['Onest', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0b0b12',
        brand: { DEFAULT: '#2f5bff', violet: '#7c4dff', soft: '#ecebff' },
        page: '#f6f6fa',
        line: '#e6e6ef',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,16,40,.04), 0 8px 24px rgba(16,16,40,.06)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: { float: 'float 6s ease-in-out infinite' },
    },
  },
  plugins: [],
};
