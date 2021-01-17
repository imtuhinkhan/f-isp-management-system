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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/es6/constant/theme-constant.js":
/*!***************************************************!*\
  !*** ./app/assets/es6/constant/theme-constant.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst ThemeConstant = {\r\n   \r\n    magenta: '#eb2f96',\r\n    magentaLight: 'rgba(235, 47, 150, 0.05)',\r\n    red: '#de4436',\r\n    redLight: 'rgba(222, 68, 54, 0.05)',\r\n    volcano: '#fa541c',\r\n    volcanoLight: 'rgba(250, 84, 28, 0.05)',\r\n    orange: '#fa8c16',\r\n    orangeLight: 'rgba(250, 140, 22, 0.1)',\r\n    gold: '#ffc107',\r\n    goldLight: 'rgba(255, 193, 7, 0.1)',\r\n    lime: '#a0d911',\r\n    limeLight: 'rgba(160, 217, 17, 0.1)',\r\n    green: '#52c41a',\r\n    greenLight: 'rgba(82, 196, 26, 0.1)',\r\n    cyan: \"#05c9a7\",\r\n    cyanLight: 'rgba(0, 201, 167, 0.1)',\r\n    blue: '#3f87f5',\r\n    blueLight: 'rgba(63, 135, 245, 0.15)',\r\n    geekBlue: '#2f54eb',\r\n    geekBlueLight: 'rgba(47, 84, 235, 0.1)',\r\n    purple: '#886cff',\r\n    purpleLight: 'rgba(136, 108, 255, 0.1)',\r\n    gray: '#53535f',\r\n    grayLight: '#77838f',\r\n    grayLighter: '#ededed',\r\n    grayLightest: '#f1f2f3',\r\n    border: '#edf2f9',\r\n    white: '#ffffff',\r\n    dark: '#2a2a2a',\r\n    transparent: 'rgba(255, 255, 255, 0)'\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeConstant);\n\n//# sourceURL=webpack:///./app/assets/es6/constant/theme-constant.js?");

/***/ }),

/***/ "./app/assets/es6/pages/dashboard-e-commerce.js":
/*!******************************************************!*\
  !*** ./app/assets/es6/pages/dashboard-e-commerce.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/theme-constant */ \"./app/assets/es6/constant/theme-constant.js\");\n\r\n\r\nclass DashboardECommerce {\r\n\r\n    static init() {\r\n        \r\n        const salesChart = document.getElementById(\"sales-chart\");\r\n        const salesChartCtx = salesChart.getContext('2d');\r\n        salesChart.height = 120;\r\n        const salesChartConfig = new Chart(salesChartCtx, {\r\n            type: 'bar',\r\n            data: {\r\n            labels: [ 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],\r\n            datasets: [{\r\n                label: 'Online',\r\n                backgroundColor: _constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blue,\r\n                borderWidth: 0,\r\n                data: [ 20, 30, 35, 45, 55, 45]\r\n            },\r\n            {\r\n                label: 'Offline',\r\n                backgroundColor: _constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blueLight,\r\n                borderWidth: 0,\r\n                data: [ 25, 35, 40, 50, 60, 50]\r\n                }]\r\n            },\r\n            options: {\r\n                scaleShowVerticalLines: false,\r\n                responsive: true,\r\n                legend: {\r\n\t\t\t\t\tdisplay: false\r\n\t\t\t\t},\r\n                scales: {\r\n                    xAxes: [{\r\n                        categoryPercentage: 0.35,\r\n                        barPercentage: 0.70,\r\n                        display: true,\r\n                        scaleLabel: {\r\n                            display: false,\r\n                            labelString: 'Month'\r\n                        },\r\n                        gridLines: false,\r\n                        ticks: {\r\n                            display: true,\r\n                            beginAtZero: true,\r\n                            fontSize: 13,\r\n                            padding: 10\r\n                        }\r\n                    }],\r\n                    yAxes: [{\r\n                        display: true,\r\n                        scaleLabel: {\r\n                            display: false,\r\n                            labelString: 'Value'\r\n                        },\r\n                        gridLines: {\r\n                            drawBorder: false,\r\n                            offsetGridLines: false,\r\n                            drawTicks: false,\r\n                            borderDash: [3, 4],\r\n                            zeroLineWidth: 1,\r\n                            zeroLineBorderDash: [3, 4]\r\n                        },\r\n                        ticks: {\r\n                            max: 80,                            \r\n                            stepSize: 20,\r\n                            display: true,\r\n                            beginAtZero: true,\r\n                            fontSize: 13,\r\n                            padding: 10\r\n                        }\r\n                    }]\r\n                }\r\n            }\r\n        });\r\n\r\n        const revenueChart = document.getElementById(\"revenue-chart\");\r\n        const revenueChartCtx = revenueChart.getContext('2d');\r\n        revenueChart.height = 120;\r\n        const revenueChartConfig = new Chart(revenueChartCtx, {\r\n            type: 'line',\r\n            data: {\r\n                labels: [\"16th\", \"17th\", \"18th\", \"19th\", \"20th\", \"21th\", \"22th\", \"23th\", \"24th\", \"25th\", \"26th\"],\r\n                datasets: [ \r\n                    {\r\n                        backgroundColor: _constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].transparent,\r\n                        borderColor: _constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cyan,\r\n                        pointBackgroundColor: _constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cyan,\r\n                        pointBorderColor: _constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].white,\r\n                        pointHoverBackgroundColor: _constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cyanLight,\r\n                        pointHoverBorderColor: _constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].cyanLight,\r\n                        data: [30, 60, 40, 50, 40, 55, 85, 65, 75, 50, 70],\r\n                        label: 'Series A' \r\n                    }\r\n                ]\r\n            },\r\n            options: {\r\n                maintainAspectRatio: false,\r\n                responsive: true,\r\n                hover: {\r\n                    mode: 'nearest',\r\n                    intersect: true\r\n                },\r\n                legend: {\r\n\t\t\t\t\tdisplay: false\r\n\t\t\t\t},\r\n                tooltips: {\r\n                    mode: 'index'\r\n                },\r\n                scales: {\r\n                    xAxes: [{ \r\n                        gridLines: [{\r\n                            display: false,\r\n                        }],\r\n                        ticks: {\r\n                            display: true,\r\n                            fontColor: _constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].grayLight,\r\n                            fontSize: 13,\r\n                            padding: 10\r\n                        }\r\n                    }],\r\n                    yAxes: [{\r\n                        gridLines: {\r\n                            drawBorder: false,\r\n                            drawTicks: false,\r\n                            borderDash: [3, 4],\r\n                            zeroLineWidth: 1,\r\n                            zeroLineBorderDash: [3, 4]  \r\n                        },\r\n                        ticks: {\r\n                            display: true,\r\n                            max: 100,                            \r\n                            stepSize: 20,\r\n                            fontColor: _constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].grayLight,\r\n                            fontSize: 13,\r\n                            padding: 10\r\n                        }  \r\n                    }],\r\n                }\r\n            }\r\n        });\r\n\r\n        const customerChart = document.getElementById(\"customer-chart\");\r\n        const customerChartCtx = customerChart.getContext('2d');\r\n        customerChart.height = 292;\r\n        const customerChartConfig = new Chart(customerChartCtx, {\r\n            type: 'doughnut',\r\n            data: {\r\n                labels: ['Direct', 'Referral', 'Social Network'],\r\n                datasets: [\r\n                    {\r\n                        fill: true,\r\n                        backgroundColor: [_constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gold, _constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blue, _constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].red],\r\n                        pointBackgroundColor : [_constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].gold, _constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].blue, _constant_theme_constant__WEBPACK_IMPORTED_MODULE_0__[\"default\"].red],\r\n                        data: [350, 450, 100]\r\n                    }\r\n                ]\r\n            },\r\n            options: {\r\n                legend: {\r\n\t\t\t\t\tdisplay: false\r\n\t\t\t\t},\r\n                cutoutPercentage: 80,\r\n                maintainAspectRatio: false\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n$(() => { DashboardECommerce.init(); });\r\n\r\n\n\n//# sourceURL=webpack:///./app/assets/es6/pages/dashboard-e-commerce.js?");

/***/ }),

/***/ 5:
/*!************************************************************!*\
  !*** multi ./app/assets/es6/pages/dashboard-e-commerce.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\Nate\\Desktop\\themeforest selling\\Enlink-bootstrap\\v1.0.0\\Enlink - Bootstrap Admin Template\\demo\\app\\assets\\es6\\pages\\dashboard-e-commerce.js */\"./app/assets/es6/pages/dashboard-e-commerce.js\");\n\n\n//# sourceURL=webpack:///multi_./app/assets/es6/pages/dashboard-e-commerce.js?");

/***/ })

/******/ });