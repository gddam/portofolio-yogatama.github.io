var elms = document.getElementsByClassName('splide');
for (var i = 0; i < elms.length; i++) {
	new Splide(elms[i], {
		type: 'slide',
		snap: true,
		trimSpace: false,
		perPage: 1,
		wheel: true,
		releaseWheel: true,
		wheelSleep: 500,
		focus: 'center',
		autoHeight: true,
		autoWidth: true,
		breakpoints: {
			// when window width is >= 320px
			320: {
				gap: '20px',
			},
			// when window width is >= 480px
			640: {
				gap: '50px',
			},
			// when window width is >= 640px
			1024: {
				gap: '100px',
			},

			2048: {
				gap: '150px',
			},
			4056: {
				gap: '250px',
			},
		},
	}).mount();
}
