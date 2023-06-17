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
				success: '#00AA77',
				false: '#E34300',
				neutral: '#3B5FDF',
				search: '#E0E7FF',
				header: '#1C1C1C',
				heading: '#2A3046',
				button: '#EF5600',
				pagination: '#D8E0FA',
				strapline: '#8A93B0',
				section: '#D0DBFF',
				table: '#545F84',
				interview: '#5E72B9'
			},
			backgroundImage: {
				'advisor-image': "url('assets/pngs/person.png')"
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
}
