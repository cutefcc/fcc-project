"use strict";
(self["webpackChunkfcc_interface"] = self["webpackChunkfcc_interface"] || []).push([["src_web_pages_Courses_tsx"],{

/***/ "./src/web/pages/Courses.tsx":
/*!***********************************!*\
  !*** ./src/web/pages/Courses.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/store */ "./src/web/store/store.ts");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand */ "./node_modules/.pnpm/zustand@4.0.0-rc.1_immer@9.0.12+react@18.1.0/node_modules/zustand/esm/index.js");



var useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_2__["default"])(_store_store__WEBPACK_IMPORTED_MODULE_1__.store);
function Courses() {
    var name = useStore().name;
    console.log("courses render", name);
    var changeFn = function() {
        if (true) {
            (0,_store_store__WEBPACK_IMPORTED_MODULE_1__.changeState)();
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                children: "Courses"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: changeFn,
                children: "changeState"
            }),
            "name: ",
            name
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Courses);


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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL3NyY193ZWJfcGFnZXNfQ291cnNlc190c3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3NCO0FBQ087QUFDN0IsSUFBTUcsUUFBUSxHQUFHRCxtREFBTSxDQUFDRCwrQ0FBSyxDQUFDO0FBQzlCLFNBQVNHLE9BQU8sR0FBRztJQUNqQixJQUFNLElBQU0sR0FBS0QsUUFBUSxFQUFFLENBQW5CRSxJQUFJO0lBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGdCQUFnQixFQUFFRixJQUFJLENBQUMsQ0FBQztJQUNwQyxJQUFNRyxRQUFRLEdBQUcsV0FBTTtRQUNyQixJQUFJLElBQUksRUFBRTtZQUNSUix5REFBVyxFQUFFLENBQUM7U0FDZjtLQUNGO0lBQ0QscUJBQ0Usd0RBQUNTLEtBQUc7OzBCQUNGLHVEQUFDQyxJQUFFOzBCQUFDLFNBQU87Y0FBSzswQkFFaEIsdURBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRUosUUFBUTswQkFBRSxhQUFXO2NBQVM7WUFBQSxRQUN6QztZQUFDSCxJQUFJOztNQUNQLENBQ047Q0FDSDtBQUVELGlFQUFlRCxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QnZCO0FBQXFDO0FBQ3JDO0FBQ0EsSUFBTVMsYUFBYSxHQUFHO0lBQ3BCUixJQUFJLEVBQUUsU0FBUztJQUNmUyxHQUFHLEVBQUUsRUFBRTtDQUNSO0FBRUQsSUFBTWIsS0FBSyxHQUFHQywyREFBTSxDQUFDO1dBQU8seURBQUtXLGFBQWEsQ0FBRTtDQUFDLENBQUM7QUFDbEQsSUFBUUUsUUFBUSxHQUFtQ2QsS0FBSyxDQUFoRGMsUUFBUSxFQUFFQyxRQUFRLEdBQXlCZixLQUFLLENBQXRDZSxRQUFRLEVBQUVDLFNBQVMsR0FBY2hCLEtBQUssQ0FBNUJnQixTQUFTLEVBQUVDLE9BQU8sR0FBS2pCLEtBQUssQ0FBakJpQixPQUFPO0FBRTlDLFNBQVNsQixXQUFXLEdBQUc7SUFDckJnQixRQUFRLENBQUM7UUFDUFgsSUFBSSxFQUFFLGFBQWEsR0FBR2MsSUFBSSxDQUFDQyxNQUFNLEVBQUU7S0FDcEMsQ0FBQyxDQUFDO0NBQ0o7QUFDRCx5QkFBeUI7QUFDekIsd0JBQXdCO0FBQ3hCLE1BQU07QUFDZ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2ViL3BhZ2VzL0NvdXJzZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy93ZWIvc3RvcmUvc3RvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZ2V0U3RhdGUsXG4gIHNldFN0YXRlLFxuICBzdWJzY3JpYmUsXG4gIGRlc3Ryb3ksXG4gIGNoYW5nZVN0YXRlLFxuICBzdG9yZSxcbn0gZnJvbSBcIkBzdG9yZS9zdG9yZVwiO1xuaW1wb3J0IGNyZWF0ZSBmcm9tIFwienVzdGFuZFwiO1xuY29uc3QgdXNlU3RvcmUgPSBjcmVhdGUoc3RvcmUpO1xuZnVuY3Rpb24gQ291cnNlcygpIHtcbiAgY29uc3QgeyBuYW1lIH0gPSB1c2VTdG9yZSgpO1xuICBjb25zb2xlLmxvZyhcImNvdXJzZXMgcmVuZGVyXCIsIG5hbWUpO1xuICBjb25zdCBjaGFuZ2VGbiA9ICgpID0+IHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgY2hhbmdlU3RhdGUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5Db3Vyc2VzPC9oMj5cbiAgICAgIHsvKiA8T3V0bGV0IC8+ICovfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjaGFuZ2VGbn0+Y2hhbmdlU3RhdGU8L2J1dHRvbj5cbiAgICAgIG5hbWU6IHtuYW1lfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VzO1xuIiwiaW1wb3J0IGNyZWF0ZSBmcm9tIFwienVzdGFuZC92YW5pbGxhXCI7XG4vLyB0ZXN0IHp1c3RhbmQvdmFuaWxsYSDkuI3kvp3otZZyZWFjdFxuY29uc3QgREVGQVVMVF9TVE9SRSA9IHtcbiAgbmFtZTogXCJjdXRlZmNjXCIsXG4gIGFnZTogMzEsXG59O1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZSgoKSA9PiAoeyAuLi5ERUZBVUxUX1NUT1JFIH0pKTtcbmNvbnN0IHsgZ2V0U3RhdGUsIHNldFN0YXRlLCBzdWJzY3JpYmUsIGRlc3Ryb3kgfSA9IHN0b3JlO1xuXG5mdW5jdGlvbiBjaGFuZ2VTdGF0ZSgpIHtcbiAgc2V0U3RhdGUoe1xuICAgIG5hbWU6IFwiY3V0ZWZjYy1uZXdcIiArIE1hdGgucmFuZG9tKCksXG4gIH0pO1xufVxuLy8gc3Vic2NyaWJlKChkcmFmdCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhkcmFmdCk7XG4vLyB9KTtcbmV4cG9ydCB7IGdldFN0YXRlLCBzZXRTdGF0ZSwgc3Vic2NyaWJlLCBkZXN0cm95LCBjaGFuZ2VTdGF0ZSwgc3RvcmUgfTtcbiJdLCJuYW1lcyI6WyJjaGFuZ2VTdGF0ZSIsInN0b3JlIiwiY3JlYXRlIiwidXNlU3RvcmUiLCJDb3Vyc2VzIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VGbiIsImRpdiIsImgyIiwiYnV0dG9uIiwib25DbGljayIsIkRFRkFVTFRfU1RPUkUiLCJhZ2UiLCJnZXRTdGF0ZSIsInNldFN0YXRlIiwic3Vic2NyaWJlIiwiZGVzdHJveSIsIk1hdGgiLCJyYW5kb20iXSwic291cmNlUm9vdCI6IiJ9