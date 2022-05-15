"use strict";
(self["webpackChunkfcc_interface"] = self["webpackChunkfcc_interface"] || []).push([["src_web_pages_Home_tsx"],{

/***/ "./node_modules/.pnpm/@swc+helpers@0.3.13/node_modules/@swc/helpers/src/_extends.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/.pnpm/@swc+helpers@0.3.13/node_modules/@swc/helpers/src/_extends.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function extends_() {
  extends_ = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return extends_.apply(this, arguments);
}

function _extends() {
  return extends_.apply(this, arguments);
}


/***/ }),

/***/ "./src/web/pages/Home.tsx":
/*!********************************!*\
  !*** ./src/web/pages/Home.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/store */ "./src/web/store/store.ts");


function Home() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                children: "Home"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                children: (0,_store_store__WEBPACK_IMPORTED_MODULE_1__.getState)().name
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ "./src/web/store/store.ts":
/*!********************************!*\
  !*** ./src/web/store/store.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeState": () => (/* binding */ changeState),
/* harmony export */   "destroy": () => (/* binding */ destroy),
/* harmony export */   "getState": () => (/* binding */ getState),
/* harmony export */   "setState": () => (/* binding */ setState),
/* harmony export */   "store": () => (/* binding */ store),
/* harmony export */   "subscribe": () => (/* binding */ subscribe)
/* harmony export */ });
/* harmony import */ var _swc_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers */ "./node_modules/.pnpm/@swc+helpers@0.3.13/node_modules/@swc/helpers/src/_extends.js");
/* harmony import */ var zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand/vanilla */ "./node_modules/.pnpm/zustand@4.0.0-rc.1_immer@9.0.12+react@18.1.0/node_modules/zustand/esm/vanilla.js");


// test zustand/vanilla 不依赖react
var DEFAULT_STORE = {
    name: "cutefcc",
    age: 31
};
var store = (0,zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__["default"])(function() {
    return _swc_helpers__WEBPACK_IMPORTED_MODULE_1__["default"]({}, DEFAULT_STORE);
});
var getState = store.getState, setState = store.setState, subscribe = store.subscribe, destroy = store.destroy;
function changeState() {
    setState({
        name: "cutefcc-new" + Math.random()
    });
}
// subscribe((draft) => {
//   console.log(draft);
// });



/***/ }),

/***/ "./node_modules/.pnpm/zustand@4.0.0-rc.1_immer@9.0.12+react@18.1.0/node_modules/zustand/esm/vanilla.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/zustand@4.0.0-rc.1_immer@9.0.12+react@18.1.0/node_modules/zustand/esm/vanilla.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createStore)
/* harmony export */ });
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (nextState !== state) {
      const previousState = state;
      state = replace ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => listeners.clear();
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;




/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL3NyY193ZWJfcGFnZXNfSG9tZV90c3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnNCO0FBQ3RCLFNBQVNDLElBQUksR0FBRztJQUNkLHFCQUNFLHdEQUFDQyxLQUFHOzswQkFDRix1REFBQ0MsSUFBRTswQkFBQyxNQUFJO2NBQUs7MEJBQ2IsdURBQUNBLElBQUU7MEJBQUVILHNEQUFRLEVBQUUsQ0FBQ0ksSUFBSTtjQUFNOztNQUN0QixDQUNOO0NBQ0g7QUFFRCxpRUFBZUgsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJwQjtBQUFxQztBQUNyQztBQUNBLElBQU1LLGFBQWEsR0FBRztJQUNwQkYsSUFBSSxFQUFFLFNBQVM7SUFDZkcsR0FBRyxFQUFFLEVBQUU7Q0FDUjtBQUVELElBQU1DLEtBQUssR0FBR0gsMkRBQU0sQ0FBQztXQUFPLHlEQUFLQyxhQUFhLENBQUU7Q0FBQyxDQUFDO0FBQ2xELElBQVFOLFFBQVEsR0FBbUNRLEtBQUssQ0FBaERSLFFBQVEsRUFBRVMsUUFBUSxHQUF5QkQsS0FBSyxDQUF0Q0MsUUFBUSxFQUFFQyxTQUFTLEdBQWNGLEtBQUssQ0FBNUJFLFNBQVMsRUFBRUMsT0FBTyxHQUFLSCxLQUFLLENBQWpCRyxPQUFPO0FBRTlDLFNBQVNDLFdBQVcsR0FBRztJQUNyQkgsUUFBUSxDQUFDO1FBQ1BMLElBQUksRUFBRSxhQUFhLEdBQUdTLElBQUksQ0FBQ0MsTUFBTSxFQUFFO0tBQ3BDLENBQUMsQ0FBQztDQUNKO0FBQ0QseUJBQXlCO0FBQ3pCLHdCQUF3QjtBQUN4QixNQUFNO0FBQ2dFOzs7Ozs7Ozs7Ozs7Ozs7QUNsQnRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFa0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0vQHN3YytoZWxwZXJzQDAuMy4xMy9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViL3BhZ2VzL0hvbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy93ZWIvc3RvcmUvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3p1c3RhbmRANC4wLjAtcmMuMV9pbW1lckA5LjAuMTIrcmVhY3RAMTguMS4wL25vZGVfbW9kdWxlcy96dXN0YW5kL2VzbS92YW5pbGxhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGV4dGVuZHNfKCkge1xuICBleHRlbmRzXyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIGV4dGVuZHNfLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICByZXR1cm4gZXh0ZW5kc18uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbiIsImltcG9ydCB7XG4gIGdldFN0YXRlLFxuICBzZXRTdGF0ZSxcbiAgc3Vic2NyaWJlLFxuICBkZXN0cm95LFxuICBjaGFuZ2VTdGF0ZSxcbiAgc3RvcmUsXG59IGZyb20gXCJAc3RvcmUvc3RvcmVcIjtcbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5Ib21lPC9oMj5cbiAgICAgIDxoMj57Z2V0U3RhdGUoKS5uYW1lfTwvaDI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgY3JlYXRlIGZyb20gXCJ6dXN0YW5kL3ZhbmlsbGFcIjtcbi8vIHRlc3QgenVzdGFuZC92YW5pbGxhIOS4jeS+nei1lnJlYWN0XG5jb25zdCBERUZBVUxUX1NUT1JFID0ge1xuICBuYW1lOiBcImN1dGVmY2NcIixcbiAgYWdlOiAzMSxcbn07XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlKCgpID0+ICh7IC4uLkRFRkFVTFRfU1RPUkUgfSkpO1xuY29uc3QgeyBnZXRTdGF0ZSwgc2V0U3RhdGUsIHN1YnNjcmliZSwgZGVzdHJveSB9ID0gc3RvcmU7XG5cbmZ1bmN0aW9uIGNoYW5nZVN0YXRlKCkge1xuICBzZXRTdGF0ZSh7XG4gICAgbmFtZTogXCJjdXRlZmNjLW5ld1wiICsgTWF0aC5yYW5kb20oKSxcbiAgfSk7XG59XG4vLyBzdWJzY3JpYmUoKGRyYWZ0KSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGRyYWZ0KTtcbi8vIH0pO1xuZXhwb3J0IHsgZ2V0U3RhdGUsIHNldFN0YXRlLCBzdWJzY3JpYmUsIGRlc3Ryb3ksIGNoYW5nZVN0YXRlLCBzdG9yZSB9O1xuIiwiY29uc3QgY3JlYXRlU3RvcmVJbXBsID0gKGNyZWF0ZVN0YXRlKSA9PiB7XG4gIGxldCBzdGF0ZTtcbiAgY29uc3QgbGlzdGVuZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbiAgY29uc3Qgc2V0U3RhdGUgPSAocGFydGlhbCwgcmVwbGFjZSkgPT4ge1xuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHR5cGVvZiBwYXJ0aWFsID09PSBcImZ1bmN0aW9uXCIgPyBwYXJ0aWFsKHN0YXRlKSA6IHBhcnRpYWw7XG4gICAgaWYgKG5leHRTdGF0ZSAhPT0gc3RhdGUpIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzU3RhdGUgPSBzdGF0ZTtcbiAgICAgIHN0YXRlID0gcmVwbGFjZSA/IG5leHRTdGF0ZSA6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXh0U3RhdGUpO1xuICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcihzdGF0ZSwgcHJldmlvdXNTdGF0ZSkpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiBzdGF0ZTtcbiAgY29uc3Qgc3Vic2NyaWJlID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgcmV0dXJuICgpID0+IGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xuICB9O1xuICBjb25zdCBkZXN0cm95ID0gKCkgPT4gbGlzdGVuZXJzLmNsZWFyKCk7XG4gIGNvbnN0IGFwaSA9IHsgc2V0U3RhdGUsIGdldFN0YXRlLCBzdWJzY3JpYmUsIGRlc3Ryb3kgfTtcbiAgc3RhdGUgPSBjcmVhdGVTdGF0ZShzZXRTdGF0ZSwgZ2V0U3RhdGUsIGFwaSk7XG4gIHJldHVybiBhcGk7XG59O1xuY29uc3QgY3JlYXRlU3RvcmUgPSAoY3JlYXRlU3RhdGUpID0+IGNyZWF0ZVN0YXRlID8gY3JlYXRlU3RvcmVJbXBsKGNyZWF0ZVN0YXRlKSA6IGNyZWF0ZVN0b3JlSW1wbDtcblxuZXhwb3J0IHsgY3JlYXRlU3RvcmUgYXMgZGVmYXVsdCB9O1xuIl0sIm5hbWVzIjpbImdldFN0YXRlIiwiSG9tZSIsImRpdiIsImgyIiwibmFtZSIsImNyZWF0ZSIsIkRFRkFVTFRfU1RPUkUiLCJhZ2UiLCJzdG9yZSIsInNldFN0YXRlIiwic3Vic2NyaWJlIiwiZGVzdHJveSIsImNoYW5nZVN0YXRlIiwiTWF0aCIsInJhbmRvbSJdLCJzb3VyY2VSb290IjoiIn0=