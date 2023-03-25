/** @type {import('tailwindcss').Config} */
const config = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            theme: {
                'steel-blue': '#4f8fba',
                'black-squeeze': '#e3eef4',
                'aqua-island': '#a7c7de',
                'malibu': '#7cccf4'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};

module.exports = config;
