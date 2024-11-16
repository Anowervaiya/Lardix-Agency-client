/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'differenceCard': '0 4px 6px rgba(0, 0, 0, 0.1), 0 -4px 6px rgba(0, 0, 0, 0.1)',
        'service': '0 4px 6px rgba(205, 209, 228,1), 0 -4px 6px rgba(205, 209, 228,1)',
      }
}
  },
  plugins: [
    require('daisyui'),
  ],
}

