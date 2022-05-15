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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@18.1.0/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/.pnpm/react-router-dom@6.3.0_ef5jwxihqo6n7gxfmzogljlgcm/node_modules/react-router-dom/index.js");

// import FccHeader from "@components/Common/FccHeader";




var Home = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.lazy)(function() {
    return __webpack_require__.e(/*! import() */ "src_web_pages_Home_tsx").then(__webpack_require__.bind(__webpack_require__, /*! @pages/Home */ "./src/web/pages/Home.tsx"));
});
//import Home from '@pages/Home';
var Courses = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.lazy)(function() {
    return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_pnpm_swc_helpers_0_3_13_node_modules_swc_helpers_src__extends_js-node_mo-524643"), __webpack_require__.e("src_web_pages_Courses_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! @pages/Courses */ "./src/web/pages/Courses.tsx"));
});
var Routes = [];
var Layout = function() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react__WEBPACK_IMPORTED_MODULE_3__.Suspense, {
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
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
                    to: "/",
                    children: "Go to the home page"
                })
            })
        ]
    });
}
function CoursesIndex() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
                children: "Please choose a course:"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("nav", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                to: "react-fundamentals",
                                children: "React Fundamentals"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                to: "advanced-react",
                                children: "Advanced React"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
                                to: "react-router",
                                children: "React Router"
                            })
                        })
                    ]
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
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
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
            path: "/courses",
            element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Courses, {}),
            children: [
                {
                    index: true,
                    element: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CoursesIndex, {})
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_pnpm_jotai_1_6_6_immer_9_0_12_react_18_1_0_node_modules_jotai_esm_index_-478e90"], () => (__webpack_exec__("./src/web/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVU7MEJBQUMsaUJBQWU7Y0FBTzs7TUFDdEMsQ0FDTjtDQUNIO0FBQ0QsSUFBTStCLFVBQVUsR0FBRztJQUNqQkMsSUFBSSxFQUFFLEdBQUc7SUFDVEMsT0FBTyxnQkFBRSx1REFBQ1QsTUFBTSxLQUFHO0lBQ25CVSxRQUFRLEVBQUU7UUFDUjtZQUFFQyxLQUFLLEVBQUUsSUFBSTtZQUFFRixPQUFPLGdCQUFFLHVEQUFDWixJQUFJLEtBQUc7U0FBRTtRQUNsQztZQUNFVyxJQUFJLEVBQUUsVUFBVTtZQUNoQkMsT0FBTyxnQkFBRSx1REFBQ1gsT0FBTyxLQUFHO1lBQ3BCWSxRQUFRLEVBQUU7Z0JBQ1I7b0JBQUVDLEtBQUssRUFBRSxJQUFJO29CQUFFRixPQUFPLGdCQUFFLHVEQUFDSixZQUFZLEtBQUc7aUJBQUU7Z0JBQzFDO29CQUFFRyxJQUFJLEVBQUUsY0FBYztvQkFBRUMsT0FBTyxnQkFBRSx1REFBQ0gsTUFBTSxLQUFHO2lCQUFFO2FBQzlDO1NBQ0Y7UUFDRDtZQUFFRSxJQUFJLEVBQUUsR0FBRztZQUFFQyxPQUFPLGdCQUFFLHVEQUFDUCxPQUFPLEtBQUc7U0FBRTtLQUNwQztDQUNGO0FBRURILE1BQU0sQ0FBQ2EsSUFBSSxDQUFDTCxVQUFVLENBQUMsQ0FBQztBQUV4QixpRUFBZVIsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9jb21wb25lbnRzL0NvbW1vbi9GY2NIZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy93ZWIvY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViL2xheW91dHMvTWFpbkxheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9wYWdlcy9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy93ZWIvcm91dGVycy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSwgdXNlQXRvbSB9IGZyb20gXCJqb3RhaVwiO1xuaW1wb3J0IHsgRkMsIG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmNvbnN0IHRleHRBdG9tID0gYXRvbShcImhlbGxvXCIpO1xuY29uc3QgRmNjSGVhZGVyOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgW3VwcGVyY2FzZV0gPSB1c2VBdG9tKHRleHRBdG9tKTtcbiAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKDApO1xuICAvLyBjb25zdCBpbml0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge30sIFtdKTtcbiAgY29uc29sZS5sb2coXCJoZWFkZXIgLSByZW5kZXJcIik7XG4gIC8vIGNvbnNvbGUubG9nKCfnu4Tku7bliJ3lp4vljJbwn5C7Li4uJywgTWF0aC5yYW5kb20oKSk7XG4gIC8v5aSN5p2C5LiA54K5IEdDXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIC8vd2FzbSDorqHnrpfkuIDkuKrlgLzlm57mnaVcbiAgLy8gY29uc29sZS5sb2coXCLwn5C78J+Nji4uLlwiLCBNYXRoLnJhbmRvbSgpKTtcbiAgLy8gfTtcbiAgLy8gaW5pdCgpO1xuICAvLyB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvY291cnNlc1wiPkNvdXJzZXM8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9ub3RoaW5nLWhlcmVcIj5Ob3RoaW5nIEhlcmU8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvbmF2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmNjSGVhZGVyO1xuIiwiY29uc3QgTG9hZGluZyA9ICgpID0+IChcbiAgPD5cbiAgICA8ZGl2PlxuICAgICAgPHNwYW4+5Yqg6L295LitLi4uPC9zcGFuPlxuICAgIDwvZGl2PlxuICA8Lz5cbik7XG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nO1xuIiwiLy8gaW1wb3J0IHsgU3RyaWN0TW9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb20vY2xpZW50XCI7XG5pbXBvcnQgeyBSZWNvaWxSb290IH0gZnJvbSBcInJlY29pbFwiO1xuLy8gaW1wb3J0IHsgZm5Ob3JtYWxUYXNrIH0gZnJvbSBcIkBtbWZjYy9ob21lXCI7XG4vLyBpbXBvcnQgeyB1c2VBc3luY0ZuIH0gZnJvbSBcIkBtbWZjYy9ob29rc1wiO1xuaW1wb3J0IEFwcCBmcm9tIFwiQHBhZ2VzL0FwcFwiO1xuLy8gaW1wb3J0IFRlYXJpbmcgZnJvbSBcIkBwYWdlcy9UZWFyaW5nXCI7XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikgYXMgSFRNTEVsZW1lbnRcbik7XG5yb290LnJlbmRlcihcbiAgLy8gPFN0cmljdE1vZGU+XG4gIDxSZWNvaWxSb290PlxuICAgIDxBcHAgLz5cbiAgICB7LyogPFRlYXJpbmcgLz4gKi99XG4gIDwvUmVjb2lsUm9vdD5cblxuICAvLyA8L1N0cmljdE1vZGU+XG4pO1xuIiwiaW1wb3J0IEZjY0hlYWRlciBmcm9tIFwiQGNvbXBvbmVudHMvQ29tbW9uL0ZjY0hlYWRlclwiO1xuaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuY29uc3QgTWFpbkxheW91dCA9ICgpOiBKU1guRWxlbWVudCA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxGY2NIZWFkZXIgLz5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNYWluTGF5b3V0O1xuIiwiaW1wb3J0IHsgdXNlUm91dGVzLCBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgcm91dGVzIGZyb20gXCIuLi9yb3V0ZXJzXCI7XG5jb25zdCBBcHAgPSAoKSA9PiB1c2VSb3V0ZXMocm91dGVzKTtcblxuY29uc3QgQXBwV3JhcHBlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Um91dGVyPlxuICAgICAgPEFwcCAvPlxuICAgIDwvUm91dGVyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEFwcFdyYXBwZXI7XG4iLCIvLyBpbXBvcnQgRmNjSGVhZGVyIGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vRmNjSGVhZGVyXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiQGNvbXBvbmVudHMvTG9hZGluZ1wiO1xuaW1wb3J0IE1haW5MYXlvdXQgZnJvbSBcIkBsYXlvdXRzL01haW5MYXlvdXRcIjtcbmltcG9ydCB7IGxhenksIFN1c3BlbnNlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBIb21lID0gbGF6eSgoKSA9PiBpbXBvcnQoXCJAcGFnZXMvSG9tZVwiKSk7XG4vL2ltcG9ydCBIb21lIGZyb20gJ0BwYWdlcy9Ib21lJztcbmNvbnN0IENvdXJzZXMgPSBsYXp5KCgpID0+IGltcG9ydChcIkBwYWdlcy9Db3Vyc2VzXCIpKTtcbmltcG9ydCB7IExpbmssIFJvdXRlT2JqZWN0LCB1c2VSb3V0ZXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuY29uc3QgUm91dGVzOiBSb3V0ZU9iamVjdFtdID0gW107XG5jb25zdCBMYXlvdXQgPSAoKSA9PiAoXG4gIDxTdXNwZW5zZSBmYWxsYmFjaz17PExvYWRpbmcgLz59PlxuICAgIDxNYWluTGF5b3V0IC8+XG4gIDwvU3VzcGVuc2U+XG4pO1xuXG5mdW5jdGlvbiBOb01hdGNoKCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+Tm90aGluZyB0byBzZWUgaGVyZSE8L2gyPlxuICAgICAgPHA+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPkdvIHRvIHRoZSBob21lIHBhZ2U8L0xpbms+XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIENvdXJzZXNJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+UGxlYXNlIGNob29zZSBhIGNvdXJzZTo8L3A+XG5cbiAgICAgIDxuYXY+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz1cInJlYWN0LWZ1bmRhbWVudGFsc1wiPlJlYWN0IEZ1bmRhbWVudGFsczwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiYWR2YW5jZWQtcmVhY3RcIj5BZHZhbmNlZCBSZWFjdDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwicmVhY3Qtcm91dGVyXCI+UmVhY3QgUm91dGVyPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmZ1bmN0aW9uIENvdXJzZSgpIHtcbiAgLy8gbGV0IHsgaWQgfSA9IHVzZVBhcmFtczwnaWQnPigpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5UaGlzIGlzIGEgZ3JlYXQgY291cnNlLiBZb3UncmUgZ29ubmEgbG92ZSBpdCE8L3A+XG5cbiAgICAgIDxMaW5rIHRvPVwiL2NvdXJzZXNcIj5TZWUgYWxsIGNvdXJzZXM8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59XG5jb25zdCBtYWluUm91dGVzID0ge1xuICBwYXRoOiBcIi9cIixcbiAgZWxlbWVudDogPExheW91dCAvPixcbiAgY2hpbGRyZW46IFtcbiAgICB7IGluZGV4OiB0cnVlLCBlbGVtZW50OiA8SG9tZSAvPiB9LFxuICAgIHtcbiAgICAgIHBhdGg6IFwiL2NvdXJzZXNcIixcbiAgICAgIGVsZW1lbnQ6IDxDb3Vyc2VzIC8+LFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgeyBpbmRleDogdHJ1ZSwgZWxlbWVudDogPENvdXJzZXNJbmRleCAvPiB9LFxuICAgICAgICB7IHBhdGg6IFwiL2NvdXJzZXMvOmlkXCIsIGVsZW1lbnQ6IDxDb3Vyc2UgLz4gfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7IHBhdGg6IFwiKlwiLCBlbGVtZW50OiA8Tm9NYXRjaCAvPiB9LFxuICBdLFxufTtcblxuUm91dGVzLnB1c2gobWFpblJvdXRlcyk7XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcztcbiJdLCJuYW1lcyI6WyJhdG9tIiwidXNlQXRvbSIsInVzZVN0YXRlIiwiTGluayIsInRleHRBdG9tIiwiRmNjSGVhZGVyIiwidXBwZXJjYXNlIiwibnVtIiwic2V0TnVtIiwiY29uc29sZSIsImxvZyIsImRpdiIsIm5hdiIsInVsIiwibGkiLCJ0byIsIkxvYWRpbmciLCJzcGFuIiwiUmVhY3RET00iLCJSZWNvaWxSb290IiwiQXBwIiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiT3V0bGV0IiwiTWFpbkxheW91dCIsImNsYXNzTmFtZSIsInVzZVJvdXRlcyIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXIiLCJyb3V0ZXMiLCJBcHBXcmFwcGVyIiwibGF6eSIsIlN1c3BlbnNlIiwiSG9tZSIsIkNvdXJzZXMiLCJSb3V0ZXMiLCJMYXlvdXQiLCJmYWxsYmFjayIsIk5vTWF0Y2giLCJoMiIsInAiLCJDb3Vyc2VzSW5kZXgiLCJDb3Vyc2UiLCJtYWluUm91dGVzIiwicGF0aCIsImVsZW1lbnQiLCJjaGlsZHJlbiIsImluZGV4IiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=