/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6D37F6', // Purple from TradeZella
          dark: '#5029c1',
          light: '#8B62FF',
        },
        secondary: {
          DEFAULT: '#FF4293', // Pink from button gradient
          dark: '#E32F7A',
          light: '#FF6EAF',
        },
        accent: {
          DEFAULT: '#20D68B', // Green for positive values
          red: '#FF4D6A', // Red for negative values
        },
        dark: {
          DEFAULT: '#121625', // Dark background
          lighter: '#1E2338', // Slightly lighter dark background
          card: '#2A2F45', // Card background
        },
        light: {
          DEFAULT: '#F8FAFC', // Light background
          card: '#FFFFFF', // Card background
        },
        text: {
          primary: '#F1F5F9', // Light text on dark background
          secondary: '#94A3B8', // Muted text
          dark: '#1E293B', // Dark text on light background
        },
        chart: {
          green: '#20D68B',
          red: '#FF4D6A',
          blue: '#3B82F6',
          purple: '#9333EA',
          amber: '#F59E0B',
          teal: '#14B8A6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['3.5rem', { lineHeight: '1.1' }],
        'display-2': ['3rem', { lineHeight: '1.1' }],
        'display-3': ['2.5rem', { lineHeight: '1.15' }],
        'display-4': ['2rem', { lineHeight: '1.2' }],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #6D37F6 0%, #FF4293 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1E2338 0%, #121625 100%)',
      },
    },
  },
  plugins: [],
};