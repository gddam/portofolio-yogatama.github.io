/** @type {import('tailwindcss').Config} */
module.exports = {
	// important: true,

	content: ['index.html', './'],
	mode: 'jit',
	theme: {
		extend: {
			colors: {
				background: '#0d0d0d',
			},
			fontFamily: {
				carousel: ['Staatliches'],
				judul: ['Koulen'],
				nama: ['Coda'],
			},
			width: {
				sm: '400px',
				md: '500px',
				lg: '600px',
				mobile: '200px',
			},
			maxWidth: {
				sm: '400px',
				md: '500px',
				lg: '600px',
				mobile: '200px',
				logo: '100px',
				logoxl: '120px',
			},
			spacing: {
				margin: '5%',
			},
			animation: {
				scroll: 'scroll 10s linear infinite',
				scroll1: 'scroll1  10s linear infinite',
				scroll2: 'scroll2  10s linear infinite',
				scroll3: 'scroll3  10s linear infinite',
			},
			keyframes: {
				scroll: {
					'0%': { transform: 'translateX(0px)' },
					'100%': { transform: 'translateX(calc(-80px * 10))' },
				},
				scroll1: {
					'0%': { transform: 'translateX(0px)' },
					'100%': { transform: 'translateX(calc(-90px * 10))' },
				},
				scroll2: {
					'0%': { transform: 'translateX(0px)' },
					'100%': { transform: 'translateX(calc(-110px * 10))' },
				},
				scroll3: {
					'0%': { transform: 'translateX(0px)' },
					'100%': { transform: 'translateX(calc(-175px * 10))' },
				},
			},
		},
	},

	plugins: [require('tailwindcss'), require('autoprefixer')],
};
