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



// const useStore = create(store);
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
/* harmony import */ var _swc_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers */ "./node_modules/.pnpm/@swc+helpers@0.3.13/node_modules/@swc/helpers/src/_extends.js");
/* harmony import */ var zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand/vanilla */ "./node_modules/.pnpm/zustand@4.0.0-rc.1_immer@9.0.12+react@18.1.0/node_modules/zustand/esm/vanilla.js");
/* harmony import */ var zustand_middleware_immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand/middleware/immer */ "./node_modules/.pnpm/zustand@4.0.0-rc.1_immer@9.0.12+react@18.1.0/node_modules/zustand/esm/middleware/immer.js");



// test zustand/vanilla 不依赖react
var DEFAULT_STORE = {
    name: "cutefcc",
    age: 31
};
// const store = create(() => ({ ...DEFAULT_STORE }));
var store = (0,zustand_vanilla__WEBPACK_IMPORTED_MODULE_0__["default"])((0,zustand_middleware_immer__WEBPACK_IMPORTED_MODULE_1__.immer)(function(set) {
    return _swc_helpers__WEBPACK_IMPORTED_MODULE_2__["default"]({}, DEFAULT_STORE);
}));
var getState = store.getState, setState = store.setState, subscribe = store.subscribe, destroy = store.destroy;
function changeState() {
    console.log("changeState");
    // setState({
    //   name: "cutefcc-new" + Math.random(),
    // });
    // 这样写 会触发Re-render 是bad case, 引入zustand/middleware/immer 就可以解决这个问题
    // setState({ name: "cutefcc", age: 31 });
    setState(function(draft) {
        draft.name = "cutefcc";
        draft.age = 31;
    });
}
// subscribe((draft) => {
//   console.log(draft);
// });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL3NyY193ZWJfcGFnZXNfQ291cnNlc190c3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9zQjtBQUVPO0FBQzdCLGtDQUFrQztBQUNsQyxJQUFNRyxRQUFRLEdBQUdELG1EQUFNLENBQUNELCtDQUFLLENBQUM7QUFDOUIsU0FBU0csT0FBTyxHQUFHO0lBQ2pCLElBQU0sSUFBTSxHQUFLRCxRQUFRLEVBQUUsQ0FBbkJFLElBQUk7SUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUVGLElBQUksQ0FBQyxDQUFDO0lBQ3BDLElBQU1HLFFBQVEsR0FBRyxXQUFNO1FBQ3JCLElBQUksSUFBSSxFQUFFO1lBQ1JSLHlEQUFXLEVBQUUsQ0FBQztTQUNmO0tBQ0Y7SUFDRCxxQkFDRSx3REFBQ1MsS0FBRzs7MEJBQ0YsdURBQUNDLElBQUU7MEJBQUMsU0FBTztjQUFLOzBCQUVoQix1REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFSixRQUFROzBCQUFFLGFBQVc7Y0FBUztZQUFBLFFBQ3pDO1lBQUNILElBQUk7O01BQ1AsQ0FDTjtDQUNIO0FBRUQsaUVBQWVELE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJjO0FBQ1k7QUFFakQ7QUFDTSxJQUFBVSxhQUFhLEdBQUc7SUFDcEJULElBQUksRUFBRSxTQUFTO0lBQ2ZVLEdBQUcsRUFBRSxFQUFFO0NBQ1I7QUFFRCxzREFBc0Q7QUFDdEQsSUFBTWQsS0FBSyxHQUFHQywyREFBTSxDQUNsQlcsK0RBQUssQ0FBdUIsU0FBQ0csR0FBRztXQUFNLHlEQUFLRixhQUFhLENBQUU7Q0FBQyxDQUFDLENBQzdEO0FBQ0QsSUFBUUcsUUFBUSxHQUFtQ2hCLEtBQUssQ0FBaERnQixRQUFRLEVBQUVDLFFBQVEsR0FBeUJqQixLQUFLLENBQXRDaUIsUUFBUSxFQUFFQyxTQUFTLEdBQWNsQixLQUFLLENBQTVCa0IsU0FBUyxFQUFFQyxPQUFPLEdBQUtuQixLQUFLLENBQWpCbUIsT0FBTztBQUU5QyxTQUFTcEIsV0FBVyxHQUFHO0lBQ3JCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMzQixhQUFhO0lBQ2IseUNBQXlDO0lBQ3pDLE1BQU07SUFDTjtJQUNBLDBDQUEwQztJQUMxQ1csUUFBUSxDQUFDLFNBQUNHLEtBQUssRUFBSztRQUNsQkEsS0FBSyxDQUFDaEIsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN2QmdCLEtBQUssQ0FBQ04sR0FBRyxHQUFHLEVBQUUsQ0FBQztLQUNoQixDQUFDLENBQUM7Q0FDSjtBQUNELHlCQUF5QjtBQUN6Qix3QkFBd0I7QUFDeEIsTUFBTTtBQUNnRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy93ZWIvcGFnZXMvQ291cnNlcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9zdG9yZS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBnZXRTdGF0ZSxcbiAgc2V0U3RhdGUsXG4gIHN1YnNjcmliZSxcbiAgZGVzdHJveSxcbiAgY2hhbmdlU3RhdGUsXG4gIHN0b3JlLFxufSBmcm9tIFwiQHN0b3JlL3N0b3JlXCI7XG5cbmltcG9ydCBjcmVhdGUgZnJvbSBcInp1c3RhbmRcIjtcbi8vIGNvbnN0IHVzZVN0b3JlID0gY3JlYXRlKHN0b3JlKTtcbmNvbnN0IHVzZVN0b3JlID0gY3JlYXRlKHN0b3JlKTtcbmZ1bmN0aW9uIENvdXJzZXMoKSB7XG4gIGNvbnN0IHsgbmFtZSB9ID0gdXNlU3RvcmUoKTtcbiAgY29uc29sZS5sb2coXCJjb3Vyc2VzIHJlbmRlclwiLCBuYW1lKTtcbiAgY29uc3QgY2hhbmdlRm4gPSAoKSA9PiB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIGNoYW5nZVN0YXRlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+Q291cnNlczwvaDI+XG4gICAgICB7LyogPE91dGxldCAvPiAqL31cbiAgICAgIDxidXR0b24gb25DbGljaz17Y2hhbmdlRm59PmNoYW5nZVN0YXRlPC9idXR0b24+XG4gICAgICBuYW1lOiB7bmFtZX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291cnNlcztcbiIsImltcG9ydCBjcmVhdGUgZnJvbSBcInp1c3RhbmQvdmFuaWxsYVwiO1xuaW1wb3J0IHsgaW1tZXIgfSBmcm9tIFwienVzdGFuZC9taWRkbGV3YXJlL2ltbWVyXCI7XG5cbi8vIHRlc3QgenVzdGFuZC92YW5pbGxhIOS4jeS+nei1lnJlYWN0XG5jb25zdCBERUZBVUxUX1NUT1JFID0ge1xuICBuYW1lOiBcImN1dGVmY2NcIixcbiAgYWdlOiAzMSxcbn07XG5cbi8vIGNvbnN0IHN0b3JlID0gY3JlYXRlKCgpID0+ICh7IC4uLkRFRkFVTFRfU1RPUkUgfSkpO1xuY29uc3Qgc3RvcmUgPSBjcmVhdGUoXG4gIGltbWVyPHR5cGVvZiBERUZBVUxUX1NUT1JFPigoc2V0KSA9PiAoeyAuLi5ERUZBVUxUX1NUT1JFIH0pKVxuKTtcbmNvbnN0IHsgZ2V0U3RhdGUsIHNldFN0YXRlLCBzdWJzY3JpYmUsIGRlc3Ryb3kgfSA9IHN0b3JlO1xuXG5mdW5jdGlvbiBjaGFuZ2VTdGF0ZSgpIHtcbiAgY29uc29sZS5sb2coXCJjaGFuZ2VTdGF0ZVwiKTtcbiAgLy8gc2V0U3RhdGUoe1xuICAvLyAgIG5hbWU6IFwiY3V0ZWZjYy1uZXdcIiArIE1hdGgucmFuZG9tKCksXG4gIC8vIH0pO1xuICAvLyDov5nmoLflhpkg5Lya6Kem5Y+RUmUtcmVuZGVyIOaYr2JhZCBjYXNlLCDlvJXlhaV6dXN0YW5kL21pZGRsZXdhcmUvaW1tZXIg5bCx5Y+v5Lul6Kej5Yaz6L+Z5Liq6Zeu6aKYXG4gIC8vIHNldFN0YXRlKHsgbmFtZTogXCJjdXRlZmNjXCIsIGFnZTogMzEgfSk7XG4gIHNldFN0YXRlKChkcmFmdCkgPT4ge1xuICAgIGRyYWZ0Lm5hbWUgPSBcImN1dGVmY2NcIjtcbiAgICBkcmFmdC5hZ2UgPSAzMTtcbiAgfSk7XG59XG4vLyBzdWJzY3JpYmUoKGRyYWZ0KSA9PiB7XG4vLyAgIGNvbnNvbGUubG9nKGRyYWZ0KTtcbi8vIH0pO1xuZXhwb3J0IHsgZ2V0U3RhdGUsIHNldFN0YXRlLCBzdWJzY3JpYmUsIGRlc3Ryb3ksIGNoYW5nZVN0YXRlLCBzdG9yZSB9O1xuIl0sIm5hbWVzIjpbImNoYW5nZVN0YXRlIiwic3RvcmUiLCJjcmVhdGUiLCJ1c2VTdG9yZSIsIkNvdXJzZXMiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImNoYW5nZUZuIiwiZGl2IiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwiaW1tZXIiLCJERUZBVUxUX1NUT1JFIiwiYWdlIiwic2V0IiwiZ2V0U3RhdGUiLCJzZXRTdGF0ZSIsInN1YnNjcmliZSIsImRlc3Ryb3kiLCJkcmFmdCJdLCJzb3VyY2VSb290IjoiIn0=