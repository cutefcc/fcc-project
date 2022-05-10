"use strict";
(self["webpackChunkfcc_interface"] = self["webpackChunkfcc_interface"] || []).push([["main"],{

/***/ "./src/web/App.tsx":
/*!*************************!*\
  !*** ./src/web/App.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var _components_Tearing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Tearing */ "./src/web/components/Tearing/index.tsx");


function App() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "App",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Tearing__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/web/components/Tearing/index.tsx":
/*!**********************************************!*\
  !*** ./src/web/components/Tearing/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jotai */ "./node_modules/.pnpm/jotai@1.6.6_immer@9.0.12+react@18.1.0/node_modules/jotai/esm/index.js");



var textAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.atom)("hello");
var Tearing = function() {
    console.log("\u9875\u9762\u6E32\u67D3\u4E86 - tearing");
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), count = ref[0], setCount = ref[1];
    var ref1 = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(textAtom), text = ref1[0], setText = ref1[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {}, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "tearing",
        children: [
            "test Tearing",
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            "count:",
                            count
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            "text:",
                            text
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        onClick: function() {
                            return setCount(Math.random());
                        },
                        children: "change count"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                        onClick: function() {
                            return setText(Math.random().toString());
                        },
                        children: "change text"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tearing);


/***/ }),

/***/ "./src/web/index.tsx":
/*!***************************!*\
  !*** ./src/web/index.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/client */ "./node_modules/.pnpm/react-dom@18.1.0_react@18.1.0/node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/web/App.tsx");



// import { fnNormalTask } from "@mmfcc/home";
// import { useAsyncFn } from "@mmfcc/hooks";

var root = react_dom_client__WEBPACK_IMPORTED_MODULE_2__.createRoot(document.getElementById("root"));
root.render(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.StrictMode, {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {})
}));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_pnpm_jotai_1_6_6_immer_9_0_12_react_18_1_0_node_modules_jotai_esm_index_-7b3734"], () => (__webpack_exec__("./src/web/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL21haW4uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzJDO0FBQzNDLFNBQVNDLEdBQUcsR0FBRztJQUNiLHFCQUNFLHVEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxLQUFLO2tCQUVsQixxRUFBQ0gsMkRBQU8sS0FBRztNQUNQLENBQ047Q0FDSDtBQUVELGlFQUFlQyxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWHlCO0FBQ047QUFDdEMsSUFBTU8sUUFBUSxHQUFHRiwyQ0FBSSxDQUFDLE9BQU8sQ0FBQztBQUU5QixJQUFNTixPQUFPLEdBQUcsV0FBTTtJQUNwQlMsT0FBTyxDQUFDQyxHQUFHLENBQUMsMENBQWlCLENBQUMsQ0FBQztJQUMvQixJQUEwQkwsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUE5Qk0sS0FBSyxHQUFjTixHQUFXLEdBQXpCLEVBQUVPLFFBQVEsR0FBSVAsR0FBVyxHQUFmO0lBQ3RCLElBQXdCRSxJQUFpQixHQUFqQkEsOENBQU8sQ0FBQ0MsUUFBUSxDQUFDLEVBQWxDSyxJQUFJLEdBQWFOLElBQWlCLEdBQTlCLEVBQUVPLE9BQU8sR0FBSVAsSUFBaUIsR0FBckI7SUFDcEJILGdEQUFTLENBQUMsV0FBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDeEIscUJBQ0Usd0RBQUNGLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFNBQVM7O1lBQUMsY0FFdkI7MEJBQUEsd0RBQUNELEtBQUc7O2tDQUNGLHdEQUFDQSxLQUFHOzs0QkFBQyxRQUFNOzRCQUFDUyxLQUFLOztzQkFBTztrQ0FDeEIsd0RBQUNULEtBQUc7OzRCQUFDLE9BQUs7NEJBQUNXLElBQUk7O3NCQUFPO2tDQUV0Qix1REFBQ0UsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFO21DQUFNSixRQUFRLENBQUNLLElBQUksQ0FBQ0MsTUFBTSxFQUFFLENBQUM7eUJBQUE7a0NBQUUsY0FBWTtzQkFBUztrQ0FDckUsdURBQUNILFFBQU07d0JBQUNDLE9BQU8sRUFBRTttQ0FBTUYsT0FBTyxDQUFDRyxJQUFJLENBQUNDLE1BQU0sRUFBRSxDQUFDQyxRQUFRLEVBQUUsQ0FBQzt5QkFBQTtrQ0FBRSxhQUUxRDtzQkFBUzs7Y0FDTDs7TUFDRixDQUNOO0NBQ0g7QUFDRCxpRUFBZW5CLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJZO0FBQ0s7QUFDeEMsOENBQThDO0FBQzlDLDZDQUE2QztBQUNyQjtBQUV4QixJQUFNc0IsSUFBSSxHQUFHRCx3REFBbUIsQ0FDOUJHLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUNoQztBQUNESCxJQUFJLENBQUNJLE1BQU0sZUFDVCx1REFBQ04sNkNBQVU7Y0FDVCxxRUFBQ25CLDRDQUFHLEtBQUc7RUFDSSxDQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2ViL0FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9jb21wb25lbnRzL1RlYXJpbmcvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy93ZWIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3luY0ZuIGZyb20gXCIuL2NvbXBvbmVudHMvQXN5bmNGblwiO1xuaW1wb3J0IFRlYXJpbmcgZnJvbSBcIi4vY29tcG9uZW50cy9UZWFyaW5nXCI7XG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIHsvKiA8QXN5bmNGbiAvPiAqL31cbiAgICAgIDxUZWFyaW5nIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGF0b20sIHVzZUF0b20gfSBmcm9tIFwiam90YWlcIjtcbmNvbnN0IHRleHRBdG9tID0gYXRvbShcImhlbGxvXCIpO1xuXG5jb25zdCBUZWFyaW5nID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIumhtemdoua4suafk+S6hiAtIHRlYXJpbmdcIik7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZUF0b20odGV4dEF0b20pO1xuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRlYXJpbmdcIj5cbiAgICAgIHRlc3QgVGVhcmluZ1xuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5jb3VudDp7Y291bnR9PC9kaXY+XG4gICAgICAgIDxkaXY+dGV4dDp7dGV4dH08L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50KE1hdGgucmFuZG9tKCkpfT5jaGFuZ2UgY291bnQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRUZXh0KE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSl9PlxuICAgICAgICAgIGNoYW5nZSB0ZXh0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVGVhcmluZztcbiIsImltcG9ydCB7IFN0cmljdE1vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuLy8gaW1wb3J0IHsgZm5Ob3JtYWxUYXNrIH0gZnJvbSBcIkBtbWZjYy9ob21lXCI7XG4vLyBpbXBvcnQgeyB1c2VBc3luY0ZuIH0gZnJvbSBcIkBtbWZjYy9ob29rc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcblxuY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSBhcyBIVE1MRWxlbWVudFxuKTtcbnJvb3QucmVuZGVyKFxuICA8U3RyaWN0TW9kZT5cbiAgICA8QXBwIC8+XG4gIDwvU3RyaWN0TW9kZT5cbik7XG4iXSwibmFtZXMiOlsiVGVhcmluZyIsIkFwcCIsImRpdiIsImNsYXNzTmFtZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXRvbSIsInVzZUF0b20iLCJ0ZXh0QXRvbSIsImNvbnNvbGUiLCJsb2ciLCJjb3VudCIsInNldENvdW50IiwidGV4dCIsInNldFRleHQiLCJidXR0b24iLCJvbkNsaWNrIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwiU3RyaWN0TW9kZSIsIlJlYWN0RE9NIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==