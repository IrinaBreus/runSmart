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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./src/js/modules/slider.js\");\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cart */ \"./src/js/modules/cart.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ \"./src/js/modules/tabs.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./src/js/modules/modal.js\");\n/* harmony import */ var _modules_scrollUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrollUp */ \"./src/js/modules/scrollUp.js\");\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    'use strict';\r\n\r\n    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_modules_cart__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n    (0,_modules_scrollUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n})\n\n//# sourceURL=webpack://gulp-start/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/cart.js":
/*!********************************!*\
  !*** ./src/js/modules/cart.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst cart = () => {\r\n    let btnMore = document.querySelectorAll('#more'),\r\n        btnBack = document.querySelectorAll('#back'),\r\n        blockMore = document.querySelectorAll('.catalog-item__more');\r\n    \r\n    blockMore.forEach(item => {\r\n        item.style.display = 'none';\r\n    })\r\n\r\n    btnMore.forEach(btn => {\r\n        btn.addEventListener('click', function (e) {\r\n            e.preventDefault();\r\n            this.parentElement.style.display = 'none';\r\n            this.parentElement.nextElementSibling.style.display = '';\r\n            this.parentElement.nextElementSibling.classList.add('slideFromRight');\r\n        });\r\n    });\r\n\r\n    btnBack.forEach(btn => {\r\n        btn.addEventListener('click', function (e) {\r\n            e.preventDefault();\r\n            this.parentElement.style.display = 'none';\r\n            this.parentElement.previousElementSibling.style.display = '';\r\n            this.parentElement.previousElementSibling.classList.add('slideFromLeft');\r\n        });\r\n    });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (cart);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/cart.js?");

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nlet modal = () => {\r\n    let orderBtn = document.querySelectorAll('[data-modal=\"order\"]'),\r\n        buyBtn = document.querySelectorAll('.button_catalog'),\r\n        overlay = document.querySelector('.overlay'),\r\n        modalConsultation = overlay.querySelector('#consultation'),\r\n        modalOrder = overlay.querySelector('#order'),\r\n        modalThanks = overlay.querySelector('#thanks'),\r\n        closeBtn = overlay.querySelectorAll('.modal__close'),\r\n        btnThanks = document.querySelectorAll('[data-btn=\"thanks\"]');\r\n\r\n    orderBtn.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            showModal(overlay);\r\n            showModal(modalConsultation);\r\n        })\r\n    });\r\n\r\n    buyBtn.forEach(btn => {\r\n        btn.addEventListener('click', function() {\r\n            let parent = this.parentElement.parentElement.querySelector('.catalog-item__subtitle');\r\n            let txt = parent.textContent;\r\n            let title = modalOrder.querySelector('.modal__subtitle');\r\n            title.innerHTML = txt;\r\n            showModal(overlay);\r\n            showModal(modalOrder);\r\n        })\r\n    });\r\n\r\n    btnThanks.forEach(btn => {\r\n        btn.addEventListener('click', function(e) {\r\n            e.preventDefault();\r\n\r\n            let inputs = this.parentElement.querySelectorAll('input');\r\n            inputs.forEach(input => {\r\n                if (!input.value) {\r\n                    switch (input.name) {\r\n                        case 'name':\r\n                            changeInput(input);\r\n                            break;\r\n                        case 'phone':\r\n                            changeInput(input);\r\n                            break;\r\n                        case 'email':\r\n                            changeInput(input);\r\n                            break;\r\n                    }\r\n                } \r\n            });\r\n           if (inputs[0].value && inputs[1].value && inputs[2].value) {\r\n                    hiddenModal(modalConsultation);\r\n                    hiddenModal(modalOrder);\r\n                    hiddenModal(overlay);\r\n                    showModal(overlay);\r\n                    showModal(modalThanks);\r\n                        \r\n                    setTimeout(() => {\r\n                        this.parentElement.reset();\r\n                        inputs.forEach(input => input.style.border = 'none');\r\n                        hiddenModal((overlay));\r\n                        hiddenModal(modalThanks)\r\n                    }, 2000);\r\n                }\r\n            \r\n        });\r\n    });\r\n    \r\n    closeBtn.forEach(btn => {\r\n        btn.addEventListener('click', ()  => {\r\n            hiddenModal(overlay);\r\n            // document.body.style.overflow = '';\r\n        })\r\n    });\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target == overlay) {\r\n            hiddenModal(overlay);\r\n        };\r\n    });\r\n\r\n    document.addEventListener('keydown', (e) => {\r\n        if (e.code == 'Escape' && overlay.style.display == 'block') {\r\n            hiddenModal(overlay);\r\n        };\r\n    })\r\n\r\n    function showModal(elem) {\r\n        elem.style.display = 'block';\r\n        // document.body.style.overflow = 'hidden';\r\n    }\r\n\r\n    function hiddenModal(elem) {\r\n        elem.style.display = 'none';\r\n    }\r\n\r\n    function changeInput(input) {\r\n        input.style.border = '2px solid red';\r\n        input.addEventListener('change', () => {\r\n            input.style.border = '2px solid green';\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (modal);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/modal.js?");

/***/ }),

/***/ "./src/js/modules/scrollUp.js":
/*!************************************!*\
  !*** ./src/js/modules/scrollUp.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst scrollUp = () => {\r\n    const arrow = document.querySelector('.pageup');\r\n\r\n    arrow.classList.remove('fadeIn', 'fadeOut');\r\n    \r\n    window.addEventListener('scroll', () => {\r\n        if (document.documentElement.scrollTop > 1600) {\r\n            \r\n            arrow.classList.add('fadeIn');\r\n            arrow.classList.remove('fadeOut');\r\n        } else {\r\n            arrow.classList.add('fadeOut');\r\n            arrow.classList.remove('fadeIn');\r\n        };\r\n    });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (scrollUp);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/scrollUp.js?");

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst slider = () => {\r\n    let slides = document.querySelectorAll('.slide'),\r\n        dots = document.querySelectorAll('.dot'),\r\n        btnNext = document.querySelector('.carousel__arrow_right'),\r\n        btnPrev = document.querySelector('.carousel__arrow_left');\r\n\r\n    let index = 0;\r\n\r\n    showSlide(index);\r\n\r\n    btnNext.addEventListener('click', () => {\r\n        index == slides.length - 1 ? index = 0 : index++;\r\n        showSlide(index);\r\n        addClass('slideFromLeft', 'slideFromRight');\r\n    });\r\n\r\n    btnPrev.addEventListener('click', () => {\r\n        index == 0 ? index = slides.length - 1 : index--;\r\n        showSlide(index);\r\n        addClass('slideFromRight', 'slideFromLeft');\r\n    });\r\n\r\n    dots.forEach((dot, i) => {\r\n        dot.addEventListener('click', (e) => {\r\n            showSlide(i);\r\n            dotsStyle(index);\r\n            e.target.style.opacity = '1';\r\n        })\r\n    })\r\n\r\n    function dotsStyle(index) {\r\n        dots.forEach(dot => dot.style.opacity = '0.7');\r\n        dots[index].style.opasity = '1';\r\n    }\r\n\r\n    function addClass(removeClass, addClass) {\r\n        slides[index].classList.add(addClass);\r\n        slides[index].classList.remove(removeClass);\r\n    }\r\n\r\n    function showSlide(index) {\r\n        slides.forEach(slide => slide.style.display = 'none');\r\n        slides[index].style.display = '';\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (slider);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/slider.js?");

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst tabs = () => {\r\n    let tabs = document.querySelectorAll('.catalog__tab');\r\n    let content = document.querySelectorAll('.catalog__content');\r\n    let blockMain = document.querySelectorAll('.catalog-item__main');\r\n    let blockMore = document.querySelectorAll('.catalog-item__more');\r\n\r\n    showTabs(); \r\n    tabs.forEach((tab, i) => {\r\n        tab.addEventListener('click', function() {\r\n            showTabs(i);\r\n        })\r\n    })\r\n\r\n    function showTabs(n = 0) {\r\n        tabs.forEach(tab => tab.classList.remove('catalog__tab_active'));\r\n        content.forEach(elem => {\r\n            elem.style.display = 'none';\r\n            clearClass(blockMain, 'slideFromLeft');\r\n            clearClass(blockMore, 'slideFromRight')\r\n        });\r\n        tabs[n].classList.add('catalog__tab_active');\r\n        content[n].style.display = '';\r\n    }\r\n    function clearClass(elems, className) {\r\n        elems.forEach(elem => {\r\n            if (elem.classList.contains(className)) {\r\n                elem.classList.remove(className);\r\n            };\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabs);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/tabs.js?");

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