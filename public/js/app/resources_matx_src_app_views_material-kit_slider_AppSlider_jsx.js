(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_matx_src_app_views_material-kit_slider_AppSlider_jsx"],{

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Slider/Slider.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Slider/Slider.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => /* binding */ styles,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/chainPropTypes.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/useIsFocusVisible */ "./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useControlled */ "./node_modules/@material-ui/core/esm/utils/useControlled.js");
/* harmony import */ var _ValueLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValueLabel */ "./node_modules/@material-ui/core/esm/Slider/ValueLabel.js");



















function asc(a, b) {
  return a - b;
}

function clamp(value, min, max) {
  return Math.min(Math.max(min, value), max);
}

function findClosest(values, currentValue) {
  var _values$reduce = values.reduce(function (acc, value, index) {
    var distance = Math.abs(currentValue - value);

    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance: distance,
        index: index
      };
    }

    return acc;
  }, null),
      closestIndex = _values$reduce.index;

  return closestIndex;
}

function trackFinger(event, touchId) {
  if (touchId.current !== undefined && event.changedTouches) {
    for (var i = 0; i < event.changedTouches.length; i += 1) {
      var touch = event.changedTouches[i];

      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }

    return false;
  }

  return {
    x: event.clientX,
    y: event.clientY
  };
}

function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}

function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}

function getDecimalPrecision(num) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    var parts = num.toExponential().split('e-');
    var matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  var decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

function roundValueToStep(value, step, min) {
  var nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

function setValueIndex(_ref) {
  var values = _ref.values,
      source = _ref.source,
      newValue = _ref.newValue,
      index = _ref.index;

  // Performance shortcut
  if (values[index] === newValue) {
    return source;
  }

  var output = values.slice();
  output[index] = newValue;
  return output;
}

function focusThumb(_ref2) {
  var sliderRef = _ref2.sliderRef,
      activeIndex = _ref2.activeIndex,
      setActive = _ref2.setActive;

  if (!sliderRef.current.contains(document.activeElement) || Number(document.activeElement.getAttribute('data-index')) !== activeIndex) {
    sliderRef.current.querySelector("[role=\"slider\"][data-index=\"".concat(activeIndex, "\"]")).focus();
  }

  if (setActive) {
    setActive(activeIndex);
  }
}

var axisProps = {
  horizontal: {
    offset: function offset(percent) {
      return {
        left: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        width: "".concat(percent, "%")
      };
    }
  },
  'horizontal-reverse': {
    offset: function offset(percent) {
      return {
        right: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        width: "".concat(percent, "%")
      };
    }
  },
  vertical: {
    offset: function offset(percent) {
      return {
        bottom: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        height: "".concat(percent, "%")
      };
    }
  }
};

var Identity = function Identity(x) {
  return x;
};

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 2,
      width: '100%',
      boxSizing: 'content-box',
      padding: '13px 0',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      touchAction: 'none',
      color: theme.palette.primary.main,
      WebkitTapHighlightColor: 'transparent',
      '&$disabled': {
        pointerEvents: 'none',
        cursor: 'default',
        color: theme.palette.grey[400]
      },
      '&$vertical': {
        width: 2,
        height: '100%',
        padding: '0 13px'
      },
      // The primary input mechanism of the device includes a pointing device of limited accuracy.
      '@media (pointer: coarse)': {
        // Reach 42px touch target, about ~8mm on screen.
        padding: '20px 0',
        '&$vertical': {
          padding: '0 20px'
        }
      },
      '@media print': {
        colorAdjust: 'exact'
      }
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {// TODO v5: move the style here
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `marks` is provided with at least one label. */
    marked: {
      marginBottom: 20,
      '&$vertical': {
        marginBottom: 'auto',
        marginRight: 20
      }
    },

    /* Pseudo-class applied to the root element if `orientation="vertical"`. */
    vertical: {},

    /* Pseudo-class applied to the root and thumb element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the rail element. */
    rail: {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor',
      opacity: 0.38,
      '$vertical &': {
        height: '100%',
        width: 2
      }
    },

    /* Styles applied to the track element. */
    track: {
      display: 'block',
      position: 'absolute',
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor',
      '$vertical &': {
        width: 2
      }
    },

    /* Styles applied to the track element if `track={false}`. */
    trackFalse: {
      '& $track': {
        display: 'none'
      }
    },

    /* Styles applied to the track element if `track="inverted"`. */
    trackInverted: {
      '& $track': {
        backgroundColor: // Same logic as the LinearProgress track color
        theme.palette.type === 'light' ? (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__.lighten)(theme.palette.primary.main, 0.62) : (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__.darken)(theme.palette.primary.main, 0.5)
      },
      '& $rail': {
        opacity: 1
      }
    },

    /* Styles applied to the thumb element. */
    thumb: {
      position: 'absolute',
      width: 12,
      height: 12,
      marginLeft: -6,
      marginTop: -5,
      boxSizing: 'border-box',
      borderRadius: '50%',
      outline: 0,
      backgroundColor: 'currentColor',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: theme.transitions.create(['box-shadow'], {
        duration: theme.transitions.duration.shortest
      }),
      '&::after': {
        position: 'absolute',
        content: '""',
        borderRadius: '50%',
        // reach 42px hit target (2 * 15 + thumb diameter)
        left: -15,
        top: -15,
        right: -15,
        bottom: -15
      },
      '&$focusVisible,&:hover': {
        boxShadow: "0px 0px 0px 8px ".concat((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__.fade)(theme.palette.primary.main, 0.16)),
        '@media (hover: none)': {
          boxShadow: 'none'
        }
      },
      '&$active': {
        boxShadow: "0px 0px 0px 14px ".concat((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__.fade)(theme.palette.primary.main, 0.16))
      },
      '&$disabled': {
        width: 8,
        height: 8,
        marginLeft: -4,
        marginTop: -3,
        '&:hover': {
          boxShadow: 'none'
        }
      },
      '$vertical &': {
        marginLeft: -5,
        marginBottom: -6
      },
      '$vertical &$disabled': {
        marginLeft: -3,
        marginBottom: -4
      }
    },

    /* Styles applied to the thumb element if `color="primary"`. */
    thumbColorPrimary: {// TODO v5: move the style here
    },

    /* Styles applied to the thumb element if `color="secondary"`. */
    thumbColorSecondary: {
      '&$focusVisible,&:hover': {
        boxShadow: "0px 0px 0px 8px ".concat((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__.fade)(theme.palette.secondary.main, 0.16))
      },
      '&$active': {
        boxShadow: "0px 0px 0px 14px ".concat((0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__.fade)(theme.palette.secondary.main, 0.16))
      }
    },

    /* Pseudo-class applied to the thumb element if it's active. */
    active: {},

    /* Pseudo-class applied to the thumb element if keyboard focused. */
    focusVisible: {},

    /* Styles applied to the thumb label element. */
    valueLabel: {
      // IE 11 centering bug, to remove from the customization demos once no longer supported
      left: 'calc(-50% - 4px)'
    },

    /* Styles applied to the mark element. */
    mark: {
      position: 'absolute',
      width: 2,
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor'
    },

    /* Styles applied to the mark element if active (depending on the value). */
    markActive: {
      backgroundColor: theme.palette.background.paper,
      opacity: 0.8
    },

    /* Styles applied to the mark label element. */
    markLabel: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.default)({}, theme.typography.body2, {
      color: theme.palette.text.secondary,
      position: 'absolute',
      top: 26,
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      '$vertical &': {
        top: 'auto',
        left: 26,
        transform: 'translateY(50%)'
      },
      '@media (pointer: coarse)': {
        top: 40,
        '$vertical &': {
          left: 31
        }
      }
    }),

    /* Styles applied to the mark label element if active (depending on the value). */
    markLabelActive: {
      color: theme.palette.text.primary
    }
  };
};
var Slider = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.forwardRef(function Slider(props, ref) {
  var ariaLabel = props['aria-label'],
      ariaLabelledby = props['aria-labelledby'],
      ariaValuetext = props['aria-valuetext'],
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'span' : _props$component,
      defaultValue = props.defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      getAriaLabel = props.getAriaLabel,
      getAriaValueText = props.getAriaValueText,
      _props$marks = props.marks,
      marksProp = _props$marks === void 0 ? false : _props$marks,
      _props$max = props.max,
      max = _props$max === void 0 ? 100 : _props$max,
      _props$min = props.min,
      min = _props$min === void 0 ? 0 : _props$min,
      name = props.name,
      onChange = props.onChange,
      onChangeCommitted = props.onChangeCommitted,
      onMouseDown = props.onMouseDown,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$scale = props.scale,
      scale = _props$scale === void 0 ? Identity : _props$scale,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      _props$ThumbComponent = props.ThumbComponent,
      ThumbComponent = _props$ThumbComponent === void 0 ? 'span' : _props$ThumbComponent,
      _props$track = props.track,
      track = _props$track === void 0 ? 'normal' : _props$track,
      valueProp = props.value,
      _props$ValueLabelComp = props.ValueLabelComponent,
      ValueLabelComponent = _props$ValueLabelComp === void 0 ? _ValueLabel__WEBPACK_IMPORTED_MODULE_8__.default : _props$ValueLabelComp,
      _props$valueLabelDisp = props.valueLabelDisplay,
      valueLabelDisplay = _props$valueLabelDisp === void 0 ? 'off' : _props$valueLabelDisp,
      _props$valueLabelForm = props.valueLabelFormat,
      valueLabelFormat = _props$valueLabelForm === void 0 ? Identity : _props$valueLabelForm,
      other = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, ["aria-label", "aria-labelledby", "aria-valuetext", "classes", "className", "color", "component", "defaultValue", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "onMouseDown", "orientation", "scale", "step", "ThumbComponent", "track", "value", "ValueLabelComponent", "valueLabelDisplay", "valueLabelFormat"]);

  var theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_9__.default)();
  var touchId = react__WEBPACK_IMPORTED_MODULE_4__.useRef(); // We can't use the :active browser pseudo-classes.
  // - The active state isn't triggered when clicking on the rail.
  // - The active state isn't transfered when inversing a range slider.

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4__.useState(-1),
      active = _React$useState[0],
      setActive = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_4__.useState(-1),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _useControlled = (0,_utils_useControlled__WEBPACK_IMPORTED_MODULE_10__.default)({
    controlled: valueProp,
    default: defaultValue,
    name: 'Slider'
  }),
      _useControlled2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useControlled, 2),
      valueDerived = _useControlled2[0],
      setValueState = _useControlled2[1];

  var range = Array.isArray(valueDerived);
  var values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map(function (value) {
    return clamp(value, min, max);
  });
  var marks = marksProp === true && step !== null ? (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(Array(Math.floor((max - min) / step) + 1)).map(function (_, index) {
    return {
      value: min + step * index
    };
  }) : marksProp || [];

  var _useIsFocusVisible = (0,_utils_useIsFocusVisible__WEBPACK_IMPORTED_MODULE_11__.default)(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4__.useState(-1),
      focusVisible = _React$useState3[0],
      setFocusVisible = _React$useState3[1];

  var sliderRef = react__WEBPACK_IMPORTED_MODULE_4__.useRef();
  var handleFocusRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_12__.default)(focusVisibleRef, sliderRef);
  var handleRef = (0,_utils_useForkRef__WEBPACK_IMPORTED_MODULE_12__.default)(ref, handleFocusRef);
  var handleFocus = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__.default)(function (event) {
    var index = Number(event.currentTarget.getAttribute('data-index'));

    if (isFocusVisible(event)) {
      setFocusVisible(index);
    }

    setOpen(index);
  });
  var handleBlur = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__.default)(function () {
    if (focusVisible !== -1) {
      setFocusVisible(-1);
      onBlurVisible();
    }

    setOpen(-1);
  });
  var handleMouseOver = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__.default)(function (event) {
    var index = Number(event.currentTarget.getAttribute('data-index'));
    setOpen(index);
  });
  var handleMouseLeave = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__.default)(function () {
    setOpen(-1);
  });
  var isRtl = theme.direction === 'rtl';
  var handleKeyDown = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__.default)(function (event) {
    var index = Number(event.currentTarget.getAttribute('data-index'));
    var value = values[index];
    var tenPercents = (max - min) / 10;
    var marksValues = marks.map(function (mark) {
      return mark.value;
    });
    var marksIndex = marksValues.indexOf(value);
    var newValue;
    var increaseKey = isRtl ? 'ArrowLeft' : 'ArrowRight';
    var decreaseKey = isRtl ? 'ArrowRight' : 'ArrowLeft';

    switch (event.key) {
      case 'Home':
        newValue = min;
        break;

      case 'End':
        newValue = max;
        break;

      case 'PageUp':
        if (step) {
          newValue = value + tenPercents;
        }

        break;

      case 'PageDown':
        if (step) {
          newValue = value - tenPercents;
        }

        break;

      case increaseKey:
      case 'ArrowUp':
        if (step) {
          newValue = value + step;
        } else {
          newValue = marksValues[marksIndex + 1] || marksValues[marksValues.length - 1];
        }

        break;

      case decreaseKey:
      case 'ArrowDown':
        if (step) {
          newValue = value - step;
        } else {
          newValue = marksValues[marksIndex - 1] || marksValues[0];
        }

        break;

      default:
        return;
    } // Prevent scroll of the page


    event.preventDefault();

    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    }

    newValue = clamp(newValue, min, max);

    if (range) {
      var previousValue = newValue;
      newValue = setValueIndex({
        values: values,
        source: valueDerived,
        newValue: newValue,
        index: index
      }).sort(asc);
      focusThumb({
        sliderRef: sliderRef,
        activeIndex: newValue.indexOf(previousValue)
      });
    }

    setValueState(newValue);
    setFocusVisible(index);

    if (onChange) {
      onChange(event, newValue);
    }

    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  });
  var previousIndex = react__WEBPACK_IMPORTED_MODULE_4__.useRef();
  var axis = orientation;

  if (isRtl && orientation !== "vertical") {
    axis += '-reverse';
  }

  var getFingerNewValue = function getFingerNewValue(_ref3) {
    var finger = _ref3.finger,
        _ref3$move = _ref3.move,
        move = _ref3$move === void 0 ? false : _ref3$move,
        values2 = _ref3.values,
        source = _ref3.source;
    var slider = sliderRef.current;

    var _slider$getBoundingCl = slider.getBoundingClientRect(),
        width = _slider$getBoundingCl.width,
        height = _slider$getBoundingCl.height,
        bottom = _slider$getBoundingCl.bottom,
        left = _slider$getBoundingCl.left;

    var percent;

    if (axis.indexOf('vertical') === 0) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }

    if (axis.indexOf('-reverse') !== -1) {
      percent = 1 - percent;
    }

    var newValue;
    newValue = percentToValue(percent, min, max);

    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      var marksValues = marks.map(function (mark) {
        return mark.value;
      });
      var closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }

    newValue = clamp(newValue, min, max);
    var activeIndex = 0;

    if (range) {
      if (!move) {
        activeIndex = findClosest(values2, newValue);
      } else {
        activeIndex = previousIndex.current;
      }

      var previousValue = newValue;
      newValue = setValueIndex({
        values: values2,
        source: source,
        newValue: newValue,
        index: activeIndex
      }).sort(asc);
      activeIndex = newValue.indexOf(previousValue);
      previousIndex.current = activeIndex;
    }

    return {
      newValue: newValue,
      activeIndex: activeIndex
    };
  };

  var handleTouchMove = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__.default)(function (event) {
    var finger = trackFinger(event, touchId);

    if (!finger) {
      return;
    }

    var _getFingerNewValue = getFingerNewValue({
      finger: finger,
      move: true,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue.newValue,
        activeIndex = _getFingerNewValue.activeIndex;

    focusThumb({
      sliderRef: sliderRef,
      activeIndex: activeIndex,
      setActive: setActive
    });
    setValueState(newValue);

    if (onChange) {
      onChange(event, newValue);
    }
  });
  var handleTouchEnd = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__.default)(function (event) {
    var finger = trackFinger(event, touchId);

    if (!finger) {
      return;
    }

    var _getFingerNewValue2 = getFingerNewValue({
      finger: finger,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue2.newValue;

    setActive(-1);

    if (event.type === 'touchend') {
      setOpen(-1);
    }

    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }

    touchId.current = undefined;
    var doc = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_14__.default)(sliderRef.current);
    doc.removeEventListener('mousemove', handleTouchMove);
    doc.removeEventListener('mouseup', handleTouchEnd);
    doc.removeEventListener('touchmove', handleTouchMove);
    doc.removeEventListener('touchend', handleTouchEnd);
  });
  var handleTouchStart = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__.default)(function (event) {
    // Workaround as Safari has partial support for touchAction: 'none'.
    event.preventDefault();
    var touch = event.changedTouches[0];

    if (touch != null) {
      // A number that uniquely identifies the current finger in the touch session.
      touchId.current = touch.identifier;
    }

    var finger = trackFinger(event, touchId);

    var _getFingerNewValue3 = getFingerNewValue({
      finger: finger,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue3.newValue,
        activeIndex = _getFingerNewValue3.activeIndex;

    focusThumb({
      sliderRef: sliderRef,
      activeIndex: activeIndex,
      setActive: setActive
    });
    setValueState(newValue);

    if (onChange) {
      onChange(event, newValue);
    }

    var doc = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_14__.default)(sliderRef.current);
    doc.addEventListener('touchmove', handleTouchMove);
    doc.addEventListener('touchend', handleTouchEnd);
  });
  react__WEBPACK_IMPORTED_MODULE_4__.useEffect(function () {
    var slider = sliderRef.current;
    slider.addEventListener('touchstart', handleTouchStart);
    var doc = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_14__.default)(slider);
    return function () {
      slider.removeEventListener('touchstart', handleTouchStart);
      doc.removeEventListener('mousemove', handleTouchMove);
      doc.removeEventListener('mouseup', handleTouchEnd);
      doc.removeEventListener('touchmove', handleTouchMove);
      doc.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchEnd, handleTouchMove, handleTouchStart]);
  var handleMouseDown = (0,_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__.default)(function (event) {
    if (onMouseDown) {
      onMouseDown(event);
    }

    event.preventDefault();
    var finger = trackFinger(event, touchId);

    var _getFingerNewValue4 = getFingerNewValue({
      finger: finger,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue4.newValue,
        activeIndex = _getFingerNewValue4.activeIndex;

    focusThumb({
      sliderRef: sliderRef,
      activeIndex: activeIndex,
      setActive: setActive
    });
    setValueState(newValue);

    if (onChange) {
      onChange(event, newValue);
    }

    var doc = (0,_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_14__.default)(sliderRef.current);
    doc.addEventListener('mousemove', handleTouchMove);
    doc.addEventListener('mouseup', handleTouchEnd);
  });
  var trackOffset = valueToPercent(range ? values[0] : min, min, max);
  var trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;

  var trackStyle = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.default)({}, axisProps[axis].offset(trackOffset), axisProps[axis].leap(trackLeap));

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__.default)({
    ref: handleRef,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)(classes.root, classes["color".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_15__.default)(color))], className, disabled && classes.disabled, marks.length > 0 && marks.some(function (mark) {
      return mark.label;
    }) && classes.marked, track === false && classes.trackFalse, orientation === 'vertical' && classes.vertical, track === 'inverted' && classes.trackInverted),
    onMouseDown: handleMouseDown
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: classes.rail
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
    className: classes.track,
    style: trackStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("input", {
    value: values.join(','),
    name: name,
    type: "hidden"
  }), marks.map(function (mark, index) {
    var percent = valueToPercent(mark.value, min, max);
    var style = axisProps[axis].offset(percent);
    var markActive;

    if (track === false) {
      markActive = values.indexOf(mark.value) !== -1;
    } else {
      markActive = track === 'normal' && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === 'inverted' && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      key: mark.value
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      style: style,
      "data-index": index,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)(classes.mark, markActive && classes.markActive)
    }), mark.label != null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", {
      "aria-hidden": true,
      "data-index": index,
      style: style,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)(classes.markLabel, markActive && classes.markLabelActive)
    }, mark.label) : null);
  }), values.map(function (value, index) {
    var percent = valueToPercent(value, min, max);
    var style = axisProps[axis].offset(percent);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(ValueLabelComponent, {
      key: index,
      valueLabelFormat: valueLabelFormat,
      valueLabelDisplay: valueLabelDisplay,
      className: classes.valueLabel,
      value: typeof valueLabelFormat === 'function' ? valueLabelFormat(scale(value), index) : valueLabelFormat,
      index: index,
      open: open === index || active === index || valueLabelDisplay === 'on',
      disabled: disabled
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(ThumbComponent, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.default)(classes.thumb, classes["thumbColor".concat((0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_15__.default)(color))], active === index && classes.active, disabled && classes.disabled, focusVisible === index && classes.focusVisible),
      tabIndex: disabled ? null : 0,
      role: "slider",
      style: style,
      "data-index": index,
      "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-orientation": orientation,
      "aria-valuemax": scale(max),
      "aria-valuemin": scale(min),
      "aria-valuenow": scale(value),
      "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
      onKeyDown: handleKeyDown,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onMouseOver: handleMouseOver,
      onMouseLeave: handleMouseLeave
    }));
  }));
});
 true ? Slider.propTypes = {
  /**
   * The label of the slider.
   */
  'aria-label': (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_16__.default)((prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), function (props) {
    var range = Array.isArray(props.value || props.defaultValue);

    if (range && props['aria-label'] != null) {
      return new Error('Material-UI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.');
    }

    return null;
  }),

  /**
   * The id of the element containing a label for the slider.
   */
  'aria-labelledby': (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),

  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  'aria-valuetext': (0,_material_ui_utils__WEBPACK_IMPORTED_MODULE_16__.default)((prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), function (props) {
    var range = Array.isArray(props.value || props.defaultValue);

    if (range && props['aria-valuetext'] != null) {
      return new Error('Material-UI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.');
    }

    return null;
  }),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object.isRequired),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(['primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().elementType),

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().number), prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().number))]),

  /**
   * If `true`, the slider will be disabled.
   */
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   *
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   *
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),

  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks will be spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   */
  marks: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().array)]),

  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   */
  max: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),

  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   */
  min: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),

  /**
   * Name attribute of the hidden `input` element.
   */
  name: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),

  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number | number[]} value The new value.
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),

  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {object} event The event source of the callback.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),

  /**
   * @ignore
   */
  onMouseDown: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),

  /**
   * The slider orientation.
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(['horizontal', 'vertical']),

  /**
   * A transformation function, to change the scale of the slider.
   */
  scale: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func),

  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   */
  step: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number),

  /**
   * The component used to display the value label.
   */
  ThumbComponent: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().elementType),

  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   */
  track: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(['normal', false, 'inverted']),

  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().number), prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().number))]),

  /**
   * The value label component.
   */
  ValueLabelComponent: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().elementType),

  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   */
  valueLabelDisplay: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(['on', 'auto', 'off']),

  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   */
  valueLabelFormat: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func)])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_17__.default)(styles, {
  name: 'MuiSlider'
})(Slider));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Slider/ValueLabel.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Slider/ValueLabel.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");





var styles = function styles(theme) {
  return {
    thumb: {
      '&$open': {
        '& $offset': {
          transform: 'scale(1) translateY(-10px)'
        }
      }
    },
    open: {},
    offset: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
      zIndex: 1
    }, theme.typography.body2, {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1.2,
      transition: theme.transitions.create(['transform'], {
        duration: theme.transitions.duration.shortest
      }),
      top: -34,
      transformOrigin: 'bottom center',
      transform: 'scale(0)',
      position: 'absolute'
    }),
    circle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: 'currentColor',
      transform: 'rotate(-45deg)'
    },
    label: {
      color: theme.palette.primary.contrastText,
      transform: 'rotate(45deg)'
    }
  };
};
/**
 * @ignore - internal component.
 */


function ValueLabel(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      open = props.open,
      value = props.value,
      valueLabelDisplay = props.valueLabelDisplay;

  if (valueLabelDisplay === 'off') {
    return children;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(children, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)(children.props.className, (open || valueLabelDisplay === 'on') && classes.open, classes.thumb)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__.default)(classes.offset, className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: classes.circle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: classes.label
  }, value))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__.default)(styles, {
  name: 'PrivateValueLabel'
})(ValueLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ deprecatedPropType
/* harmony export */ });
function deprecatedPropType(validator, reason) {
  if (false) {}

  return function (props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (typeof props[propName] !== 'undefined') {
      return new Error("The ".concat(location, " `").concat(propFullNameSafe, "` of ") + "`".concat(componentNameSafe, "` is deprecated. ").concat(reason));
    }

    return null;
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "capitalize": () => /* reexport safe */ _capitalize__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "createChainedFunction": () => /* reexport safe */ _createChainedFunction__WEBPACK_IMPORTED_MODULE_1__.default,
/* harmony export */   "createSvgIcon": () => /* reexport safe */ _createSvgIcon__WEBPACK_IMPORTED_MODULE_2__.default,
/* harmony export */   "debounce": () => /* reexport safe */ _debounce__WEBPACK_IMPORTED_MODULE_3__.default,
/* harmony export */   "deprecatedPropType": () => /* reexport safe */ _deprecatedPropType__WEBPACK_IMPORTED_MODULE_4__.default,
/* harmony export */   "isMuiElement": () => /* reexport safe */ _isMuiElement__WEBPACK_IMPORTED_MODULE_5__.default,
/* harmony export */   "ownerDocument": () => /* reexport safe */ _ownerDocument__WEBPACK_IMPORTED_MODULE_6__.default,
/* harmony export */   "ownerWindow": () => /* reexport safe */ _ownerWindow__WEBPACK_IMPORTED_MODULE_7__.default,
/* harmony export */   "requirePropFactory": () => /* reexport safe */ _requirePropFactory__WEBPACK_IMPORTED_MODULE_8__.default,
/* harmony export */   "setRef": () => /* reexport safe */ _setRef__WEBPACK_IMPORTED_MODULE_9__.default,
/* harmony export */   "unsupportedProp": () => /* reexport safe */ _unsupportedProp__WEBPACK_IMPORTED_MODULE_10__.default,
/* harmony export */   "useControlled": () => /* reexport safe */ _useControlled__WEBPACK_IMPORTED_MODULE_11__.default,
/* harmony export */   "useEventCallback": () => /* reexport safe */ _useEventCallback__WEBPACK_IMPORTED_MODULE_12__.default,
/* harmony export */   "useForkRef": () => /* reexport safe */ _useForkRef__WEBPACK_IMPORTED_MODULE_13__.default,
/* harmony export */   "unstable_useId": () => /* reexport safe */ _unstable_useId__WEBPACK_IMPORTED_MODULE_14__.default,
/* harmony export */   "useIsFocusVisible": () => /* reexport safe */ _useIsFocusVisible__WEBPACK_IMPORTED_MODULE_15__.default
/* harmony export */ });
/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _createChainedFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createChainedFunction */ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony import */ var _createSvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var _deprecatedPropType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deprecatedPropType */ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js");
/* harmony import */ var _isMuiElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isMuiElement */ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js");
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _ownerWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");
/* harmony import */ var _requirePropFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./requirePropFactory */ "./node_modules/@material-ui/core/esm/utils/requirePropFactory.js");
/* harmony import */ var _setRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _unsupportedProp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./unsupportedProp */ "./node_modules/@material-ui/core/esm/utils/unsupportedProp.js");
/* harmony import */ var _useControlled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useControlled */ "./node_modules/@material-ui/core/esm/utils/useControlled.js");
/* harmony import */ var _useEventCallback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _useForkRef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _unstable_useId__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./unstable_useId */ "./node_modules/@material-ui/core/esm/utils/unstable_useId.js");
/* harmony import */ var _useIsFocusVisible__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useIsFocusVisible */ "./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js");













 // eslint-disable-next-line camelcase




/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/unstable_useId.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/unstable_useId.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ useId
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/**
 * Private module reserved for @material-ui/x packages.
 */

function useId(idOverride) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(idOverride),
      defaultId = _React$useState[0],
      setDefaultId = _React$useState[1];

  var id = idOverride || defaultId;
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the random value for client-side rendering only.
      // We can't use it server-side.
      setDefaultId("mui-".concat(Math.round(Math.random() * 1e5)));
    }
  }, [defaultId]);
  return id;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/unsupportedProp.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/unsupportedProp.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ unsupportedProp
/* harmony export */ });
function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (false) {}

  var propFullNameSafe = propFullName || propName;

  if (typeof props[propName] !== 'undefined') {
    return new Error("The prop `".concat(propFullNameSafe, "` is not supported. Please remove it."));
  }

  return null;
}

/***/ }),

/***/ "./node_modules/@material-ui/icons/VolumeDown.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material-ui/icons/VolumeDown.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"
}), 'VolumeDown');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/VolumeUp.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/VolumeUp.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
}), 'VolumeUp');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/icons/utils/createSvgIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return _utils.createSvgIcon;
  }
}));

var _utils = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");

/***/ }),

/***/ "./resources/matx/src/app/views/material-kit/slider/AppSlider.jsx":
/*!************************************************************************!*\
  !*** ./resources/matx/src/app/views/material-kit/slider/AppSlider.jsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ContinuousSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContinuousSlider */ "./resources/matx/src/app/views/material-kit/slider/ContinuousSlider.jsx");
/* harmony import */ var _DiscreteSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DiscreteSlider */ "./resources/matx/src/app/views/material-kit/slider/DiscreteSlider.jsx");
/* harmony import */ var _RangeSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RangeSlider */ "./resources/matx/src/app/views/material-kit/slider/RangeSlider.jsx");
/* harmony import */ var _InputSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputSlider */ "./resources/matx/src/app/views/material-kit/slider/InputSlider.jsx");
/* harmony import */ var _VerticalSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VerticalSlider */ "./resources/matx/src/app/views/material-kit/slider/VerticalSlider.jsx");
/* harmony import */ var matx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! matx */ "./resources/matx/src/matx/index.js");








var AppSlider = function AppSlider() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "m-sm-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mb-sm-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(matx__WEBPACK_IMPORTED_MODULE_6__.Breadcrumb, {
    routeSegments: [{
      name: "Material",
      path: "/material"
    }, {
      name: "Slider"
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(matx__WEBPACK_IMPORTED_MODULE_6__.SimpleCard, {
    title: "Continuous Slider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ContinuousSlider__WEBPACK_IMPORTED_MODULE_1__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "py-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(matx__WEBPACK_IMPORTED_MODULE_6__.SimpleCard, {
    title: "Discrete Slider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DiscreteSlider__WEBPACK_IMPORTED_MODULE_2__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "py-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(matx__WEBPACK_IMPORTED_MODULE_6__.SimpleCard, {
    title: "Range Slider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RangeSlider__WEBPACK_IMPORTED_MODULE_3__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "py-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(matx__WEBPACK_IMPORTED_MODULE_6__.SimpleCard, {
    title: "Slider with Input"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_InputSlider__WEBPACK_IMPORTED_MODULE_4__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "py-3"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(matx__WEBPACK_IMPORTED_MODULE_6__.SimpleCard, {
    title: "Vertical Slider"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_VerticalSlider__WEBPACK_IMPORTED_MODULE_5__.default, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppSlider);

/***/ }),

/***/ "./resources/matx/src/app/views/material-kit/slider/ContinuousSlider.jsx":
/*!*******************************************************************************!*\
  !*** ./resources/matx/src/app/views/material-kit/slider/ContinuousSlider.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ ContinuousSlider
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/VolumeDown */ "./node_modules/@material-ui/icons/VolumeDown.js");
/* harmony import */ var _material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/VolumeUp */ "./node_modules/@material-ui/icons/VolumeUp.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/Slider.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)({
  root: {
    width: 200
  }
});
function ContinuousSlider() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(30),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
    id: "continuous-slider",
    gutterBottom: true
  }, "Volume"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_VolumeDown__WEBPACK_IMPORTED_MODULE_4__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__.default, {
    value: value,
    onChange: handleChange,
    "aria-labelledby": "continuous-slider"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_6__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__.default, {
    disabled: true,
    defaultValue: 30,
    "aria-labelledby": "continuous-slider"
  }));
}

/***/ }),

/***/ "./resources/matx/src/app/views/material-kit/slider/DiscreteSlider.jsx":
/*!*****************************************************************************!*\
  !*** ./resources/matx/src/app/views/material-kit/slider/DiscreteSlider.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ DiscreteSlider
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/Slider.js");




var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)(function (theme) {
  return {
    root: {
      width: 300
    },
    margin: {
      height: theme.spacing(3)
    }
  };
});
var marks = [{
  value: 0,
  label: "0°C"
}, {
  value: 20,
  label: "20°C"
}, {
  value: 37,
  label: "37°C"
}, {
  value: 100,
  label: "100°C"
}];

function valuetext(value) {
  return "".concat(value, "\xB0C");
}

function valueLabelFormat(value) {
  return marks.findIndex(function (mark) {
    return mark.value === value;
  }) + 1;
}

function DiscreteSlider() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
    id: "discrete-slider",
    gutterBottom: true
  }, "Temperature"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__.default, {
    defaultValue: 20,
    getAriaValueText: valuetext,
    "aria-labelledby": "discrete-slider",
    valueLabelDisplay: "auto",
    step: 10,
    marks: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.margin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
    id: "discrete-slider-custom",
    gutterBottom: true
  }, "Custom marks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__.default, {
    defaultValue: 20,
    getAriaValueText: valuetext,
    "aria-labelledby": "discrete-slider-custom",
    step: 10,
    valueLabelDisplay: "auto",
    marks: marks
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.margin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
    id: "discrete-slider-restrict",
    gutterBottom: true
  }, "Restricted values"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__.default, {
    defaultValue: 20,
    valueLabelFormat: valueLabelFormat,
    getAriaValueText: valuetext,
    "aria-labelledby": "discrete-slider-restrict",
    step: null,
    valueLabelDisplay: "auto",
    marks: marks
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.margin
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
    id: "discrete-slider-always",
    gutterBottom: true
  }, "Always visible"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__.default, {
    defaultValue: 80,
    getAriaValueText: valuetext,
    "aria-labelledby": "discrete-slider-always",
    step: 10,
    marks: marks,
    valueLabelDisplay: "on"
  }));
}

/***/ }),

/***/ "./resources/matx/src/app/views/material-kit/slider/InputSlider.jsx":
/*!**************************************************************************!*\
  !*** ./resources/matx/src/app/views/material-kit/slider/InputSlider.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ InputSlider
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/Slider.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/Input.js");
/* harmony import */ var _material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/VolumeUp */ "./node_modules/@material-ui/icons/VolumeUp.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)({
  root: {
    width: 250
  },
  input: {
    width: 42
  }
});
function InputSlider() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(30),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleSliderChange = function handleSliderChange(event, newValue) {
    setValue(newValue);
  };

  var handleInputChange = function handleInputChange(event) {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  var handleBlur = function handleBlur() {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
    id: "input-slider",
    gutterBottom: true
  }, "Volume"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
    container: true,
    spacing: 2,
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_VolumeUp__WEBPACK_IMPORTED_MODULE_4__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
    item: true,
    xs: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_5__.default, {
    value: typeof value === "number" ? value : 0,
    onChange: handleSliderChange,
    "aria-labelledby": "input-slider"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__.default, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: classes.input,
    value: value,
    margin: "dense",
    onChange: handleInputChange,
    onBlur: handleBlur,
    inputProps: {
      step: 10,
      min: 0,
      max: 100,
      type: "number",
      "aria-labelledby": "input-slider"
    }
  }))));
}

/***/ }),

/***/ "./resources/matx/src/app/views/material-kit/slider/RangeSlider.jsx":
/*!**************************************************************************!*\
  !*** ./resources/matx/src/app/views/material-kit/slider/RangeSlider.jsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ RangeSlider
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/Slider.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)({
  root: {
    width: 300
  }
});

function valuetext(value) {
  return "".concat(value, "\xB0C");
}

function RangeSlider() {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState([20, 37]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
    id: "range-slider",
    gutterBottom: true
  }, "Temperature range"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__.default, {
    value: value,
    onChange: handleChange,
    valueLabelDisplay: "auto",
    "aria-labelledby": "range-slider",
    getAriaValueText: valuetext
  }));
}

/***/ }),

/***/ "./resources/matx/src/app/views/material-kit/slider/VerticalSlider.jsx":
/*!*****************************************************************************!*\
  !*** ./resources/matx/src/app/views/material-kit/slider/VerticalSlider.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ VerticalSlider
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/Slider.js");




var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)({
  root: {
    height: 300
  }
});

function valuetext(value) {
  return "".concat(value, "\xB0C");
}

var marks = [{
  value: 0,
  label: "0°C"
}, {
  value: 20,
  label: "20°C"
}, {
  value: 37,
  label: "37°C"
}, {
  value: 100,
  label: "100°C"
}];
function VerticalSlider() {
  var classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
    id: "vertical-slider",
    gutterBottom: true
  }, "Temperature"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__.default, {
    orientation: "vertical",
    getAriaValueText: valuetext,
    defaultValue: 30,
    "aria-labelledby": "vertical-slider"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__.default, {
    disabled: true,
    orientation: "vertical",
    getAriaValueText: valuetext,
    defaultValue: 30,
    "aria-labelledby": "vertical-slider"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_3__.default, {
    orientation: "vertical",
    defaultValue: [20, 37],
    "aria-labelledby": "vertical-slider",
    getAriaValueText: valuetext,
    marks: marks
  })));
}

/***/ })

}]);