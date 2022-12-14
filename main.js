var slider = new Swiper('.swiper-container', {
	slidesPerView: 'auto',
	spaceBetween: 150,
	centeredSlides: true,
	mousewheel: true,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 'auto',
			spaceBetween: 10,
		},
		// when window width is >= 480px
		640: {
			slidesPerView: 'auto',
			spaceBetween: 40,
		},
		// when window width is >= 640px
		1024: {
			slidesPerView: 'auto',
			spaceBetween: 20,
		},
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

slider.on('slideChange', function () {
	TweenMax.to('.slide-text a', 0.2, {
		y: '-100px',
	});
	TweenMax.to('.slide-text span', 0.2, {
		y: '-100px',
	});
	TweenMax.to('.slide-number span', 0.2, {
		x: '-100px',
	});
	TweenMax.to('.swiper-slide-active', 0.5, {
		scale: 0.85,
	});
});

slider.on('slideChangeTransitionEnd', function () {
	TweenMax.to('.slide-text a', 0.2, {
		y: 0,
		delay: 0.5,
	});
	TweenMax.to('.slide-text a', 0, {
		y: '100px',
	});
	TweenMax.to('.slide-text span', 0.2, {
		y: 0,
		delay: 0.5,
	});
	TweenMax.to('.slide-text span', 0, {
		y: '100px',
	});

	TweenMax.to('.slide-number span', 0.2, {
		x: 0,
		delay: 0.7,
	});
	TweenMax.to('.slide-number span', 0, {
		x: '100px',
	});

	TweenMax.to('.swiper-slide-active', 0.5, {
		scale: 1,
		ease: Power4.easeOut,
	});

	TweenMax.to('.swiper-slide-active .slide-text', 0, {
		autoAlpha: 1,
	});
	TweenMax.to('.swiper-slide-active .slide-number', 0, {
		autoAlpha: 1,
	});

	TweenMax.to('.swiper-slide-next .slide-text', 0, {
		autoAlpha: 0,
	});
	TweenMax.to('.swiper-slide-prev .slide-text', 0, {
		autoAlpha: 0,
	});

	TweenMax.to('.swiper-slide-next .slide-number', 0, {
		autoAlpha: 0,
	});
	TweenMax.to('.swiper-slide-prev .slide-number', 0, {
		autoAlpha: 0,
	});
});

TweenMax.to('.swiper-slide-next .slide-text', 0, {
	autoAlpha: 0,
});
TweenMax.to('.swiper-slide-prev .slide-text', 0, {
	autoAlpha: 0,
});

TweenMax.to('.swiper-slide-next .slide-number', 0, {
	autoAlpha: 0,
});
TweenMax.to('.swiper-slide-prev .slide-number', 0, {
	autoAlpha: 0,
});

TweenMax.to('.swiper-slide', 0, {
	scale: 0.85,
});

TweenMax.to('.swiper-slide-active', 0, {
	scale: 1,
});
