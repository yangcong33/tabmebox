import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#f7f8fc',
        panel: '#ffffff',
        sidebar: '#0f172a',
        accent: {
          DEFAULT: '#6366f1',
          soft: '#a5b4fc'
        },
        content: '#0f172a',
        muted: '#64748b'
      },
      borderRadius: {
        bento: '1.25rem'
      },
      boxShadow: {
        bento: '0 10px 30px -15px rgba(15, 23, 42, 0.2)',
        'bento-hover': '0 20px 40px -20px rgba(15, 23, 42, 0.35)'
      },
      spacing: {
        gutter: '1.25rem'
      }
    }
  },
  plugins: []
} satisfies Config;
