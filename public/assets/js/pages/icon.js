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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/es6/pages/icon.js":
/*!**************************************!*\
  !*** ./app/assets/es6/pages/icon.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Icon {\r\n\r\n    static init() {\r\n        function copy(value)  {\r\n            const promise = new Promise((resolve) => {\r\n                let copyTextArea = null;\r\n                try {\r\n                    copyTextArea = document.createElement(\"textarea\");\r\n                    copyTextArea.style.height = '0px';\r\n                    copyTextArea.style.opacity = '0';\r\n                    copyTextArea.style.width = '0px';\r\n                    document.body.appendChild(copyTextArea);\r\n                    copyTextArea.value = value;\r\n                    copyTextArea.select();\r\n                    document.execCommand('copy');\r\n                    resolve(value);\r\n                } finally {\r\n                    if (copyTextArea && copyTextArea.parentNode) {\r\n                        copyTextArea.parentNode.removeChild(copyTextArea);\r\n                    }\r\n                }\r\n            });\r\n    \r\n            return (promise);\r\n        }\r\n\r\n        function showToast() {\r\n            var toastHTML = `<div class=\"toast fade hide\" data-delay=\"1500\">\r\n                <div class=\"toast-body\">\r\n                    <i class=\"anticon anticon-check-o text-success\"></i>\r\n                    <span class=\"ml-1\">Copied</span>\r\n                </div>\r\n            </div>`\r\n        \r\n            $('#notification-toast').append(toastHTML)\r\n            $('#notification-toast .toast').toast('show');\r\n            setTimeout(function(){ \r\n                $('#notification-toast .toast:first-child').remove();\r\n            }, 1500);\r\n        }\r\n\r\n        $('.icons-list li').on('click', (e) => {\r\n            const $this = $(e.currentTarget);\r\n            const copiedString = $this.children('.icon-wrap').html()\r\n            copy(copiedString).then(() => {\r\n                showToast()\r\n            });\r\n        })\r\n    }\r\n    \r\n}\r\n\r\n$(() => { Icon.init(); });\r\n\r\n\n\n//# sourceURL=webpack:///./app/assets/es6/pages/icon.js?");

/***/ }),

/***/ 13:
/*!********************************************!*\
  !*** multi ./app/assets/es6/pages/icon.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\Nate\\Desktop\\themeforest selling\\Enlink-bootstrap\\v1.0.0\\Enlink - Bootstrap Admin Template\\demo\\app\\assets\\es6\\pages\\icon.js */\"./app/assets/es6/pages/icon.js\");\n\n\n//# sourceURL=webpack:///multi_./app/assets/es6/pages/icon.js?");

/***/ })

/******/ });