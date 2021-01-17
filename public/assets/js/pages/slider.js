/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/es6/pages/slider.js":
/*!****************************************!*\
  !*** ./app/assets/es6/pages/slider.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class ComponentSlider {\r\n\r\n    static init() {\r\n        const horizonPrimary = document.getElementById('horizon-primary');\r\n        const verticalPrimary = document.getElementById('vertical-default');\r\n        const rangeSlider = document.getElementById('range-slider');\r\n        const stepSlider = document.getElementById('step-slider');\r\n\r\n        noUiSlider.create(horizonPrimary, {\r\n            start: 60,\r\n            connect: \"lower\",\r\n            step: 1,\r\n            range: {\r\n                'min': 0,\r\n                'max': 100\r\n            }\r\n        });\r\n\r\n        noUiSlider.create(verticalPrimary, {\r\n            start: 60,\r\n            connect: \"lower\",\r\n            orientation: 'vertical',\r\n            step: 1,\r\n            range: {\r\n                'min': 0,\r\n                'max': 100\r\n            }\r\n        });\r\n\r\n        noUiSlider.create(stepSlider, {\r\n            start: 20,\r\n            connect: \"lower\",\r\n            range: {\r\n                min: 0,\r\n                max: 100\r\n            },\r\n            pips: {\r\n                mode: 'values',\r\n                values: [0,10,20,30,40,50,60,70,80,90,100],\r\n                density: 10\r\n            }\r\n        });\r\n\r\n        noUiSlider.create(rangeSlider, {\r\n            connect: true,\r\n            behaviour: 'tap',\r\n            start: [ 300, 800 ],\r\n            range: {\r\n                'min': [ 0 ],\r\n                'max': [ 1000 ]\r\n            }\r\n        });\r\n\r\n        const nodes = [\r\n            document.getElementById('range-min'), // 0\r\n            document.getElementById('range-max')  // 1\r\n        ];\r\n\r\n        // Display the slider value and how far the handle moved\r\n        // from the left edge of the slider.\r\n        rangeSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {\r\n            nodes[handle].innerHTML = '$' + values[handle] ;\r\n        });\r\n    }\r\n}\r\n\r\n$(() => { ComponentSlider.init(); });\r\n\r\n\n\n//# sourceURL=webpack:///./app/assets/es6/pages/slider.js?");

/***/ }),

/***/ 18:
/*!**********************************************!*\
  !*** multi ./app/assets/es6/pages/slider.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\Nate\\Desktop\\themeforest selling\\Enlink-bootstrap\\v1.0.0\\Enlink - Bootstrap Admin Template\\demo\\app\\assets\\es6\\pages\\slider.js */\"./app/assets/es6/pages/slider.js\");\n\n\n//# sourceURL=webpack:///multi_./app/assets/es6/pages/slider.js?");

/***/ })

/******/ });