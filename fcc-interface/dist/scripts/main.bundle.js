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
/* harmony import */ var _components_RecoilTearing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/RecoilTearing */ "./src/web/components/RecoilTearing/index.tsx");


function App() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "App",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_RecoilTearing__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/web/components/RecoilTearing/index.tsx":
/*!****************************************************!*\
  !*** ./src/web/components/RecoilTearing/index.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/.pnpm/recoil@0.7.3-alpha.2_react-dom@18.1.0+react@18.1.0/node_modules/recoil/es/recoil.js");



var textState = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.atom)({
    key: "textState",
    default: "init recoil value"
});
var c = 0;
var RecoilTearing = function() {
    console.log("\u9875\u9762\u6E32\u67D3\u4E86 - RecoilTearing", ++c);
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), count = ref[0], setCount = ref[1];
    var ref1 = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState_TRANSITION_SUPPORT_UNSTABLE)(textState), text = ref1[0], setText = ref1[1];
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecoilTearing);


/***/ }),

/***/ "./src/web/index.tsx":
/*!***************************!*\
  !*** ./src/web/index.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/.pnpm/react-dom@18.1.0_react@18.1.0/node_modules/react-dom/client.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/.pnpm/recoil@0.7.3-alpha.2_react-dom@18.1.0+react@18.1.0/node_modules/recoil/es/recoil.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/web/App.tsx");

// import { StrictMode } from "react";


// import { fnNormalTask } from "@mmfcc/home";
// import { useAsyncFn } from "@mmfcc/hooks";

var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render(// <StrictMode>
/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recoil__WEBPACK_IMPORTED_MODULE_2__.RecoilRoot, {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {})
}));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_pnpm_react-dom_18_1_0_react_18_1_0_node_modules_react-dom_client_js-node-b0164a"], () => (__webpack_exec__("./src/web/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL21haW4uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdUQ7QUFDdkQsU0FBU0MsR0FBRyxHQUFHO0lBQ2IscUJBQ0UsdURBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLEtBQUs7a0JBR2xCLHFFQUFDSCxpRUFBYSxLQUFHO01BQ2IsQ0FDTjtDQUNIO0FBRUQsaUVBQWVDLEdBQUcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNieUI7QUFRNUI7QUFDaEIsSUFBTU8sU0FBUyxHQUFHRiw0Q0FBSSxDQUFDO0lBQ3JCRyxHQUFHLEVBQUUsV0FBVztJQUNoQkMsT0FBTyxFQUFFLG1CQUFtQjtDQUM3QixDQUFDO0FBQ0YsSUFBSUMsQ0FBQyxHQUFHLENBQUM7QUFDVCxJQUFNWCxhQUFhLEdBQUcsV0FBTTtJQUMxQlksT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0RBQXVCLEVBQUUsRUFBRUYsQ0FBQyxDQUFDLENBQUM7SUFDMUMsSUFBMEJOLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUJTLEtBQUssR0FBY1QsR0FBVyxHQUF6QixFQUFFVSxRQUFRLEdBQUlWLEdBQVcsR0FBZjtJQUN0QixJQUF3QkUsSUFBcUQsR0FBckRBLGtGQUEwQyxDQUFDQyxTQUFTLENBQUMsRUFBdEVRLElBQUksR0FBYVQsSUFBcUQsR0FBbEUsRUFBRVUsT0FBTyxHQUFJVixJQUFxRCxHQUF6RDtJQUNwQkgsZ0RBQVMsQ0FBQyxXQUFNLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QixxQkFDRSx3REFBQ0YsS0FBRztRQUFDQyxTQUFTLEVBQUMsU0FBUzs7WUFBQyxjQUV2QjswQkFBQSx3REFBQ0QsS0FBRzs7a0NBQ0Ysd0RBQUNBLEtBQUc7OzRCQUFDLFFBQU07NEJBQUNZLEtBQUs7O3NCQUFPO2tDQUN4Qix3REFBQ1osS0FBRzs7NEJBQUMsT0FBSzs0QkFBQ2MsSUFBSTs7c0JBQU87a0NBRXRCLHVEQUFDRSxRQUFNO3dCQUFDQyxPQUFPLEVBQUU7bUNBQU1KLFFBQVEsQ0FBQ0ssSUFBSSxDQUFDQyxNQUFNLEVBQUUsQ0FBQzt5QkFBQTtrQ0FBRSxjQUFZO3NCQUFTO2tDQUNyRSx1REFBQ0gsUUFBTTt3QkFBQ0MsT0FBTyxFQUFFO21DQUFNRixPQUFPLENBQUNHLElBQUksQ0FBQ0MsTUFBTSxFQUFFLENBQUNDLFFBQVEsRUFBRSxDQUFDO3lCQUFBO2tDQUFFLGFBRTFEO3NCQUFTOztjQUNMOztNQUNGLENBQ047Q0FDSDtBQUNELGlFQUFldEIsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakM3QjtBQURBLHNDQUFzQztBQUNFO0FBQ0o7QUFDcEMsOENBQThDO0FBQzlDLDZDQUE2QztBQUNyQjtBQUV4QixJQUFNeUIsSUFBSSxHQUFHRix3REFBbUIsQ0FDOUJJLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUNoQztBQUNESCxJQUFJLENBQUNJLE1BQU0sQ0FDVCxlQUFlO2NBQ2YsdURBQUNMLDhDQUFVO2NBQ1QscUVBQUN2Qiw0Q0FBRyxLQUFHO0VBQ0ksQ0FHZCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy93ZWIvY29tcG9uZW50cy9SZWNvaWxUZWFyaW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXN5bmNGbiBmcm9tIFwiLi9jb21wb25lbnRzL0FzeW5jRm5cIjtcbmltcG9ydCBKb3RhaVRlYXJpbmcgZnJvbSBcIi4vY29tcG9uZW50cy9Kb3RhaVRlYXJpbmdcIjtcbmltcG9ydCBSZWNvaWxUZWFyaW5nIGZyb20gXCIuL2NvbXBvbmVudHMvUmVjb2lsVGVhcmluZ1wiO1xuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICB7LyogPEFzeW5jRm4gLz4gKi99XG4gICAgICB7LyogPEpvdGFpVGVhcmluZyAvPiAqL31cbiAgICAgIDxSZWNvaWxUZWFyaW5nIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIFJlY29pbFJvb3QsXG4gIGF0b20sXG4gIHNlbGVjdG9yLFxuICB1c2VSZWNvaWxTdGF0ZSxcbiAgdXNlUmVjb2lsU3RhdGVfVFJBTlNJVElPTl9TVVBQT1JUX1VOU1RBQkxFLFxuICB1c2VSZWNvaWxWYWx1ZSxcbn0gZnJvbSBcInJlY29pbFwiO1xuY29uc3QgdGV4dFN0YXRlID0gYXRvbSh7XG4gIGtleTogXCJ0ZXh0U3RhdGVcIiwgLy8gdW5pcXVlIElEICh3aXRoIHJlc3BlY3QgdG8gb3RoZXIgYXRvbXMvc2VsZWN0b3JzKVxuICBkZWZhdWx0OiBcImluaXQgcmVjb2lsIHZhbHVlXCIsIC8vIGRlZmF1bHQgdmFsdWUgKGFrYSBpbml0aWFsIHZhbHVlKVxufSk7XG5sZXQgYyA9IDA7XG5jb25zdCBSZWNvaWxUZWFyaW5nID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIumhtemdoua4suafk+S6hiAtIFJlY29pbFRlYXJpbmdcIiwgKytjKTtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlUmVjb2lsU3RhdGVfVFJBTlNJVElPTl9TVVBQT1JUX1VOU1RBQkxFKHRleHRTdGF0ZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhcmluZ1wiPlxuICAgICAgdGVzdCBUZWFyaW5nXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PmNvdW50Ontjb3VudH08L2Rpdj5cbiAgICAgICAgPGRpdj50ZXh0Ont0ZXh0fTwvZGl2PlxuXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoTWF0aC5yYW5kb20oKSl9PmNoYW5nZSBjb3VudDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRleHQoTWF0aC5yYW5kb20oKS50b1N0cmluZygpKX0+XG4gICAgICAgICAgY2hhbmdlIHRleHRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBSZWNvaWxUZWFyaW5nO1xuIiwiLy8gaW1wb3J0IHsgU3RyaWN0TW9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBSZWNvaWxSb290IH0gZnJvbSBcInJlY29pbFwiO1xuLy8gaW1wb3J0IHsgZm5Ob3JtYWxUYXNrIH0gZnJvbSBcIkBtbWZjYy9ob21lXCI7XG4vLyBpbXBvcnQgeyB1c2VBc3luY0ZuIH0gZnJvbSBcIkBtbWZjYy9ob29rc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9BcHBcIjtcblxuY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSBhcyBIVE1MRWxlbWVudFxuKTtcbnJvb3QucmVuZGVyKFxuICAvLyA8U3RyaWN0TW9kZT5cbiAgPFJlY29pbFJvb3Q+XG4gICAgPEFwcCAvPlxuICA8L1JlY29pbFJvb3Q+XG5cbiAgLy8gPC9TdHJpY3RNb2RlPlxuKTtcbiJdLCJuYW1lcyI6WyJSZWNvaWxUZWFyaW5nIiwiQXBwIiwiZGl2IiwiY2xhc3NOYW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJhdG9tIiwidXNlUmVjb2lsU3RhdGVfVFJBTlNJVElPTl9TVVBQT1JUX1VOU1RBQkxFIiwidGV4dFN0YXRlIiwia2V5IiwiZGVmYXVsdCIsImMiLCJjb25zb2xlIiwibG9nIiwiY291bnQiLCJzZXRDb3VudCIsInRleHQiLCJzZXRUZXh0IiwiYnV0dG9uIiwib25DbGljayIsIk1hdGgiLCJyYW5kb20iLCJ0b1N0cmluZyIsIlJlYWN0RE9NIiwiUmVjb2lsUm9vdCIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=