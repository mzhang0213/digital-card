/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                'glitter': 'glitter 1s ease-in-out infinite',
                'fade-in': 'fade-in 0.5s ease-out forwards',
                'stamp-remove': 'stamp-remove 0.5s ease-out forwards',
                'card-open': 'card-open 0.6s ease-out forwards',
            },
            keyframes: {
                glitter: {
                    '0%, 100%': {
                        opacity: '0',
                        transform: 'translateY(0) rotate(0deg) scale(1)'
                    },
                    '50%': {
                        opacity: '1',
                        transform: 'translateY(-20px) rotate(180deg) scale(1.2)'
                    },
                },
                'fade-in': {
                    '0%': { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
                    '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
                },
                'stamp-remove': {
                    '0%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
                    '100%': { transform: 'scale(0) rotate(180deg)', opacity: '0' },
                },
                'card-open': {
                    '0%': {
                        transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
                        opacity: '1'
                    },
                    '50%': {
                        transform: 'rotateX(10deg) rotateY(5deg) scale(1.05)',
                        opacity: '0.8'
                    },
                    '100%': {
                        transform: 'rotateX(0deg) rotateY(0deg) scale(0)',
                        opacity: '0'
                    },
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}