"use strict";
(self["webpackChunkfcc_interface"] = self["webpackChunkfcc_interface"] || []).push([["main"],{

/***/ "./src/web/components/Common/FccHeader.tsx":
/*!*************************************************!*\
  !*** ./src/web/components/Common/FccHeader.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jotai */ "./node_modules/.pnpm/jotai@1.6.6_immer@9.0.12+react@18.1.0/node_modules/jotai/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.3.0_ef5jwxihqo6n7gxfmzogljlgcm/node_modules/react-router-dom/index.js");




var textAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.atom)("hello");
var FccHeader = function() {
    var ref = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(textAtom), uppercase = ref[0];
    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), num = ref1[0], setNum = ref1[1];
    // const init = useCallback(() => {}, []);
    console.log("header - render");
    // console.log('组件初始化🐻...', Math.random());
    //复杂一点 GC
    // useEffect(() => {
    // const init = () => {
    //wasm 计算一个值回来
    // console.log("🐻🍎...", Math.random());
    // };
    // init();
    // }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                to: "/",
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                to: "/courses",
                                children: "Courses"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                to: "/nothing-here",
                                children: "Nothing Here"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                to: "/testJotai",
                                children: "testJotai"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FccHeader);


/***/ }),

/***/ "./src/web/components/Loading/index.tsx":
/*!**********************************************!*\
  !*** ./src/web/components/Loading/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");

var Loading = function() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
                children: "\u52A0\u8F7D\u4E2D..."
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);


/***/ }),

/***/ "./src/web/index.tsx":
/*!***************************!*\
  !*** ./src/web/index.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/.pnpm/react-dom@18.1.0_react@18.1.0/node_modules/react-dom/client.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/.pnpm/recoil@0.7.3-alpha.2_ef5jwxihqo6n7gxfmzogljlgcm/node_modules/recoil/es/recoil.js");
/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/App */ "./src/web/pages/App.tsx");

// import { StrictMode } from "react";


// import { fnNormalTask } from "@mmfcc/home";
// import { useAsyncFn } from "@mmfcc/hooks";

// import Tearing from "@pages/Tearing";
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("root"));
root.render(// <StrictMode>
/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recoil__WEBPACK_IMPORTED_MODULE_2__.RecoilRoot, {
    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_App__WEBPACK_IMPORTED_MODULE_3__["default"], {})
}));


/***/ }),

/***/ "./src/web/layouts/MainLayout.tsx":
/*!****************************************!*\
  !*** ./src/web/layouts/MainLayout.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var _components_Common_FccHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Common/FccHeader */ "./src/web/components/Common/FccHeader.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.3.0_react@18.1.0/node_modules/react-router/index.js");



var MainLayout = function() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Common_FccHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Outlet, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainLayout);


/***/ }),

/***/ "./src/web/pages/App.tsx":
/*!*******************************!*\
  !*** ./src/web/pages/App.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router@6.3.0_react@18.1.0/node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.3.0_ef5jwxihqo6n7gxfmzogljlgcm/node_modules/react-router-dom/index.js");
/* harmony import */ var _routers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routers */ "./src/web/routers/index.tsx");



var App = function() {
    return (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useRoutes)(_routers__WEBPACK_IMPORTED_MODULE_1__["default"]);
};
var AppWrapper = function() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.BrowserRouter, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(App, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppWrapper);


/***/ }),

/***/ "./src/web/pages/TestJotai.tsx":
/*!*************************************!*\
  !*** ./src/web/pages/TestJotai.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jotai */ "./node_modules/.pnpm/jotai@1.6.6_immer@9.0.12+react@18.1.0/node_modules/jotai/esm/index.js");
/* harmony import */ var jotai_immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jotai/immer */ "./node_modules/.pnpm/jotai@1.6.6_immer@9.0.12+react@18.1.0/node_modules/jotai/esm/immer.js");



// const store = atomWithImmer({ str: "init str" });
var store = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.atom)({
    str: "init str"
});
function TestJotai() {
    var ref = (0,jotai_immer__WEBPACK_IMPORTED_MODULE_2__.useImmerAtom)(store), obj = ref[0], setObj = ref[1];
    //   const [obj, setObj] = useAtom(store);
    console.log("TestJotai -- render", obj.str);
    //   const [obj, setObj] = useState({ str: "init str" });
    //   const [obj, setObj] = useAtom(store);
    var changeFn = function() {
        //jotai 👇这样写还是会重复渲染
        // setObj({ str: "init str new" });
        // write like this, why immer not working
        setObj(function(draft) {
            draft.str = "init str new";
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                children: "TestJotai"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                children: [
                    "str: ",
                    obj.str
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                onClick: changeFn,
                children: "changeState"
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestJotai);


/***/ }),

/***/ "./src/web/routers/index.tsx":
/*!***********************************!*\
  !*** ./src/web/routers/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/jsx-runtime.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Loading */ "./src/web/components/Loading/index.tsx");
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @layouts/MainLayout */ "./src/web/layouts/MainLayout.tsx");
/* harmony import */ var _pages_TestJotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/TestJotai */ "./src/web/pages/TestJotai.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.3.0_ef5jwxihqo6n7gxfmzogljlgcm/node_modules/react-router-dom/index.js");

// import FccHeader from "@components/Common/FccHeader";





var Home = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.lazy)(function() {
    return __webpack_require__.e(/*! import() */ "src_web_pages_Home_tsx").then(__webpack_require__.bind(__webpack_require__, /*! @pages/Home */ "./src/web/pages/Home.tsx"));
});
//import Home from '@pages/Home';
var Courses = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.lazy)(function() {
    return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_swc_helpers_0_3_13_node_modules_swc_helpers_src__extends_js-node_mo-1ea605"), __webpack_require__.e("src_web_pages_Courses_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! @pages/Courses */ "./src/web/pages/Courses.tsx"));
});
var Routes = [];
var Layout = function() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_4__.Suspense, {
        fallback: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Loading__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {})
    });
};
function NoMatch() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", {
                children: "Nothing to see here!"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
                    to: "/",
                    children: "Go to the home page"
                })
            })
        ]
    });
}
function Course() {
    // let { id } = useParams<'id'>();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                children: "This is a great course. You're gonna love it!"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {
                to: "/courses",
                children: "See all courses"
            })
        ]
    });
}
var mainRoutes = {
    path: "/",
    element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Layout, {}),
    children: [
        {
            index: true,
            element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Home, {})
        },
        {
            path: "/testJotai",
            element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pages_TestJotai__WEBPACK_IMPORTED_MODULE_3__["default"], {})
        },
        {
            path: "/courses",
            element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Courses, {}),
            children: [
                {
                    index: true,
                    element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Courses, {})
                },
                {
                    path: "/courses/:id",
                    element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Course, {})
                }, 
            ]
        },
        {
            path: "*",
            element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NoMatch, {})
        }, 
    ]
};
Routes.push(mainRoutes);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_pnpm_jotai_1_6_6_immer_9_0_12_react_18_1_0_node_modules_jotai_esm_immer_-2ea73b"], () => (__webpack_exec__("./src/web/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFRSxJQUFJLEVBQUUsR0FBRztZQUFFQyxPQUFPLGdCQUFFLHVEQUFDSixPQUFPLEtBQUc7U0FBRTtLQUNwQztDQUNGO0FBRURILE1BQU0sQ0FBQ1UsSUFBSSxDQUFDTCxVQUFVLENBQUMsQ0FBQztBQUV4QixpRUFBZUwsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9jb21wb25lbnRzL0NvbW1vbi9GY2NIZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy93ZWIvY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViL2xheW91dHMvTWFpbkxheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9wYWdlcy9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy93ZWIvcGFnZXMvVGVzdEpvdGFpLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViL3JvdXRlcnMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0b20sIHVzZUF0b20gfSBmcm9tIFwiam90YWlcIjtcbmltcG9ydCB7IEZDLCBtZW1vLCB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5jb25zdCB0ZXh0QXRvbSA9IGF0b20oXCJoZWxsb1wiKTtcbmNvbnN0IEZjY0hlYWRlcjogRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFt1cHBlcmNhc2VdID0gdXNlQXRvbSh0ZXh0QXRvbSk7XG4gIGNvbnN0IFtudW0sIHNldE51bV0gPSB1c2VTdGF0ZSgwKTtcbiAgLy8gY29uc3QgaW5pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHt9LCBbXSk7XG4gIGNvbnNvbGUubG9nKFwiaGVhZGVyIC0gcmVuZGVyXCIpO1xuICAvLyBjb25zb2xlLmxvZygn57uE5Lu25Yid5aeL5YyW8J+Quy4uLicsIE1hdGgucmFuZG9tKCkpO1xuICAvL+WkjeadguS4gOeCuSBHQ1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAvL3dhc20g6K6h566X5LiA5Liq5YC85Zue5p2lXG4gIC8vIGNvbnNvbGUubG9nKFwi8J+Qu/CfjY4uLi5cIiwgTWF0aC5yYW5kb20oKSk7XG4gIC8vIH07XG4gIC8vIGluaXQoKTtcbiAgLy8gfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bmF2PlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2NvdXJzZXNcIj5Db3Vyc2VzPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvbm90aGluZy1oZXJlXCI+Tm90aGluZyBIZXJlPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvdGVzdEpvdGFpXCI+dGVzdEpvdGFpPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L25hdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEZjY0hlYWRlcjtcbiIsImNvbnN0IExvYWRpbmcgPSAoKSA9PiAoXG4gIDw+XG4gICAgPGRpdj5cbiAgICAgIDxzcGFuPuWKoOi9veS4rS4uLjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC8+XG4pO1xuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcbiIsIi8vIGltcG9ydCB7IFN0cmljdE1vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gXCJyZWNvaWxcIjtcbi8vIGltcG9ydCB7IGZuTm9ybWFsVGFzayB9IGZyb20gXCJAbW1mY2MvaG9tZVwiO1xuLy8gaW1wb3J0IHsgdXNlQXN5bmNGbiB9IGZyb20gXCJAbW1mY2MvaG9va3NcIjtcbmltcG9ydCBBcHAgZnJvbSBcIkBwYWdlcy9BcHBcIjtcbi8vIGltcG9ydCBUZWFyaW5nIGZyb20gXCJAcGFnZXMvVGVhcmluZ1wiO1xuXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpIGFzIEhUTUxFbGVtZW50XG4pO1xucm9vdC5yZW5kZXIoXG4gIC8vIDxTdHJpY3RNb2RlPlxuICA8UmVjb2lsUm9vdD5cbiAgICA8QXBwIC8+XG4gICAgey8qIDxUZWFyaW5nIC8+ICovfVxuICA8L1JlY29pbFJvb3Q+XG5cbiAgLy8gPC9TdHJpY3RNb2RlPlxuKTtcbiIsImltcG9ydCBGY2NIZWFkZXIgZnJvbSBcIkBjb21wb25lbnRzL0NvbW1vbi9GY2NIZWFkZXJcIjtcbmltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5cbmNvbnN0IE1haW5MYXlvdXQgPSAoKTogSlNYLkVsZW1lbnQgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8RmNjSGVhZGVyIC8+XG4gICAgICA8T3V0bGV0IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpbkxheW91dDtcbiIsImltcG9ydCB7IHVzZVJvdXRlcywgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IHJvdXRlcyBmcm9tIFwiLi4vcm91dGVyc1wiO1xuY29uc3QgQXBwID0gKCkgPT4gdXNlUm91dGVzKHJvdXRlcyk7XG5cbmNvbnN0IEFwcFdyYXBwZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFJvdXRlcj5cbiAgICAgIDxBcHAgLz5cbiAgICA8L1JvdXRlcj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBcHBXcmFwcGVyO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGF0b20sIHVzZUF0b20gfSBmcm9tIFwiam90YWlcIjtcbmltcG9ydCB7IGF0b21XaXRoSW1tZXIsIHVzZUltbWVyQXRvbSB9IGZyb20gXCJqb3RhaS9pbW1lclwiO1xuXG4vLyBjb25zdCBzdG9yZSA9IGF0b21XaXRoSW1tZXIoeyBzdHI6IFwiaW5pdCBzdHJcIiB9KTtcbmNvbnN0IHN0b3JlID0gYXRvbSh7IHN0cjogXCJpbml0IHN0clwiIH0pO1xuXG5mdW5jdGlvbiBUZXN0Sm90YWkoKSB7XG4gIGNvbnN0IFtvYmosIHNldE9ial0gPSB1c2VJbW1lckF0b20oc3RvcmUpO1xuICAvLyAgIGNvbnN0IFtvYmosIHNldE9ial0gPSB1c2VBdG9tKHN0b3JlKTtcblxuICBjb25zb2xlLmxvZyhcIlRlc3RKb3RhaSAtLSByZW5kZXJcIiwgb2JqLnN0cik7XG4gIC8vICAgY29uc3QgW29iaiwgc2V0T2JqXSA9IHVzZVN0YXRlKHsgc3RyOiBcImluaXQgc3RyXCIgfSk7XG4gIC8vICAgY29uc3QgW29iaiwgc2V0T2JqXSA9IHVzZUF0b20oc3RvcmUpO1xuXG4gIGNvbnN0IGNoYW5nZUZuID0gKCkgPT4ge1xuICAgIC8vam90YWkg8J+Rh+i/meagt+WGmei/mOaYr+S8mumHjeWkjea4suafk1xuICAgIC8vIHNldE9iaih7IHN0cjogXCJpbml0IHN0ciBuZXdcIiB9KTtcbiAgICAvLyB3cml0ZSBsaWtlIHRoaXMsIHdoeSBpbW1lciBub3Qgd29ya2luZ1xuICAgIHNldE9iaigoZHJhZnQpID0+IHtcbiAgICAgIGRyYWZ0LnN0ciA9IFwiaW5pdCBzdHIgbmV3XCI7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5UZXN0Sm90YWk8L2gyPlxuICAgICAgPHA+c3RyOiB7b2JqLnN0cn08L3A+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2NoYW5nZUZufT5jaGFuZ2VTdGF0ZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUZXN0Sm90YWk7XG4iLCIvLyBpbXBvcnQgRmNjSGVhZGVyIGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vRmNjSGVhZGVyXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiQGNvbXBvbmVudHMvTG9hZGluZ1wiO1xuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIkBsYXlvdXRzL01haW5MYXlvdXRcIjtcbmltcG9ydCBUZXN0Sm90YWkgZnJvbSBcIkBwYWdlcy9UZXN0Sm90YWlcIjtcbmltcG9ydCB7IGxhenksIFN1c3BlbnNlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBIb21lID0gbGF6eSgoKSA9PiBpbXBvcnQoXCJAcGFnZXMvSG9tZVwiKSk7XG4vL2ltcG9ydCBIb21lIGZyb20gJ0BwYWdlcy9Ib21lJztcbmNvbnN0IENvdXJzZXMgPSBsYXp5KCgpID0+IGltcG9ydChcIkBwYWdlcy9Db3Vyc2VzXCIpKTtcbmltcG9ydCB7IExpbmssIFJvdXRlT2JqZWN0LCB1c2VSb3V0ZXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuY29uc3QgUm91dGVzOiBSb3V0ZU9iamVjdFtdID0gW107XG5jb25zdCBMYXlvdXQgPSAoKSA9PiAoXG4gIDxTdXNwZW5zZSBmYWxsYmFjaz17PExvYWRpbmcgLz59PlxuICAgIDxNYWluTGF5b3V0IC8+XG4gIDwvU3VzcGVuc2U+XG4pO1xuXG5mdW5jdGlvbiBOb01hdGNoKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+Tm90aGluZyB0byBzZWUgaGVyZSE8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPkdvIHRvIHRoZSBob21lIHBhZ2U8L0xpbms+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENvdXJzZSgpIHtcbiAgLy8gbGV0IHsgaWQgfSA9IHVzZVBhcmFtczwnaWQnPigpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5UaGlzIGlzIGEgZ3JlYXQgY291cnNlLiBZb3UncmUgZ29ubmEgbG92ZSBpdCE8L3A+XG5cbiAgICAgIDxMaW5rIHRvPVwiL2NvdXJzZXNcIj5TZWUgYWxsIGNvdXJzZXM8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59XG5jb25zdCBtYWluUm91dGVzID0ge1xuICBwYXRoOiBcIi9cIixcbiAgZWxlbWVudDogPExheW91dCAvPixcbiAgY2hpbGRyZW46IFtcbiAgICB7IGluZGV4OiB0cnVlLCBlbGVtZW50OiA8SG9tZSAvPiB9LFxuICAgIHsgcGF0aDogXCIvdGVzdEpvdGFpXCIsIGVsZW1lbnQ6IDxUZXN0Sm90YWkgLz4gfSxcbiAgICB7XG4gICAgICBwYXRoOiBcIi9jb3Vyc2VzXCIsXG4gICAgICBlbGVtZW50OiA8Q291cnNlcyAvPixcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHsgaW5kZXg6IHRydWUsIGVsZW1lbnQ6IDxDb3Vyc2VzIC8+IH0sXG4gICAgICAgIHsgcGF0aDogXCIvY291cnNlcy86aWRcIiwgZWxlbWVudDogPENvdXJzZSAvPiB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHsgcGF0aDogXCIqXCIsIGVsZW1lbnQ6IDxOb01hdGNoIC8+IH0sXG4gIF0sXG59O1xuXG5Sb3V0ZXMucHVzaChtYWluUm91dGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVzO1xuIl0sIm5hbWVzIjpbImF0b20iLCJ1c2VBdG9tIiwidXNlU3RhdGUiLCJMaW5rIiwidGV4dEF0b20iLCJGY2NIZWFkZXIiLCJ1cHBlcmNhc2UiLCJudW0iLCJzZXROdW0iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwibmF2IiwidWwiLCJsaSIsInRvIiwiTG9hZGluZyIsInNwYW4iLCJSZWFjdERPTSIsIlJlY29pbFJvb3QiLCJBcHAiLCJyb290IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJPdXRsZXQiLCJNYWluTGF5b3V0IiwiY2xhc3NOYW1lIiwidXNlUm91dGVzIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlciIsInJvdXRlcyIsIkFwcFdyYXBwZXIiLCJ1c2VJbW1lckF0b20iLCJzdG9yZSIsInN0ciIsIlRlc3RKb3RhaSIsIm9iaiIsInNldE9iaiIsImNoYW5nZUZuIiwiZHJhZnQiLCJoMiIsInAiLCJidXR0b24iLCJvbkNsaWNrIiwibGF6eSIsIlN1c3BlbnNlIiwiSG9tZSIsIkNvdXJzZXMiLCJSb3V0ZXMiLCJMYXlvdXQiLCJmYWxsYmFjayIsIk5vTWF0Y2giLCJDb3Vyc2UiLCJtYWluUm91dGVzIiwicGF0aCIsImVsZW1lbnQiLCJjaGlsZHJlbiIsImluZGV4IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=