
import Swiper from 'swiper';
import { Pagination, EffectFade, Autoplay, Navigation, Thumbs } from 'swiper/modules';

import "../../scss/base/swiper.scss";

function initSliders() {
	if (document.querySelector('.slider-hero')) {
		new Swiper('.slider-hero', {
			modules: [Pagination, EffectFade, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			effect: 'fade',
			// autoplay: {
			// 	delay: 5000,
			// 	disableOnInteraction: false,
			// },

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			pagination: {
				el: '.slider-hero__pagging',
				clickable: true,
			},

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			on: {

			}
		});
	}
	if (document.querySelector('.brands__slider')) {
		new Swiper('.brands__slider', {
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			//slidesPerView: "auto",
			slidesPerView: 2.8,
			spaceBetween: 15,
			slidesPerGroup: 1,
			speed: 300,
			loop: true,

			pagination: {
				el: '.brands__pagging',
				clickable: true,
			},
			navigation: {
				prevEl: '.brands__arrow-left',
				nextEl: '.brands__arrow-right',
			},
			breakpoints: {
				480: {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				768: {
					spaceBetween: 30,
					slidesPerView: 2,
				},
				991: {
					spaceBetween: 40,
					slidesPerView: 4,
				},
				1360: {
					spaceBetween: 50,
					slidesPerView: 5,
				},
			},
			on: {

			}
		});
	}
	const sliders = document.querySelectorAll('.products-carousel__slider');
	sliders.forEach((slider) => {
		const productSlider = new Swiper(slider, {
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 300,
			init: true,
			pagination: {
				el: '.products-carousel__pagging',
				clickable: true,
			},
			navigation: {
				prevEl: '.products-carousel__nav-prev',
				nextEl: '.products-carousel__nav-next',
			},

			breakpoints: {
				550: {
					slidesPerView: 2,
				},
				991: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
			},
			on: {

				slideChange: () => {
					const slides = productSlider.slides;

					slides.forEach((slide) => {
						slide.style.opacity = 0;
					});
					const visibleSlides = slides.filter((slide, index) => {
						return index >= productSlider.activeIndex - 0 && index <= productSlider.activeIndex + 3;
					});
					visibleSlides.forEach((slide) => {
						slide.style.opacity = 1;
					});

					const slide = productSlider.slides;
					slide[4].classList.remove('transparent');
				},
			},
			
		});
		const slide = productSlider.slides;
		slide[4].classList.add('transparent');
	});
	if (document.querySelector('.articls__slider')) {
		new Swiper('.articls__slider', {
			modules: [Pagination, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1.07,
			spaceBetween: 20,
			speed: 400,

			pagination: {
				el: '.articls__pagging',
				clickable: true,
			},
			navigation: {
				prevEl: '.articls__nav-prev',
				nextEl: '.articls__nav-next',
			},
			breakpoints: {
				480: {
					slidesPerView: 1.2,
				},
				600: {
					slidesPerView: 1.5,
				},
				767: {
					slidesPerView: 2,
				},
				991: {
					slidesPerView: 3,
				},
			},
			on: {

			}
		});
	}
	if (document.querySelector('.slider-card')) {
		const subsliderCard = new Swiper('.subslider-card', {
			modules: [Thumbs],
			observer: true,
			observeParents: true,
			slidesPerView: 5,
			spaceBetween: 10,
			speed: 400,
		});
		new Swiper('.slider-card', {
			modules: [Pagination, Navigation, Thumbs],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 400,

			pagination: {
				el: '.slider-card__pagging',
				clickable: true,
			},
			navigation: {
				prevEl: '.slider-card__nav--prev',
				nextEl: '.slider-card__nav--next',
			},
			thumbs: {
				swiper: subsliderCard
			}
		});
	}
	if (document.querySelector('.blogs-slider__body')) {
		new Swiper('.blogs-slider__body', {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 400,
			pagination: {
				el: '.blogs-slider__pagging',
				clickable: true,
			},
			navigation: {
				prevEl: '.blogs-slider__arrow-prev',
				nextEl: '.blogs-slider__arrow-next',
			},
			breakpoints: {
				600: {
					slidesPerView: 2,
				},
				991: {
					slidesPerView: 3,
				},
			},
			on: {

			}
		});
	}
	if (document.querySelector('.comparison__overlay')) {
		const subsliderComparison = new Swiper('.subslider-comparison', {
			modules: [Thumbs],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 400,
			breakpoints: {
				700: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				},
			},
			on: {
			},
		});
		const comparisonSlider = new Swiper('.comparison__overlay', {
			modules: [Navigation, Pagination, Thumbs],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 20,
			speed: 400,
			pagination: {
				el: '.comparison__pagging',
				clickable: true,
			},
			navigation: {
				prevEl: '.comparison__nav-left',
				nextEl: '.comparison__nav-right',
			},
			breakpoints: {
				700: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				},
			},
			on: {
				slideChange: () => {
					subsliderComparison.slideTo(comparisonSlider.activeIndex);

					const slides = comparisonSlider.slides;

					slides.forEach((slide) => {
						slide.style.opacity = 0;
					});
					const visibleSlides = slides.filter((slide, index) => {
						return index >= comparisonSlider.activeIndex - 0 && index <= comparisonSlider.activeIndex + 2;
					});
					visibleSlides.forEach((slide) => {
						slide.style.opacity = 1;
					});

					const slide = comparisonSlider.slides;
					slide[3].classList.remove('transparent');
				},
			},
			thumbs: {
				swiper: subsliderComparison
			}
		});
		const slides = comparisonSlider.slides;
		slides[3].classList.add('transparent');
	}
	if (document.querySelector('.subslider-comparison')) {
	}
}
window.addEventListener("load", function (e) {
	initSliders();
});