/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",    
    ],
    theme: {
        extend: {
            colors: {
                'description': '#52514e',
                'sandstorm': '#f7cb45',
                'coal': '#252424'
            }
        },
    },
    safelist: [
        'bg-fuchsia-400',
        'bg-sky-400',
        'bg-red-400',
        'bg-green-400',
        'bg-lime-400'
    ],    
    plugins: [],
};
