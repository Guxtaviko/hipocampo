/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			display: [
				'Major Mono Display',
				'ui-monospace',
				'SFMono-Regular',
				'monospace',
			],
		},
		extend: {
			backdropBlur: {
				xs: '2px',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
}
