/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
			colors: {
				primary: '#3C5FDF',
				active: '#2F51CA',
				secondary: '#E3F5FF',
				stats: '#E3F5FF',
				'status-success': '#00AA77',
				'status-false': '#E34300',
				'status-neutral': '#3B5FDF',
				search: '#E0E7FF',
				header: '#1C1C1C',
				heading: '#2A3046',
				button: '#EF5600',
				pagination: '#D8E0FA'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
}
