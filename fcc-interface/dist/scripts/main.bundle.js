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
/* harmony import */ var _components_AllowReturnUndefined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AllowReturnUndefined */ "./src/web/components/AllowReturnUndefined/index.tsx");



function App() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "App",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_RecoilTearing__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AllowReturnUndefined__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/web/components/AllowReturnUndefined/index.tsx":
/*!***********************************************************!*\
  !*** ./src/web/components/AllowReturnUndefined/index.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var AllowReturnUndefined = function() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {}, []);
    var renderUndefined = function() {
        return undefined;
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "tearing",
        children: [
            "test return undefined",
            renderUndefined()
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllowReturnUndefined);


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
    // const renderUndefined = () => {
    //   return undefined;
    // };
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
                    }),
                    "test return undefined"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly8uL3NyYy93ZWIvY29tcG9uZW50cy9BbGxvd1JldHVyblVuZGVmaW5lZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9jb21wb25lbnRzL1JlY29pbFRlYXJpbmcvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy93ZWIvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBc3luY0ZuIGZyb20gXCIuL2NvbXBvbmVudHMvQXN5bmNGblwiO1xuaW1wb3J0IEpvdGFpVGVhcmluZyBmcm9tIFwiLi9jb21wb25lbnRzL0pvdGFpVGVhcmluZ1wiO1xuaW1wb3J0IFJlY29pbFRlYXJpbmcgZnJvbSBcIi4vY29tcG9uZW50cy9SZWNvaWxUZWFyaW5nXCI7XG5pbXBvcnQgQWxsb3dSZXR1cm5VbmRlZmluZWQgZnJvbSBcIi4vY29tcG9uZW50cy9BbGxvd1JldHVyblVuZGVmaW5lZFwiO1xuZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICB7LyogPEFzeW5jRm4gLz4gKi99XG4gICAgICB7LyogPEpvdGFpVGVhcmluZyAvPiAqL31cbiAgICAgIDxSZWNvaWxUZWFyaW5nIC8+XG4gICAgICA8QWxsb3dSZXR1cm5VbmRlZmluZWQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBBbGxvd1JldHVyblVuZGVmaW5lZCA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHt9LCBbXSk7XG4gIGNvbnN0IHJlbmRlclVuZGVmaW5lZCA9ICgpID0+IHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGVhcmluZ1wiPlxuICAgICAgdGVzdCByZXR1cm4gdW5kZWZpbmVkXG4gICAgICB7cmVuZGVyVW5kZWZpbmVkKCl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQWxsb3dSZXR1cm5VbmRlZmluZWQ7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBSZWNvaWxSb290LFxuICBhdG9tLFxuICBzZWxlY3RvcixcbiAgdXNlUmVjb2lsU3RhdGUsXG4gIHVzZVJlY29pbFN0YXRlX1RSQU5TSVRJT05fU1VQUE9SVF9VTlNUQUJMRSxcbiAgdXNlUmVjb2lsVmFsdWUsXG59IGZyb20gXCJyZWNvaWxcIjtcbmNvbnN0IHRleHRTdGF0ZSA9IGF0b20oe1xuICBrZXk6IFwidGV4dFN0YXRlXCIsIC8vIHVuaXF1ZSBJRCAod2l0aCByZXNwZWN0IHRvIG90aGVyIGF0b21zL3NlbGVjdG9ycylcbiAgZGVmYXVsdDogXCJpbml0IHJlY29pbCB2YWx1ZVwiLCAvLyBkZWZhdWx0IHZhbHVlIChha2EgaW5pdGlhbCB2YWx1ZSlcbn0pO1xubGV0IGMgPSAwO1xuY29uc3QgUmVjb2lsVGVhcmluZyA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coXCLpobXpnaLmuLLmn5PkuoYgLSBSZWNvaWxUZWFyaW5nXCIsICsrYyk7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVJlY29pbFN0YXRlX1RSQU5TSVRJT05fU1VQUE9SVF9VTlNUQUJMRSh0ZXh0U3RhdGUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKTtcbiAgLy8gY29uc3QgcmVuZGVyVW5kZWZpbmVkID0gKCkgPT4ge1xuICAvLyAgIHJldHVybiB1bmRlZmluZWQ7XG4gIC8vIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWFyaW5nXCI+XG4gICAgICB0ZXN0IFRlYXJpbmdcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXY+Y291bnQ6e2NvdW50fTwvZGl2PlxuICAgICAgICA8ZGl2PnRleHQ6e3RleHR9PC9kaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoTWF0aC5yYW5kb20oKSl9PmNoYW5nZSBjb3VudDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFRleHQoTWF0aC5yYW5kb20oKS50b1N0cmluZygpKX0+XG4gICAgICAgICAgY2hhbmdlIHRleHRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIHRlc3QgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB7Lyoge3JlbmRlclVuZGVmaW5lZCgpfSAqL31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJlY29pbFRlYXJpbmc7XG4iLCIvLyBpbXBvcnQgeyBTdHJpY3RNb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tIFwicmVjb2lsXCI7XG4vLyBpbXBvcnQgeyBmbk5vcm1hbFRhc2sgfSBmcm9tIFwiQG1tZmNjL2hvbWVcIjtcbi8vIGltcG9ydCB7IHVzZUFzeW5jRm4gfSBmcm9tIFwiQG1tZmNjL2hvb2tzXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpIGFzIEhUTUxFbGVtZW50XG4pO1xucm9vdC5yZW5kZXIoXG4gIC8vIDxTdHJpY3RNb2RlPlxuICA8UmVjb2lsUm9vdD5cbiAgICA8QXBwIC8+XG4gIDwvUmVjb2lsUm9vdD5cblxuICAvLyA8L1N0cmljdE1vZGU+XG4pO1xuIl0sIm5hbWVzIjpbIlJlY29pbFRlYXJpbmciLCJBbGxvd1JldHVyblVuZGVmaW5lZCIsIkFwcCIsImRpdiIsImNsYXNzTmFtZSIsInVzZUVmZmVjdCIsInJlbmRlclVuZGVmaW5lZCIsInVuZGVmaW5lZCIsInVzZVN0YXRlIiwiYXRvbSIsInVzZVJlY29pbFN0YXRlX1RSQU5TSVRJT05fU1VQUE9SVF9VTlNUQUJMRSIsInRleHRTdGF0ZSIsImtleSIsImRlZmF1bHQiLCJjIiwiY29uc29sZSIsImxvZyIsImNvdW50Iiwic2V0Q291bnQiLCJ0ZXh0Iiwic2V0VGV4dCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJSZWFjdERPTSIsIlJlY29pbFJvb3QiLCJyb290IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9