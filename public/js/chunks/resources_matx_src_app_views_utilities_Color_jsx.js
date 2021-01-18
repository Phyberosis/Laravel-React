(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_matx_src_app_views_utilities_Color_jsx"],{

/***/ "./resources/matx/src/app/views/utilities/Color.jsx":
/*!**********************************************************!*\
  !*** ./resources/matx/src/app/views/utilities/Color.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'matx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");




var Color = function Color() {
  var bgClassList = [{
    bgClass: "bg-primary",
    textClass: "text-white"
  }, {
    bgClass: "bg-secondary",
    textClass: "text-white"
  }, {
    bgClass: "bg-green",
    textClass: "text-white"
  }, {
    bgClass: "bg-error",
    textClass: "text-white"
  }, {
    bgClass: "bg-dark",
    textClass: "text-white"
  }, {
    bgClass: "bg-light-dark",
    textClass: "text-white"
  }, {
    bgClass: "bg-light-green"
  }, {
    bgClass: "bg-light-error"
  }, {
    bgClass: "bg-light-primary"
  }, {
    bgClass: "bg-light-gray"
  }, {
    bgClass: "bg-default"
  }, {
    bgClass: "bg-paper"
  }, {
    bgClass: "bg-white"
  }];
  var textClassList = [{
    textClass: "text-brand"
  }, {
    textClass: "text-primary"
  }, {
    textClass: "text-secondary"
  }, {
    textClass: "text-green"
  }, {
    textClass: "text-error"
  }, {
    textClass: "text-gray"
  }, {
    textClass: "text-muted"
  }, {
    textClass: "text-light-white",
    bgClass: "bg-secondary"
  }, {
    textClass: "text-muted-white",
    bgClass: "bg-secondary  "
  }, {
    textClass: "text-white",
    bgClass: "bg-primary"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "m-sm-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-sm-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'matx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    routeSegments: [{
      name: "Utilities",
      path: "/utilities"
    }, {
      name: "Color"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'matx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    title: "Background Color Class"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default, {
    container: true,
    spacing: 3
  }, bgClassList.map(function (bg, ind) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default, {
      item: true,
      key: ind
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "h-132 w-132 border-radius-8 elevation-z6 ".concat(bg.bgClass, " flex justify-center items-center")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "".concat(bg.textClass)
    }, ".", bg.bgClass)));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "py-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'matx'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    title: "Text Color Class"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default, {
    container: true,
    spacing: 3
  }, textClassList.map(function (bg, ind) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default, {
      item: true,
      key: ind
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "h-132 w-132 border-radius-8 elevation-z6 ".concat(bg.bgClass, " flex justify-center items-center")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "".concat(bg.textClass)
    }, ".", bg.textClass)));
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Color);

/***/ })

}]);