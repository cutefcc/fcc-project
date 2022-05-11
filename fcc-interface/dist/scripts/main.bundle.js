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
    console.log("uppercase: ", uppercase);
    // console.log('组件初始化🐻...', Math.random());
    //复杂一点 GC
    // useEffect(() => {
    var init = function() {
        //wasm 计算一个值回来
        console.log("\uD83D\uDC3B\uD83D\uDC3B\uD83D\uDC3B\uD83D\uDC3B\uD83D\uDC3B...", Math.random());
    };
    init();
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





var Home = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.lazy)(function() {
    return __webpack_require__.e(/*! import() */ "src_web_pages_Home_tsx").then(__webpack_require__.bind(__webpack_require__, /*! @pages/Home */ "./src/web/pages/Home.tsx"));
});
//import Home from '@pages/Home';
var Courses = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.lazy)(function() {
    return __webpack_require__.e(/*! import() */ "src_web_pages_Courses_tsx").then(__webpack_require__.bind(__webpack_require__, /*! @pages/Courses */ "./src/web/pages/Courses.tsx"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDZ0MsR0FBQzswQkFBQywrQ0FBNkM7Y0FBSTswQkFFcEQsdURBQUMzQyxrREFBSTtnQkFBQ2UsRUFBRSxFQUFDLFVBQVU7MEJBQUMsaUJBQWU7Y0FBTzs7TUFDdEMsQ0FDTjtDQUNIO0FBQ0QsSUFBTStCLFVBQVUsR0FBRztJQUNqQkMsSUFBSSxFQUFFLEdBQUc7SUFDVEMsT0FBTyxnQkFBRSx1REFBQ1QsTUFBTSxLQUFHO0lBQ25CVSxRQUFRLEVBQUU7UUFDUjtZQUFFQyxLQUFLLEVBQUUsSUFBSTtZQUFFRixPQUFPLGdCQUFFLHVEQUFDWixJQUFJLEtBQUc7U0FBRTtRQUNsQztZQUNFVyxJQUFJLEVBQUUsVUFBVTtZQUNoQkMsT0FBTyxnQkFBRSx1REFBQ1gsT0FBTyxLQUFHO1lBQ3BCWSxRQUFRLEVBQUU7Z0JBQ1I7b0JBQUVDLEtBQUssRUFBRSxJQUFJO29CQUFFRixPQUFPLGdCQUFFLHVEQUFDSixZQUFZLEtBQUc7aUJBQUU7Z0JBQzFDO29CQUFFRyxJQUFJLEVBQUUsY0FBYztvQkFBRUMsT0FBTyxnQkFBRSx1REFBQ0gsTUFBTSxLQUFHO2lCQUFFO2FBQzlDO1NBQ0Y7UUFDRDtZQUFFRSxJQUFJLEVBQUUsR0FBRztZQUFFQyxPQUFPLGdCQUFFLHVEQUFDUCxPQUFPLEtBQUc7U0FBRTtLQUNwQztDQUNGO0FBRURILE1BQU0sQ0FBQ2EsSUFBSSxDQUFDTCxVQUFVLENBQUMsQ0FBQztBQUV4QixpRUFBZVIsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9jb21wb25lbnRzL0NvbW1vbi9GY2NIZWFkZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy93ZWIvY29tcG9uZW50cy9Mb2FkaW5nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViL2xheW91dHMvTWFpbkxheW91dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYi9wYWdlcy9BcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy93ZWIvcm91dGVycy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSwgdXNlQXRvbSB9IGZyb20gXCJqb3RhaVwiO1xuaW1wb3J0IHsgRkMsIG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmNvbnN0IHRleHRBdG9tID0gYXRvbShcImhlbGxvXCIpO1xuY29uc3QgRmNjSGVhZGVyOiBGQyA9ICgpID0+IHtcbiAgY29uc3QgW3VwcGVyY2FzZV0gPSB1c2VBdG9tKHRleHRBdG9tKTtcbiAgY29uc3QgW251bSwgc2V0TnVtXSA9IHVzZVN0YXRlKDApO1xuICAvLyBjb25zdCBpbml0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge30sIFtdKTtcbiAgY29uc29sZS5sb2coXCJ1cHBlcmNhc2U6IFwiLCB1cHBlcmNhc2UpO1xuICAvLyBjb25zb2xlLmxvZygn57uE5Lu25Yid5aeL5YyW8J+Quy4uLicsIE1hdGgucmFuZG9tKCkpO1xuICAvL+WkjeadguS4gOeCuSBHQ1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgIC8vd2FzbSDorqHnrpfkuIDkuKrlgLzlm57mnaVcbiAgICBjb25zb2xlLmxvZyhcIvCfkLvwn5C78J+Qu/CfkLvwn5C7Li4uXCIsIE1hdGgucmFuZG9tKCkpO1xuICB9O1xuICBpbml0KCk7XG4gIC8vIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPG5hdj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9jb3Vyc2VzXCI+Q291cnNlczwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL25vdGhpbmctaGVyZVwiPk5vdGhpbmcgSGVyZTwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBGY2NIZWFkZXI7XG4iLCJjb25zdCBMb2FkaW5nID0gKCkgPT4gKFxuICA8PlxuICAgIDxkaXY+XG4gICAgICA8c3Bhbj7liqDovb3kuK0uLi48L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvPlxuKTtcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmc7XG4iLCIvLyBpbXBvcnQgeyBTdHJpY3RNb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tIFwicmVjb2lsXCI7XG4vLyBpbXBvcnQgeyBmbk5vcm1hbFRhc2sgfSBmcm9tIFwiQG1tZmNjL2hvbWVcIjtcbi8vIGltcG9ydCB7IHVzZUFzeW5jRm4gfSBmcm9tIFwiQG1tZmNjL2hvb2tzXCI7XG5pbXBvcnQgQXBwIGZyb20gXCJAcGFnZXMvQXBwXCI7XG5cbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikgYXMgSFRNTEVsZW1lbnRcbik7XG5yb290LnJlbmRlcihcbiAgLy8gPFN0cmljdE1vZGU+XG4gIDxSZWNvaWxSb290PlxuICAgIDxBcHAgLz5cbiAgPC9SZWNvaWxSb290PlxuXG4gIC8vIDwvU3RyaWN0TW9kZT5cbik7XG4iLCJpbXBvcnQgRmNjSGVhZGVyIGZyb20gXCJAY29tcG9uZW50cy9Db21tb24vRmNjSGVhZGVyXCI7XG5pbXBvcnQgeyBPdXRsZXQgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG5jb25zdCBNYWluTGF5b3V0ID0gKCk6IEpTWC5FbGVtZW50ID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEZjY0hlYWRlciAvPlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1haW5MYXlvdXQ7XG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXMsIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcbmltcG9ydCByb3V0ZXMgZnJvbSBcIi4uL3JvdXRlcnNcIjtcbmNvbnN0IEFwcCA9ICgpID0+IHVzZVJvdXRlcyhyb3V0ZXMpO1xuXG5jb25zdCBBcHBXcmFwcGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxSb3V0ZXI+XG4gICAgICA8QXBwIC8+XG4gICAgPC9Sb3V0ZXI+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgQXBwV3JhcHBlcjtcbiIsImltcG9ydCBMb2FkaW5nIGZyb20gXCJAY29tcG9uZW50cy9Mb2FkaW5nXCI7XG5pbXBvcnQgTWFpbkxheW91dCBmcm9tIFwiQGxheW91dHMvTWFpbkxheW91dFwiO1xuaW1wb3J0IHsgbGF6eSwgU3VzcGVuc2UgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IEhvbWUgPSBsYXp5KCgpID0+IGltcG9ydChcIkBwYWdlcy9Ib21lXCIpKTtcbi8vaW1wb3J0IEhvbWUgZnJvbSAnQHBhZ2VzL0hvbWUnO1xuY29uc3QgQ291cnNlcyA9IGxhenkoKCkgPT4gaW1wb3J0KFwiQHBhZ2VzL0NvdXJzZXNcIikpO1xuaW1wb3J0IHsgTGluaywgUm91dGVPYmplY3QsIHVzZVJvdXRlcyB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5jb25zdCBSb3V0ZXM6IFJvdXRlT2JqZWN0W10gPSBbXTtcbmNvbnN0IExheW91dCA9ICgpID0+IChcbiAgPFN1c3BlbnNlIGZhbGxiYWNrPXs8TG9hZGluZyAvPn0+XG4gICAgPE1haW5MYXlvdXQgLz5cbiAgPC9TdXNwZW5zZT5cbik7XG5cbmZ1bmN0aW9uIE5vTWF0Y2goKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5Ob3RoaW5nIHRvIHNlZSBoZXJlITwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+R28gdG8gdGhlIGhvbWUgcGFnZTwvTGluaz5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ291cnNlc0luZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8cD5QbGVhc2UgY2hvb3NlIGEgY291cnNlOjwvcD5cblxuICAgICAgPG5hdj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwicmVhY3QtZnVuZGFtZW50YWxzXCI+UmVhY3QgRnVuZGFtZW50YWxzPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCJhZHZhbmNlZC1yZWFjdFwiPkFkdmFuY2VkIFJlYWN0PC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgdG89XCJyZWFjdC1yb3V0ZXJcIj5SZWFjdCBSb3V0ZXI8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufVxuZnVuY3Rpb24gQ291cnNlKCkge1xuICAvLyBsZXQgeyBpZCB9ID0gdXNlUGFyYW1zPCdpZCc+KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxwPlRoaXMgaXMgYSBncmVhdCBjb3Vyc2UuIFlvdSdyZSBnb25uYSBsb3ZlIGl0ITwvcD5cblxuICAgICAgPExpbmsgdG89XCIvY291cnNlc1wiPlNlZSBhbGwgY291cnNlczwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmNvbnN0IG1haW5Sb3V0ZXMgPSB7XG4gIHBhdGg6IFwiL1wiLFxuICBlbGVtZW50OiA8TGF5b3V0IC8+LFxuICBjaGlsZHJlbjogW1xuICAgIHsgaW5kZXg6IHRydWUsIGVsZW1lbnQ6IDxIb21lIC8+IH0sXG4gICAge1xuICAgICAgcGF0aDogXCIvY291cnNlc1wiLFxuICAgICAgZWxlbWVudDogPENvdXJzZXMgLz4sXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7IGluZGV4OiB0cnVlLCBlbGVtZW50OiA8Q291cnNlc0luZGV4IC8+IH0sXG4gICAgICAgIHsgcGF0aDogXCIvY291cnNlcy86aWRcIiwgZWxlbWVudDogPENvdXJzZSAvPiB9LFxuICAgICAgXSxcbiAgICB9LFxuICAgIHsgcGF0aDogXCIqXCIsIGVsZW1lbnQ6IDxOb01hdGNoIC8+IH0sXG4gIF0sXG59O1xuXG5Sb3V0ZXMucHVzaChtYWluUm91dGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgUm91dGVzO1xuIl0sIm5hbWVzIjpbImF0b20iLCJ1c2VBdG9tIiwidXNlU3RhdGUiLCJMaW5rIiwidGV4dEF0b20iLCJGY2NIZWFkZXIiLCJ1cHBlcmNhc2UiLCJudW0iLCJzZXROdW0iLCJjb25zb2xlIiwibG9nIiwiaW5pdCIsIk1hdGgiLCJyYW5kb20iLCJkaXYiLCJuYXYiLCJ1bCIsImxpIiwidG8iLCJMb2FkaW5nIiwic3BhbiIsIlJlYWN0RE9NIiwiUmVjb2lsUm9vdCIsIkFwcCIsInJvb3QiLCJjcmVhdGVSb290IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsIk91dGxldCIsIk1haW5MYXlvdXQiLCJjbGFzc05hbWUiLCJ1c2VSb3V0ZXMiLCJCcm93c2VyUm91dGVyIiwiUm91dGVyIiwicm91dGVzIiwiQXBwV3JhcHBlciIsImxhenkiLCJTdXNwZW5zZSIsIkhvbWUiLCJDb3Vyc2VzIiwiUm91dGVzIiwiTGF5b3V0IiwiZmFsbGJhY2siLCJOb01hdGNoIiwiaDIiLCJwIiwiQ291cnNlc0luZGV4IiwiQ291cnNlIiwibWFpblJvdXRlcyIsInBhdGgiLCJlbGVtZW50IiwiY2hpbGRyZW4iLCJpbmRleCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9