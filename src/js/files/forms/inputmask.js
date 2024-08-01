import { flsModules } from "../modules.js";

import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll('input[type="tel"]');
if (inputMasks.length) {
	flsModules.inputmask = Inputmask('+38 (999) 999-99-99', {
		placeholderVisible: true
	}).mask(inputMasks);
}