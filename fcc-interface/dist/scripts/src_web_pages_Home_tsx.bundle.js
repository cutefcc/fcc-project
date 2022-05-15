"use strict";
(self["webpackChunkfcc_interface"] = self["webpackChunkfcc_interface"] || []).push([["src_web_pages_Home_tsx"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL3NyY193ZWJfcGFnZXNfSG9tZV90c3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPc0I7QUFDdEIsU0FBU0MsSUFBSSxHQUFHO0lBQ2QscUJBQ0Usd0RBQUNDLEtBQUc7OzBCQUNGLHVEQUFDQyxJQUFFOzBCQUFDLE1BQUk7Y0FBSzswQkFDYix1REFBQ0EsSUFBRTswQkFBRUgsc0RBQVEsRUFBRSxDQUFDSSxJQUFJO2NBQU07O01BQ3RCLENBQ047Q0FDSDtBQUVELGlFQUFlSCxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCaUI7QUFDWTtBQUVqRDtBQUNNLElBQUFNLGFBQWEsR0FBRztJQUNwQkgsSUFBSSxFQUFFLFNBQVM7SUFDZkksR0FBRyxFQUFFLEVBQUU7Q0FDUjtBQUVELHNEQUFzRDtBQUN0RCxJQUFNQyxLQUFLLEdBQUdKLDJEQUFNLENBQ2xCQywrREFBSyxDQUF1QixTQUFDSSxHQUFHO1dBQU0seURBQUtILGFBQWEsQ0FBRTtDQUFDLENBQUMsQ0FDN0Q7QUFDRCxJQUFRUCxRQUFRLEdBQW1DUyxLQUFLLENBQWhEVCxRQUFRLEVBQUVXLFFBQVEsR0FBeUJGLEtBQUssQ0FBdENFLFFBQVEsRUFBRUMsU0FBUyxHQUFjSCxLQUFLLENBQTVCRyxTQUFTLEVBQUVDLE9BQU8sR0FBS0osS0FBSyxDQUFqQkksT0FBTztBQUU5QyxTQUFTQyxXQUFXLEdBQUc7SUFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNCLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsTUFBTTtJQUNOO0lBQ0EsMENBQTBDO0lBQzFDTCxRQUFRLENBQUMsU0FBQ00sS0FBSyxFQUFLO1FBQ2xCQSxLQUFLLENBQUNiLElBQUksR0FBRyxTQUFTLENBQUM7UUFDdkJhLEtBQUssQ0FBQ1QsR0FBRyxHQUFHLEVBQUUsQ0FBQztLQUNoQixDQUFDLENBQUM7Q0FDSjtBQUNELHlCQUF5QjtBQUN6Qix3QkFBd0I7QUFDeEIsTUFBTTtBQUNnRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy93ZWIvcGFnZXMvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9zdG9yZS9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBnZXRTdGF0ZSxcbiAgc2V0U3RhdGUsXG4gIHN1YnNjcmliZSxcbiAgZGVzdHJveSxcbiAgY2hhbmdlU3RhdGUsXG4gIHN0b3JlLFxufSBmcm9tIFwiQHN0b3JlL3N0b3JlXCI7XG5mdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+SG9tZTwvaDI+XG4gICAgICA8aDI+e2dldFN0YXRlKCkubmFtZX08L2gyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IGNyZWF0ZSBmcm9tIFwienVzdGFuZC92YW5pbGxhXCI7XG5pbXBvcnQgeyBpbW1lciB9IGZyb20gXCJ6dXN0YW5kL21pZGRsZXdhcmUvaW1tZXJcIjtcblxuLy8gdGVzdCB6dXN0YW5kL3ZhbmlsbGEg5LiN5L6d6LWWcmVhY3RcbmNvbnN0IERFRkFVTFRfU1RPUkUgPSB7XG4gIG5hbWU6IFwiY3V0ZWZjY1wiLFxuICBhZ2U6IDMxLFxufTtcblxuLy8gY29uc3Qgc3RvcmUgPSBjcmVhdGUoKCkgPT4gKHsgLi4uREVGQVVMVF9TVE9SRSB9KSk7XG5jb25zdCBzdG9yZSA9IGNyZWF0ZShcbiAgaW1tZXI8dHlwZW9mIERFRkFVTFRfU1RPUkU+KChzZXQpID0+ICh7IC4uLkRFRkFVTFRfU1RPUkUgfSkpXG4pO1xuY29uc3QgeyBnZXRTdGF0ZSwgc2V0U3RhdGUsIHN1YnNjcmliZSwgZGVzdHJveSB9ID0gc3RvcmU7XG5cbmZ1bmN0aW9uIGNoYW5nZVN0YXRlKCkge1xuICBjb25zb2xlLmxvZyhcImNoYW5nZVN0YXRlXCIpO1xuICAvLyBzZXRTdGF0ZSh7XG4gIC8vICAgbmFtZTogXCJjdXRlZmNjLW5ld1wiICsgTWF0aC5yYW5kb20oKSxcbiAgLy8gfSk7XG4gIC8vIOi/meagt+WGmSDkvJrop6blj5FSZS1yZW5kZXIg5pivYmFkIGNhc2UsIOW8leWFpXp1c3RhbmQvbWlkZGxld2FyZS9pbW1lciDlsLHlj6/ku6Xop6PlhrPov5nkuKrpl67pophcbiAgLy8gc2V0U3RhdGUoeyBuYW1lOiBcImN1dGVmY2NcIiwgYWdlOiAzMSB9KTtcbiAgc2V0U3RhdGUoKGRyYWZ0KSA9PiB7XG4gICAgZHJhZnQubmFtZSA9IFwiY3V0ZWZjY1wiO1xuICAgIGRyYWZ0LmFnZSA9IDMxO1xuICB9KTtcbn1cbi8vIHN1YnNjcmliZSgoZHJhZnQpID0+IHtcbi8vICAgY29uc29sZS5sb2coZHJhZnQpO1xuLy8gfSk7XG5leHBvcnQgeyBnZXRTdGF0ZSwgc2V0U3RhdGUsIHN1YnNjcmliZSwgZGVzdHJveSwgY2hhbmdlU3RhdGUsIHN0b3JlIH07XG4iXSwibmFtZXMiOlsiZ2V0U3RhdGUiLCJIb21lIiwiZGl2IiwiaDIiLCJuYW1lIiwiY3JlYXRlIiwiaW1tZXIiLCJERUZBVUxUX1NUT1JFIiwiYWdlIiwic3RvcmUiLCJzZXQiLCJzZXRTdGF0ZSIsInN1YnNjcmliZSIsImRlc3Ryb3kiLCJjaGFuZ2VTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJkcmFmdCJdLCJzb3VyY2VSb290IjoiIn0=