// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss 
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

// export function rangeInit() {
// 	const priceSlider = document.querySelector('#range');
// 	if (priceSlider) {
// 		let textFrom = priceSlider.querySelector('[data-range-from]');
// 		let textTo = priceSlider.querySelector('[data-range-to]');
// 		noUiSlider.create(priceSlider, {
// 			start: [500, 1000], // [0,200000]
// 			connect: true, 
// 			range: {
// 				'min': [0],
// 				'max': [5000]
// 			}
// 		});

export function rangeInit() {
	const rangeItems = document.querySelectorAll('[data-range]');
	if (rangeItems.length) {
		rangeItems.forEach(rangeItem => {
			const fromValue = rangeItem.querySelector('[data-range-from]');
			const toValue = rangeItem.querySelector('[data-range-to]');
			const item = rangeItem.querySelector('[data-range-item]');
			noUiSlider.create(item, {
				start: [Number(fromValue.value), Number(toValue.value)], 
				connect: true,
				tooltips: [true, true],
				range: {
					'min': [Number(fromValue.dataset.rangeFrom)],
					'max': [Number(toValue.dataset.rangeTo)]
				}
			});
		});	
	}
}
rangeInit();
