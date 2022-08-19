gsap.from('.tittle-portofolio', {
	scrollTrigger: {
		trigger: '.tittle-portofolio',
		toggleActions: 'play complete none reset',
	},
	duration: 2.5,
	ease: 'power2.out',
	x: -100,
	opacity: 0,
});

const boxes = gsap.utils.toArray('.judulkanan');
const boxes1 = gsap.utils.toArray('.judulkiri');
const boxes2 = gsap.utils.toArray('.judul');
boxes.forEach((box) => {
	gsap.from(box, {
		scrollTrigger: {
			trigger: box,
			toggleActions: 'play complete none reset',
		},
		duration: 2,
		ease: 'back.out(1.7)',
		x: 100,
		opacity: 0,
	});
});
boxes1.forEach((box1) => {
	gsap.from(box1, {
		scrollTrigger: {
			trigger: box1,
			toggleActions: 'play complete none reset',
		},
		duration: 2,
		ease: 'back.out(1.7)',
		x: -100,
		opacity: 0,
	});
});
boxes2.forEach((box2) => {
	gsap.from(box2, {
		scrollTrigger: {
			trigger: box2,
			toggleActions: 'play complete none reset',
		},
		duration: 2,
		ease: 'back.out(1.7)',
		x: -100,
		opacity: 0,
	});
});
