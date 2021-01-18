(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_matx_src_app_views_material-kit_AppProgress_jsx"],{

/***/ "./resources/matx/src/app/views/material-kit/AppProgress.jsx":
/*!*******************************************************************!*\
  !*** ./resources/matx/src/app/views/material-kit/AppProgress.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/LinearProgress/LinearProgress.js");
/* harmony import */ var matx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! matx */ "./resources/matx/src/matx/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.default)(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    progress: {
      margin: theme.spacing(2)
    }
  };
});

var AppProgress = function AppProgress() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      completed = _React$useState2[0],
      setCompleted = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    function progress() {
      setCompleted(function (oldCompleted) {
        if (oldCompleted === 100) {
          return 0;
        }

        var diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    var timer = setInterval(progress, 500);
    return function () {
      clearInterval(timer);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "m-sm-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-sm-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(matx__WEBPACK_IMPORTED_MODULE_1__.Breadcrumb, {
    routeSegments: [{
      name: "Material",
      path: "/material"
    }, {
      name: "Prgress"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(matx__WEBPACK_IMPORTED_MODULE_1__.SimpleCard, {
    title: "Circuar Progress (Indeterminate)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: classes.progress
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: classes.progress,
    color: "secondary"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "py-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(matx__WEBPACK_IMPORTED_MODULE_1__.SimpleCard, {
    title: "Circuar Progress (static)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.default, {
    variant: "static",
    value: 25,
    className: classes.progress
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.default, {
    variant: "static",
    value: 50,
    className: classes.progress,
    color: "secondary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.default, {
    variant: "static",
    value: 75,
    className: classes.progress,
    color: "secondary"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "py-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(matx__WEBPACK_IMPORTED_MODULE_1__.SimpleCard, {
    title: "Linear Progress (Indeterminate)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {
    color: "secondary"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "py-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(matx__WEBPACK_IMPORTED_MODULE_1__.SimpleCard, {
    title: "Linear Progress (Determinate)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {
    variant: "determinate",
    value: completed
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.default, {
    color: "secondary",
    variant: "determinate",
    value: completed
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppProgress);

/***/ })

}]);