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
/* harmony import */ var _store_testZustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/testZustand */ "./src/web/store/testZustand.ts");


function Home() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                children: "Home"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                children: (0,_store_testZustand__WEBPACK_IMPORTED_MODULE_1__.getState)().name
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


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


/***/ }),

/***/ "./node_modules/.pnpm/zustand@4.0.0-rc.1_immer@9.0.12+react@18.1.0/node_modules/zustand/esm/middleware/immer.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/zustand@4.0.0-rc.1_immer@9.0.12+react@18.1.0/node_modules/zustand/esm/middleware/immer.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "immer": () => (/* binding */ immer)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/.pnpm/immer@9.0.12/node_modules/immer/dist/immer.esm.js");


const immerImpl = (initializer) => (set, get, store) => {
  store.setState = (updater, replace, ...a) => {
    const nextState = typeof updater === "function" ? (0,immer__WEBPACK_IMPORTED_MODULE_0__.produce)(updater) : updater;
    return set(nextState, replace, ...a);
  };
  return initializer(store.setState, get, store);
};
const immer = immerImpl;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL3NyY193ZWJfcGFnZXNfSG9tZV90c3guYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFPNEI7QUFDNUIsU0FBU0MsSUFBSSxHQUFHO0lBQ2QscUJBQ0Usd0RBQUNDLEtBQUc7OzBCQUNGLHVEQUFDQyxJQUFFOzBCQUFDLE1BQUk7Y0FBSzswQkFDYix1REFBQ0EsSUFBRTswQkFBRUgsNERBQVEsRUFBRSxDQUFDSSxJQUFJO2NBQU07O01BQ3RCLENBQ047Q0FDSDtBQUVELGlFQUFlSCxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCaUI7QUFDckM7QUFDaUQ7QUFFakQ7QUFDTSxJQUFBTSxhQUFhLEdBQUc7SUFDcEJILElBQUksRUFBRSxTQUFTO0lBQ2ZJLEdBQUcsRUFBRSxFQUFFO0lBQ1BDLEdBQUcsRUFBRTtBQUFDLFlBQUk7S0FBQztDQUNaO0FBRUQsc0RBQXNEO0FBQ3REO0FBQ2tCLElBQVpDLEtBQUssR0FBR0wsMkRBQU0sQ0FDbEJDLCtEQUFLLENBQXVCLFNBQUNLLEdBQUc7V0FBTSx5REFBS0osYUFBYSxDQUFFO0NBQUMsQ0FBQyxDQUM3RDtBQUNELElBQVFQLFFBQVEsR0FBbUNVLEtBQUssQ0FBaERWLFFBQVEsRUFBRVksUUFBUSxHQUF5QkYsS0FBSyxDQUF0Q0UsUUFBUSxFQUFFQyxTQUFTLEdBQWNILEtBQUssQ0FBNUJHLFNBQVMsRUFBRUMsT0FBTyxHQUFLSixLQUFLLENBQWpCSSxPQUFPO0FBRTlDLFNBQVNDLFdBQVcsR0FBRztJQUNyQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0IsYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxNQUFNO0lBQ047SUFDb0MsMENBQU07SUFDMUM7SUFDUUwsUUFBQSxDQUFDLFNBQUNNLEtBQUssRUFBSztRQUNsQjtRQUMwQkEsS0FBckIsQ0FBQ2QsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUN2QmMsS0FBSyxDQUFDVixHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2Y7SUFDd0Isc0JBQUY7S0FDdkIsQ0FBQyxDQUFDO0NBQ0o7QUFDRCx5QkFBeUI7QUFDekIsd0JBQXdCO0FBQ3hCLE1BQU07QUFDZ0UsQ0FFdEU7Q0FDQSw0QkFBNEI7Q0FDNUIsbURBQW1EO0NBQ25ELHlDQUF5QztDQUN6QyxpQkFBaUI7Q0FDakIsbURBQW1EO0NBQ25ELG1DQUFtQztDQUNuQyxXQUFXO0NBQ1gsNkJBQTZCO0NBQzdCLCtDQUErQztDQUMvQyxXQUFXO0NBQ1gsU0FBUztDQUNULE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRHlCOztBQUVoQztBQUNBO0FBQ0Esc0RBQXNELDhDQUFPO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlCOzs7Ozs7Ozs7Ozs7Ozs7QUNYakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVrQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ucG5wbS9Ac3djK2hlbHBlcnNAMC4zLjEzL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvc3JjL19leHRlbmRzLmpzIiwid2VicGFjazovLy8uL3NyYy93ZWIvcGFnZXMvSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9zdG9yZS90ZXN0WnVzdGFuZC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLnBucG0venVzdGFuZEA0LjAuMC1yYy4xX2ltbWVyQDkuMC4xMityZWFjdEAxOC4xLjAvbm9kZV9tb2R1bGVzL3p1c3RhbmQvZXNtL21pZGRsZXdhcmUvaW1tZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3p1c3RhbmRANC4wLjAtcmMuMV9pbW1lckA5LjAuMTIrcmVhY3RAMTguMS4wL25vZGVfbW9kdWxlcy96dXN0YW5kL2VzbS92YW5pbGxhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGV4dGVuZHNfKCkge1xuICBleHRlbmRzXyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIGV4dGVuZHNfLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICByZXR1cm4gZXh0ZW5kc18uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbiIsImltcG9ydCB7XG4gIGdldFN0YXRlLFxuICBzZXRTdGF0ZSxcbiAgc3Vic2NyaWJlLFxuICBkZXN0cm95LFxuICBjaGFuZ2VTdGF0ZSxcbiAgc3RvcmUsXG59IGZyb20gXCJAc3RvcmUvdGVzdFp1c3RhbmRcIjtcbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5Ib21lPC9oMj5cbiAgICAgIDxoMj57Z2V0U3RhdGUoKS5uYW1lfTwvaDI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCJpbXBvcnQgY3JlYXRlIGZyb20gXCJ6dXN0YW5kL3ZhbmlsbGFcIjtcbi8vIOino+WGs1JlLXJlbmRlciDpl67popjvvIzlvZPnhLbkuZ/lj6/ku6XkuI3nlKjkuK3pl7Tku7bvvIznm7TmjqXnlKhpbW1lclxuaW1wb3J0IHsgaW1tZXIgfSBmcm9tIFwienVzdGFuZC9taWRkbGV3YXJlL2ltbWVyXCI7XG5cbi8vIHRlc3QgenVzdGFuZC92YW5pbGxhIOS4jeS+nei1lnJlYWN0XG5jb25zdCBERUZBVUxUX1NUT1JFID0ge1xuICBuYW1lOiBcImN1dGVmY2NcIixcbiAgYWdlOiAzMSxcbiAgYXJyOiBbMTIzNF0sXG59O1xuXG4vLyBjb25zdCBzdG9yZSA9IGNyZWF0ZSgoKSA9PiAoeyAuLi5ERUZBVUxUX1NUT1JFIH0pKTtcbi8vIOW8leWFpXp1c3RhbmQvbWlkZGxld2FyZS9pbW1lciDlsLHlj6/ku6Xop6PlhrMgUmUtcmVuZGVyIOmXrumimFxuY29uc3Qgc3RvcmUgPSBjcmVhdGUoXG4gIGltbWVyPHR5cGVvZiBERUZBVUxUX1NUT1JFPigoc2V0KSA9PiAoeyAuLi5ERUZBVUxUX1NUT1JFIH0pKVxuKTtcbmNvbnN0IHsgZ2V0U3RhdGUsIHNldFN0YXRlLCBzdWJzY3JpYmUsIGRlc3Ryb3kgfSA9IHN0b3JlO1xuXG5mdW5jdGlvbiBjaGFuZ2VTdGF0ZSgpIHtcbiAgY29uc29sZS5sb2coXCJjaGFuZ2VTdGF0ZVwiKTtcbiAgLy8gc2V0U3RhdGUoe1xuICAvLyAgIG5hbWU6IFwiY3V0ZWZjYy1uZXdcIiArIE1hdGgucmFuZG9tKCksXG4gIC8vIH0pO1xuICAvLyDov5nmoLflhpkg5Lya6Kem5Y+RUmUtcmVuZGVyIOaYr2JhZCBjYXNlLCDlvJXlhaV6dXN0YW5kL21pZGRsZXdhcmUvaW1tZXIg5bCx5Y+v5Lul6Kej5Yaz6L+Z5Liq6Zeu6aKYXG4gIC8vIHNldFN0YXRlKHsgbmFtZTogXCJjdXRlZmNjXCIsIGFnZTogMzEgfSk7XG4gIC8vIOi/meagt+WGmeaYr2dvb2QgY2FzZVxuICBzZXRTdGF0ZSgoZHJhZnQpID0+IHtcbiAgICAvLyBpbW1lciDnmoTlpb3lpITvvIzirIfvuI/ov5nmoLflhpkg5Y+q5LyacmVuZGVyIOS4gOasoVxuICAgIGRyYWZ0Lm5hbWUgPSBcImN1dGVmY2NcIjtcbiAgICBkcmFmdC5hZ2UgPSAzMTtcbiAgICAvLyDmlbDnu4TkuZ/mmK8genVzdGFuZCDnmoTkuIDkuKrlnZHvvIzov5nmoLfkvJpSZS1yZW5kZXJcbiAgICAvLyBkcmFmdC5hcnIgPSBbMTIzNF07XG4gIH0pO1xufVxuLy8gc3Vic2NyaWJlKChkcmFmdCkgPT4ge1xuLy8gICBjb25zb2xlLmxvZyhkcmFmdCk7XG4vLyB9KTtcbmV4cG9ydCB7IGdldFN0YXRlLCBzZXRTdGF0ZSwgc3Vic2NyaWJlLCBkZXN0cm95LCBjaGFuZ2VTdGF0ZSwgc3RvcmUgfTtcblxuLy8g6Ieq5bex5YaZaW1tZXIg5LiN55SoenVzdGFuZCDnmoTkuK3pl7Tku7Zcbi8vIGNvbnN0IHVzZVN0b3JlID0gY3JlYXRlPHtcbi8vICAgbHVzaDogeyBmb3Jlc3Q6IHsgY29udGFpbnM6IHsgYTogc3RyaW5nIH0gfSB9O1xuLy8gICBjbGVhckZvcmVzdDogKGRhdGE6IHN0cmluZykgPT4gdm9pZDtcbi8vIH0+KChzZXQpID0+ICh7XG4vLyAgIGx1c2g6IHsgZm9yZXN0OiB7IGNvbnRhaW5zOiB7IGE6IFwiYmVhclwiIH0gfSB9LFxuLy8gICBjbGVhckZvcmVzdDogKGRhdGE6IHN0cmluZykgPT5cbi8vICAgICBzZXQoXG4vLyAgICAgICBwcm9kdWNlKChzdGF0ZSkgPT4ge1xuLy8gICAgICAgICBzdGF0ZS5sdXNoLmZvcmVzdC5jb250YWlucy5hID0gZGF0YTtcbi8vICAgICAgIH0pXG4vLyAgICAgKSxcbi8vIH0pKTtcbiIsImltcG9ydCB7IHByb2R1Y2UgfSBmcm9tICdpbW1lcic7XG5cbmNvbnN0IGltbWVySW1wbCA9IChpbml0aWFsaXplcikgPT4gKHNldCwgZ2V0LCBzdG9yZSkgPT4ge1xuICBzdG9yZS5zZXRTdGF0ZSA9ICh1cGRhdGVyLCByZXBsYWNlLCAuLi5hKSA9PiB7XG4gICAgY29uc3QgbmV4dFN0YXRlID0gdHlwZW9mIHVwZGF0ZXIgPT09IFwiZnVuY3Rpb25cIiA/IHByb2R1Y2UodXBkYXRlcikgOiB1cGRhdGVyO1xuICAgIHJldHVybiBzZXQobmV4dFN0YXRlLCByZXBsYWNlLCAuLi5hKTtcbiAgfTtcbiAgcmV0dXJuIGluaXRpYWxpemVyKHN0b3JlLnNldFN0YXRlLCBnZXQsIHN0b3JlKTtcbn07XG5jb25zdCBpbW1lciA9IGltbWVySW1wbDtcblxuZXhwb3J0IHsgaW1tZXIgfTtcbiIsImNvbnN0IGNyZWF0ZVN0b3JlSW1wbCA9IChjcmVhdGVTdGF0ZSkgPT4ge1xuICBsZXQgc3RhdGU7XG4gIGNvbnN0IGxpc3RlbmVycyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGNvbnN0IHNldFN0YXRlID0gKHBhcnRpYWwsIHJlcGxhY2UpID0+IHtcbiAgICBjb25zdCBuZXh0U3RhdGUgPSB0eXBlb2YgcGFydGlhbCA9PT0gXCJmdW5jdGlvblwiID8gcGFydGlhbChzdGF0ZSkgOiBwYXJ0aWFsO1xuICAgIGlmIChuZXh0U3RhdGUgIT09IHN0YXRlKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1N0YXRlID0gc3RhdGU7XG4gICAgICBzdGF0ZSA9IHJlcGxhY2UgPyBuZXh0U3RhdGUgOiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgbmV4dFN0YXRlKTtcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoc3RhdGUsIHByZXZpb3VzU3RhdGUpKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdldFN0YXRlID0gKCkgPT4gc3RhdGU7XG4gIGNvbnN0IHN1YnNjcmliZSA9IChsaXN0ZW5lcikgPT4ge1xuICAgIGxpc3RlbmVycy5hZGQobGlzdGVuZXIpO1xuICAgIHJldHVybiAoKSA9PiBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgfTtcbiAgY29uc3QgZGVzdHJveSA9ICgpID0+IGxpc3RlbmVycy5jbGVhcigpO1xuICBjb25zdCBhcGkgPSB7IHNldFN0YXRlLCBnZXRTdGF0ZSwgc3Vic2NyaWJlLCBkZXN0cm95IH07XG4gIHN0YXRlID0gY3JlYXRlU3RhdGUoc2V0U3RhdGUsIGdldFN0YXRlLCBhcGkpO1xuICByZXR1cm4gYXBpO1xufTtcbmNvbnN0IGNyZWF0ZVN0b3JlID0gKGNyZWF0ZVN0YXRlKSA9PiBjcmVhdGVTdGF0ZSA/IGNyZWF0ZVN0b3JlSW1wbChjcmVhdGVTdGF0ZSkgOiBjcmVhdGVTdG9yZUltcGw7XG5cbmV4cG9ydCB7IGNyZWF0ZVN0b3JlIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6WyJnZXRTdGF0ZSIsIkhvbWUiLCJkaXYiLCJoMiIsIm5hbWUiLCJjcmVhdGUiLCJpbW1lciIsIkRFRkFVTFRfU1RPUkUiLCJhZ2UiLCJhcnIiLCJzdG9yZSIsInNldCIsInNldFN0YXRlIiwic3Vic2NyaWJlIiwiZGVzdHJveSIsImNoYW5nZVN0YXRlIiwiY29uc29sZSIsImxvZyIsImRyYWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==