/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
			serif: ['Merriweather', 'serif']
		},
		extend: {
			colors: {
				'primary': '#3C5FDF',
				'active': '#2F51CA',
				'secondary': '#E3F5FF',
				'stats': '#E3F5FF',
				'status-success': '#00AA77',
				'status-false': '#E34300',
				'status-neutral': '#3B5FDF',
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
}
