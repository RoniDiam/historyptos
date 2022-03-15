"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/panel",{

/***/ "./pages/panel/index.js":
/*!******************************!*\
  !*** ./pages/panel/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Panel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Panel() {\n    _s();\n    var urlAPI = \"https://ckyu9ovtf8.execute-api.ap-south-1.amazonaws.com/crypto/purchase\";\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref[0], setIsLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), arrayData = ref1[0], setArrayData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), currentPrice = ref2[0], setCurrentPrice = ref2[1];\n    var urlCoinGecko = \"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false\";\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        axios__WEBPACK_IMPORTED_MODULE_2___default()({\n            method: 'get',\n            url: urlAPI\n        }).then(function(response) {\n            setArrayData(response.data);\n            setIsLoading(false);\n        }).catch(function(err) {\n            console.log(err);\n            setIsLoading(false);\n        });\n        axios__WEBPACK_IMPORTED_MODULE_2___default()({\n            method: 'get',\n            url: urlCoinGecko\n        }).then(function(response) {\n            console.log(response.data);\n            setCurrentPrice(response);\n        }).catch(function(err) {\n            console.log(err);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n            h: \"100%\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                bg: \"whiteAlpha.900\",\n                paddingX: \"12\",\n                mt: \"10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table, {\n                    variant: \"simple\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.TableCaption, {\n                            children: \"Mis cryptos\"\n                        }, void 0, false, {\n                            fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n                            lineNumber: 49,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Thead, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                        children: \"Fecha\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                        children: \"Monto\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                        children: \"Crypto\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                        children: \"Precio que lo compr\\xe9\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, {\n                                        children: \"Precio actual\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n                                lineNumber: 51,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n                            lineNumber: 50,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tbody, {\n                            children: arrayData.map(function(item, i) {\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tr, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                            children: item.date\n                                        }, void 0, false, {\n                                            fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 45\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                            isNumeric: true,\n                                            children: item.amount\n                                        }, void 0, false, {\n                                            fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 45\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                            children: item.crypto\n                                        }, void 0, false, {\n                                            fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 45\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, {\n                                            children: item.priceCrypto\n                                        }, void 0, false, {\n                                            fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 45\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 41\n                                }, this));\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n                            lineNumber: 59,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n                    lineNumber: 48,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n                lineNumber: 47,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n            lineNumber: 46,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/rdiament/Desktop/historyptos/pages/panel/index.js\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this));\n};\n_s(Panel, \"/kpvhF8jf5H1s/wF5xmZGRODWtY=\");\n_c = Panel;\nvar _c;\n$RefreshReg$(_c, \"Panel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs0QkFHakMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWpDLENBQUM7R0FqRXVCL0IsS0FBSztLQUFMQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BhbmVsL2luZGV4LmpzPzI1ZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBUYWJsZSxcbiAgICBUaGVhZCxcbiAgICBUYm9keSxcbiAgICBUcixcbiAgICBUaCxcbiAgICBUZCxcbiAgICBUYWJsZUNhcHRpb24sXG4gICAgU3RhY2ssXG4gICAgQ2VudGVyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYW5lbCgpIHtcbiAgICBsZXQgdXJsQVBJID0gXCJodHRwczovL2NreXU5b3Z0ZjguZXhlY3V0ZS1hcGkuYXAtc291dGgtMS5hbWF6b25hd3MuY29tL2NyeXB0by9wdXJjaGFzZVwiO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFthcnJheURhdGEsIHNldEFycmF5RGF0YV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2N1cnJlbnRQcmljZSwgc2V0Q3VycmVudFByaWNlXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBsZXQgdXJsQ29pbkdlY2tvID0gXCJodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9jb2lucy9tYXJrZXRzP3ZzX2N1cnJlbmN5PXVzZCZvcmRlcj1tYXJrZXRfY2FwX2Rlc2MmcGVyX3BhZ2U9MTAwJnBhZ2U9MSZzcGFya2xpbmU9ZmFsc2VcIjtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICB1cmw6IHVybEFQSSxcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBzZXRBcnJheURhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICB1cmw6IHVybENvaW5HZWNrbyxcbiAgICAgICAgfSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIHNldEN1cnJlbnRQcmljZShyZXNwb25zZSk7XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPENlbnRlciBoPVwiMTAwJVwiPlxuICAgICAgICAgICAgICAgIDxTdGFjayBiZz1cIndoaXRlQWxwaGEuOTAwXCIgcGFkZGluZ1g9XCIxMlwiIG10PVwiMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHZhcmlhbnQ9J3NpbXBsZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDYXB0aW9uPk1pcyBjcnlwdG9zPC9UYWJsZUNhcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGg+RmVjaGE8L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGg+TW9udG88L1RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGg+Q3J5cHRvPC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoPlByZWNpbyBxdWUgbG8gY29tcHLDqTwvVGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaD5QcmVjaW8gYWN0dWFsPC9UaD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UaGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYm9keT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlEYXRhLm1hcChmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZD57aXRlbS5kYXRlfTwvVGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZCBpc051bWVyaWM+e2l0ZW0uYW1vdW50fTwvVGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZD57aXRlbS5jcnlwdG99PC9UZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRkPntpdGVtLnByaWNlQ3J5cHRvfTwvVGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ucj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYm9keT5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiVGFibGUiLCJUaGVhZCIsIlRib2R5IiwiVHIiLCJUaCIsIlRkIiwiVGFibGVDYXB0aW9uIiwiU3RhY2siLCJDZW50ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiUGFuZWwiLCJ1cmxBUEkiLCJsb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiYXJyYXlEYXRhIiwic2V0QXJyYXlEYXRhIiwiY3VycmVudFByaWNlIiwic2V0Q3VycmVudFByaWNlIiwidXJsQ29pbkdlY2tvIiwibWV0aG9kIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgiLCJiZyIsInBhZGRpbmdYIiwibXQiLCJ2YXJpYW50IiwibWFwIiwiaXRlbSIsImkiLCJkYXRlIiwiaXNOdW1lcmljIiwiYW1vdW50IiwiY3J5cHRvIiwicHJpY2VDcnlwdG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/panel/index.js\n");

/***/ })

});