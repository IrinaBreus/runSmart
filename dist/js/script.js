/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cart */ \"./src/js/modules/cart.js\");\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    'use strict';\r\n\r\n    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_modules_cart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n})\n\n//# sourceURL=webpack://gulp-start/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/cart.js":
/*!********************************!*\
  !*** ./src/js/modules/cart.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst cart = () => {\r\n    let btnMore = document.querySelectorAll('#more'),\r\n        btnBack = document.querySelectorAll('#back'),\r\n        blockMain = document.querySelectorAll('.catalog-item__main'),\r\n        blockMore = document.querySelectorAll('.catalog-item__more');\r\n    \r\n    blockMore.forEach(item => {\r\n        item.style.display = 'none';\r\n    })\r\n\r\n    btnMore.forEach(btn => {\r\n        btn.addEventListener('click', function (e) {\r\n            e.preventDefault();\r\n            this.parentElement.style.display = 'none';\r\n            this.parentElement.nextElementSibling.style.display = '';\r\n        });\r\n    });\r\n\r\n    btnBack.forEach(btn => {\r\n        btn.addEventListener('click', function (e) {\r\n            e.preventDefault();\r\n            this.parentElement.style.display = 'none';\r\n            this.parentElement.previousElementSibling.style.display = '';\r\n        });\r\n    });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (cart);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/cart.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst slider = () => {\r\n    let slides = document.querySelectorAll('.slide'),\r\n        dots = document.querySelectorAll('.dot'),\r\n        btnNext = document.querySelector('.carousel__arrow_right'),\r\n        btnPrev = document.querySelector('.carousel__arrow_left');\r\n\r\n    let index = 0;\r\n\r\n    showSlide(index);\r\n\r\n    btnNext.addEventListener('click', () => {\r\n        index == slides.length - 1 ? index = 0 : index++;\r\n        showSlide(index);\r\n        addClass('slideFromLeft', 'slideFromRight');\r\n    });\r\n\r\n    btnPrev.addEventListener('click', () => {\r\n        index == 0 ? index = slides.length - 1 : index--;\r\n        showSlide(index);\r\n        addClass('slideFromRight', 'slideFromLeft');\r\n    });\r\n\r\n    dots.forEach((dot, i) => {\r\n        dot.addEventListener('click', (e) => {\r\n            showSlide(i);\r\n            dotsStyle(index);\r\n            e.target.style.opacity = '1';\r\n        })\r\n    })\r\n\r\n    function dotsStyle(index) {\r\n        dots.forEach(dot => dot.style.opacity = '0.7');\r\n        dots[index].style.opasity = '1';\r\n    }\r\n\r\n    function addClass(removeClass, addClass) {\r\n        slides[index].classList.add(addClass);\r\n        slides[index].classList.remove(removeClass);\r\n    }\r\n\r\n    function showSlide(index) {\r\n        slides.forEach(slide => slide.style.display = 'none');\r\n        slides[index].style.display = '';\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (slider);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;