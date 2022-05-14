"use strict";
(self["webpackChunkfcc_interface"] = self["webpackChunkfcc_interface"] || []).push([["main"],{

/***/ "./src/web/index.tsx":
/*!***************************!*\
  !*** ./src/web/index.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/.pnpm/react-dom@18.1.0_react@18.1.0/node_modules/react-dom/client.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/.pnpm/recoil@0.7.3-alpha.2_ef5jwxihqo6n7gxfmzogljlgcm/node_modules/recoil/es/recoil.js");
/* harmony import */ var _pages_Tearing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/Tearing */ "./src/web/pages/Tearing.tsx");

// import { StrictMode } from "react";



var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render(// <StrictMode>
/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recoil__WEBPACK_IMPORTED_MODULE_2__.RecoilRoot, {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_Tearing__WEBPACK_IMPORTED_MODULE_3__["default"], {})
}));


/***/ }),

/***/ "./src/web/pages/Tearing.tsx":
/*!***********************************!*\
  !*** ./src/web/pages/Tearing.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tearing)
/* harmony export */ });
/* harmony import */ var _swc_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers */ "./node_modules/.pnpm/@swc+helpers@0.3.13/node_modules/@swc/helpers/src/_to_consumable_array.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var externalState = {
    counter: 0
};
var listeners = [];
function dispatch(action) {
    if (action.type === "increment") {
        externalState = {
            counter: externalState.counter + 1
        };
    } else {
        throw Error("Unknown action");
    }
    listeners.forEach(function(fn) {
        return fn();
    });
}
function subscribe(fn) {
    listeners = _swc_helpers__WEBPACK_IMPORTED_MODULE_2__["default"](listeners).concat([
        fn
    ]);
    return function() {
        listeners = listeners.filter(function(f) {
            return f !== fn;
        });
    };
}
function useExternalData() {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(externalState), state = ref[0], setState = ref[1];
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {
        var handleChange = function() {
            return setState(externalState);
        };
        var unsubscribe = subscribe(handleChange);
        return unsubscribe;
    }, []);
    return state;
}
setInterval(function() {
    dispatch({
        type: "increment"
    });
}, 50);
function Tearing() {
    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), show = ref[0], setShow = ref[1];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "App",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: function() {
                    (0,react__WEBPACK_IMPORTED_MODULE_1__.startTransition)(function() {
                        setShow(!show);
                    });
                },
                children: "toggle content"
            }),
            show && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SlowComponent, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SlowComponent, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SlowComponent, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SlowComponent, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SlowComponent, {})
                ]
            })
        ]
    });
};
function SlowComponent() {
    var now = performance.now();
    while(performance.now() - now < 200){
    // do nothing
    }
    var state = useExternalData();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
        children: [
            "Counter: ",
            state.counter
        ]
    });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_pnpm_swc_helpers_0_3_13_node_modules_swc_helpers_src__to_consumable_arra-d993a6"], () => (__webpack_exec__("./src/web/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsR0FBR0MsV0FBVyxDQUFDRCxHQUFHLEVBQUU7SUFDM0IsTUFBT0MsV0FBVyxDQUFDRCxHQUFHLEVBQUUsR0FBR0EsR0FBRyxHQUFHLEdBQUcsQ0FBRTtJQUNwQyxhQUFhO0tBQ2Q7SUFDRCxJQUFNWixLQUFLLEdBQUdELGVBQWUsRUFBRTtJQUMvQixxQkFBTyx3REFBQ2UsSUFBRTs7WUFBQyxXQUFTO1lBQUNkLEtBQUssQ0FBQ1osT0FBTzs7TUFBTSxDQUFDO0NBQzFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9wYWdlcy9UZWFyaW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBTdHJpY3RNb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tIFwicmVjb2lsXCI7XG4vLyBpbXBvcnQgeyBmbk5vcm1hbFRhc2sgfSBmcm9tIFwiQG1tZmNjL2hvbWVcIjtcbi8vIGltcG9ydCB7IHVzZUFzeW5jRm4gfSBmcm9tIFwiQG1tZmNjL2hvb2tzXCI7XG5pbXBvcnQgQXBwIGZyb20gXCJAcGFnZXMvQXBwXCI7XG5pbXBvcnQgVGVhcmluZyBmcm9tIFwiQHBhZ2VzL1RlYXJpbmdcIjtcblxuY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSBhcyBIVE1MRWxlbWVudFxuKTtcbnJvb3QucmVuZGVyKFxuICAvLyA8U3RyaWN0TW9kZT5cbiAgPFJlY29pbFJvb3Q+XG4gICAgey8qIDxBcHAgLz4gKi99XG4gICAgPFRlYXJpbmcgLz5cbiAgPC9SZWNvaWxSb290PlxuXG4gIC8vIDwvU3RyaWN0TW9kZT5cbik7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBzdGFydFRyYW5zaXRpb24gfSBmcm9tIFwicmVhY3RcIjtcblxubGV0IGV4dGVybmFsU3RhdGUgPSB7IGNvdW50ZXI6IDAgfTtcbmxldCBsaXN0ZW5lcnM6IGFueVtdID0gW107XG5cbmZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbjogeyB0eXBlOiBhbnkgfSkge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiaW5jcmVtZW50XCIpIHtcbiAgICBleHRlcm5hbFN0YXRlID0geyBjb3VudGVyOiBleHRlcm5hbFN0YXRlLmNvdW50ZXIgKyAxIH07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgRXJyb3IoXCJVbmtub3duIGFjdGlvblwiKTtcbiAgfVxuICBsaXN0ZW5lcnMuZm9yRWFjaCgoZm4pID0+IGZuKCkpO1xufVxuXG5mdW5jdGlvbiBzdWJzY3JpYmUoZm46ICgpID0+IHZvaWQpIHtcbiAgbGlzdGVuZXJzID0gWy4uLmxpc3RlbmVycywgZm5dO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKGYpID0+IGYgIT09IGZuKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlRXh0ZXJuYWxEYXRhKCkge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKGV4dGVybmFsU3RhdGUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpID0+IHNldFN0YXRlKGV4dGVybmFsU3RhdGUpO1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGhhbmRsZUNoYW5nZSk7XG4gICAgcmV0dXJuIHVuc3Vic2NyaWJlO1xuICB9LCBbXSk7XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICBkaXNwYXRjaCh7IHR5cGU6IFwiaW5jcmVtZW50XCIgfSk7XG59LCA1MCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlYXJpbmcoKSB7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgc3RhcnRUcmFuc2l0aW9uKCgpID0+IHtcbiAgICAgICAgICAgIHNldFNob3coIXNob3cpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB0b2dnbGUgY29udGVudFxuICAgICAgPC9idXR0b24+XG4gICAgICB7c2hvdyAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFNsb3dDb21wb25lbnQgLz5cbiAgICAgICAgICA8U2xvd0NvbXBvbmVudCAvPlxuICAgICAgICAgIDxTbG93Q29tcG9uZW50IC8+XG4gICAgICAgICAgPFNsb3dDb21wb25lbnQgLz5cbiAgICAgICAgICA8U2xvd0NvbXBvbmVudCAvPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIFNsb3dDb21wb25lbnQoKSB7XG4gIGxldCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgd2hpbGUgKHBlcmZvcm1hbmNlLm5vdygpIC0gbm93IDwgMjAwKSB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9XG4gIGNvbnN0IHN0YXRlID0gdXNlRXh0ZXJuYWxEYXRhKCk7XG4gIHJldHVybiA8aDM+Q291bnRlcjoge3N0YXRlLmNvdW50ZXJ9PC9oMz47XG59XG4iXSwibmFtZXMiOlsiUmVhY3RET00iLCJSZWNvaWxSb290IiwiVGVhcmluZyIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3RhcnRUcmFuc2l0aW9uIiwiZXh0ZXJuYWxTdGF0ZSIsImNvdW50ZXIiLCJsaXN0ZW5lcnMiLCJkaXNwYXRjaCIsImFjdGlvbiIsInR5cGUiLCJFcnJvciIsImZvckVhY2giLCJmbiIsInN1YnNjcmliZSIsImZpbHRlciIsImYiLCJ1c2VFeHRlcm5hbERhdGEiLCJzdGF0ZSIsInNldFN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwidW5zdWJzY3JpYmUiLCJzZXRJbnRlcnZhbCIsInNob3ciLCJzZXRTaG93IiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIlNsb3dDb21wb25lbnQiLCJub3ciLCJwZXJmb3JtYW5jZSIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==