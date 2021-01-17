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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/es6/pages/file-manager.js":
/*!**********************************************!*\
  !*** ./app/assets/es6/pages/file-manager.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class FileManager {\r\n\r\n    static init() {\r\n\r\n        const hide = 'd-none'\r\n        const fileItems = '.file-manager-content-files .file';\r\n        const fileDetail = '.file-manager-content-details .content-details';\r\n        const fileContentDetails = '.file-manager-content-details'\r\n        const fileDetailNoData = '.file-manager-content-details .content-details-no-data';\r\n\r\n        function showFileDetails () {\r\n            $(fileDetailNoData).addClass(hide)\r\n            $(fileDetail).removeClass(hide)\r\n        }\r\n\r\n        function hideFileDetails () {\r\n            $(fileDetailNoData).removeClass(hide)\r\n            $(fileDetail).addClass(hide)\r\n        }\r\n\r\n        $(fileItems).on('click', (e) => {\r\n            showFileDetails()\r\n            $(fileItems).removeClass('active')\r\n            $(e.currentTarget).addClass('active')\r\n            $(fileContentDetails).addClass('details-open')\r\n        })\r\n\r\n        $('.unselect-bg').on('click', (e) => {\r\n            hideFileDetails()\r\n            $(fileItems).removeClass('active')\r\n        })\r\n\r\n        $('.content-details-close a').on('click', (e) => {\r\n            $(fileContentDetails).removeClass('details-open')\r\n        })\r\n\r\n        $('#open-manager-menu').on('click', (e) => {\r\n            $('.file-manager-nav').addClass('nav-open')\r\n            $(e.currentTarget).addClass(hide)\r\n            $('#close-manager-menu').removeClass(hide)\r\n        })\r\n\r\n        $('#close-manager-menu').on('click', (e) => {\r\n            $('.file-manager-nav').removeClass('nav-open')\r\n            $(e.currentTarget).addClass(hide)\r\n            $('#open-manager-menu').removeClass(hide)\r\n        })\r\n    }\r\n}\r\n\r\n$(() => { FileManager.init(); });\r\n\r\n\n\n//# sourceURL=webpack:///./app/assets/es6/pages/file-manager.js?");

/***/ }),

/***/ 10:
/*!****************************************************!*\
  !*** multi ./app/assets/es6/pages/file-manager.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\Nate\\Desktop\\themeforest selling\\Enlink-bootstrap\\v1.0.0\\Enlink - Bootstrap Admin Template\\demo\\app\\assets\\es6\\pages\\file-manager.js */\"./app/assets/es6/pages/file-manager.js\");\n\n\n//# sourceURL=webpack:///multi_./app/assets/es6/pages/file-manager.js?");

/***/ })

/******/ });