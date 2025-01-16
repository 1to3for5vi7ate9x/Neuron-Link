"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/FluxBackground.tsx":
/*!*******************************************!*\
  !*** ./src/components/FluxBackground.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FluxBackground; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction FluxBackground(param) {\n    let { className, style } = param;\n    _s();\n    const controlsRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const scriptLoadedRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (scriptLoadedRef.current) return;\n        // Load the Flux script\n        const script = document.createElement(\"script\");\n        script.src = \"/flux/index.js\"; // You'll need to copy the built files to your public directory\n        script.async = true;\n        script.onerror = ()=>{\n            console.error(\"Failed to load Flux script\");\n        };\n        script.onload = ()=>{\n            if (!controlsRef.current) return;\n            try {\n                const app = window.Elm.Main.init({\n                    node: controlsRef.current\n                });\n                // Initialize Flux with custom settings\n                app.ports.initFlux.subscribe(async function(settings) {\n                    const customSettings = {\n                        ...settings,\n                        particleCount: 65536,\n                        particleSize: 1.5,\n                        particleSpacing: 2.5,\n                        flowIntensity: 6,\n                        colorMode: {\n                            type: \"Gradient\",\n                            colors: [\n                                [\n                                    0.0,\n                                    [\n                                        1.0,\n                                        0.0,\n                                        0.0,\n                                        1.0\n                                    ]\n                                ],\n                                [\n                                    0.5,\n                                    [\n                                        0.0,\n                                        1.0,\n                                        0.0,\n                                        1.0\n                                    ]\n                                ],\n                                [\n                                    1.0,\n                                    [\n                                        0.0,\n                                        0.0,\n                                        1.0,\n                                        1.0\n                                    ]\n                                ]\n                            ]\n                        }\n                    };\n                    // Re-send the settings\n                    app.ports.setSettings.send(customSettings);\n                });\n            } catch (error) {\n                console.error(\"Failed to initialize Flux:\", error);\n            }\n        };\n        document.body.appendChild(script);\n        scriptLoadedRef.current = true;\n        return ()=>{\n            // Cleanup if needed\n            document.body.removeChild(script);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: controlsRef,\n                style: {\n                    display: \"none\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/1to3for5vi7ate9x/CascadeProjects/neuron-link/src/components/FluxBackground.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                id: \"canvas\",\n                className: className,\n                style: {\n                    position: \"absolute\",\n                    top: 0,\n                    left: 0,\n                    width: \"100vw\",\n                    height: \"100vh\",\n                    ...style\n                }\n            }, void 0, false, {\n                fileName: \"/Users/1to3for5vi7ate9x/CascadeProjects/neuron-link/src/components/FluxBackground.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(FluxBackground, \"XuTx6/799SH1OSIV1vhEzU4bp3I=\");\n_c = FluxBackground;\nvar _c;\n$RefreshReg$(_c, \"FluxBackground\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZsdXhCYWNrZ3JvdW5kLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFMEM7QUEwQjNCLFNBQVNFLGVBQWUsS0FBeUM7UUFBekMsRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQXVCLEdBQXpDOztJQUNyQyxNQUFNQyxjQUFjSiw2Q0FBTUEsQ0FBaUI7SUFDM0MsTUFBTUssa0JBQWtCTCw2Q0FBTUEsQ0FBQztJQUUvQkQsZ0RBQVNBLENBQUM7UUFDUixJQUFJTSxnQkFBZ0JDLE9BQU8sRUFBRTtRQUU3Qix1QkFBdUI7UUFDdkIsTUFBTUMsU0FBU0MsU0FBU0MsYUFBYSxDQUFDO1FBQ3RDRixPQUFPRyxHQUFHLEdBQUcsa0JBQWtCLCtEQUErRDtRQUM5RkgsT0FBT0ksS0FBSyxHQUFHO1FBRWZKLE9BQU9LLE9BQU8sR0FBRztZQUNmQyxRQUFRQyxLQUFLLENBQUM7UUFDaEI7UUFFQVAsT0FBT1EsTUFBTSxHQUFHO1lBQ2QsSUFBSSxDQUFDWCxZQUFZRSxPQUFPLEVBQUU7WUFFMUIsSUFBSTtnQkFDRixNQUFNVSxNQUFNQyxPQUFPQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDO29CQUMvQkMsTUFBTWpCLFlBQVlFLE9BQU87Z0JBQzNCO2dCQUVBLHVDQUF1QztnQkFDdkNVLElBQUlNLEtBQUssQ0FBQ0MsUUFBUSxDQUFDQyxTQUFTLENBQUMsZUFBZUMsUUFBUTtvQkFDbEQsTUFBTUMsaUJBQWlCO3dCQUNyQixHQUFHRCxRQUFRO3dCQUNYRSxlQUFlO3dCQUNmQyxjQUFjO3dCQUNkQyxpQkFBaUI7d0JBQ2pCQyxlQUFlO3dCQUNmQyxXQUFXOzRCQUNUQyxNQUFNOzRCQUNOQyxRQUFRO2dDQUNOO29DQUFDO29DQUFLO3dDQUFDO3dDQUFLO3dDQUFLO3dDQUFLO3FDQUFJO2lDQUFDO2dDQUMzQjtvQ0FBQztvQ0FBSzt3Q0FBQzt3Q0FBSzt3Q0FBSzt3Q0FBSztxQ0FBSTtpQ0FBQztnQ0FDM0I7b0NBQUM7b0NBQUs7d0NBQUM7d0NBQUs7d0NBQUs7d0NBQUs7cUNBQUk7aUNBQUM7NkJBQzVCO3dCQUNIO29CQUNGO29CQUVBLHVCQUF1QjtvQkFDdkJqQixJQUFJTSxLQUFLLENBQUNZLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDVDtnQkFDN0I7WUFDRixFQUFFLE9BQU9aLE9BQU87Z0JBQ2RELFFBQVFDLEtBQUssQ0FBQyw4QkFBOEJBO1lBQzlDO1FBQ0Y7UUFFQU4sU0FBUzRCLElBQUksQ0FBQ0MsV0FBVyxDQUFDOUI7UUFDMUJGLGdCQUFnQkMsT0FBTyxHQUFHO1FBRTFCLE9BQU87WUFDTCxvQkFBb0I7WUFDcEJFLFNBQVM0QixJQUFJLENBQUNFLFdBQVcsQ0FBQy9CO1FBQzVCO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNFLDhEQUFDZ0M7Z0JBQ0NDLEtBQUtwQztnQkFDTEQsT0FBTztvQkFBRXNDLFNBQVM7Z0JBQU87Ozs7OzswQkFFM0IsOERBQUNDO2dCQUNDQyxJQUFHO2dCQUNIekMsV0FBV0E7Z0JBQ1hDLE9BQU87b0JBQ0x5QyxVQUFVO29CQUNWQyxLQUFLO29CQUNMQyxNQUFNO29CQUNOQyxPQUFPO29CQUNQQyxRQUFRO29CQUNSLEdBQUc3QyxLQUFLO2dCQUNWOzs7Ozs7OztBQUlSO0dBL0V3QkY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmx1eEJhY2tncm91bmQudHN4PzgyMTAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBFbG06IHtcbiAgICAgIE1haW46IHtcbiAgICAgICAgaW5pdDogKGNvbmZpZzogeyBub2RlOiBIVE1MRWxlbWVudCB8IG51bGwgfSkgPT4ge1xuICAgICAgICAgIHBvcnRzOiB7XG4gICAgICAgICAgICBpbml0Rmx1eDoge1xuICAgICAgICAgICAgICBzdWJzY3JpYmU6IChjYWxsYmFjazogKHNldHRpbmdzOiBhbnkpID0+IHZvaWQpID0+IHZvaWQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2V0U2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgc2VuZDogKHNldHRpbmdzOiBhbnkpID0+IHZvaWQ7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH07XG4gIH1cbn1cblxuaW50ZXJmYWNlIEZsdXhCYWNrZ3JvdW5kUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIHN0eWxlPzogUmVhY3QuQ1NTUHJvcGVydGllcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmx1eEJhY2tncm91bmQoeyBjbGFzc05hbWUsIHN0eWxlIH06IEZsdXhCYWNrZ3JvdW5kUHJvcHMpIHtcbiAgY29uc3QgY29udHJvbHNSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBzY3JpcHRMb2FkZWRSZWYgPSB1c2VSZWYoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNjcmlwdExvYWRlZFJlZi5jdXJyZW50KSByZXR1cm47XG5cbiAgICAvLyBMb2FkIHRoZSBGbHV4IHNjcmlwdFxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5zcmMgPSAnL2ZsdXgvaW5kZXguanMnOyAvLyBZb3UnbGwgbmVlZCB0byBjb3B5IHRoZSBidWlsdCBmaWxlcyB0byB5b3VyIHB1YmxpYyBkaXJlY3RvcnlcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgIFxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgRmx1eCBzY3JpcHQnKTtcbiAgICB9O1xuXG4gICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIGlmICghY29udHJvbHNSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhcHAgPSB3aW5kb3cuRWxtLk1haW4uaW5pdCh7XG4gICAgICAgICAgbm9kZTogY29udHJvbHNSZWYuY3VycmVudFxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIEZsdXggd2l0aCBjdXN0b20gc2V0dGluZ3NcbiAgICAgICAgYXBwLnBvcnRzLmluaXRGbHV4LnN1YnNjcmliZShhc3luYyBmdW5jdGlvbihzZXR0aW5ncykge1xuICAgICAgICAgIGNvbnN0IGN1c3RvbVNldHRpbmdzID0ge1xuICAgICAgICAgICAgLi4uc2V0dGluZ3MsXG4gICAgICAgICAgICBwYXJ0aWNsZUNvdW50OiA2NTUzNixcbiAgICAgICAgICAgIHBhcnRpY2xlU2l6ZTogMS41LFxuICAgICAgICAgICAgcGFydGljbGVTcGFjaW5nOiAyLjUsXG4gICAgICAgICAgICBmbG93SW50ZW5zaXR5OiA2LFxuICAgICAgICAgICAgY29sb3JNb2RlOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiR3JhZGllbnRcIixcbiAgICAgICAgICAgICAgY29sb3JzOiBbXG4gICAgICAgICAgICAgICAgWzAuMCwgWzEuMCwgMC4wLCAwLjAsIDEuMF1dLFxuICAgICAgICAgICAgICAgIFswLjUsIFswLjAsIDEuMCwgMC4wLCAxLjBdXSxcbiAgICAgICAgICAgICAgICBbMS4wLCBbMC4wLCAwLjAsIDEuMCwgMS4wXV1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBSZS1zZW5kIHRoZSBzZXR0aW5nc1xuICAgICAgICAgIGFwcC5wb3J0cy5zZXRTZXR0aW5ncy5zZW5kKGN1c3RvbVNldHRpbmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gaW5pdGlhbGl6ZSBGbHV4OicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIHNjcmlwdExvYWRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAvLyBDbGVhbnVwIGlmIG5lZWRlZFxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IFxuICAgICAgICByZWY9e2NvbnRyb2xzUmVmfSBcbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19XG4gICAgICAvPlxuICAgICAgPGNhbnZhc1xuICAgICAgICBpZD1cImNhbnZhc1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHdpZHRoOiAnMTAwdncnLFxuICAgICAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgICAuLi5zdHlsZVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJGbHV4QmFja2dyb3VuZCIsImNsYXNzTmFtZSIsInN0eWxlIiwiY29udHJvbHNSZWYiLCJzY3JpcHRMb2FkZWRSZWYiLCJjdXJyZW50Iiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJvbmVycm9yIiwiY29uc29sZSIsImVycm9yIiwib25sb2FkIiwiYXBwIiwid2luZG93IiwiRWxtIiwiTWFpbiIsImluaXQiLCJub2RlIiwicG9ydHMiLCJpbml0Rmx1eCIsInN1YnNjcmliZSIsInNldHRpbmdzIiwiY3VzdG9tU2V0dGluZ3MiLCJwYXJ0aWNsZUNvdW50IiwicGFydGljbGVTaXplIiwicGFydGljbGVTcGFjaW5nIiwiZmxvd0ludGVuc2l0eSIsImNvbG9yTW9kZSIsInR5cGUiLCJjb2xvcnMiLCJzZXRTZXR0aW5ncyIsInNlbmQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsImRpdiIsInJlZiIsImRpc3BsYXkiLCJjYW52YXMiLCJpZCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FluxBackground.tsx\n"));

/***/ })

});