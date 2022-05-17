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
/* harmony import */ var _store_testZustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/testZustand */ "./src/web/store/testZustand.ts");
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand */ "./node_modules/.pnpm/zustand@4.0.0-rc.1_immer@9.0.12+react@18.1.0/node_modules/zustand/esm/index.js");



// const useStore = create(store);
var useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_2__["default"])(_store_testZustand__WEBPACK_IMPORTED_MODULE_1__.store);
function Courses() {
    var ref = useStore(), name = ref.name, arr = ref.arr;
    console.log("courses render", name);
    var changeFn = function() {
        if (true) {
            (0,_store_testZustand__WEBPACK_IMPORTED_MODULE_1__.changeState)();
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
            name,
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "arr: ",
                    arr
                ]
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Courses);


/***/ }),

/***/ "./src/web/store/testZustand.ts":
/*!**************************************!*\
  !*** ./src/web/store/testZustand.ts ***!
  \**************************************/
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


// 解决Re-render 问题，当然也可以不用中间件，直接用immer

// test zustand/vanilla 不依赖react
var DEFAULT_STORE = {
    name: "cutefcc",
    age: 31,
    arr: [
        1234
    ]
};
// const store = create(() => ({ ...DEFAULT_STORE }));
// 引入zustand/middleware/immer 就可以解决 Re-render 问题
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
    // 这样写是good case
    setState(function(draft) {
        // immer 的好处，⬇️这样写 只会render 一次
        draft.name = "cutefcc";
        draft.age = 31;
    // 数组也是 zustand 的一个坑，这样会Re-render
    // draft.arr = [1234];
    });
}
// subscribe((draft) => {
//   console.log(draft);
// });
 // 自己写immer 不用zustand 的中间件
 // const useStore = create<{
 //   lush: { forest: { contains: { a: string } } };
 //   clearForest: (data: string) => void;
 // }>((set) => ({
 //   lush: { forest: { contains: { a: "bear" } } },
 //   clearForest: (data: string) =>
 //     set(
 //       produce((state) => {
 //         state.lush.forest.contains.a = data;
 //       })
 //     ),
 // }));


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL3NyY193ZWJfcGFnZXNfQ291cnNlc190c3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU80QjtBQUVDO0FBQzdCLGtDQUFrQztBQUNsQyxJQUFNRyxRQUFRLEdBQUdELG1EQUFNLENBQUNELHFEQUFLLENBQUM7QUFDOUIsU0FBU0csT0FBTyxHQUFHO0lBQ2pCLElBQXNCRCxHQUFVLEdBQVZBLFFBQVEsRUFBRSxFQUF4QkUsSUFBSSxHQUFVRixHQUFVLENBQXhCRSxJQUFJLEVBQUVDLEdBQUcsR0FBS0gsR0FBVSxDQUFsQkcsR0FBRztJQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUVILElBQUksQ0FBQyxDQUFDO0lBQ3BDLElBQU1JLFFBQVEsR0FBRyxXQUFNO1FBQ3JCLElBQUksSUFBSSxFQUFFO1lBQ1JULCtEQUFXLEVBQUUsQ0FBQztTQUNmO0tBQ0Y7SUFDRCxxQkFDRSx3REFBQ1UsS0FBRzs7MEJBQ0YsdURBQUNDLElBQUU7MEJBQUMsU0FBTztjQUFLOzBCQUVoQix1REFBQ0MsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFSixRQUFROzBCQUFFLGFBQVc7Y0FBUztZQUFBLFFBQ3pDO1lBQUNKLElBQUk7MEJBQ1gsd0RBQUNTLEdBQUM7O29CQUFDLE9BQUs7b0JBQUNSLEdBQUc7O2NBQUs7O01BQ2IsQ0FDTjtDQUNIO0FBRUQsaUVBQWVGLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JjO0FBQ3JDO0FBQ2lEO0FBRWpEO0FBQ00sSUFBQVksYUFBYSxHQUFHO0lBQ3BCWCxJQUFJLEVBQUUsU0FBUztJQUNmWSxHQUFHLEVBQUUsRUFBRTtJQUNQWCxHQUFHLEVBQUU7QUFBQyxZQUFJO0tBQUM7Q0FDWjtBQUVELHNEQUFzRDtBQUN0RDtBQUNrQixJQUFaTCxLQUFLLEdBQUdDLDJEQUFNLENBQ2xCYSwrREFBSyxDQUF1QixTQUFDRyxHQUFHO1dBQU0seURBQUtGLGFBQWEsQ0FBRTtDQUFDLENBQUMsQ0FDN0Q7QUFDRCxJQUFRRyxRQUFRLEdBQW1DbEIsS0FBSyxDQUFoRGtCLFFBQVEsRUFBRUMsUUFBUSxHQUF5Qm5CLEtBQUssQ0FBdENtQixRQUFRLEVBQUVDLFNBQVMsR0FBY3BCLEtBQUssQ0FBNUJvQixTQUFTLEVBQUVDLE9BQU8sR0FBS3JCLEtBQUssQ0FBakJxQixPQUFPO0FBRTlDLFNBQVN0QixXQUFXLEdBQUc7SUFDckJPLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNCLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsTUFBTTtJQUNOO0lBQ29DLDBDQUFNO0lBQzFDO0lBQ1FZLFFBQUEsQ0FBQyxTQUFDRyxLQUFLLEVBQUs7UUFDbEI7UUFDMEJBLEtBQXJCLENBQUNsQixJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCa0IsS0FBSyxDQUFDTixHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2Y7SUFDd0Isc0JBQUY7S0FDdkIsQ0FBQyxDQUFDO0NBQ0o7QUFDRCx5QkFBeUI7QUFDekIsd0JBQXdCO0FBQ3hCLE1BQU07QUFDZ0UsQ0FFdEU7Q0FDQSw0QkFBNEI7Q0FDNUIsbURBQW1EO0NBQ25ELHlDQUF5QztDQUN6QyxpQkFBaUI7Q0FDakIsbURBQW1EO0NBQ25ELG1DQUFtQztDQUNuQyxXQUFXO0NBQ1gsNkJBQTZCO0NBQzdCLCtDQUErQztDQUMvQyxXQUFXO0NBQ1gsU0FBUztDQUNULE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd2ViL3BhZ2VzL0NvdXJzZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy93ZWIvc3RvcmUvdGVzdFp1c3RhbmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZ2V0U3RhdGUsXG4gIHNldFN0YXRlLFxuICBzdWJzY3JpYmUsXG4gIGRlc3Ryb3ksXG4gIGNoYW5nZVN0YXRlLFxuICBzdG9yZSxcbn0gZnJvbSBcIkBzdG9yZS90ZXN0WnVzdGFuZFwiO1xuXG5pbXBvcnQgY3JlYXRlIGZyb20gXCJ6dXN0YW5kXCI7XG4vLyBjb25zdCB1c2VTdG9yZSA9IGNyZWF0ZShzdG9yZSk7XG5jb25zdCB1c2VTdG9yZSA9IGNyZWF0ZShzdG9yZSk7XG5mdW5jdGlvbiBDb3Vyc2VzKCkge1xuICBjb25zdCB7IG5hbWUsIGFyciB9ID0gdXNlU3RvcmUoKTtcbiAgY29uc29sZS5sb2coXCJjb3Vyc2VzIHJlbmRlclwiLCBuYW1lKTtcbiAgY29uc3QgY2hhbmdlRm4gPSAoKSA9PiB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIGNoYW5nZVN0YXRlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+Q291cnNlczwvaDI+XG4gICAgICB7LyogPE91dGxldCAvPiAqL31cbiAgICAgIDxidXR0b24gb25DbGljaz17Y2hhbmdlRm59PmNoYW5nZVN0YXRlPC9idXR0b24+XG4gICAgICBuYW1lOiB7bmFtZX1cbiAgICAgIDxwPmFycjoge2Fycn08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdXJzZXM7XG4iLCJpbXBvcnQgY3JlYXRlIGZyb20gXCJ6dXN0YW5kL3ZhbmlsbGFcIjtcbi8vIOino+WGs1JlLXJlbmRlciDpl67popjvvIzlvZPnhLbkuZ/lj6/ku6XkuI3nlKjkuK3pl7Tku7bvvIznm7TmjqXnlKhpbW1lclxuaW1wb3J0IHsgaW1tZXIgfSBmcm9tIFwienVzdGFuZC9taWRkbGV3YXJlL2ltbWVyXCI7XG5cbi8vIHRlc3QgenVzdGFuZC92YW5pbGxhIOS4jeS+nei1lnJlYWN0XG5jb25zdCBERUZBVUxUX1NUT1JFID0ge1xuICBuYW1lOiBcImN1dGVmY2NcIixcbiAgYWdlOiAzMSxcbiAgYXJyOiBbMTIzNF0sXG59O1xuXG4vLyBjb25zdCBzdG9yZSA9IGNyZWF0ZSgoKSA9PiAoeyAuLi5ERUZBVUxUX1NUT1JFIH0pKTtcbi8vIOW8leWFpXp1c3RhbmQvbWlkZGxld2FyZS9pbW1lciDlsLHlj6/ku6Xop6PlhrMgUmUtcmVuZGVyIOmXrumimFxuY29uc3Qgc3RvcmUgPSBjcmVhdGUoXG4gIGltbWVyPHR5cGVvZiBERUZBVUxUX1NUT1JFPigoc2V0KSA9PiAoeyAuLi5ERUZBVUxUX1NUT1JFIH0pKVxuKTtcbmNvbnN0IHsgZ2V0U3RhdGUsIHNldFN0YXRlLCBzdWJzY3JpYmUsIGRlc3Ryb3kgfSA9IHN0b3JlO1xuXG5mdW5jdGlvbiBjaGFuZ2VTdGF0ZSgpIHtcbiAgY29uc29sZS5sb2coXCJjaGFuZ2VTdGF0ZVwiKTtcbiAgLy8gc2V0U3RhdGUoe1xuICAvLyAgIG5hbWU6IFwiY3V0ZWZjYy1uZXdcIiArIE1hdGgucmFuZG9tKCksXG4gIC8vIH0pO1xuICAvLyDov5nmoLflhpkg5Lya6Kem5Y+RUmUtcmVuZGVyIOaYr2JhZCBjYXNlLCDlvJXlhaV6dXN0YW5kL21pZGRsZXdhcmUvaW1tZXIg5bCx5Y+v5Lul6Kej5Yaz6L+Z5Liq6Zeu6aKYXG4gIC8vIHNldFN0YXRlKHsgbmFtZTogXCJjdXRlZmNjXCIsIGFnZTogMzEgfSk7XG4gIC8vIOi/meagt+WGmeaYr2dvb2QgY2FzZVxuICBzZXRTdGF0ZSgoZHJhZnQpID0+IHtcbiAgICAvLyBpbW1lciDnmoTlpb3lpITvvIzirIfvuI/ov5nmoLflhpkg5Y+q5LyacmVuZGVyIOS4gOasoVxuICAgIGRyYWZ0Lm5hbWUgPSBcImN1dGVmY2NcIjtcbiAgICBkcmFmdC5hZ2UgPSAzMTtcbiAgICAvLyDmlbDnu4TkuZ/mmK8genVzdGFuZCDnmoTkuIDkuKrlnZHvvIzov5nmoLfkvJpSZS1yZW5kZXJcbiAgICAvLyBkcmFmdC5hcnIgPSBbMTIzNF07XG4gIH0pO1xufVxuLy8gc3Vic2NyaWJlKChkcmFmdCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhkcmFmdCk7XG4vLyB9KTtcbmV4cG9ydCB7IGdldFN0YXRlLCBzZXRTdGF0ZSwgc3Vic2NyaWJlLCBkZXN0cm95LCBjaGFuZ2VTdGF0ZSwgc3RvcmUgfTtcblxuLy8g6Ieq5bex5YaZaW1tZXIg5LiN55SoenVzdGFuZCDnmoTkuK3pl7Tku7Zcbi8vIGNvbnN0IHVzZVN0b3JlID0gY3JlYXRlPHtcbi8vICAgbHVzaDogeyBmb3Jlc3Q6IHsgY29udGFpbnM6IHsgYTogc3RyaW5nIH0gfSB9O1xuLy8gICBjbGVhckZvcmVzdDogKGRhdGE6IHN0cmluZykgPT4gdm9pZDtcbi8vIH0+KChzZXQpID0+ICh7XG4vLyAgIGx1c2g6IHsgZm9yZXN0OiB7IGNvbnRhaW5zOiB7IGE6IFwiYmVhclwiIH0gfSB9LFxuLy8gICBjbGVhckZvcmVzdDogKGRhdGE6IHN0cmluZykgPT5cbi8vICAgICBzZXQoXG4vLyAgICAgICBwcm9kdWNlKChzdGF0ZSkgPT4ge1xuLy8gICAgICAgICBzdGF0ZS5sdXNoLmZvcmVzdC5jb250YWlucy5hID0gZGF0YTtcbi8vICAgICAgIH0pXG4vLyAgICAgKSxcbi8vIH0pKTtcbiJdLCJuYW1lcyI6WyJjaGFuZ2VTdGF0ZSIsInN0b3JlIiwiY3JlYXRlIiwidXNlU3RvcmUiLCJDb3Vyc2VzIiwibmFtZSIsImFyciIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VGbiIsImRpdiIsImgyIiwiYnV0dG9uIiwib25DbGljayIsInAiLCJpbW1lciIsIkRFRkFVTFRfU1RPUkUiLCJhZ2UiLCJzZXQiLCJnZXRTdGF0ZSIsInNldFN0YXRlIiwic3Vic2NyaWJlIiwiZGVzdHJveSIsImRyYWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==