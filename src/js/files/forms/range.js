// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Библиотеке форматирования wNumb
// https://refreshless.com/wnumb/

import wNumb from 'wnumb';

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
			var inputs = [fromValue, toValue];
			const item = rangeItem.querySelector('[data-range-item]');
			noUiSlider.create(item, {
				start: [Number(fromValue.value), Number(toValue.value)], 
				connect: true,
				tooltips: [true, true],
				range: {
					'min': [Number(fromValue.dataset.rangeFrom)],
					'max': [Number(toValue.dataset.rangeTo)]
				},
				step:10,
				format: wNumb({
					decimals: false,
        	thousand: '.',
        	suffix: ' руб.'
			}),
			

			});
			// Listen to keydown events on the input field.
inputs.forEach(function (input, handle) {

	input.addEventListener('change', function () {
			item.noUiSlider.setHandle(handle, this.value);
	});

	input.addEventListener('keydown', function (e) {

			var values = item.noUiSlider.get();
			var value = Number(values[handle]);

			// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
			var steps = item.noUiSlider.steps();

			// [down, up]
			var step = steps[handle];

			var position;

			// 13 is enter,
			// 38 is key up,
			// 40 is key down.
			switch (e.which) {

					case 13:
							item.noUiSlider.setHandle(handle, this.value);
							break;

					case 38:

							// Get step to go increase slider value (up)
							position = step[1];

							// false = no step is set
							if (position === false) {
									position = 1;
							}

							// null = edge of slider
							if (position !== null) {
									item.noUiSlider.setHandle(handle, value + position);
							}

							break;

					case 40:

							position = step[0];

							if (position === false) {
									position = 1;
							}

							if (position !== null) {
									item.noUiSlider.setHandle(handle, value - position);
							}

							break;
			}
	});
});

			item.noUiSlider.on('update', function (values, handle) {
				inputs[handle].value = values[handle];
		});
		// 	item.noUiSlider.on('update', function (values, handle) {
		// 		fromValue.value = values[handle];
		// 		toValue.value = values[handle];
		// });
		});	
	}
}
rangeInit();

