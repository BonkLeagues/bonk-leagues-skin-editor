/*!
 * 
 *        `:+osssso/-
 *     `/ssssssssssss:
 *    .ssssssssssssssso
 *    ossssssssssssssss:         `/:
 *    sssssssssssssssss/       `/ss`
 *    /ssssssssssssssss-     .+sss:
 *     +ssssssssssssss:    -osssss`
 *      -+ssssssssss/`   -ossssss:
 *        `-:////:.   `:soossssss`
 *                  `/ss.   .sss:
 *                `/ssso     oss
 *               .+ssssso/:/oss:
 *                  `-:+sssssss
 *                       `.:+o:
 * 
 *     Bonk Leagues Skin Editor v1
 *     (c) its_magic, Finbae, Discoli
 *            oh and Dionysus I guess
 * 
 *     Welcome to JavaScript land! We
 *     hope you enjoy your stay.   :)
 * 
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(59);
} else {
  module.exports = require('./cjs/react.development.js');
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = exports.connectAdvanced = exports.createProvider = exports.Provider = undefined;

var _Provider = __webpack_require__(83);

var _Provider2 = _interopRequireDefault(_Provider);

var _connectAdvanced = __webpack_require__(38);

var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

var _connect = __webpack_require__(90);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Provider = _Provider2.default;
exports.createProvider = _Provider.createProvider;
exports.connectAdvanced = _connectAdvanced2.default;
exports.connect = _connect2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
// eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(14)(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(16);
var IE8_DOM_DEFINE = __webpack_require__(47);
var toPrimitive = __webpack_require__(21);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__(24)('wks');
var uid = __webpack_require__(7);
var _Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(128);
var defined = __webpack_require__(129);
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._resetStore = _resetStore;

var _match_keys = __webpack_require__(46);

var _match_keys2 = _interopRequireDefault(_match_keys);

var _parse_keys = __webpack_require__(56);

var _parse_keys2 = _interopRequireDefault(_parse_keys);

var _uuid = __webpack_require__(141);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

/**
 * @module store
 *
 */


/**
 * private
 *
 */

// dict for class prototypes => bindings
var _handlers = new Map();

// all mounted instances that have keybindings
var _instances = new Set();

// for testing
function _resetStore() {
  _handlers.clear();
  _instances.clear();
}

/**
 * public
 *
 */

var Store = {

  /**
   * activate
   *
   * @access public
   * @param {object} instance Instantiated class that extended React.Component, to be focused to receive keydown events
   */
  activate: function activate(instances) {
    var instancesArray = [].concat(instances);

    // if no components were found as ancestors of the event target,
    // effectively deactivate keydown handling by capping the set of instances
    // with `null`.
    if (!instancesArray.length) {
      _instances.add(null);
    } else {
      _instances.delete(null);

      // deleting and then adding the instance(s) has the effect of sorting the set
      // according to instance activation (ascending)
      instancesArray.forEach(function (instance) {
        _instances.delete(instance);
        _instances.add(instance);
      });
    }
  },

  /**
   * deleteInstance
   *
   * @access public
   * @param {object} target Instantiated class that extended React.Component
   * @return {boolean} The value set.has( target ) would have returned prior to deletion
   */
  deleteInstance: function deleteInstance(target) {
    _instances.delete(target);
  },
  findBindingForEvent: function findBindingForEvent(event) {
    if (!_instances.has(null)) {
      var keyMatchesEvent = function keyMatchesEvent(keySet) {
        return (0, _match_keys2.default)({ keySet: keySet, event: event });
      };

      // loop through instances in reverse activation order so that most
      // recently activated instance gets first dibs on event
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = [].concat(_toConsumableArray(_instances)).reverse()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var instance = _step.value;

          var bindings = this.getBinding(instance.constructor.prototype);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = bindings[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var _step2$value = _slicedToArray(_step2.value, 2),
                  keySets = _step2$value[0],
                  fn = _step2$value[1];

              if (keySets.some(keyMatchesEvent)) {
                // return when matching keybinding is found - i.e. only one
                // keybound component can respond to a given key code. to get around this,
                // scope a common ancestor component class with @keydown and use
                // @keydownScoped to bind the duplicate keys in your child components
                // (or just inspect nextProps.keydown.event).
                return { fn: fn, instance: instance };
              }
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    return null;
  },

  /**
   * getBinding
   *
   * @access public
   * @param {object} target Class used as key in dict of key bindings
   * @return {object} The object containing bindings for the given class
   */
  getBinding: function getBinding(_ref) {
    var __reactKeydownUUID = _ref.__reactKeydownUUID;

    return _handlers.get(__reactKeydownUUID);
  },

  /**
   * getInstances
   *
   * @access public
   * @return {set} All stored instances (all mounted component instances with keybindings)
   */
  getInstances: function getInstances() {
    return _instances;
  },

  /**
   * isEmpty
   *
   * @access public
   * @return {number} Size of the set of all stored instances
   */
  isEmpty: function isEmpty() {
    return !_instances.size;
  },

  /**
   * setBinding
   *
   * @access public
   * @param {object} args All arguments necessary to set the binding
   * @param {array} args.keys Key codes that should trigger the fn
   * @param {function} args.fn The callback to be triggered when given keys are pressed
   * @param {object} args.target The decorated class
   */
  setBinding: function setBinding(_ref2) {
    var keys = _ref2.keys,
        fn = _ref2.fn,
        target = _ref2.target;

    var keySets = (0, _parse_keys2.default)(keys);

    var __reactKeydownUUID = target.__reactKeydownUUID;

    if (!__reactKeydownUUID) {
      target.__reactKeydownUUID = (0, _uuid2.default)();
      _handlers.set(target.__reactKeydownUUID, new Map([[keySets, fn]]));
    } else {
      _handlers.get(__reactKeydownUUID).set(keySets, fn);
    }
  }
};

exports.default = Store;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALL_PRINTABLE_KEYS = exports.ALL_KEYS = exports.modifiers = undefined;

__webpack_require__(119);

// TODO: Need better, more complete, and more methodical key definitions

var Keys = {
  backspace: 8,
  del: 46,
  delete: 46,
  tab: 9,
  enter: 13,
  'return': 13,
  esc: 27,
  space: 32,
  pageUp: 33,
  pageDown: 34,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221
};

// Add uppercase versions of keys above for backwards compatibility
Object.keys(Keys).forEach(function (key) {
  return Keys[key.toUpperCase()] = Keys[key];
});

'0123456789'.split('').forEach(function (num, index) {
  return Keys[num] = index + 48;
});

'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(function (letter, index) {
  Keys[letter] = index + 65;
  Keys[letter.toLowerCase()] = index + 65;
});

// fn keys
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].forEach(function (item, index) {
  return Keys['f' + index] = 111 + index;
});

var modifiers = exports.modifiers = {
  control: 'ctrl',
  ctrl: 'ctrl',
  shift: 'shift',
  meta: 'meta',
  cmd: 'meta',
  command: 'meta',
  option: 'alt',
  alt: 'alt'
};

var ALL_KEYS = exports.ALL_KEYS = Symbol('ALL_KEYS');

var ALL_PRINTABLE_KEYS = exports.ALL_PRINTABLE_KEYS = Symbol('ALL_PRINTABLE_KEYS');

exports.default = Keys;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(6);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = __webpack_require__(32);

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = __webpack_require__(80);

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = __webpack_require__(81);

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = __webpack_require__(82);

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = __webpack_require__(35);

var _compose2 = _interopRequireDefault(_compose);

var _warning = __webpack_require__(34);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {
  (0, _warning2.default)('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2.default;
exports.combineReducers = _combineReducers2.default;
exports.bindActionCreators = _bindActionCreators2.default;
exports.applyMiddleware = _applyMiddleware2.default;
exports.compose = _compose2.default;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(69);

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _getPrototype = __webpack_require__(74);

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _isObjectLike = __webpack_require__(76);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0, _isObjectLike2.default)(value) || (0, _baseGetTag2.default)(value) != objectTag) {
    return false;
  }
  var proto = (0, _getPrototype2.default)(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

exports.default = isPlainObject;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(5);
var createDesc = __webpack_require__(22);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var hide = __webpack_require__(20);
var has = __webpack_require__(3);
var SRC = __webpack_require__(7)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(15).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(51);
var enumBugKeys = __webpack_require__(27);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function') {
    return;
  }
  if (false) {
    // This branch is unreachable because this function is only called
    // in production, but the condition is true only in development.
    // Therefore if the branch is still here, dead code elimination wasn't
    // properly applied.
    // Don't change the message. React DevTools relies on it. Also make sure
    // this message doesn't occur elsewhere in this function, or it will cause
    // a false positive.
    throw new Error('^_^');
  }
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(60);
} else {
  module.exports = require('./cjs/react-dom.development.js');
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionTypes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = createStore;

var _isPlainObject = __webpack_require__(18);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(77);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2.default)(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2.default] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2.default] = observable, _ref2;
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(70);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var _Symbol = _root2.default.Symbol;

exports.default = _Symbol;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(84)();
}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeShape = exports.subscriptionShape = undefined;

var _propTypes = __webpack_require__(36);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subscriptionShape = exports.subscriptionShape = _propTypes2.default.shape({
  trySubscribe: _propTypes2.default.func.isRequired,
  tryUnsubscribe: _propTypes2.default.func.isRequired,
  notifyNestedSubs: _propTypes2.default.func.isRequired,
  isSubscribed: _propTypes2.default.func.isRequired
});

var storeShape = exports.storeShape = _propTypes2.default.shape({
  subscribe: _propTypes2.default.func.isRequired,
  dispatch: _propTypes2.default.func.isRequired,
  getState: _propTypes2.default.func.isRequired
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = connectAdvanced;

var _hoistNonReactStatics = __webpack_require__(87);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _invariant = __webpack_require__(88);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _Subscription = __webpack_require__(89);

var _Subscription2 = _interopRequireDefault(_Subscription);

var _PropTypes = __webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new _Subscription2.default(this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(_react.Component);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
  };
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
exports.getDependsOnOwnProps = getDependsOnOwnProps;
exports.wrapMapToPropsFunc = wrapMapToPropsFunc;

var _verifyPlainObject = __webpack_require__(40);

var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) (0, _verifyPlainObject2.default)(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifyPlainObject;

var _isPlainObject = __webpack_require__(18);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(19);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verifyPlainObject(value, displayName, methodName) {
  if (!(0, _isPlainObject2.default)(value)) {
    (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.parseActions = parseActions;
exports.default = undoable;
exports.distinctState = distinctState;
exports.includeAction = includeAction;
exports.ifAction = ifAction;
exports.excludeAction = excludeAction;

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

// debug output
var __DEBUG__ = undefined;
function debug() {
  if (__DEBUG__) {
    var _console;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (!console.group) {
      args.unshift('%credux-undo', 'font-style: italic');
    }
    (_console = console).log.apply(_console, args);
  }
}
function debugStart(action, state) {
  if (__DEBUG__) {
    var args = ['action', action.type];
    if (console.group) {
      var _console2;

      args.unshift('%credux-undo', 'font-style: italic');
      (_console2 = console).groupCollapsed.apply(_console2, args);
      console.log('received', { state: state, action: action });
    } else {
      debug.apply(undefined, args);
    }
  }
}
function debugEnd() {
  if (__DEBUG__) {
    return console.groupEnd && console.groupEnd();
  }
}
// /debug output

// action types
var ActionTypes = exports.ActionTypes = {
  UNDO: '@@redux-undo/UNDO',
  REDO: '@@redux-undo/REDO',
  JUMP_TO_FUTURE: '@@redux-undo/JUMP_TO_FUTURE',
  JUMP_TO_PAST: '@@redux-undo/JUMP_TO_PAST'
};
// /action types

// action creators to change the state
var ActionCreators = exports.ActionCreators = {
  undo: function undo() {
    return { type: ActionTypes.UNDO };
  },
  redo: function redo() {
    return { type: ActionTypes.REDO };
  },
  jumpToFuture: function jumpToFuture(index) {
    return { type: ActionTypes.JUMP_TO_FUTURE, index: index };
  },
  jumpToPast: function jumpToPast(index) {
    return { type: ActionTypes.JUMP_TO_PAST, index: index };
  }
};
// /action creators

// length: get length of history
function length(history) {
  var past = history.past;
  var future = history.future;

  return past.length + 1 + future.length;
}
// /length

// insert: insert `state` into history, which means adding the current state
//         into `past`, setting the new `state` as `present` and erasing
//         the `future`.
function insert(history, state, limit) {
  debug('insert', { state: state, history: history, free: limit - length(history) });

  var past = history.past;
  var present = history.present;

  var historyOverflow = limit && length(history) >= limit;

  if (present === undefined) {
    // init history
    return {
      past: [],
      present: state,
      future: []
    };
  }

  return {
    past: [].concat(_toConsumableArray(past.slice(historyOverflow ? 1 : 0)), [present]),
    present: state,
    future: []
  };
}
// /insert

// undo: go back to the previous point in history
function undo(history) {
  debug('undo', { history: history });

  var past = history.past;
  var present = history.present;
  var future = history.future;

  if (past.length <= 0) return history;

  return {
    past: past.slice(0, past.length - 1), // remove last element from past
    present: past[past.length - 1], // set element as new present
    future: [present].concat(_toConsumableArray(future))
  };
}
// /undo

// redo: go to the next point in history
function redo(history) {
  debug('redo', { history: history });

  var past = history.past;
  var present = history.present;
  var future = history.future;

  if (future.length <= 0) return history;

  return {
    future: future.slice(1, future.length), // remove element from future
    present: future[0], // set element as new present
    past: [].concat(_toConsumableArray(past), [present // old present state is in the past now
    ])
  };
}
// /redo

// jumpToFuture: jump to requested index in future history
function jumpToFuture(history, index) {
  if (index === 0) return redo(history);

  var past = history.past;
  var present = history.present;
  var future = history.future;

  return {
    future: future.slice(index + 1),
    present: future[index],
    past: past.concat([present]).concat(future.slice(0, index))
  };
}
// /jumpToFuture

// jumpToPast: jump to requested index in past history
function jumpToPast(history, index) {
  if (index === history.past.length - 1) return undo(history);

  var past = history.past;
  var present = history.present;
  var future = history.future;

  return {
    future: past.slice(index + 1).concat([present]).concat(future),
    present: past[index],
    past: past.slice(0, index)
  };
}
// /jumpToPast

// wrapState: for backwards compatibility to 0.4
function wrapState(state) {
  return _extends({}, state, {
    history: state
  });
}
// /wrapState

// updateState
function updateState(state, history) {
  return wrapState(_extends({}, state, history));
}
// /updateState

// createHistory
function createHistory(state) {
  return {
    past: [],
    present: state,
    future: []
  };
}
// /createHistory

// parseActions
function parseActions(rawActions) {
  var defaultValue = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

  if (Array.isArray(rawActions)) {
    return rawActions;
  } else if (typeof rawActions === 'string') {
    return [rawActions];
  }
  return defaultValue;
}
// /parseActions

// redux-undo higher order reducer
function undoable(reducer) {
  var rawConfig = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  __DEBUG__ = rawConfig.debug;

  var config = {
    initialState: rawConfig.initialState,
    initTypes: parseActions(rawConfig.initTypes, ['@@redux/INIT', '@@INIT']),
    limit: rawConfig.limit,
    filter: rawConfig.filter || function () {
      return true;
    },
    undoType: rawConfig.undoType || ActionTypes.UNDO,
    redoType: rawConfig.redoType || ActionTypes.REDO,
    jumpToPastType: rawConfig.jumpToPastType || ActionTypes.JUMP_TO_PAST,
    jumpToFutureType: rawConfig.jumpToFutureType || ActionTypes.JUMP_TO_FUTURE
  };
  config.history = rawConfig.initialHistory || createHistory(config.initialState);

  if (config.initTypes.length === 0) {
    console.warn('redux-undo: supply at least one action type in initTypes to ensure initial state');
  }

  return function (state, action) {
    debugStart(action, state);
    var res = undefined;
    switch (action.type) {
      case config.undoType:
        res = undo(state);
        debug('after undo', res);
        debugEnd();
        return res ? updateState(state, res) : state;

      case config.redoType:
        res = redo(state);
        debug('after redo', res);
        debugEnd();
        return res ? updateState(state, res) : state;

      case config.jumpToPastType:
        res = jumpToPast(state, action.index);
        debug('after jumpToPast', res);
        debugEnd();
        return res ? updateState(state, res) : state;

      case config.jumpToFutureType:
        res = jumpToFuture(state, action.index);
        debug('after jumpToFuture', res);
        debugEnd();
        return res ? updateState(state, res) : state;

      default:
        res = reducer(state && state.present, action);

        if (config.initTypes.some(function (actionType) {
          return actionType === action.type;
        })) {
          debug('reset history due to init action');
          debugEnd();
          return wrapState(_extends({}, state, createHistory(res)));
        }

        if (config.filter && typeof config.filter === 'function') {
          if (!config.filter(action, res, state && state.present)) {
            debug('filter prevented action, not storing it');
            debugEnd();
            return wrapState(_extends({}, state, {
              present: res
            }));
          }
        }

        var history = state && state.present !== undefined ? state : config.history;
        var updatedHistory = insert(history, res, config.limit);
        debug('after insert', { history: updatedHistory, free: config.limit - length(updatedHistory) });
        debugEnd();

        return wrapState(_extends({}, state, updatedHistory));
    }
  };
}
// /redux-undo

// distinctState helper
function distinctState() {
  return function (action, currentState, previousState) {
    return currentState !== previousState;
  };
}
// /distinctState

// includeAction helper
function includeAction(rawActions) {
  var actions = parseActions(rawActions);
  return function (action) {
    return actions.indexOf(action.type) >= 0;
  };
}
// /includeAction

// deprecated ifAction helper
function ifAction(rawActions) {
  console.error('Deprecation Warning: Please change `ifAction` to `includeAction`');
  return includeAction(rawActions);
}
// /ifAction

// excludeAction helper
function excludeAction() {
  var rawActions = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  var actions = parseActions(rawActions);
  return function (action) {
    return actions.indexOf(action.type) < 0;
  };
}
// /excludeAction

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var rng = __webpack_require__(101);
var bytesToUuid = __webpack_require__(102);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.objectToSkinCode = objectToSkinCode;
exports.skinCodeToObject = skinCodeToObject;

var _buffer = __webpack_require__(44);

var _bufferSplit = __webpack_require__(109);

var _bufferSplit2 = _interopRequireDefault(_bufferSplit);

var _bufferIndexof = __webpack_require__(111);

var _bufferIndexof2 = _interopRequireDefault(_bufferIndexof);

var _v = __webpack_require__(42);

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function objectToSkinCode(skinData) {
    var sF = 30 / 700;

    skinData.shapes = skinData.shapes.reverse();

    var skinBuffer = new _buffer.Buffer('0a070361000209', 'hex');
    skinBuffer = addNumberToBuffer(skinBuffer, skinData.shapes.length * 2 + 1);
    skinBuffer = addToBuffer(skinBuffer, new _buffer.Buffer('010a0705616c000100', 'hex'));

    for (var i = 0; i < skinData.shapes.length; i++) {
        var layer = skinData.shapes[i];
        skinBuffer = addNumberToBuffer(skinBuffer, layer.shapeID + 1);
        skinBuffer = addFloatToBuffer(skinBuffer, layer.scale * sF);
        skinBuffer = addFloatToBuffer(skinBuffer, layer.rotation);
        skinBuffer = addFloatToBuffer(skinBuffer, layer.position.x * sF);
        skinBuffer = addFloatToBuffer(skinBuffer, layer.position.y * sF);
        skinBuffer = addNumberToBuffer(skinBuffer, +layer.hf);
        skinBuffer = addNumberToBuffer(skinBuffer, +layer.vf);
        skinBuffer = addColorToBuffer(skinBuffer, layer.color);

        if (i != skinData.shapes.length - 1) skinBuffer = addToBuffer(skinBuffer, new _buffer.Buffer('0a05000100', 'hex'));
    }

    skinBuffer = addColorToBuffer(skinBuffer, skinData.baseColor);

    return skinBuffer.toString('base64');
}

function numberToHex(n) {
    var hexCode = n.toString(16);
    return new _buffer.Buffer(hexCode.length < 2 ? '0' + hexCode : hexCode, 'hex');
}
function addToBuffer(skinBuffer, buffer) {
    return _buffer.Buffer.concat([skinBuffer, buffer]);
}
function addNumberToBuffer(skinBuffer, n) {
    return addToBuffer(skinBuffer, numberToHex(n));
}
function addFloatToBuffer(skinBuffer, n) {
    var floatBuffer = _buffer.Buffer.allocUnsafe(4);
    floatBuffer.writeFloatBE(n, 0);
    return addToBuffer(skinBuffer, floatBuffer);
}
function addColorToBuffer(skinBuffer, col) {
    return addToBuffer(skinBuffer, new _buffer.Buffer('00' + col.replace('#', ''), 'hex'));
}

function skinCodeToObject(skinCode) {
    var skinBuffer = _buffer.Buffer.from(skinCode, 'base64');

    var skinData;
    if ((0, _bufferIndexof2.default)(skinBuffer, new _buffer.Buffer('616c000100', 'hex')) > -1) {
        var layerData = (0, _bufferSplit2.default)(skinBuffer, new _buffer.Buffer('0a05000100', 'hex'));
        layerData[0] = (0, _bufferSplit2.default)(layerData[0], new _buffer.Buffer('616c000100', 'hex'))[1];

        skinData = { shapes: [] };

        for (var i = 0; i < layerData.length; i++) {
            skinData = parseLayer(skinData, layerData[i], i + 1);
        }

        skinData.shapes = skinData.shapes.reverse();
    } else {
        skinData = {
            baseColor: subBuf(skinBuffer, skinBuffer.length - 3, 3).toString('hex'),
            shapes: []
        };
    }

    return skinData;
}

function parseLayer(skinData, layer, index) {
    var sF = 700 / 30;

    var shapeID = layer[0];

    var scale = bufferToFloat(subBuf(layer, 1, 4));
    var angle = bufferToFloat(subBuf(layer, 5, 4));

    var xPos = bufferToFloat(subBuf(layer, 9, 4));
    var yPos = bufferToFloat(subBuf(layer, 13, 4));

    var hf = !!subBuf(layer, 17, 1)[0];
    var vf = !!subBuf(layer, 18, 1)[0];

    var color = subBuf(layer, 20, 3).toString('hex');

    skinData.shapes.push({
        uuid: (0, _v2.default)(),
        name: 'Shape ' + index,
        shapeID: shapeID - 1,
        selected: false,

        position: {
            x: xPos * sF,
            y: yPos * sF
        },
        rotation: angle,
        scale: scale * sF,
        hf: hf,
        vf: vf,
        color: color
    });

    if (layer.length > 23) skinData.baseColor = subBuf(layer, layer.length - 3, 3).toString('hex');

    return skinData;
}

function bufferToFloat(buffer) {
    // return Math.round(buffer.readFloatBE(0)*100)/100;
    return buffer.readFloatBE(0);
}

function subBuf(buffer, start, end) {
    var result = [];
    for (var i = start; i < start + end; i++) {
        result.push(buffer[i]);
    }
    return _buffer.Buffer.from(result);
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(106);
var ieee754 = __webpack_require__(107);
var isArray = __webpack_require__(108);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
        return 42;
      } };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }
    that.length = length;
  }

  return that;
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }
    return allocUnsafe(this, arg);
  }
  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;
  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);
  if (size <= 0) {
    return createBuffer(that, size);
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }
  return createBuffer(that, size);
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }
  return that;
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);

  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }
  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }
  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }
      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }
  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }
  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;
    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;
  if (length === undefined) {
    length = 0;
    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;
  for (i = 0; i < list.length; ++i) {
    var buf = list[i];
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }
    buf.copy(buffer, pos);
    pos += buf.length;
  }
  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }
  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0;

  // Use a for loop to avoid recursion
  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;
      case 'hex':
        return len >>> 1;
      case 'base64':
        return base64ToBytes(string).length;
      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}
Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false;

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0;
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }
  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }
  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }
  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }
  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = target ? target.length : 0;
  }
  if (thisStart === undefined) {
    thisStart = 0;
  }
  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }
  if (thisStart >= thisEnd) {
    return -1;
  }
  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;

  if (this === target) return 0;

  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);

  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1;

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }
  byteOffset = +byteOffset; // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();
    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }
      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;
  if (dir) {
    var foundIndex = -1;
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
    for (i = byteOffset; i >= 0; i--) {
      var found = true;
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }
      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;
  if (!length) {
    length = remaining;
  } else {
    length = Number(length);
    if (length > remaining) {
      length = remaining;
    }
  }

  // must be an even number of digits
  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }
  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0;
    // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;
    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    }
    // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';

  var loweredCase = false;
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];

  var i = start;
  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }
          break;
        case 2:
          secondByte = buf[i + 1];
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }
          break;
        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = '';
  var i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }
  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }
  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;

  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;

  var out = '';
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }
  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }
  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;

  var newBuf;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var val = this[offset];
  var mul = 1;
  var i = 0;
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);

  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }
  mul *= 0x80;

  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);

  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);

    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }
    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }
  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }
  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }
  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }
  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
};

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start;

  // Copy 0 bytes; we're done
  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0;

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds');

  // Are we oob?
  if (end > this.length) end = this.length;
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
};

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0);
      if (code < 256) {
        val = code;
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;

  if (!val) val = 0;

  var i;
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
};

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '');
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return '';
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '=';
  }
  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        }

        // valid lead
        leadSurrogate = codePoint;

        continue;
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null;

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }
  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;

    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }
  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ALL_PRINTABLE_KEYS = exports.ALL_KEYS = exports.Keys = exports.setBinding = exports.keydownScoped = exports.default = undefined;

var _decorators = __webpack_require__(117);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_decorators).default;
  }
});
Object.defineProperty(exports, 'keydownScoped', {
  enumerable: true,
  get: function get() {
    return _decorators.keydownScoped;
  }
});

var _store = __webpack_require__(12);

Object.defineProperty(exports, 'setBinding', {
  enumerable: true,
  get: function get() {
    return _store.setBinding;
  }
});

var _keys = __webpack_require__(13);

Object.defineProperty(exports, 'Keys', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_keys).default;
  }
});
Object.defineProperty(exports, 'ALL_KEYS', {
  enumerable: true,
  get: function get() {
    return _keys.ALL_KEYS;
  }
});
Object.defineProperty(exports, 'ALL_PRINTABLE_KEYS', {
  enumerable: true,
  get: function get() {
    return _keys.ALL_PRINTABLE_KEYS;
  }
});

__webpack_require__(146);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(13);

var PRINTABLE_CHARACTERS = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()-_+=[]\\{}|;\':",./<>?£';

var modKeys = Object.keys(_keys.modifiers);

function matchKeys(_ref) {
  var keySet = _ref.keySet,
      event = _ref.event;
  var key = keySet.key,
      _keySet$modifiers = keySet.modifiers,
      modifiers = _keySet$modifiers === undefined ? [] : _keySet$modifiers;

  var keysMatch = void 0;

  keysMatch = key === _keys.ALL_KEYS;

  if (key === _keys.ALL_PRINTABLE_KEYS) {
    if (event.key) {
      // Modern browsers implement `key`, so if `key` is length 1, we have a match. e.g. 'a' for the
      // a key, or '2' for the 2 key. All other non-printable characters have names, e.g. 'Enter' or 'Backspace'.
      keysMatch = event.key.length === 1;
    } else {
      // For browsers that do no support `event.key`, we test against a list of characters
      var pressedChar = String.fromCharCode(event.charCode);
      keysMatch = PRINTABLE_CHARACTERS.indexOf(pressedChar) >= 0;
    }
  }

  if (key === event.which) {
    var evtModKeys = modKeys.filter(function (modKey) {
      return event[modKey + 'Key'];
    }).sort();
    keysMatch = modifiers.length === evtModKeys.length && modifiers.every(function (modKey, index) {
      return evtModKeys[index] === modKey;
    });
  }

  return keysMatch;
}

exports.default = matchKeys;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = !__webpack_require__(4) && !__webpack_require__(14)(function () {
  return Object.defineProperty(__webpack_require__(48)('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(6);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = __webpack_require__(8);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = false;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(3);
var toIObject = __webpack_require__(9);
var arrayIndexOf = __webpack_require__(130)(false);
var IE_PROTO = __webpack_require__(53)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var shared = __webpack_require__(24)('keys');
var uid = __webpack_require__(7);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(51);
var hiddenKeys = __webpack_require__(27).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(13);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseKeys(keysArray) {
  return keysArray.map(function (key) {
    var keySet = { key: key };
    if (typeof key === 'string') {
      var keyString = key.toLowerCase().trim();
      var matches = keyString.split(/\s?\+\s?/);
      keySet = matches.length === 1 ? { key: _keys2.default[keyString] } : {
        key: _keys2.default[matches.pop()],
        modifiers: matches.map(function (modKey) {
          return _keys.modifiers[modKey];
        }).sort()
      };
    }
    return keySet;
  });
}

exports.default = parseKeys;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onUnmount = exports.onMount = undefined;
exports._onClick = _onClick;
exports._onKeyDown = _onKeyDown;
exports._shouldConsider = _shouldConsider;

var _dom_helpers = __webpack_require__(142);

var _dom_helpers2 = _interopRequireDefault(_dom_helpers);

var _listeners = __webpack_require__(143);

var _listeners2 = _interopRequireDefault(_listeners);

var _store = __webpack_require__(12);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

/* eslint-disable no-use-before-define */
/**
 * @module eventHandlers
 *
 */


/**
 * private
 *
 */

/**
 * _onClick
 *
 * @access private
 * @param {object} event The click event object
 * @param {object} event.target The DOM node from the click event
 */
function _onClick(_ref) {
  var target = _ref.target;

  _store2.default.activate([].concat(_toConsumableArray(_store2.default.getInstances())).reduce(_dom_helpers2.default.findContainerNodes(target), []).sort(_dom_helpers2.default.sortByDOMPosition).map(function (item) {
    return item.instance;
  }));
}

/**
 * _onKeyDown: The keydown event callback
 *
 * @access private
 * @param {object} event The keydown event object
 * @param {number} event.which The key code (which) received from the keydown event
 */
function _onKeyDown(event) {
  var forceConsider = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (forceConsider || _shouldConsider(event)) {
    var _ref2 = _store2.default.findBindingForEvent(event) || {},
        fn = _ref2.fn,
        instance = _ref2.instance;

    if (fn) {
      fn.call(instance, event);
      return true;
    }
  }
  return false;
}

/**
 * _shouldConsider: Conditions for proceeding with key event handling
 *
 * @access private
 * @param {object} event The keydown event object
 * @param {object} event.target The node origin of the event
 * @return {boolean} Whether to continue procesing the keydown event
 */
function _shouldConsider(_ref3) {
  var ctrlKey = _ref3.ctrlKey,
      target = _ref3.target;

  return ctrlKey || !~['INPUT', 'SELECT', 'TEXTAREA'].indexOf(target.tagName) && (!target.getAttribute || target.getAttribute('role') !== 'textbox');
}

/**
 * public
 *
 */

/**
 * onMount
 *
 * @access public
 */
function onMount(instance) {
  _store2.default.activate(instance);
  _listeners2.default.bindKeys(_onKeyDown);
  _listeners2.default.bindClicks(_onClick);
  _dom_helpers2.default.bindFocusables(instance, _store2.default.activate);
}

/**
 * onUnmount
 *
 * @access public
 */
function onUnmount(instance) {
  _store2.default.deleteInstance(instance);
  if (_store2.default.isEmpty()) {
    _listeners2.default.unbindClicks(_onClick);
    _listeners2.default.unbindKeys(_onKeyDown);
  }
}

exports.onMount = onMount;
exports.onUnmount = onUnmount;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(31);

var _redux = __webpack_require__(17);

var _reactRedux = __webpack_require__(1);

var _reduxThunk = __webpack_require__(97);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(98);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _allReducers = __webpack_require__(99);

var _allReducers2 = _interopRequireDefault(_allReducers);

var _loadShapes = __webpack_require__(114);

var _loadShapes2 = _interopRequireDefault(_loadShapes);

var _loadSkinCode = __webpack_require__(115);

var _loadSkinCode2 = _interopRequireDefault(_loadSkinCode);

var _App = __webpack_require__(116);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Reducers
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;

// Components


// Actions

var store = (0, _redux.createStore)(_allReducers2.default, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk2.default)));

store.dispatch(_loadShapes2.default).then(function () {
    if (window.location.href.indexOf('?') > -1) store.dispatch(_loadSkinCode2.default);
});

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_App2.default, null)
), document.getElementById('app'));

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.2.0
 * react.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var m = __webpack_require__(29),
    n = __webpack_require__(30),
    p = __webpack_require__(10),
    q = "function" === typeof Symbol && Symbol["for"],
    r = q ? Symbol["for"]("react.element") : 60103,
    t = q ? Symbol["for"]("react.call") : 60104,
    u = q ? Symbol["for"]("react.return") : 60105,
    v = q ? Symbol["for"]("react.portal") : 60106,
    w = q ? Symbol["for"]("react.fragment") : 60107,
    x = "function" === typeof Symbol && Symbol.iterator;
function y(a) {
  for (var b = arguments.length - 1, e = "Minified React error #" + a + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d" + a, c = 0; c < b; c++) {
    e += "\x26args[]\x3d" + encodeURIComponent(arguments[c + 1]);
  }b = Error(e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name = "Invariant Violation";b.framesToPop = 1;throw b;
}
var z = { isMounted: function isMounted() {
    return !1;
  }, enqueueForceUpdate: function enqueueForceUpdate() {}, enqueueReplaceState: function enqueueReplaceState() {}, enqueueSetState: function enqueueSetState() {} };function A(a, b, e) {
  this.props = a;this.context = b;this.refs = n;this.updater = e || z;
}A.prototype.isReactComponent = {};A.prototype.setState = function (a, b) {
  "object" !== (typeof a === "undefined" ? "undefined" : _typeof(a)) && "function" !== typeof a && null != a ? y("85") : void 0;this.updater.enqueueSetState(this, a, b, "setState");
};A.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function B(a, b, e) {
  this.props = a;this.context = b;this.refs = n;this.updater = e || z;
}function C() {}C.prototype = A.prototype;var D = B.prototype = new C();D.constructor = B;m(D, A.prototype);D.isPureReactComponent = !0;function E(a, b, e) {
  this.props = a;this.context = b;this.refs = n;this.updater = e || z;
}var F = E.prototype = new C();F.constructor = E;m(F, A.prototype);F.unstable_isAsyncReactComponent = !0;F.render = function () {
  return this.props.children;
};var G = { current: null },
    H = Object.prototype.hasOwnProperty,
    I = { key: !0, ref: !0, __self: !0, __source: !0 };
function J(a, b, e) {
  var c,
      d = {},
      g = null,
      k = null;if (null != b) for (c in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
    H.call(b, c) && !I.hasOwnProperty(c) && (d[c] = b[c]);
  }var f = arguments.length - 2;if (1 === f) d.children = e;else if (1 < f) {
    for (var h = Array(f), l = 0; l < f; l++) {
      h[l] = arguments[l + 2];
    }d.children = h;
  }if (a && a.defaultProps) for (c in f = a.defaultProps, f) {
    void 0 === d[c] && (d[c] = f[c]);
  }return { $$typeof: r, type: a, key: g, ref: k, props: d, _owner: G.current };
}function K(a) {
  return "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && a.$$typeof === r;
}
function escape(a) {
  var b = { "\x3d": "\x3d0", ":": "\x3d2" };return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}var L = /\/+/g,
    M = [];function N(a, b, e, c) {
  if (M.length) {
    var d = M.pop();d.result = a;d.keyPrefix = b;d.func = e;d.context = c;d.count = 0;return d;
  }return { result: a, keyPrefix: b, func: e, context: c, count: 0 };
}function O(a) {
  a.result = null;a.keyPrefix = null;a.func = null;a.context = null;a.count = 0;10 > M.length && M.push(a);
}
function P(a, b, e, c) {
  var d = typeof a === "undefined" ? "undefined" : _typeof(a);if ("undefined" === d || "boolean" === d) a = null;var g = !1;if (null === a) g = !0;else switch (d) {case "string":case "number":
      g = !0;break;case "object":
      switch (a.$$typeof) {case r:case t:case u:case v:
          g = !0;}}if (g) return e(c, a, "" === b ? "." + Q(a, 0) : b), 1;g = 0;b = "" === b ? "." : b + ":";if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    d = a[k];var f = b + Q(d, k);g += P(d, f, e, c);
  } else if (null === a || "undefined" === typeof a ? f = null : (f = x && a[x] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(d = a.next()).done;) {
    d = d.value, f = b + Q(d, k++), g += P(d, f, e, c);
  } else "object" === d && (e = "" + a, y("31", "[object Object]" === e ? "object with keys {" + Object.keys(a).join(", ") + "}" : e, ""));return g;
}function Q(a, b) {
  return "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}function R(a, b) {
  a.func.call(a.context, b, a.count++);
}
function S(a, b, e) {
  var c = a.result,
      d = a.keyPrefix;a = a.func.call(a.context, b, a.count++);Array.isArray(a) ? T(a, c, e, p.thatReturnsArgument) : null != a && (K(a) && (b = d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(L, "$\x26/") + "/") + e, a = { $$typeof: r, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner }), c.push(a));
}function T(a, b, e, c, d) {
  var g = "";null != e && (g = ("" + e).replace(L, "$\x26/") + "/");b = N(b, g, c, d);null == a || P(a, "", S, b);O(b);
}
var U = { Children: { map: function map(a, b, e) {
      if (null == a) return a;var c = [];T(a, c, null, b, e);return c;
    }, forEach: function forEach(a, b, e) {
      if (null == a) return a;b = N(null, null, b, e);null == a || P(a, "", R, b);O(b);
    }, count: function count(a) {
      return null == a ? 0 : P(a, "", p.thatReturnsNull, null);
    }, toArray: function toArray(a) {
      var b = [];T(a, b, null, p.thatReturnsArgument);return b;
    }, only: function only(a) {
      K(a) ? void 0 : y("143");return a;
    } }, Component: A, PureComponent: B, unstable_AsyncComponent: E, Fragment: w, createElement: J, cloneElement: function cloneElement(a, b, e) {
    var c = m({}, a.props),
        d = a.key,
        g = a.ref,
        k = a._owner;if (null != b) {
      void 0 !== b.ref && (g = b.ref, k = G.current);void 0 !== b.key && (d = "" + b.key);if (a.type && a.type.defaultProps) var f = a.type.defaultProps;for (h in b) {
        H.call(b, h) && !I.hasOwnProperty(h) && (c[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
      }
    }var h = arguments.length - 2;if (1 === h) c.children = e;else if (1 < h) {
      f = Array(h);for (var l = 0; l < h; l++) {
        f[l] = arguments[l + 2];
      }c.children = f;
    }return { $$typeof: r, type: a.type, key: d, ref: g, props: c, _owner: k };
  }, createFactory: function createFactory(a) {
    var b = J.bind(null, a);b.type = a;return b;
  },
  isValidElement: K, version: "16.2.0", __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: G, assign: m } },
    V = Object.freeze({ default: U }),
    W = V && U || V;module.exports = W["default"] ? W["default"] : W;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.2.0
 * react-dom.production.min.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var aa = __webpack_require__(0),
    l = __webpack_require__(61),
    B = __webpack_require__(29),
    C = __webpack_require__(10),
    ba = __webpack_require__(62),
    da = __webpack_require__(63),
    ea = __webpack_require__(64),
    fa = __webpack_require__(65),
    ia = __webpack_require__(68),
    D = __webpack_require__(30);
function E(a) {
  for (var b = arguments.length - 1, c = "Minified React error #" + a + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d" + a, d = 0; d < b; d++) {
    c += "\x26args[]\x3d" + encodeURIComponent(arguments[d + 1]);
  }b = Error(c + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name = "Invariant Violation";b.framesToPop = 1;throw b;
}aa ? void 0 : E("227");
var oa = { children: !0, dangerouslySetInnerHTML: !0, defaultValue: !0, defaultChecked: !0, innerHTML: !0, suppressContentEditableWarning: !0, suppressHydrationWarning: !0, style: !0 };function pa(a, b) {
  return (a & b) === b;
}
var ta = { MUST_USE_PROPERTY: 1, HAS_BOOLEAN_VALUE: 4, HAS_NUMERIC_VALUE: 8, HAS_POSITIVE_NUMERIC_VALUE: 24, HAS_OVERLOADED_BOOLEAN_VALUE: 32, HAS_STRING_BOOLEAN_VALUE: 64, injectDOMPropertyConfig: function injectDOMPropertyConfig(a) {
    var b = ta,
        c = a.Properties || {},
        d = a.DOMAttributeNamespaces || {},
        e = a.DOMAttributeNames || {};a = a.DOMMutationMethods || {};for (var f in c) {
      ua.hasOwnProperty(f) ? E("48", f) : void 0;var g = f.toLowerCase(),
          h = c[f];g = { attributeName: g, attributeNamespace: null, propertyName: f, mutationMethod: null, mustUseProperty: pa(h, b.MUST_USE_PROPERTY),
        hasBooleanValue: pa(h, b.HAS_BOOLEAN_VALUE), hasNumericValue: pa(h, b.HAS_NUMERIC_VALUE), hasPositiveNumericValue: pa(h, b.HAS_POSITIVE_NUMERIC_VALUE), hasOverloadedBooleanValue: pa(h, b.HAS_OVERLOADED_BOOLEAN_VALUE), hasStringBooleanValue: pa(h, b.HAS_STRING_BOOLEAN_VALUE) };1 >= g.hasBooleanValue + g.hasNumericValue + g.hasOverloadedBooleanValue ? void 0 : E("50", f);e.hasOwnProperty(f) && (g.attributeName = e[f]);d.hasOwnProperty(f) && (g.attributeNamespace = d[f]);a.hasOwnProperty(f) && (g.mutationMethod = a[f]);ua[f] = g;
    }
  } },
    ua = {};
function va(a, b) {
  if (oa.hasOwnProperty(a) || 2 < a.length && ("o" === a[0] || "O" === a[0]) && ("n" === a[1] || "N" === a[1])) return !1;if (null === b) return !0;switch (typeof b === "undefined" ? "undefined" : _typeof(b)) {case "boolean":
      return oa.hasOwnProperty(a) ? a = !0 : (b = wa(a)) ? a = b.hasBooleanValue || b.hasStringBooleanValue || b.hasOverloadedBooleanValue : (a = a.toLowerCase().slice(0, 5), a = "data-" === a || "aria-" === a), a;case "undefined":case "number":case "string":case "object":
      return !0;default:
      return !1;}
}function wa(a) {
  return ua.hasOwnProperty(a) ? ua[a] : null;
}
var xa = ta,
    ya = xa.MUST_USE_PROPERTY,
    K = xa.HAS_BOOLEAN_VALUE,
    za = xa.HAS_NUMERIC_VALUE,
    Aa = xa.HAS_POSITIVE_NUMERIC_VALUE,
    Ba = xa.HAS_OVERLOADED_BOOLEAN_VALUE,
    Ca = xa.HAS_STRING_BOOLEAN_VALUE,
    Da = { Properties: { allowFullScreen: K, async: K, autoFocus: K, autoPlay: K, capture: Ba, checked: ya | K, cols: Aa, contentEditable: Ca, controls: K, "default": K, defer: K, disabled: K, download: Ba, draggable: Ca, formNoValidate: K, hidden: K, loop: K, multiple: ya | K, muted: ya | K, noValidate: K, open: K, playsInline: K, readOnly: K, required: K, reversed: K, rows: Aa, rowSpan: za,
    scoped: K, seamless: K, selected: ya | K, size: Aa, start: za, span: Aa, spellCheck: Ca, style: 0, tabIndex: 0, itemScope: K, acceptCharset: 0, className: 0, htmlFor: 0, httpEquiv: 0, value: Ca }, DOMAttributeNames: { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv" }, DOMMutationMethods: { value: function value(a, b) {
      if (null == b) return a.removeAttribute("value");"number" !== a.type || !1 === a.hasAttribute("value") ? a.setAttribute("value", "" + b) : a.validity && !a.validity.badInput && a.ownerDocument.activeElement !== a && a.setAttribute("value", "" + b);
    } } },
    Ea = xa.HAS_STRING_BOOLEAN_VALUE,
    M = { xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace" },
    Ga = { Properties: { autoReverse: Ea, externalResourcesRequired: Ea, preserveAlpha: Ea }, DOMAttributeNames: { autoReverse: "autoReverse", externalResourcesRequired: "externalResourcesRequired", preserveAlpha: "preserveAlpha" }, DOMAttributeNamespaces: { xlinkActuate: M.xlink, xlinkArcrole: M.xlink, xlinkHref: M.xlink, xlinkRole: M.xlink, xlinkShow: M.xlink, xlinkTitle: M.xlink, xlinkType: M.xlink,
    xmlBase: M.xml, xmlLang: M.xml, xmlSpace: M.xml } },
    Ha = /[\-\:]([a-z])/g;function Ia(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode x-height xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type xml:base xmlns:xlink xml:lang xml:space".split(" ").forEach(function (a) {
  var b = a.replace(Ha, Ia);Ga.Properties[b] = 0;Ga.DOMAttributeNames[b] = a;
});xa.injectDOMPropertyConfig(Da);xa.injectDOMPropertyConfig(Ga);
var P = { _caughtError: null, _hasCaughtError: !1, _rethrowError: null, _hasRethrowError: !1, injection: { injectErrorUtils: function injectErrorUtils(a) {
      "function" !== typeof a.invokeGuardedCallback ? E("197") : void 0;Ja = a.invokeGuardedCallback;
    } }, invokeGuardedCallback: function invokeGuardedCallback(a, b, c, d, e, f, g, h, k) {
    Ja.apply(P, arguments);
  }, invokeGuardedCallbackAndCatchFirstError: function invokeGuardedCallbackAndCatchFirstError(a, b, c, d, e, f, g, h, k) {
    P.invokeGuardedCallback.apply(this, arguments);if (P.hasCaughtError()) {
      var q = P.clearCaughtError();P._hasRethrowError || (P._hasRethrowError = !0, P._rethrowError = q);
    }
  }, rethrowCaughtError: function rethrowCaughtError() {
    return Ka.apply(P, arguments);
  }, hasCaughtError: function hasCaughtError() {
    return P._hasCaughtError;
  }, clearCaughtError: function clearCaughtError() {
    if (P._hasCaughtError) {
      var a = P._caughtError;P._caughtError = null;P._hasCaughtError = !1;return a;
    }E("198");
  } };function Ja(a, b, c, d, e, f, g, h, k) {
  P._hasCaughtError = !1;P._caughtError = null;var q = Array.prototype.slice.call(arguments, 3);try {
    b.apply(c, q);
  } catch (v) {
    P._caughtError = v, P._hasCaughtError = !0;
  }
}
function Ka() {
  if (P._hasRethrowError) {
    var a = P._rethrowError;P._rethrowError = null;P._hasRethrowError = !1;throw a;
  }
}var La = null,
    Ma = {};
function Na() {
  if (La) for (var a in Ma) {
    var b = Ma[a],
        c = La.indexOf(a);-1 < c ? void 0 : E("96", a);if (!Oa[c]) {
      b.extractEvents ? void 0 : E("97", a);Oa[c] = b;c = b.eventTypes;for (var d in c) {
        var e = void 0;var f = c[d],
            g = b,
            h = d;Pa.hasOwnProperty(h) ? E("99", h) : void 0;Pa[h] = f;var k = f.phasedRegistrationNames;if (k) {
          for (e in k) {
            k.hasOwnProperty(e) && Qa(k[e], g, h);
          }e = !0;
        } else f.registrationName ? (Qa(f.registrationName, g, h), e = !0) : e = !1;e ? void 0 : E("98", d, a);
      }
    }
  }
}
function Qa(a, b, c) {
  Ra[a] ? E("100", a) : void 0;Ra[a] = b;Sa[a] = b.eventTypes[c].dependencies;
}var Oa = [],
    Pa = {},
    Ra = {},
    Sa = {};function Ta(a) {
  La ? E("101") : void 0;La = Array.prototype.slice.call(a);Na();
}function Ua(a) {
  var b = !1,
      c;for (c in a) {
    if (a.hasOwnProperty(c)) {
      var d = a[c];Ma.hasOwnProperty(c) && Ma[c] === d || (Ma[c] ? E("102", c) : void 0, Ma[c] = d, b = !0);
    }
  }b && Na();
}
var Va = Object.freeze({ plugins: Oa, eventNameDispatchConfigs: Pa, registrationNameModules: Ra, registrationNameDependencies: Sa, possibleRegistrationNames: null, injectEventPluginOrder: Ta, injectEventPluginsByName: Ua }),
    Wa = null,
    Xa = null,
    Ya = null;function Za(a, b, c, d) {
  b = a.type || "unknown-event";a.currentTarget = Ya(d);P.invokeGuardedCallbackAndCatchFirstError(b, c, void 0, a);a.currentTarget = null;
}
function $a(a, b) {
  null == b ? E("30") : void 0;if (null == a) return b;if (Array.isArray(a)) {
    if (Array.isArray(b)) return a.push.apply(a, b), a;a.push(b);return a;
  }return Array.isArray(b) ? [a].concat(b) : [a, b];
}function ab(a, b, c) {
  Array.isArray(a) ? a.forEach(b, c) : a && b.call(c, a);
}var bb = null;
function cb(a, b) {
  if (a) {
    var c = a._dispatchListeners,
        d = a._dispatchInstances;if (Array.isArray(c)) for (var e = 0; e < c.length && !a.isPropagationStopped(); e++) {
      Za(a, b, c[e], d[e]);
    } else c && Za(a, b, c, d);a._dispatchListeners = null;a._dispatchInstances = null;a.isPersistent() || a.constructor.release(a);
  }
}function db(a) {
  return cb(a, !0);
}function gb(a) {
  return cb(a, !1);
}var hb = { injectEventPluginOrder: Ta, injectEventPluginsByName: Ua };
function ib(a, b) {
  var c = a.stateNode;if (!c) return null;var d = Wa(c);if (!d) return null;c = d[b];a: switch (b) {case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));a = !d;break a;default:
      a = !1;}if (a) return null;c && "function" !== typeof c ? E("231", b, typeof c === "undefined" ? "undefined" : _typeof(c)) : void 0;
  return c;
}function jb(a, b, c, d) {
  for (var e, f = 0; f < Oa.length; f++) {
    var g = Oa[f];g && (g = g.extractEvents(a, b, c, d)) && (e = $a(e, g));
  }return e;
}function kb(a) {
  a && (bb = $a(bb, a));
}function lb(a) {
  var b = bb;bb = null;b && (a ? ab(b, db) : ab(b, gb), bb ? E("95") : void 0, P.rethrowCaughtError());
}var mb = Object.freeze({ injection: hb, getListener: ib, extractEvents: jb, enqueueEvents: kb, processEventQueue: lb }),
    nb = Math.random().toString(36).slice(2),
    Q = "__reactInternalInstance$" + nb,
    ob = "__reactEventHandlers$" + nb;
function pb(a) {
  if (a[Q]) return a[Q];for (var b = []; !a[Q];) {
    if (b.push(a), a.parentNode) a = a.parentNode;else return null;
  }var c = void 0,
      d = a[Q];if (5 === d.tag || 6 === d.tag) return d;for (; a && (d = a[Q]); a = b.pop()) {
    c = d;
  }return c;
}function qb(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;E("33");
}function rb(a) {
  return a[ob] || null;
}
var sb = Object.freeze({ precacheFiberNode: function precacheFiberNode(a, b) {
    b[Q] = a;
  }, getClosestInstanceFromNode: pb, getInstanceFromNode: function getInstanceFromNode(a) {
    a = a[Q];return !a || 5 !== a.tag && 6 !== a.tag ? null : a;
  }, getNodeFromInstance: qb, getFiberCurrentPropsFromNode: rb, updateFiberProps: function updateFiberProps(a, b) {
    a[ob] = b;
  } });function tb(a) {
  do {
    a = a["return"];
  } while (a && 5 !== a.tag);return a ? a : null;
}function ub(a, b, c) {
  for (var d = []; a;) {
    d.push(a), a = tb(a);
  }for (a = d.length; 0 < a--;) {
    b(d[a], "captured", c);
  }for (a = 0; a < d.length; a++) {
    b(d[a], "bubbled", c);
  }
}
function vb(a, b, c) {
  if (b = ib(a, c.dispatchConfig.phasedRegistrationNames[b])) c._dispatchListeners = $a(c._dispatchListeners, b), c._dispatchInstances = $a(c._dispatchInstances, a);
}function wb(a) {
  a && a.dispatchConfig.phasedRegistrationNames && ub(a._targetInst, vb, a);
}function xb(a) {
  if (a && a.dispatchConfig.phasedRegistrationNames) {
    var b = a._targetInst;b = b ? tb(b) : null;ub(b, vb, a);
  }
}
function yb(a, b, c) {
  a && c && c.dispatchConfig.registrationName && (b = ib(a, c.dispatchConfig.registrationName)) && (c._dispatchListeners = $a(c._dispatchListeners, b), c._dispatchInstances = $a(c._dispatchInstances, a));
}function zb(a) {
  a && a.dispatchConfig.registrationName && yb(a._targetInst, null, a);
}function Ab(a) {
  ab(a, wb);
}
function Bb(a, b, c, d) {
  if (c && d) a: {
    var e = c;for (var f = d, g = 0, h = e; h; h = tb(h)) {
      g++;
    }h = 0;for (var k = f; k; k = tb(k)) {
      h++;
    }for (; 0 < g - h;) {
      e = tb(e), g--;
    }for (; 0 < h - g;) {
      f = tb(f), h--;
    }for (; g--;) {
      if (e === f || e === f.alternate) break a;e = tb(e);f = tb(f);
    }e = null;
  } else e = null;f = e;for (e = []; c && c !== f;) {
    g = c.alternate;if (null !== g && g === f) break;e.push(c);c = tb(c);
  }for (c = []; d && d !== f;) {
    g = d.alternate;if (null !== g && g === f) break;c.push(d);d = tb(d);
  }for (d = 0; d < e.length; d++) {
    yb(e[d], "bubbled", a);
  }for (a = c.length; 0 < a--;) {
    yb(c[a], "captured", b);
  }
}
var Cb = Object.freeze({ accumulateTwoPhaseDispatches: Ab, accumulateTwoPhaseDispatchesSkipTarget: function accumulateTwoPhaseDispatchesSkipTarget(a) {
    ab(a, xb);
  }, accumulateEnterLeaveDispatches: Bb, accumulateDirectDispatches: function accumulateDirectDispatches(a) {
    ab(a, zb);
  } }),
    Db = null;function Eb() {
  !Db && l.canUseDOM && (Db = "textContent" in document.documentElement ? "textContent" : "innerText");return Db;
}var S = { _root: null, _startText: null, _fallbackText: null };
function Fb() {
  if (S._fallbackText) return S._fallbackText;var a,
      b = S._startText,
      c = b.length,
      d,
      e = Gb(),
      f = e.length;for (a = 0; a < c && b[a] === e[a]; a++) {}var g = c - a;for (d = 1; d <= g && b[c - d] === e[f - d]; d++) {}S._fallbackText = e.slice(a, 1 < d ? 1 - d : void 0);return S._fallbackText;
}function Gb() {
  return "value" in S._root ? S._root.value : S._root[Eb()];
}
var Hb = "dispatchConfig _targetInst nativeEvent isDefaultPrevented isPropagationStopped _dispatchListeners _dispatchInstances".split(" "),
    Ib = { type: null, target: null, currentTarget: C.thatReturnsNull, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function timeStamp(a) {
    return a.timeStamp || Date.now();
  }, defaultPrevented: null, isTrusted: null };
function T(a, b, c, d) {
  this.dispatchConfig = a;this._targetInst = b;this.nativeEvent = c;a = this.constructor.Interface;for (var e in a) {
    a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c) : "target" === e ? this.target = d : this[e] = c[e]);
  }this.isDefaultPrevented = (null != c.defaultPrevented ? c.defaultPrevented : !1 === c.returnValue) ? C.thatReturnsTrue : C.thatReturnsFalse;this.isPropagationStopped = C.thatReturnsFalse;return this;
}
B(T.prototype, { preventDefault: function preventDefault() {
    this.defaultPrevented = !0;var a = this.nativeEvent;a && (a.preventDefault ? a.preventDefault() : "unknown" !== typeof a.returnValue && (a.returnValue = !1), this.isDefaultPrevented = C.thatReturnsTrue);
  }, stopPropagation: function stopPropagation() {
    var a = this.nativeEvent;a && (a.stopPropagation ? a.stopPropagation() : "unknown" !== typeof a.cancelBubble && (a.cancelBubble = !0), this.isPropagationStopped = C.thatReturnsTrue);
  }, persist: function persist() {
    this.isPersistent = C.thatReturnsTrue;
  }, isPersistent: C.thatReturnsFalse,
  destructor: function destructor() {
    var a = this.constructor.Interface,
        b;for (b in a) {
      this[b] = null;
    }for (a = 0; a < Hb.length; a++) {
      this[Hb[a]] = null;
    }
  } });T.Interface = Ib;T.augmentClass = function (a, b) {
  function c() {}c.prototype = this.prototype;var d = new c();B(d, a.prototype);a.prototype = d;a.prototype.constructor = a;a.Interface = B({}, this.Interface, b);a.augmentClass = this.augmentClass;Jb(a);
};Jb(T);function Kb(a, b, c, d) {
  if (this.eventPool.length) {
    var e = this.eventPool.pop();this.call(e, a, b, c, d);return e;
  }return new this(a, b, c, d);
}
function Lb(a) {
  a instanceof this ? void 0 : E("223");a.destructor();10 > this.eventPool.length && this.eventPool.push(a);
}function Jb(a) {
  a.eventPool = [];a.getPooled = Kb;a.release = Lb;
}function Mb(a, b, c, d) {
  return T.call(this, a, b, c, d);
}T.augmentClass(Mb, { data: null });function Nb(a, b, c, d) {
  return T.call(this, a, b, c, d);
}T.augmentClass(Nb, { data: null });var Pb = [9, 13, 27, 32],
    Vb = l.canUseDOM && "CompositionEvent" in window,
    Wb = null;l.canUseDOM && "documentMode" in document && (Wb = document.documentMode);var Xb;
if (Xb = l.canUseDOM && "TextEvent" in window && !Wb) {
  var Yb = window.opera;Xb = !("object" === (typeof Yb === "undefined" ? "undefined" : _typeof(Yb)) && "function" === typeof Yb.version && 12 >= parseInt(Yb.version(), 10));
}
var Zb = Xb,
    $b = l.canUseDOM && (!Vb || Wb && 8 < Wb && 11 >= Wb),
    ac = String.fromCharCode(32),
    bc = { beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["topCompositionEnd", "topKeyPress", "topTextInput", "topPaste"] }, compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "topBlur topCompositionEnd topKeyDown topKeyPress topKeyUp topMouseDown".split(" ") }, compositionStart: { phasedRegistrationNames: { bubbled: "onCompositionStart",
      captured: "onCompositionStartCapture" }, dependencies: "topBlur topCompositionStart topKeyDown topKeyPress topKeyUp topMouseDown".split(" ") }, compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "topBlur topCompositionUpdate topKeyDown topKeyPress topKeyUp topMouseDown".split(" ") } },
    cc = !1;
function dc(a, b) {
  switch (a) {case "topKeyUp":
      return -1 !== Pb.indexOf(b.keyCode);case "topKeyDown":
      return 229 !== b.keyCode;case "topKeyPress":case "topMouseDown":case "topBlur":
      return !0;default:
      return !1;}
}function ec(a) {
  a = a.detail;return "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && "data" in a ? a.data : null;
}var fc = !1;function gc(a, b) {
  switch (a) {case "topCompositionEnd":
      return ec(b);case "topKeyPress":
      if (32 !== b.which) return null;cc = !0;return ac;case "topTextInput":
      return a = b.data, a === ac && cc ? null : a;default:
      return null;}
}
function hc(a, b) {
  if (fc) return "topCompositionEnd" === a || !Vb && dc(a, b) ? (a = Fb(), S._root = null, S._startText = null, S._fallbackText = null, fc = !1, a) : null;switch (a) {case "topPaste":
      return null;case "topKeyPress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;if (b.which) return String.fromCharCode(b.which);
      }return null;case "topCompositionEnd":
      return $b ? null : b.data;default:
      return null;}
}
var ic = { eventTypes: bc, extractEvents: function extractEvents(a, b, c, d) {
    var e;if (Vb) b: {
      switch (a) {case "topCompositionStart":
          var f = bc.compositionStart;break b;case "topCompositionEnd":
          f = bc.compositionEnd;break b;case "topCompositionUpdate":
          f = bc.compositionUpdate;break b;}f = void 0;
    } else fc ? dc(a, c) && (f = bc.compositionEnd) : "topKeyDown" === a && 229 === c.keyCode && (f = bc.compositionStart);f ? ($b && (fc || f !== bc.compositionStart ? f === bc.compositionEnd && fc && (e = Fb()) : (S._root = d, S._startText = Gb(), fc = !0)), f = Mb.getPooled(f, b, c, d), e ? f.data = e : (e = ec(c), null !== e && (f.data = e)), Ab(f), e = f) : e = null;(a = Zb ? gc(a, c) : hc(a, c)) ? (b = Nb.getPooled(bc.beforeInput, b, c, d), b.data = a, Ab(b)) : b = null;return [e, b];
  } },
    jc = null,
    kc = null,
    lc = null;function mc(a) {
  if (a = Xa(a)) {
    jc && "function" === typeof jc.restoreControlledState ? void 0 : E("194");var b = Wa(a.stateNode);jc.restoreControlledState(a.stateNode, a.type, b);
  }
}var nc = { injectFiberControlledHostComponent: function injectFiberControlledHostComponent(a) {
    jc = a;
  } };function oc(a) {
  kc ? lc ? lc.push(a) : lc = [a] : kc = a;
}
function pc() {
  if (kc) {
    var a = kc,
        b = lc;lc = kc = null;mc(a);if (b) for (a = 0; a < b.length; a++) {
      mc(b[a]);
    }
  }
}var qc = Object.freeze({ injection: nc, enqueueStateRestore: oc, restoreStateIfNeeded: pc });function rc(a, b) {
  return a(b);
}var sc = !1;function tc(a, b) {
  if (sc) return rc(a, b);sc = !0;try {
    return rc(a, b);
  } finally {
    sc = !1, pc();
  }
}var uc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function vc(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();return "input" === b ? !!uc[a.type] : "textarea" === b ? !0 : !1;
}function wc(a) {
  a = a.target || a.srcElement || window;a.correspondingUseElement && (a = a.correspondingUseElement);return 3 === a.nodeType ? a.parentNode : a;
}var xc;l.canUseDOM && (xc = document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", ""));
function yc(a, b) {
  if (!l.canUseDOM || b && !("addEventListener" in document)) return !1;b = "on" + a;var c = b in document;c || (c = document.createElement("div"), c.setAttribute(b, "return;"), c = "function" === typeof c[b]);!c && xc && "wheel" === a && (c = document.implementation.hasFeature("Events.wheel", "3.0"));return c;
}function zc(a) {
  var b = a.type;return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ac(a) {
  var b = zc(a) ? "checked" : "value",
      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
      d = "" + a[b];if (!a.hasOwnProperty(b) && "function" === typeof c.get && "function" === typeof c.set) return Object.defineProperty(a, b, { enumerable: c.enumerable, configurable: !0, get: function get() {
      return c.get.call(this);
    }, set: function set(a) {
      d = "" + a;c.set.call(this, a);
    } }), { getValue: function getValue() {
      return d;
    }, setValue: function setValue(a) {
      d = "" + a;
    }, stopTracking: function stopTracking() {
      a._valueTracker = null;delete a[b];
    } };
}
function Bc(a) {
  a._valueTracker || (a._valueTracker = Ac(a));
}function Cc(a) {
  if (!a) return !1;var b = a._valueTracker;if (!b) return !0;var c = b.getValue();var d = "";a && (d = zc(a) ? a.checked ? "true" : "false" : a.value);a = d;return a !== c ? (b.setValue(a), !0) : !1;
}var Dc = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "topBlur topChange topClick topFocus topInput topKeyDown topKeyUp topSelectionChange".split(" ") } };
function Ec(a, b, c) {
  a = T.getPooled(Dc.change, a, b, c);a.type = "change";oc(c);Ab(a);return a;
}var Fc = null,
    Gc = null;function Hc(a) {
  kb(a);lb(!1);
}function Ic(a) {
  var b = qb(a);if (Cc(b)) return a;
}function Jc(a, b) {
  if ("topChange" === a) return b;
}var Kc = !1;l.canUseDOM && (Kc = yc("input") && (!document.documentMode || 9 < document.documentMode));function Lc() {
  Fc && (Fc.detachEvent("onpropertychange", Mc), Gc = Fc = null);
}function Mc(a) {
  "value" === a.propertyName && Ic(Gc) && (a = Ec(Gc, a, wc(a)), tc(Hc, a));
}
function Nc(a, b, c) {
  "topFocus" === a ? (Lc(), Fc = b, Gc = c, Fc.attachEvent("onpropertychange", Mc)) : "topBlur" === a && Lc();
}function Oc(a) {
  if ("topSelectionChange" === a || "topKeyUp" === a || "topKeyDown" === a) return Ic(Gc);
}function Pc(a, b) {
  if ("topClick" === a) return Ic(b);
}function $c(a, b) {
  if ("topInput" === a || "topChange" === a) return Ic(b);
}
var ad = { eventTypes: Dc, _isInputEventSupported: Kc, extractEvents: function extractEvents(a, b, c, d) {
    var e = b ? qb(b) : window,
        f = e.nodeName && e.nodeName.toLowerCase();if ("select" === f || "input" === f && "file" === e.type) var g = Jc;else if (vc(e)) {
      if (Kc) g = $c;else {
        g = Oc;var h = Nc;
      }
    } else f = e.nodeName, !f || "input" !== f.toLowerCase() || "checkbox" !== e.type && "radio" !== e.type || (g = Pc);if (g && (g = g(a, b))) return Ec(g, c, d);h && h(a, e, b);"topBlur" === a && null != b && (a = b._wrapperState || e._wrapperState) && a.controlled && "number" === e.type && (a = "" + e.value, e.getAttribute("value") !== a && e.setAttribute("value", a));
  } };function bd(a, b, c, d) {
  return T.call(this, a, b, c, d);
}T.augmentClass(bd, { view: null, detail: null });var cd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };function dd(a) {
  var b = this.nativeEvent;return b.getModifierState ? b.getModifierState(a) : (a = cd[a]) ? !!b[a] : !1;
}function ed() {
  return dd;
}function fd(a, b, c, d) {
  return T.call(this, a, b, c, d);
}
bd.augmentClass(fd, { screenX: null, screenY: null, clientX: null, clientY: null, pageX: null, pageY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: ed, button: null, buttons: null, relatedTarget: function relatedTarget(a) {
    return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
  } });
var gd = { mouseEnter: { registrationName: "onMouseEnter", dependencies: ["topMouseOut", "topMouseOver"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["topMouseOut", "topMouseOver"] } },
    hd = { eventTypes: gd, extractEvents: function extractEvents(a, b, c, d) {
    if ("topMouseOver" === a && (c.relatedTarget || c.fromElement) || "topMouseOut" !== a && "topMouseOver" !== a) return null;var e = d.window === d ? d : (e = d.ownerDocument) ? e.defaultView || e.parentWindow : window;"topMouseOut" === a ? (a = b, b = (b = c.relatedTarget || c.toElement) ? pb(b) : null) : a = null;if (a === b) return null;var f = null == a ? e : qb(a);e = null == b ? e : qb(b);var g = fd.getPooled(gd.mouseLeave, a, c, d);g.type = "mouseleave";g.target = f;g.relatedTarget = e;c = fd.getPooled(gd.mouseEnter, b, c, d);c.type = "mouseenter";c.target = e;c.relatedTarget = f;Bb(g, c, a, b);return [g, c];
  } },
    id = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;function jd(a) {
  a = a.type;return "string" === typeof a ? a : "function" === typeof a ? a.displayName || a.name : null;
}
function kd(a) {
  var b = a;if (a.alternate) for (; b["return"];) {
    b = b["return"];
  } else {
    if (0 !== (b.effectTag & 2)) return 1;for (; b["return"];) {
      if (b = b["return"], 0 !== (b.effectTag & 2)) return 1;
    }
  }return 3 === b.tag ? 2 : 3;
}function ld(a) {
  return (a = a._reactInternalFiber) ? 2 === kd(a) : !1;
}function md(a) {
  2 !== kd(a) ? E("188") : void 0;
}
function nd(a) {
  var b = a.alternate;if (!b) return b = kd(a), 3 === b ? E("188") : void 0, 1 === b ? null : a;for (var c = a, d = b;;) {
    var e = c["return"],
        f = e ? e.alternate : null;if (!e || !f) break;if (e.child === f.child) {
      for (var g = e.child; g;) {
        if (g === c) return md(e), a;if (g === d) return md(e), b;g = g.sibling;
      }E("188");
    }if (c["return"] !== d["return"]) c = e, d = f;else {
      g = !1;for (var h = e.child; h;) {
        if (h === c) {
          g = !0;c = e;d = f;break;
        }if (h === d) {
          g = !0;d = e;c = f;break;
        }h = h.sibling;
      }if (!g) {
        for (h = f.child; h;) {
          if (h === c) {
            g = !0;c = f;d = e;break;
          }if (h === d) {
            g = !0;d = f;c = e;break;
          }h = h.sibling;
        }g ? void 0 : E("189");
      }
    }c.alternate !== d ? E("190") : void 0;
  }3 !== c.tag ? E("188") : void 0;return c.stateNode.current === c ? a : b;
}function od(a) {
  a = nd(a);if (!a) return null;for (var b = a;;) {
    if (5 === b.tag || 6 === b.tag) return b;if (b.child) b.child["return"] = b, b = b.child;else {
      if (b === a) break;for (; !b.sibling;) {
        if (!b["return"] || b["return"] === a) return null;b = b["return"];
      }b.sibling["return"] = b["return"];b = b.sibling;
    }
  }return null;
}
function pd(a) {
  a = nd(a);if (!a) return null;for (var b = a;;) {
    if (5 === b.tag || 6 === b.tag) return b;if (b.child && 4 !== b.tag) b.child["return"] = b, b = b.child;else {
      if (b === a) break;for (; !b.sibling;) {
        if (!b["return"] || b["return"] === a) return null;b = b["return"];
      }b.sibling["return"] = b["return"];b = b.sibling;
    }
  }return null;
}var qd = [];
function rd(a) {
  var b = a.targetInst;do {
    if (!b) {
      a.ancestors.push(b);break;
    }var c;for (c = b; c["return"];) {
      c = c["return"];
    }c = 3 !== c.tag ? null : c.stateNode.containerInfo;if (!c) break;a.ancestors.push(b);b = pb(c);
  } while (b);for (c = 0; c < a.ancestors.length; c++) {
    b = a.ancestors[c], sd(a.topLevelType, b, a.nativeEvent, wc(a.nativeEvent));
  }
}var td = !0,
    sd = void 0;function ud(a) {
  td = !!a;
}function U(a, b, c) {
  return c ? ba.listen(c, b, vd.bind(null, a)) : null;
}function wd(a, b, c) {
  return c ? ba.capture(c, b, vd.bind(null, a)) : null;
}
function vd(a, b) {
  if (td) {
    var c = wc(b);c = pb(c);null === c || "number" !== typeof c.tag || 2 === kd(c) || (c = null);if (qd.length) {
      var d = qd.pop();d.topLevelType = a;d.nativeEvent = b;d.targetInst = c;a = d;
    } else a = { topLevelType: a, nativeEvent: b, targetInst: c, ancestors: [] };try {
      tc(rd, a);
    } finally {
      a.topLevelType = null, a.nativeEvent = null, a.targetInst = null, a.ancestors.length = 0, 10 > qd.length && qd.push(a);
    }
  }
}
var xd = Object.freeze({ get _enabled() {
    return td;
  }, get _handleTopLevel() {
    return sd;
  }, setHandleTopLevel: function setHandleTopLevel(a) {
    sd = a;
  }, setEnabled: ud, isEnabled: function isEnabled() {
    return td;
  }, trapBubbledEvent: U, trapCapturedEvent: wd, dispatchEvent: vd });function yd(a, b) {
  var c = {};c[a.toLowerCase()] = b.toLowerCase();c["Webkit" + a] = "webkit" + b;c["Moz" + a] = "moz" + b;c["ms" + a] = "MS" + b;c["O" + a] = "o" + b.toLowerCase();return c;
}
var zd = { animationend: yd("Animation", "AnimationEnd"), animationiteration: yd("Animation", "AnimationIteration"), animationstart: yd("Animation", "AnimationStart"), transitionend: yd("Transition", "TransitionEnd") },
    Ad = {},
    Bd = {};l.canUseDOM && (Bd = document.createElement("div").style, "AnimationEvent" in window || (delete zd.animationend.animation, delete zd.animationiteration.animation, delete zd.animationstart.animation), "TransitionEvent" in window || delete zd.transitionend.transition);
function Cd(a) {
  if (Ad[a]) return Ad[a];if (!zd[a]) return a;var b = zd[a],
      c;for (c in b) {
    if (b.hasOwnProperty(c) && c in Bd) return Ad[a] = b[c];
  }return "";
}
var Dd = { topAbort: "abort", topAnimationEnd: Cd("animationend") || "animationend", topAnimationIteration: Cd("animationiteration") || "animationiteration", topAnimationStart: Cd("animationstart") || "animationstart", topBlur: "blur", topCancel: "cancel", topCanPlay: "canplay", topCanPlayThrough: "canplaythrough", topChange: "change", topClick: "click", topClose: "close", topCompositionEnd: "compositionend", topCompositionStart: "compositionstart", topCompositionUpdate: "compositionupdate", topContextMenu: "contextmenu", topCopy: "copy",
  topCut: "cut", topDoubleClick: "dblclick", topDrag: "drag", topDragEnd: "dragend", topDragEnter: "dragenter", topDragExit: "dragexit", topDragLeave: "dragleave", topDragOver: "dragover", topDragStart: "dragstart", topDrop: "drop", topDurationChange: "durationchange", topEmptied: "emptied", topEncrypted: "encrypted", topEnded: "ended", topError: "error", topFocus: "focus", topInput: "input", topKeyDown: "keydown", topKeyPress: "keypress", topKeyUp: "keyup", topLoadedData: "loadeddata", topLoad: "load", topLoadedMetadata: "loadedmetadata", topLoadStart: "loadstart",
  topMouseDown: "mousedown", topMouseMove: "mousemove", topMouseOut: "mouseout", topMouseOver: "mouseover", topMouseUp: "mouseup", topPaste: "paste", topPause: "pause", topPlay: "play", topPlaying: "playing", topProgress: "progress", topRateChange: "ratechange", topScroll: "scroll", topSeeked: "seeked", topSeeking: "seeking", topSelectionChange: "selectionchange", topStalled: "stalled", topSuspend: "suspend", topTextInput: "textInput", topTimeUpdate: "timeupdate", topToggle: "toggle", topTouchCancel: "touchcancel", topTouchEnd: "touchend", topTouchMove: "touchmove",
  topTouchStart: "touchstart", topTransitionEnd: Cd("transitionend") || "transitionend", topVolumeChange: "volumechange", topWaiting: "waiting", topWheel: "wheel" },
    Ed = {},
    Fd = 0,
    Gd = "_reactListenersID" + ("" + Math.random()).slice(2);function Hd(a) {
  Object.prototype.hasOwnProperty.call(a, Gd) || (a[Gd] = Fd++, Ed[a[Gd]] = {});return Ed[a[Gd]];
}function Id(a) {
  for (; a && a.firstChild;) {
    a = a.firstChild;
  }return a;
}
function Jd(a, b) {
  var c = Id(a);a = 0;for (var d; c;) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;if (a <= b && d >= b) return { node: c, offset: b - a };a = d;
    }a: {
      for (; c;) {
        if (c.nextSibling) {
          c = c.nextSibling;break a;
        }c = c.parentNode;
      }c = void 0;
    }c = Id(c);
  }
}function Kd(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();return b && ("input" === b && "text" === a.type || "textarea" === b || "true" === a.contentEditable);
}
var Ld = l.canUseDOM && "documentMode" in document && 11 >= document.documentMode,
    Md = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "topBlur topContextMenu topFocus topKeyDown topKeyUp topMouseDown topMouseUp topSelectionChange".split(" ") } },
    Nd = null,
    Od = null,
    Pd = null,
    Qd = !1;
function Rd(a, b) {
  if (Qd || null == Nd || Nd !== da()) return null;var c = Nd;"selectionStart" in c && Kd(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : window.getSelection ? (c = window.getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }) : c = void 0;return Pd && ea(Pd, c) ? null : (Pd = c, a = T.getPooled(Md.select, Od, a, b), a.type = "select", a.target = Nd, Ab(a), a);
}
var Sd = { eventTypes: Md, extractEvents: function extractEvents(a, b, c, d) {
    var e = d.window === d ? d.document : 9 === d.nodeType ? d : d.ownerDocument,
        f;if (!(f = !e)) {
      a: {
        e = Hd(e);f = Sa.onSelect;for (var g = 0; g < f.length; g++) {
          var h = f[g];if (!e.hasOwnProperty(h) || !e[h]) {
            e = !1;break a;
          }
        }e = !0;
      }f = !e;
    }if (f) return null;e = b ? qb(b) : window;switch (a) {case "topFocus":
        if (vc(e) || "true" === e.contentEditable) Nd = e, Od = b, Pd = null;break;case "topBlur":
        Pd = Od = Nd = null;break;case "topMouseDown":
        Qd = !0;break;case "topContextMenu":case "topMouseUp":
        return Qd = !1, Rd(c, d);case "topSelectionChange":
        if (Ld) break;
      case "topKeyDown":case "topKeyUp":
        return Rd(c, d);}return null;
  } };function Td(a, b, c, d) {
  return T.call(this, a, b, c, d);
}T.augmentClass(Td, { animationName: null, elapsedTime: null, pseudoElement: null });function Ud(a, b, c, d) {
  return T.call(this, a, b, c, d);
}T.augmentClass(Ud, { clipboardData: function clipboardData(a) {
    return "clipboardData" in a ? a.clipboardData : window.clipboardData;
  } });function Vd(a, b, c, d) {
  return T.call(this, a, b, c, d);
}bd.augmentClass(Vd, { relatedTarget: null });
function Wd(a) {
  var b = a.keyCode;"charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;return 32 <= a || 13 === a ? a : 0;
}
var Xd = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    Yd = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4",
  116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" };function Zd(a, b, c, d) {
  return T.call(this, a, b, c, d);
}
bd.augmentClass(Zd, { key: function key(a) {
    if (a.key) {
      var b = Xd[a.key] || a.key;if ("Unidentified" !== b) return b;
    }return "keypress" === a.type ? (a = Wd(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Yd[a.keyCode] || "Unidentified" : "";
  }, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: ed, charCode: function charCode(a) {
    return "keypress" === a.type ? Wd(a) : 0;
  }, keyCode: function keyCode(a) {
    return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  }, which: function which(a) {
    return "keypress" === a.type ? Wd(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
  } });function $d(a, b, c, d) {
  return T.call(this, a, b, c, d);
}fd.augmentClass($d, { dataTransfer: null });function ae(a, b, c, d) {
  return T.call(this, a, b, c, d);
}bd.augmentClass(ae, { touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: ed });function be(a, b, c, d) {
  return T.call(this, a, b, c, d);
}T.augmentClass(be, { propertyName: null, elapsedTime: null, pseudoElement: null });
function ce(a, b, c, d) {
  return T.call(this, a, b, c, d);
}fd.augmentClass(ce, { deltaX: function deltaX(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  }, deltaY: function deltaY(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  }, deltaZ: null, deltaMode: null });var de = {},
    ee = {};
"abort animationEnd animationIteration animationStart blur cancel canPlay canPlayThrough click close contextMenu copy cut doubleClick drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error focus input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing progress rateChange reset scroll seeked seeking stalled submit suspend timeUpdate toggle touchCancel touchEnd touchMove touchStart transitionEnd volumeChange waiting wheel".split(" ").forEach(function (a) {
  var b = a[0].toUpperCase() + a.slice(1),
      c = "on" + b;b = "top" + b;c = { phasedRegistrationNames: { bubbled: c, captured: c + "Capture" }, dependencies: [b] };de[a] = c;ee[b] = c;
});
var fe = { eventTypes: de, extractEvents: function extractEvents(a, b, c, d) {
    var e = ee[a];if (!e) return null;switch (a) {case "topKeyPress":
        if (0 === Wd(c)) return null;case "topKeyDown":case "topKeyUp":
        a = Zd;break;case "topBlur":case "topFocus":
        a = Vd;break;case "topClick":
        if (2 === c.button) return null;case "topDoubleClick":case "topMouseDown":case "topMouseMove":case "topMouseUp":case "topMouseOut":case "topMouseOver":case "topContextMenu":
        a = fd;break;case "topDrag":case "topDragEnd":case "topDragEnter":case "topDragExit":case "topDragLeave":case "topDragOver":case "topDragStart":case "topDrop":
        a = $d;break;case "topTouchCancel":case "topTouchEnd":case "topTouchMove":case "topTouchStart":
        a = ae;break;case "topAnimationEnd":case "topAnimationIteration":case "topAnimationStart":
        a = Td;break;case "topTransitionEnd":
        a = be;break;case "topScroll":
        a = bd;break;case "topWheel":
        a = ce;break;case "topCopy":case "topCut":case "topPaste":
        a = Ud;break;default:
        a = T;}b = a.getPooled(e, b, c, d);Ab(b);return b;
  } };sd = function sd(a, b, c, d) {
  a = jb(a, b, c, d);kb(a);lb(!1);
};hb.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin TapEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
Wa = sb.getFiberCurrentPropsFromNode;Xa = sb.getInstanceFromNode;Ya = sb.getNodeFromInstance;hb.injectEventPluginsByName({ SimpleEventPlugin: fe, EnterLeaveEventPlugin: hd, ChangeEventPlugin: ad, SelectEventPlugin: Sd, BeforeInputEventPlugin: ic });var ge = [],
    he = -1;function V(a) {
  0 > he || (a.current = ge[he], ge[he] = null, he--);
}function W(a, b) {
  he++;ge[he] = a.current;a.current = b;
}new Set();var ie = { current: D },
    X = { current: !1 },
    je = D;function ke(a) {
  return le(a) ? je : ie.current;
}
function me(a, b) {
  var c = a.type.contextTypes;if (!c) return D;var d = a.stateNode;if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;var e = {},
      f;for (f in c) {
    e[f] = b[f];
  }d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);return e;
}function le(a) {
  return 2 === a.tag && null != a.type.childContextTypes;
}function ne(a) {
  le(a) && (V(X, a), V(ie, a));
}
function oe(a, b, c) {
  null != ie.cursor ? E("168") : void 0;W(ie, b, a);W(X, c, a);
}function pe(a, b) {
  var c = a.stateNode,
      d = a.type.childContextTypes;if ("function" !== typeof c.getChildContext) return b;c = c.getChildContext();for (var e in c) {
    e in d ? void 0 : E("108", jd(a) || "Unknown", e);
  }return B({}, b, c);
}function qe(a) {
  if (!le(a)) return !1;var b = a.stateNode;b = b && b.__reactInternalMemoizedMergedChildContext || D;je = ie.current;W(ie, b, a);W(X, X.current, a);return !0;
}
function re(a, b) {
  var c = a.stateNode;c ? void 0 : E("169");if (b) {
    var d = pe(a, je);c.__reactInternalMemoizedMergedChildContext = d;V(X, a);V(ie, a);W(ie, d, a);
  } else V(X, a);W(X, b, a);
}
function Y(a, b, c) {
  this.tag = a;this.key = b;this.stateNode = this.type = null;this.sibling = this.child = this["return"] = null;this.index = 0;this.memoizedState = this.updateQueue = this.memoizedProps = this.pendingProps = this.ref = null;this.internalContextTag = c;this.effectTag = 0;this.lastEffect = this.firstEffect = this.nextEffect = null;this.expirationTime = 0;this.alternate = null;
}
function se(a, b, c) {
  var d = a.alternate;null === d ? (d = new Y(a.tag, a.key, a.internalContextTag), d.type = a.type, d.stateNode = a.stateNode, d.alternate = a, a.alternate = d) : (d.effectTag = 0, d.nextEffect = null, d.firstEffect = null, d.lastEffect = null);d.expirationTime = c;d.pendingProps = b;d.child = a.child;d.memoizedProps = a.memoizedProps;d.memoizedState = a.memoizedState;d.updateQueue = a.updateQueue;d.sibling = a.sibling;d.index = a.index;d.ref = a.ref;return d;
}
function te(a, b, c) {
  var d = void 0,
      e = a.type,
      f = a.key;"function" === typeof e ? (d = e.prototype && e.prototype.isReactComponent ? new Y(2, f, b) : new Y(0, f, b), d.type = e, d.pendingProps = a.props) : "string" === typeof e ? (d = new Y(5, f, b), d.type = e, d.pendingProps = a.props) : "object" === (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e && "number" === typeof e.tag ? (d = e, d.pendingProps = a.props) : E("130", null == e ? e : typeof e === "undefined" ? "undefined" : _typeof(e), "");d.expirationTime = c;return d;
}function ue(a, b, c, d) {
  b = new Y(10, d, b);b.pendingProps = a;b.expirationTime = c;return b;
}
function ve(a, b, c) {
  b = new Y(6, null, b);b.pendingProps = a;b.expirationTime = c;return b;
}function we(a, b, c) {
  b = new Y(7, a.key, b);b.type = a.handler;b.pendingProps = a;b.expirationTime = c;return b;
}function xe(a, b, c) {
  a = new Y(9, null, b);a.expirationTime = c;return a;
}function ye(a, b, c) {
  b = new Y(4, a.key, b);b.pendingProps = a.children || [];b.expirationTime = c;b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };return b;
}var ze = null,
    Ae = null;
function Be(a) {
  return function (b) {
    try {
      return a(b);
    } catch (c) {}
  };
}function Ce(a) {
  if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;if (b.isDisabled || !b.supportsFiber) return !0;try {
    var c = b.inject(a);ze = Be(function (a) {
      return b.onCommitFiberRoot(c, a);
    });Ae = Be(function (a) {
      return b.onCommitFiberUnmount(c, a);
    });
  } catch (d) {}return !0;
}function De(a) {
  "function" === typeof ze && ze(a);
}function Ee(a) {
  "function" === typeof Ae && Ae(a);
}
function Fe(a) {
  return { baseState: a, expirationTime: 0, first: null, last: null, callbackList: null, hasForceUpdate: !1, isInitialized: !1 };
}function Ge(a, b) {
  null === a.last ? a.first = a.last = b : (a.last.next = b, a.last = b);if (0 === a.expirationTime || a.expirationTime > b.expirationTime) a.expirationTime = b.expirationTime;
}
function He(a, b) {
  var c = a.alternate,
      d = a.updateQueue;null === d && (d = a.updateQueue = Fe(null));null !== c ? (a = c.updateQueue, null === a && (a = c.updateQueue = Fe(null))) : a = null;a = a !== d ? a : null;null === a ? Ge(d, b) : null === d.last || null === a.last ? (Ge(d, b), Ge(a, b)) : (Ge(d, b), a.last = b);
}function Ie(a, b, c, d) {
  a = a.partialState;return "function" === typeof a ? a.call(b, c, d) : a;
}
function Je(a, b, c, d, e, f) {
  null !== a && a.updateQueue === c && (c = b.updateQueue = { baseState: c.baseState, expirationTime: c.expirationTime, first: c.first, last: c.last, isInitialized: c.isInitialized, callbackList: null, hasForceUpdate: !1 });c.expirationTime = 0;c.isInitialized ? a = c.baseState : (a = c.baseState = b.memoizedState, c.isInitialized = !0);for (var g = !0, h = c.first, k = !1; null !== h;) {
    var q = h.expirationTime;if (q > f) {
      var v = c.expirationTime;if (0 === v || v > q) c.expirationTime = q;k || (k = !0, c.baseState = a);
    } else {
      k || (c.first = h.next, null === c.first && (c.last = null));if (h.isReplace) a = Ie(h, d, a, e), g = !0;else if (q = Ie(h, d, a, e)) a = g ? B({}, a, q) : B(a, q), g = !1;h.isForced && (c.hasForceUpdate = !0);null !== h.callback && (q = c.callbackList, null === q && (q = c.callbackList = []), q.push(h));
    }h = h.next;
  }null !== c.callbackList ? b.effectTag |= 32 : null !== c.first || c.hasForceUpdate || (b.updateQueue = null);k || (c.baseState = a);return a;
}
function Ke(a, b) {
  var c = a.callbackList;if (null !== c) for (a.callbackList = null, a = 0; a < c.length; a++) {
    var d = c[a],
        e = d.callback;d.callback = null;"function" !== typeof e ? E("191", e) : void 0;e.call(b);
  }
}
function Le(a, b, c, d) {
  function e(a, b) {
    b.updater = f;a.stateNode = b;b._reactInternalFiber = a;
  }var f = { isMounted: ld, enqueueSetState: function enqueueSetState(c, d, e) {
      c = c._reactInternalFiber;e = void 0 === e ? null : e;var g = b(c);He(c, { expirationTime: g, partialState: d, callback: e, isReplace: !1, isForced: !1, nextCallback: null, next: null });a(c, g);
    }, enqueueReplaceState: function enqueueReplaceState(c, d, e) {
      c = c._reactInternalFiber;e = void 0 === e ? null : e;var g = b(c);He(c, { expirationTime: g, partialState: d, callback: e, isReplace: !0, isForced: !1, nextCallback: null, next: null });
      a(c, g);
    }, enqueueForceUpdate: function enqueueForceUpdate(c, d) {
      c = c._reactInternalFiber;d = void 0 === d ? null : d;var e = b(c);He(c, { expirationTime: e, partialState: null, callback: d, isReplace: !1, isForced: !0, nextCallback: null, next: null });a(c, e);
    } };return { adoptClassInstance: e, constructClassInstance: function constructClassInstance(a, b) {
      var c = a.type,
          d = ke(a),
          f = 2 === a.tag && null != a.type.contextTypes,
          g = f ? me(a, d) : D;b = new c(b, g);e(a, b);f && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = d, a.__reactInternalMemoizedMaskedChildContext = g);return b;
    }, mountClassInstance: function mountClassInstance(a, b) {
      var c = a.alternate,
          d = a.stateNode,
          e = d.state || null,
          g = a.pendingProps;g ? void 0 : E("158");var h = ke(a);d.props = g;d.state = a.memoizedState = e;d.refs = D;d.context = me(a, h);null != a.type && null != a.type.prototype && !0 === a.type.prototype.unstable_isAsyncReactComponent && (a.internalContextTag |= 1);"function" === typeof d.componentWillMount && (e = d.state, d.componentWillMount(), e !== d.state && f.enqueueReplaceState(d, d.state, null), e = a.updateQueue, null !== e && (d.state = Je(c, a, e, d, g, b)));"function" === typeof d.componentDidMount && (a.effectTag |= 4);
    }, updateClassInstance: function updateClassInstance(a, b, e) {
      var g = b.stateNode;g.props = b.memoizedProps;g.state = b.memoizedState;var h = b.memoizedProps,
          k = b.pendingProps;k || (k = h, null == k ? E("159") : void 0);var u = g.context,
          z = ke(b);z = me(b, z);"function" !== typeof g.componentWillReceiveProps || h === k && u === z || (u = g.state, g.componentWillReceiveProps(k, z), g.state !== u && f.enqueueReplaceState(g, g.state, null));u = b.memoizedState;e = null !== b.updateQueue ? Je(a, b, b.updateQueue, g, k, e) : u;if (!(h !== k || u !== e || X.current || null !== b.updateQueue && b.updateQueue.hasForceUpdate)) return "function" !== typeof g.componentDidUpdate || h === a.memoizedProps && u === a.memoizedState || (b.effectTag |= 4), !1;var G = k;if (null === h || null !== b.updateQueue && b.updateQueue.hasForceUpdate) G = !0;else {
        var I = b.stateNode,
            L = b.type;G = "function" === typeof I.shouldComponentUpdate ? I.shouldComponentUpdate(G, e, z) : L.prototype && L.prototype.isPureReactComponent ? !ea(h, G) || !ea(u, e) : !0;
      }G ? ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(k, e, z), "function" === typeof g.componentDidUpdate && (b.effectTag |= 4)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && u === a.memoizedState || (b.effectTag |= 4), c(b, k), d(b, e));g.props = k;g.state = e;g.context = z;return G;
    } };
}var Qe = "function" === typeof Symbol && Symbol["for"],
    Re = Qe ? Symbol["for"]("react.element") : 60103,
    Se = Qe ? Symbol["for"]("react.call") : 60104,
    Te = Qe ? Symbol["for"]("react.return") : 60105,
    Ue = Qe ? Symbol["for"]("react.portal") : 60106,
    Ve = Qe ? Symbol["for"]("react.fragment") : 60107,
    We = "function" === typeof Symbol && Symbol.iterator;
function Xe(a) {
  if (null === a || "undefined" === typeof a) return null;a = We && a[We] || a["@@iterator"];return "function" === typeof a ? a : null;
}var Ye = Array.isArray;
function Ze(a, b) {
  var c = b.ref;if (null !== c && "function" !== typeof c) {
    if (b._owner) {
      b = b._owner;var d = void 0;b && (2 !== b.tag ? E("110") : void 0, d = b.stateNode);d ? void 0 : E("147", c);var e = "" + c;if (null !== a && null !== a.ref && a.ref._stringRef === e) return a.ref;a = function a(_a) {
        var b = d.refs === D ? d.refs = {} : d.refs;null === _a ? delete b[e] : b[e] = _a;
      };a._stringRef = e;return a;
    }"string" !== typeof c ? E("148") : void 0;b._owner ? void 0 : E("149", c);
  }return c;
}
function $e(a, b) {
  "textarea" !== a.type && E("31", "[object Object]" === Object.prototype.toString.call(b) ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, "");
}
function af(a) {
  function b(b, c) {
    if (a) {
      var d = b.lastEffect;null !== d ? (d.nextEffect = c, b.lastEffect = c) : b.firstEffect = b.lastEffect = c;c.nextEffect = null;c.effectTag = 8;
    }
  }function c(c, d) {
    if (!a) return null;for (; null !== d;) {
      b(c, d), d = d.sibling;
    }return null;
  }function d(a, b) {
    for (a = new Map(); null !== b;) {
      null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
    }return a;
  }function e(a, b, c) {
    a = se(a, b, c);a.index = 0;a.sibling = null;return a;
  }function f(b, c, d) {
    b.index = d;if (!a) return c;d = b.alternate;if (null !== d) return d = d.index, d < c ? (b.effectTag = 2, c) : d;b.effectTag = 2;return c;
  }function g(b) {
    a && null === b.alternate && (b.effectTag = 2);return b;
  }function h(a, b, c, d) {
    if (null === b || 6 !== b.tag) return b = ve(c, a.internalContextTag, d), b["return"] = a, b;b = e(b, c, d);b["return"] = a;return b;
  }function k(a, b, c, d) {
    if (null !== b && b.type === c.type) return d = e(b, c.props, d), d.ref = Ze(b, c), d["return"] = a, d;d = te(c, a.internalContextTag, d);d.ref = Ze(b, c);d["return"] = a;return d;
  }function q(a, b, c, d) {
    if (null === b || 7 !== b.tag) return b = we(c, a.internalContextTag, d), b["return"] = a, b;b = e(b, c, d);
    b["return"] = a;return b;
  }function v(a, b, c, d) {
    if (null === b || 9 !== b.tag) return b = xe(c, a.internalContextTag, d), b.type = c.value, b["return"] = a, b;b = e(b, null, d);b.type = c.value;b["return"] = a;return b;
  }function y(a, b, c, d) {
    if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = ye(c, a.internalContextTag, d), b["return"] = a, b;b = e(b, c.children || [], d);b["return"] = a;return b;
  }function u(a, b, c, d, f) {
    if (null === b || 10 !== b.tag) return b = ue(c, a.internalContextTag, d, f), b["return"] = a, b;b = e(b, c, d);b["return"] = a;return b;
  }function z(a, b, c) {
    if ("string" === typeof b || "number" === typeof b) return b = ve("" + b, a.internalContextTag, c), b["return"] = a, b;if ("object" === (typeof b === "undefined" ? "undefined" : _typeof(b)) && null !== b) {
      switch (b.$$typeof) {case Re:
          if (b.type === Ve) return b = ue(b.props.children, a.internalContextTag, c, b.key), b["return"] = a, b;c = te(b, a.internalContextTag, c);c.ref = Ze(null, b);c["return"] = a;return c;case Se:
          return b = we(b, a.internalContextTag, c), b["return"] = a, b;case Te:
          return c = xe(b, a.internalContextTag, c), c.type = b.value, c["return"] = a, c;case Ue:
          return b = ye(b, a.internalContextTag, c), b["return"] = a, b;}if (Ye(b) || Xe(b)) return b = ue(b, a.internalContextTag, c, null), b["return"] = a, b;$e(a, b);
    }return null;
  }function G(a, b, c, d) {
    var e = null !== b ? b.key : null;if ("string" === typeof c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);if ("object" === (typeof c === "undefined" ? "undefined" : _typeof(c)) && null !== c) {
      switch (c.$$typeof) {case Re:
          return c.key === e ? c.type === Ve ? u(a, b, c.props.children, d, e) : k(a, b, c, d) : null;case Se:
          return c.key === e ? q(a, b, c, d) : null;case Te:
          return null === e ? v(a, b, c, d) : null;case Ue:
          return c.key === e ? y(a, b, c, d) : null;}if (Ye(c) || Xe(c)) return null !== e ? null : u(a, b, c, d, null);$e(a, c);
    }return null;
  }function I(a, b, c, d, e) {
    if ("string" === typeof d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);if ("object" === (typeof d === "undefined" ? "undefined" : _typeof(d)) && null !== d) {
      switch (d.$$typeof) {case Re:
          return a = a.get(null === d.key ? c : d.key) || null, d.type === Ve ? u(b, a, d.props.children, e, d.key) : k(b, a, d, e);case Se:
          return a = a.get(null === d.key ? c : d.key) || null, q(b, a, d, e);case Te:
          return a = a.get(c) || null, v(b, a, d, e);case Ue:
          return a = a.get(null === d.key ? c : d.key) || null, y(b, a, d, e);}if (Ye(d) || Xe(d)) return a = a.get(c) || null, u(b, a, d, e, null);$e(b, d);
    }return null;
  }function L(e, g, m, A) {
    for (var h = null, r = null, n = g, w = g = 0, k = null; null !== n && w < m.length; w++) {
      n.index > w ? (k = n, n = null) : k = n.sibling;var x = G(e, n, m[w], A);if (null === x) {
        null === n && (n = k);break;
      }a && n && null === x.alternate && b(e, n);g = f(x, g, w);null === r ? h = x : r.sibling = x;r = x;n = k;
    }if (w === m.length) return c(e, n), h;if (null === n) {
      for (; w < m.length; w++) {
        if (n = z(e, m[w], A)) g = f(n, g, w), null === r ? h = n : r.sibling = n, r = n;
      }return h;
    }for (n = d(e, n); w < m.length; w++) {
      if (k = I(n, e, w, m[w], A)) {
        if (a && null !== k.alternate) n["delete"](null === k.key ? w : k.key);g = f(k, g, w);null === r ? h = k : r.sibling = k;r = k;
      }
    }a && n.forEach(function (a) {
      return b(e, a);
    });return h;
  }function N(e, g, m, A) {
    var h = Xe(m);"function" !== typeof h ? E("150") : void 0;m = h.call(m);null == m ? E("151") : void 0;for (var r = h = null, n = g, w = g = 0, k = null, x = m.next(); null !== n && !x.done; w++, x = m.next()) {
      n.index > w ? (k = n, n = null) : k = n.sibling;var J = G(e, n, x.value, A);if (null === J) {
        n || (n = k);break;
      }a && n && null === J.alternate && b(e, n);g = f(J, g, w);null === r ? h = J : r.sibling = J;r = J;n = k;
    }if (x.done) return c(e, n), h;if (null === n) {
      for (; !x.done; w++, x = m.next()) {
        x = z(e, x.value, A), null !== x && (g = f(x, g, w), null === r ? h = x : r.sibling = x, r = x);
      }return h;
    }for (n = d(e, n); !x.done; w++, x = m.next()) {
      if (x = I(n, e, w, x.value, A), null !== x) {
        if (a && null !== x.alternate) n["delete"](null === x.key ? w : x.key);g = f(x, g, w);null === r ? h = x : r.sibling = x;r = x;
      }
    }a && n.forEach(function (a) {
      return b(e, a);
    });return h;
  }return function (a, d, f, h) {
    "object" === (typeof f === "undefined" ? "undefined" : _typeof(f)) && null !== f && f.type === Ve && null === f.key && (f = f.props.children);
    var m = "object" === (typeof f === "undefined" ? "undefined" : _typeof(f)) && null !== f;if (m) switch (f.$$typeof) {case Re:
        a: {
          var r = f.key;for (m = d; null !== m;) {
            if (m.key === r) {
              if (10 === m.tag ? f.type === Ve : m.type === f.type) {
                c(a, m.sibling);d = e(m, f.type === Ve ? f.props.children : f.props, h);d.ref = Ze(m, f);d["return"] = a;a = d;break a;
              } else {
                c(a, m);break;
              }
            } else b(a, m);m = m.sibling;
          }f.type === Ve ? (d = ue(f.props.children, a.internalContextTag, h, f.key), d["return"] = a, a = d) : (h = te(f, a.internalContextTag, h), h.ref = Ze(d, f), h["return"] = a, a = h);
        }return g(a);case Se:
        a: {
          for (m = f.key; null !== d;) {
            if (d.key === m) {
              if (7 === d.tag) {
                c(a, d.sibling);d = e(d, f, h);d["return"] = a;a = d;break a;
              } else {
                c(a, d);break;
              }
            } else b(a, d);d = d.sibling;
          }d = we(f, a.internalContextTag, h);d["return"] = a;a = d;
        }return g(a);case Te:
        a: {
          if (null !== d) if (9 === d.tag) {
            c(a, d.sibling);d = e(d, null, h);d.type = f.value;d["return"] = a;a = d;break a;
          } else c(a, d);d = xe(f, a.internalContextTag, h);d.type = f.value;d["return"] = a;a = d;
        }return g(a);case Ue:
        a: {
          for (m = f.key; null !== d;) {
            if (d.key === m) {
              if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                c(a, d.sibling);d = e(d, f.children || [], h);d["return"] = a;a = d;break a;
              } else {
                c(a, d);break;
              }
            } else b(a, d);d = d.sibling;
          }d = ye(f, a.internalContextTag, h);d["return"] = a;a = d;
        }return g(a);}if ("string" === typeof f || "number" === typeof f) return f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f, h)) : (c(a, d), d = ve(f, a.internalContextTag, h)), d["return"] = a, a = d, g(a);if (Ye(f)) return L(a, d, f, h);if (Xe(f)) return N(a, d, f, h);m && $e(a, f);if ("undefined" === typeof f) switch (a.tag) {case 2:case 1:
        h = a.type, E("152", h.displayName || h.name || "Component");}return c(a, d);
  };
}var bf = af(!0),
    cf = af(!1);
function df(a, b, c, d, e) {
  function f(a, b, c) {
    var d = b.expirationTime;b.child = null === a ? cf(b, null, c, d) : bf(b, a.child, c, d);
  }function g(a, b) {
    var c = b.ref;null === c || a && a.ref === c || (b.effectTag |= 128);
  }function h(a, b, c, d) {
    g(a, b);if (!c) return d && re(b, !1), q(a, b);c = b.stateNode;id.current = b;var e = c.render();b.effectTag |= 1;f(a, b, e);b.memoizedState = c.state;b.memoizedProps = c.props;d && re(b, !0);return b.child;
  }function k(a) {
    var b = a.stateNode;b.pendingContext ? oe(a, b.pendingContext, b.pendingContext !== b.context) : b.context && oe(a, b.context, !1);I(a, b.containerInfo);
  }function q(a, b) {
    null !== a && b.child !== a.child ? E("153") : void 0;if (null !== b.child) {
      a = b.child;var c = se(a, a.pendingProps, a.expirationTime);b.child = c;for (c["return"] = b; null !== a.sibling;) {
        a = a.sibling, c = c.sibling = se(a, a.pendingProps, a.expirationTime), c["return"] = b;
      }c.sibling = null;
    }return b.child;
  }function v(a, b) {
    switch (b.tag) {case 3:
        k(b);break;case 2:
        qe(b);break;case 4:
        I(b, b.stateNode.containerInfo);}return null;
  }var y = a.shouldSetTextContent,
      u = a.useSyncScheduling,
      z = a.shouldDeprioritizeSubtree,
      G = b.pushHostContext,
      I = b.pushHostContainer,
      L = c.enterHydrationState,
      N = c.resetHydrationState,
      J = c.tryToClaimNextHydratableInstance;a = Le(d, e, function (a, b) {
    a.memoizedProps = b;
  }, function (a, b) {
    a.memoizedState = b;
  });var w = a.adoptClassInstance,
      m = a.constructClassInstance,
      A = a.mountClassInstance,
      Ob = a.updateClassInstance;return { beginWork: function beginWork(a, b, c) {
      if (0 === b.expirationTime || b.expirationTime > c) return v(a, b);switch (b.tag) {case 0:
          null !== a ? E("155") : void 0;var d = b.type,
              e = b.pendingProps,
              r = ke(b);r = me(b, r);d = d(e, r);b.effectTag |= 1;"object" === (typeof d === "undefined" ? "undefined" : _typeof(d)) && null !== d && "function" === typeof d.render ? (b.tag = 2, e = qe(b), w(b, d), A(b, c), b = h(a, b, !0, e)) : (b.tag = 1, f(a, b, d), b.memoizedProps = e, b = b.child);return b;case 1:
          a: {
            e = b.type;c = b.pendingProps;d = b.memoizedProps;if (X.current) null === c && (c = d);else if (null === c || d === c) {
              b = q(a, b);break a;
            }d = ke(b);d = me(b, d);e = e(c, d);b.effectTag |= 1;f(a, b, e);b.memoizedProps = c;b = b.child;
          }return b;case 2:
          return e = qe(b), d = void 0, null === a ? b.stateNode ? E("153") : (m(b, b.pendingProps), A(b, c), d = !0) : d = Ob(a, b, c), h(a, b, d, e);case 3:
          return k(b), e = b.updateQueue, null !== e ? (d = b.memoizedState, e = Je(a, b, e, null, null, c), d === e ? (N(), b = q(a, b)) : (d = e.element, r = b.stateNode, (null === a || null === a.child) && r.hydrate && L(b) ? (b.effectTag |= 2, b.child = cf(b, null, d, c)) : (N(), f(a, b, d)), b.memoizedState = e, b = b.child)) : (N(), b = q(a, b)), b;case 5:
          G(b);null === a && J(b);e = b.type;var n = b.memoizedProps;d = b.pendingProps;null === d && (d = n, null === d ? E("154") : void 0);r = null !== a ? a.memoizedProps : null;X.current || null !== d && n !== d ? (n = d.children, y(e, d) ? n = null : r && y(e, r) && (b.effectTag |= 16), g(a, b), 2147483647 !== c && !u && z(e, d) ? (b.expirationTime = 2147483647, b = null) : (f(a, b, n), b.memoizedProps = d, b = b.child)) : b = q(a, b);return b;case 6:
          return null === a && J(b), a = b.pendingProps, null === a && (a = b.memoizedProps), b.memoizedProps = a, null;case 8:
          b.tag = 7;case 7:
          e = b.pendingProps;if (X.current) null === e && (e = a && a.memoizedProps, null === e ? E("154") : void 0);else if (null === e || b.memoizedProps === e) e = b.memoizedProps;d = e.children;b.stateNode = null === a ? cf(b, b.stateNode, d, c) : bf(b, b.stateNode, d, c);b.memoizedProps = e;return b.stateNode;
        case 9:
          return null;case 4:
          a: {
            I(b, b.stateNode.containerInfo);e = b.pendingProps;if (X.current) null === e && (e = a && a.memoizedProps, null == e ? E("154") : void 0);else if (null === e || b.memoizedProps === e) {
              b = q(a, b);break a;
            }null === a ? b.child = bf(b, null, e, c) : f(a, b, e);b.memoizedProps = e;b = b.child;
          }return b;case 10:
          a: {
            c = b.pendingProps;if (X.current) null === c && (c = b.memoizedProps);else if (null === c || b.memoizedProps === c) {
              b = q(a, b);break a;
            }f(a, b, c);b.memoizedProps = c;b = b.child;
          }return b;default:
          E("156");}
    }, beginFailedWork: function beginFailedWork(a, b, c) {
      switch (b.tag) {case 2:
          qe(b);break;case 3:
          k(b);break;default:
          E("157");}b.effectTag |= 64;null === a ? b.child = null : b.child !== a.child && (b.child = a.child);if (0 === b.expirationTime || b.expirationTime > c) return v(a, b);b.firstEffect = null;b.lastEffect = null;b.child = null === a ? cf(b, null, null, c) : bf(b, a.child, null, c);2 === b.tag && (a = b.stateNode, b.memoizedProps = a.props, b.memoizedState = a.state);return b.child;
    } };
}
function ef(a, b, c) {
  function d(a) {
    a.effectTag |= 4;
  }var e = a.createInstance,
      f = a.createTextInstance,
      g = a.appendInitialChild,
      h = a.finalizeInitialChildren,
      k = a.prepareUpdate,
      q = a.persistence,
      v = b.getRootHostContainer,
      y = b.popHostContext,
      u = b.getHostContext,
      z = b.popHostContainer,
      G = c.prepareToHydrateHostInstance,
      I = c.prepareToHydrateHostTextInstance,
      L = c.popHydrationState,
      N = void 0,
      J = void 0,
      w = void 0;a.mutation ? (N = function N() {}, J = function J(a, b, c) {
    (b.updateQueue = c) && d(b);
  }, w = function w(a, b, c, e) {
    c !== e && d(b);
  }) : q ? E("235") : E("236");
  return { completeWork: function completeWork(a, b, c) {
      var m = b.pendingProps;if (null === m) m = b.memoizedProps;else if (2147483647 !== b.expirationTime || 2147483647 === c) b.pendingProps = null;switch (b.tag) {case 1:
          return null;case 2:
          return ne(b), null;case 3:
          z(b);V(X, b);V(ie, b);m = b.stateNode;m.pendingContext && (m.context = m.pendingContext, m.pendingContext = null);if (null === a || null === a.child) L(b), b.effectTag &= -3;N(b);return null;case 5:
          y(b);c = v();var A = b.type;if (null !== a && null != b.stateNode) {
            var p = a.memoizedProps,
                q = b.stateNode,
                x = u();q = k(q, A, p, m, c, x);J(a, b, q, A, p, m, c);a.ref !== b.ref && (b.effectTag |= 128);
          } else {
            if (!m) return null === b.stateNode ? E("166") : void 0, null;a = u();if (L(b)) G(b, c, a) && d(b);else {
              a = e(A, m, c, a, b);a: for (p = b.child; null !== p;) {
                if (5 === p.tag || 6 === p.tag) g(a, p.stateNode);else if (4 !== p.tag && null !== p.child) {
                  p.child["return"] = p;p = p.child;continue;
                }if (p === b) break;for (; null === p.sibling;) {
                  if (null === p["return"] || p["return"] === b) break a;p = p["return"];
                }p.sibling["return"] = p["return"];p = p.sibling;
              }h(a, A, m, c) && d(b);b.stateNode = a;
            }null !== b.ref && (b.effectTag |= 128);
          }return null;case 6:
          if (a && null != b.stateNode) w(a, b, a.memoizedProps, m);else {
            if ("string" !== typeof m) return null === b.stateNode ? E("166") : void 0, null;a = v();c = u();L(b) ? I(b) && d(b) : b.stateNode = f(m, a, c, b);
          }return null;case 7:
          (m = b.memoizedProps) ? void 0 : E("165");b.tag = 8;A = [];a: for ((p = b.stateNode) && (p["return"] = b); null !== p;) {
            if (5 === p.tag || 6 === p.tag || 4 === p.tag) E("247");else if (9 === p.tag) A.push(p.type);else if (null !== p.child) {
              p.child["return"] = p;p = p.child;continue;
            }for (; null === p.sibling;) {
              if (null === p["return"] || p["return"] === b) break a;p = p["return"];
            }p.sibling["return"] = p["return"];p = p.sibling;
          }p = m.handler;m = p(m.props, A);b.child = bf(b, null !== a ? a.child : null, m, c);return b.child;case 8:
          return b.tag = 7, null;case 9:
          return null;case 10:
          return null;case 4:
          return z(b), N(b), null;case 0:
          E("167");default:
          E("156");}
    } };
}
function ff(a, b) {
  function c(a) {
    var c = a.ref;if (null !== c) try {
      c(null);
    } catch (A) {
      b(a, A);
    }
  }function d(a) {
    "function" === typeof Ee && Ee(a);switch (a.tag) {case 2:
        c(a);var d = a.stateNode;if ("function" === typeof d.componentWillUnmount) try {
          d.props = a.memoizedProps, d.state = a.memoizedState, d.componentWillUnmount();
        } catch (A) {
          b(a, A);
        }break;case 5:
        c(a);break;case 7:
        e(a.stateNode);break;case 4:
        k && g(a);}
  }function e(a) {
    for (var b = a;;) {
      if (d(b), null === b.child || k && 4 === b.tag) {
        if (b === a) break;for (; null === b.sibling;) {
          if (null === b["return"] || b["return"] === a) return;b = b["return"];
        }b.sibling["return"] = b["return"];b = b.sibling;
      } else b.child["return"] = b, b = b.child;
    }
  }function f(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }function g(a) {
    for (var b = a, c = !1, f = void 0, g = void 0;;) {
      if (!c) {
        c = b["return"];a: for (;;) {
          null === c ? E("160") : void 0;switch (c.tag) {case 5:
              f = c.stateNode;g = !1;break a;case 3:
              f = c.stateNode.containerInfo;g = !0;break a;case 4:
              f = c.stateNode.containerInfo;g = !0;break a;}c = c["return"];
        }c = !0;
      }if (5 === b.tag || 6 === b.tag) e(b), g ? J(f, b.stateNode) : N(f, b.stateNode);else if (4 === b.tag ? f = b.stateNode.containerInfo : d(b), null !== b.child) {
        b.child["return"] = b;b = b.child;continue;
      }if (b === a) break;for (; null === b.sibling;) {
        if (null === b["return"] || b["return"] === a) return;b = b["return"];4 === b.tag && (c = !1);
      }b.sibling["return"] = b["return"];b = b.sibling;
    }
  }var h = a.getPublicInstance,
      k = a.mutation;a = a.persistence;k || (a ? E("235") : E("236"));var q = k.commitMount,
      v = k.commitUpdate,
      y = k.resetTextContent,
      u = k.commitTextUpdate,
      z = k.appendChild,
      G = k.appendChildToContainer,
      I = k.insertBefore,
      L = k.insertInContainerBefore,
      N = k.removeChild,
      J = k.removeChildFromContainer;return { commitResetTextContent: function commitResetTextContent(a) {
      y(a.stateNode);
    }, commitPlacement: function commitPlacement(a) {
      a: {
        for (var b = a["return"]; null !== b;) {
          if (f(b)) {
            var c = b;break a;
          }b = b["return"];
        }E("160");c = void 0;
      }var d = b = void 0;switch (c.tag) {case 5:
          b = c.stateNode;d = !1;break;case 3:
          b = c.stateNode.containerInfo;d = !0;break;case 4:
          b = c.stateNode.containerInfo;d = !0;break;default:
          E("161");}c.effectTag & 16 && (y(b), c.effectTag &= -17);a: b: for (c = a;;) {
        for (; null === c.sibling;) {
          if (null === c["return"] || f(c["return"])) {
            c = null;break a;
          }c = c["return"];
        }c.sibling["return"] = c["return"];for (c = c.sibling; 5 !== c.tag && 6 !== c.tag;) {
          if (c.effectTag & 2) continue b;if (null === c.child || 4 === c.tag) continue b;else c.child["return"] = c, c = c.child;
        }if (!(c.effectTag & 2)) {
          c = c.stateNode;break a;
        }
      }for (var e = a;;) {
        if (5 === e.tag || 6 === e.tag) c ? d ? L(b, e.stateNode, c) : I(b, e.stateNode, c) : d ? G(b, e.stateNode) : z(b, e.stateNode);else if (4 !== e.tag && null !== e.child) {
          e.child["return"] = e;e = e.child;continue;
        }if (e === a) break;for (; null === e.sibling;) {
          if (null === e["return"] || e["return"] === a) return;e = e["return"];
        }e.sibling["return"] = e["return"];e = e.sibling;
      }
    }, commitDeletion: function commitDeletion(a) {
      g(a);a["return"] = null;a.child = null;a.alternate && (a.alternate.child = null, a.alternate["return"] = null);
    }, commitWork: function commitWork(a, b) {
      switch (b.tag) {case 2:
          break;case 5:
          var c = b.stateNode;if (null != c) {
            var d = b.memoizedProps;a = null !== a ? a.memoizedProps : d;var e = b.type,
                f = b.updateQueue;b.updateQueue = null;null !== f && v(c, f, e, a, d, b);
          }break;case 6:
          null === b.stateNode ? E("162") : void 0;c = b.memoizedProps;u(b.stateNode, null !== a ? a.memoizedProps : c, c);break;case 3:
          break;default:
          E("163");}
    }, commitLifeCycles: function commitLifeCycles(a, b) {
      switch (b.tag) {case 2:
          var c = b.stateNode;if (b.effectTag & 4) if (null === a) c.props = b.memoizedProps, c.state = b.memoizedState, c.componentDidMount();else {
            var d = a.memoizedProps;a = a.memoizedState;c.props = b.memoizedProps;c.state = b.memoizedState;c.componentDidUpdate(d, a);
          }b = b.updateQueue;null !== b && Ke(b, c);break;case 3:
          c = b.updateQueue;null !== c && Ke(c, null !== b.child ? b.child.stateNode : null);break;case 5:
          c = b.stateNode;null === a && b.effectTag & 4 && q(c, b.type, b.memoizedProps, b);break;case 6:
          break;case 4:
          break;default:
          E("163");}
    }, commitAttachRef: function commitAttachRef(a) {
      var b = a.ref;if (null !== b) {
        var c = a.stateNode;switch (a.tag) {case 5:
            b(h(c));break;default:
            b(c);}
      }
    }, commitDetachRef: function commitDetachRef(a) {
      a = a.ref;null !== a && a(null);
    } };
}var gf = {};
function hf(a) {
  function b(a) {
    a === gf ? E("174") : void 0;return a;
  }var c = a.getChildHostContext,
      d = a.getRootHostContext,
      e = { current: gf },
      f = { current: gf },
      g = { current: gf };return { getHostContext: function getHostContext() {
      return b(e.current);
    }, getRootHostContainer: function getRootHostContainer() {
      return b(g.current);
    }, popHostContainer: function popHostContainer(a) {
      V(e, a);V(f, a);V(g, a);
    }, popHostContext: function popHostContext(a) {
      f.current === a && (V(e, a), V(f, a));
    }, pushHostContainer: function pushHostContainer(a, b) {
      W(g, b, a);b = d(b);W(f, a, a);W(e, b, a);
    }, pushHostContext: function pushHostContext(a) {
      var d = b(g.current),
          h = b(e.current);
      d = c(h, a.type, d);h !== d && (W(f, a, a), W(e, d, a));
    }, resetHostContainer: function resetHostContainer() {
      e.current = gf;g.current = gf;
    } };
}
function jf(a) {
  function b(a, b) {
    var c = new Y(5, null, 0);c.type = "DELETED";c.stateNode = b;c["return"] = a;c.effectTag = 8;null !== a.lastEffect ? (a.lastEffect.nextEffect = c, a.lastEffect = c) : a.firstEffect = a.lastEffect = c;
  }function c(a, b) {
    switch (a.tag) {case 5:
        return b = f(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;case 6:
        return b = g(b, a.pendingProps), null !== b ? (a.stateNode = b, !0) : !1;default:
        return !1;}
  }function d(a) {
    for (a = a["return"]; null !== a && 5 !== a.tag && 3 !== a.tag;) {
      a = a["return"];
    }y = a;
  }var e = a.shouldSetTextContent;
  a = a.hydration;if (!a) return { enterHydrationState: function enterHydrationState() {
      return !1;
    }, resetHydrationState: function resetHydrationState() {}, tryToClaimNextHydratableInstance: function tryToClaimNextHydratableInstance() {}, prepareToHydrateHostInstance: function prepareToHydrateHostInstance() {
      E("175");
    }, prepareToHydrateHostTextInstance: function prepareToHydrateHostTextInstance() {
      E("176");
    }, popHydrationState: function popHydrationState() {
      return !1;
    } };var f = a.canHydrateInstance,
      g = a.canHydrateTextInstance,
      h = a.getNextHydratableSibling,
      k = a.getFirstHydratableChild,
      q = a.hydrateInstance,
      v = a.hydrateTextInstance,
      y = null,
      u = null,
      z = !1;return { enterHydrationState: function enterHydrationState(a) {
      u = k(a.stateNode.containerInfo);y = a;return z = !0;
    }, resetHydrationState: function resetHydrationState() {
      u = y = null;z = !1;
    }, tryToClaimNextHydratableInstance: function tryToClaimNextHydratableInstance(a) {
      if (z) {
        var d = u;if (d) {
          if (!c(a, d)) {
            d = h(d);if (!d || !c(a, d)) {
              a.effectTag |= 2;z = !1;y = a;return;
            }b(y, u);
          }y = a;u = k(d);
        } else a.effectTag |= 2, z = !1, y = a;
      }
    }, prepareToHydrateHostInstance: function prepareToHydrateHostInstance(a, b, c) {
      b = q(a.stateNode, a.type, a.memoizedProps, b, c, a);a.updateQueue = b;return null !== b ? !0 : !1;
    }, prepareToHydrateHostTextInstance: function prepareToHydrateHostTextInstance(a) {
      return v(a.stateNode, a.memoizedProps, a);
    }, popHydrationState: function popHydrationState(a) {
      if (a !== y) return !1;if (!z) return d(a), z = !0, !1;var c = a.type;if (5 !== a.tag || "head" !== c && "body" !== c && !e(c, a.memoizedProps)) for (c = u; c;) {
        b(a, c), c = h(c);
      }d(a);u = y ? h(a.stateNode) : null;return !0;
    } };
}
function kf(a) {
  function b(a) {
    Qb = ja = !0;var b = a.stateNode;b.current === a ? E("177") : void 0;b.isReadyForCommit = !1;id.current = null;if (1 < a.effectTag) {
      if (null !== a.lastEffect) {
        a.lastEffect.nextEffect = a;var c = a.firstEffect;
      } else c = a;
    } else c = a.firstEffect;yg();for (t = c; null !== t;) {
      var d = !1,
          e = void 0;try {
        for (; null !== t;) {
          var f = t.effectTag;f & 16 && zg(t);if (f & 128) {
            var g = t.alternate;null !== g && Ag(g);
          }switch (f & -242) {case 2:
              Ne(t);t.effectTag &= -3;break;case 6:
              Ne(t);t.effectTag &= -3;Oe(t.alternate, t);break;case 4:
              Oe(t.alternate, t);break;case 8:
              Sc = !0, Bg(t), Sc = !1;}t = t.nextEffect;
        }
      } catch (Tc) {
        d = !0, e = Tc;
      }d && (null === t ? E("178") : void 0, h(t, e), null !== t && (t = t.nextEffect));
    }Cg();b.current = a;for (t = c; null !== t;) {
      c = !1;d = void 0;try {
        for (; null !== t;) {
          var k = t.effectTag;k & 36 && Dg(t.alternate, t);k & 128 && Eg(t);if (k & 64) switch (e = t, f = void 0, null !== R && (f = R.get(e), R["delete"](e), null == f && null !== e.alternate && (e = e.alternate, f = R.get(e), R["delete"](e))), null == f ? E("184") : void 0, e.tag) {case 2:
              e.stateNode.componentDidCatch(f.error, { componentStack: f.componentStack });
              break;case 3:
              null === ca && (ca = f.error);break;default:
              E("157");}var Qc = t.nextEffect;t.nextEffect = null;t = Qc;
        }
      } catch (Tc) {
        c = !0, d = Tc;
      }c && (null === t ? E("178") : void 0, h(t, d), null !== t && (t = t.nextEffect));
    }ja = Qb = !1;"function" === typeof De && De(a.stateNode);ha && (ha.forEach(G), ha = null);null !== ca && (a = ca, ca = null, Ob(a));b = b.current.expirationTime;0 === b && (qa = R = null);return b;
  }function c(a) {
    for (;;) {
      var b = Fg(a.alternate, a, H),
          c = a["return"],
          d = a.sibling;var e = a;if (2147483647 === H || 2147483647 !== e.expirationTime) {
        if (2 !== e.tag && 3 !== e.tag) var f = 0;else f = e.updateQueue, f = null === f ? 0 : f.expirationTime;for (var g = e.child; null !== g;) {
          0 !== g.expirationTime && (0 === f || f > g.expirationTime) && (f = g.expirationTime), g = g.sibling;
        }e.expirationTime = f;
      }if (null !== b) return b;null !== c && (null === c.firstEffect && (c.firstEffect = a.firstEffect), null !== a.lastEffect && (null !== c.lastEffect && (c.lastEffect.nextEffect = a.firstEffect), c.lastEffect = a.lastEffect), 1 < a.effectTag && (null !== c.lastEffect ? c.lastEffect.nextEffect = a : c.firstEffect = a, c.lastEffect = a));if (null !== d) return d;
      if (null !== c) a = c;else {
        a.stateNode.isReadyForCommit = !0;break;
      }
    }return null;
  }function d(a) {
    var b = rg(a.alternate, a, H);null === b && (b = c(a));id.current = null;return b;
  }function e(a) {
    var b = Gg(a.alternate, a, H);null === b && (b = c(a));id.current = null;return b;
  }function f(a) {
    if (null !== R) {
      if (!(0 === H || H > a)) if (H <= Uc) for (; null !== F;) {
        F = k(F) ? e(F) : d(F);
      } else for (; null !== F && !A();) {
        F = k(F) ? e(F) : d(F);
      }
    } else if (!(0 === H || H > a)) if (H <= Uc) for (; null !== F;) {
      F = d(F);
    } else for (; null !== F && !A();) {
      F = d(F);
    }
  }function g(a, b) {
    ja ? E("243") : void 0;ja = !0;a.isReadyForCommit = !1;if (a !== ra || b !== H || null === F) {
      for (; -1 < he;) {
        ge[he] = null, he--;
      }je = D;ie.current = D;X.current = !1;x();ra = a;H = b;F = se(ra.current, null, b);
    }var c = !1,
        d = null;try {
      f(b);
    } catch (Rc) {
      c = !0, d = Rc;
    }for (; c;) {
      if (eb) {
        ca = d;break;
      }var g = F;if (null === g) eb = !0;else {
        var k = h(g, d);null === k ? E("183") : void 0;if (!eb) {
          try {
            c = k;d = b;for (k = c; null !== g;) {
              switch (g.tag) {case 2:
                  ne(g);break;case 5:
                  qg(g);break;case 3:
                  p(g);break;case 4:
                  p(g);}if (g === k || g.alternate === k) break;g = g["return"];
            }F = e(c);f(d);
          } catch (Rc) {
            c = !0;d = Rc;continue;
          }break;
        }
      }
    }b = ca;eb = ja = !1;ca = null;null !== b && Ob(b);return a.isReadyForCommit ? a.current.alternate : null;
  }function h(a, b) {
    var c = id.current = null,
        d = !1,
        e = !1,
        f = null;if (3 === a.tag) c = a, q(a) && (eb = !0);else for (var g = a["return"]; null !== g && null === c;) {
      2 === g.tag ? "function" === typeof g.stateNode.componentDidCatch && (d = !0, f = jd(g), c = g, e = !0) : 3 === g.tag && (c = g);if (q(g)) {
        if (Sc || null !== ha && (ha.has(g) || null !== g.alternate && ha.has(g.alternate))) return null;c = null;e = !1;
      }g = g["return"];
    }if (null !== c) {
      null === qa && (qa = new Set());qa.add(c);var h = "";g = a;do {
        a: switch (g.tag) {case 0:case 1:case 2:case 5:
            var k = g._debugOwner,
                Qc = g._debugSource;var m = jd(g);var n = null;k && (n = jd(k));k = Qc;m = "\n    in " + (m || "Unknown") + (k ? " (at " + k.fileName.replace(/^.*[\\\/]/, "") + ":" + k.lineNumber + ")" : n ? " (created by " + n + ")" : "");break a;default:
            m = "";}h += m;g = g["return"];
      } while (g);g = h;a = jd(a);null === R && (R = new Map());b = { componentName: a, componentStack: g, error: b, errorBoundary: d ? c.stateNode : null, errorBoundaryFound: d, errorBoundaryName: f, willRetry: e };R.set(c, b);try {
        var p = b.error;p && p.suppressReactErrorLogging || console.error(p);
      } catch (Vc) {
        Vc && Vc.suppressReactErrorLogging || console.error(Vc);
      }Qb ? (null === ha && (ha = new Set()), ha.add(c)) : G(c);return c;
    }null === ca && (ca = b);return null;
  }function k(a) {
    return null !== R && (R.has(a) || null !== a.alternate && R.has(a.alternate));
  }function q(a) {
    return null !== qa && (qa.has(a) || null !== a.alternate && qa.has(a.alternate));
  }function v() {
    return 20 * (((I() + 100) / 20 | 0) + 1);
  }function y(a) {
    return 0 !== ka ? ka : ja ? Qb ? 1 : H : !Hg || a.internalContextTag & 1 ? v() : 1;
  }function u(a, b) {
    return z(a, b, !1);
  }function z(a, b) {
    for (; null !== a;) {
      if (0 === a.expirationTime || a.expirationTime > b) a.expirationTime = b;null !== a.alternate && (0 === a.alternate.expirationTime || a.alternate.expirationTime > b) && (a.alternate.expirationTime = b);if (null === a["return"]) if (3 === a.tag) {
        var c = a.stateNode;!ja && c === ra && b < H && (F = ra = null, H = 0);var d = c,
            e = b;Rb > Ig && E("185");if (null === d.nextScheduledRoot) d.remainingExpirationTime = e, null === O ? (sa = O = d, d.nextScheduledRoot = d) : (O = O.nextScheduledRoot = d, O.nextScheduledRoot = sa);else {
          var f = d.remainingExpirationTime;if (0 === f || e < f) d.remainingExpirationTime = e;
        }Fa || (la ? Sb && (ma = d, na = 1, m(ma, na)) : 1 === e ? w(1, null) : L(e));!ja && c === ra && b < H && (F = ra = null, H = 0);
      } else break;a = a["return"];
    }
  }function G(a) {
    z(a, 1, !0);
  }function I() {
    return Uc = ((Wc() - Pe) / 10 | 0) + 2;
  }function L(a) {
    if (0 !== Tb) {
      if (a > Tb) return;Jg(Xc);
    }var b = Wc() - Pe;Tb = a;Xc = Kg(J, { timeout: 10 * (a - 2) - b });
  }function N() {
    var a = 0,
        b = null;if (null !== O) for (var c = O, d = sa; null !== d;) {
      var e = d.remainingExpirationTime;if (0 === e) {
        null === c || null === O ? E("244") : void 0;if (d === d.nextScheduledRoot) {
          sa = O = d.nextScheduledRoot = null;break;
        } else if (d === sa) sa = e = d.nextScheduledRoot, O.nextScheduledRoot = e, d.nextScheduledRoot = null;else if (d === O) {
          O = c;O.nextScheduledRoot = sa;d.nextScheduledRoot = null;break;
        } else c.nextScheduledRoot = d.nextScheduledRoot, d.nextScheduledRoot = null;d = c.nextScheduledRoot;
      } else {
        if (0 === a || e < a) a = e, b = d;if (d === O) break;c = d;d = d.nextScheduledRoot;
      }
    }c = ma;null !== c && c === b ? Rb++ : Rb = 0;ma = b;na = a;
  }function J(a) {
    w(0, a);
  }function w(a, b) {
    fb = b;for (N(); null !== ma && 0 !== na && (0 === a || na <= a) && !Yc;) {
      m(ma, na), N();
    }null !== fb && (Tb = 0, Xc = -1);0 !== na && L(na);fb = null;Yc = !1;Rb = 0;if (Ub) throw a = Zc, Zc = null, Ub = !1, a;
  }function m(a, c) {
    Fa ? E("245") : void 0;Fa = !0;if (c <= I()) {
      var d = a.finishedWork;null !== d ? (a.finishedWork = null, a.remainingExpirationTime = b(d)) : (a.finishedWork = null, d = g(a, c), null !== d && (a.remainingExpirationTime = b(d)));
    } else d = a.finishedWork, null !== d ? (a.finishedWork = null, a.remainingExpirationTime = b(d)) : (a.finishedWork = null, d = g(a, c), null !== d && (A() ? a.finishedWork = d : a.remainingExpirationTime = b(d)));Fa = !1;
  }function A() {
    return null === fb || fb.timeRemaining() > Lg ? !1 : Yc = !0;
  }function Ob(a) {
    null === ma ? E("246") : void 0;ma.remainingExpirationTime = 0;Ub || (Ub = !0, Zc = a);
  }var r = hf(a),
      n = jf(a),
      p = r.popHostContainer,
      qg = r.popHostContext,
      x = r.resetHostContainer,
      Me = df(a, r, n, u, y),
      rg = Me.beginWork,
      Gg = Me.beginFailedWork,
      Fg = ef(a, r, n).completeWork;r = ff(a, h);var zg = r.commitResetTextContent,
      Ne = r.commitPlacement,
      Bg = r.commitDeletion,
      Oe = r.commitWork,
      Dg = r.commitLifeCycles,
      Eg = r.commitAttachRef,
      Ag = r.commitDetachRef,
      Wc = a.now,
      Kg = a.scheduleDeferredCallback,
      Jg = a.cancelDeferredCallback,
      Hg = a.useSyncScheduling,
      yg = a.prepareForCommit,
      Cg = a.resetAfterCommit,
      Pe = Wc(),
      Uc = 2,
      ka = 0,
      ja = !1,
      F = null,
      ra = null,
      H = 0,
      t = null,
      R = null,
      qa = null,
      ha = null,
      ca = null,
      eb = !1,
      Qb = !1,
      Sc = !1,
      sa = null,
      O = null,
      Tb = 0,
      Xc = -1,
      Fa = !1,
      ma = null,
      na = 0,
      Yc = !1,
      Ub = !1,
      Zc = null,
      fb = null,
      la = !1,
      Sb = !1,
      Ig = 1E3,
      Rb = 0,
      Lg = 1;return { computeAsyncExpiration: v, computeExpirationForFiber: y, scheduleWork: u, batchedUpdates: function batchedUpdates(a, b) {
      var c = la;la = !0;try {
        return a(b);
      } finally {
        (la = c) || Fa || w(1, null);
      }
    }, unbatchedUpdates: function unbatchedUpdates(a) {
      if (la && !Sb) {
        Sb = !0;try {
          return a();
        } finally {
          Sb = !1;
        }
      }return a();
    }, flushSync: function flushSync(a) {
      var b = la;la = !0;try {
        a: {
          var c = ka;ka = 1;try {
            var d = a();break a;
          } finally {
            ka = c;
          }d = void 0;
        }return d;
      } finally {
        la = b, Fa ? E("187") : void 0, w(1, null);
      }
    }, deferredUpdates: function deferredUpdates(a) {
      var b = ka;ka = v();try {
        return a();
      } finally {
        ka = b;
      }
    } };
}
function lf(a) {
  function b(a) {
    a = od(a);return null === a ? null : a.stateNode;
  }var c = a.getPublicInstance;a = kf(a);var d = a.computeAsyncExpiration,
      e = a.computeExpirationForFiber,
      f = a.scheduleWork;return { createContainer: function createContainer(a, b) {
      var c = new Y(3, null, 0);a = { current: c, containerInfo: a, pendingChildren: null, remainingExpirationTime: 0, isReadyForCommit: !1, finishedWork: null, context: null, pendingContext: null, hydrate: b, nextScheduledRoot: null };return c.stateNode = a;
    }, updateContainer: function updateContainer(a, b, c, q) {
      var g = b.current;if (c) {
        c = c._reactInternalFiber;var h;b: {
          2 === kd(c) && 2 === c.tag ? void 0 : E("170");for (h = c; 3 !== h.tag;) {
            if (le(h)) {
              h = h.stateNode.__reactInternalMemoizedMergedChildContext;break b;
            }(h = h["return"]) ? void 0 : E("171");
          }h = h.stateNode.context;
        }c = le(c) ? pe(c, h) : h;
      } else c = D;null === b.context ? b.context = c : b.pendingContext = c;b = q;b = void 0 === b ? null : b;q = null != a && null != a.type && null != a.type.prototype && !0 === a.type.prototype.unstable_isAsyncReactComponent ? d() : e(g);He(g, { expirationTime: q, partialState: { element: a }, callback: b, isReplace: !1, isForced: !1,
        nextCallback: null, next: null });f(g, q);
    }, batchedUpdates: a.batchedUpdates, unbatchedUpdates: a.unbatchedUpdates, deferredUpdates: a.deferredUpdates, flushSync: a.flushSync, getPublicRootInstance: function getPublicRootInstance(a) {
      a = a.current;if (!a.child) return null;switch (a.child.tag) {case 5:
          return c(a.child.stateNode);default:
          return a.child.stateNode;}
    }, findHostInstance: b, findHostInstanceWithNoPortals: function findHostInstanceWithNoPortals(a) {
      a = pd(a);return null === a ? null : a.stateNode;
    }, injectIntoDevTools: function injectIntoDevTools(a) {
      var c = a.findFiberByHostInstance;return Ce(B({}, a, { findHostInstanceByFiber: function findHostInstanceByFiber(a) {
          return b(a);
        }, findFiberByHostInstance: function findFiberByHostInstance(a) {
          return c ? c(a) : null;
        } }));
    } };
}var mf = Object.freeze({ default: lf }),
    nf = mf && lf || mf,
    of = nf["default"] ? nf["default"] : nf;function pf(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;return { $$typeof: Ue, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}var qf = "object" === (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && "function" === typeof performance.now,
    rf = void 0;rf = qf ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
var sf = void 0,
    tf = void 0;
if (l.canUseDOM) {
  if ("function" !== typeof requestIdleCallback || "function" !== typeof cancelIdleCallback) {
    var uf = null,
        vf = !1,
        wf = -1,
        xf = !1,
        yf = 0,
        zf = 33,
        Af = 33,
        Bf;Bf = qf ? { didTimeout: !1, timeRemaining: function timeRemaining() {
        var a = yf - performance.now();return 0 < a ? a : 0;
      } } : { didTimeout: !1, timeRemaining: function timeRemaining() {
        var a = yf - Date.now();return 0 < a ? a : 0;
      } };var Cf = "__reactIdleCallback$" + Math.random().toString(36).slice(2);window.addEventListener("message", function (a) {
      if (a.source === window && a.data === Cf) {
        vf = !1;a = rf();if (0 >= yf - a) {
          if (-1 !== wf && wf <= a) Bf.didTimeout = !0;else {
            xf || (xf = !0, requestAnimationFrame(Df));return;
          }
        } else Bf.didTimeout = !1;wf = -1;a = uf;uf = null;null !== a && a(Bf);
      }
    }, !1);var Df = function Df(a) {
      xf = !1;var b = a - yf + Af;b < Af && zf < Af ? (8 > b && (b = 8), Af = b < zf ? zf : b) : zf = b;yf = a + Af;vf || (vf = !0, window.postMessage(Cf, "*"));
    };sf = function sf(a, b) {
      uf = a;null != b && "number" === typeof b.timeout && (wf = rf() + b.timeout);xf || (xf = !0, requestAnimationFrame(Df));return 0;
    };tf = function tf() {
      uf = null;vf = !1;wf = -1;
    };
  } else sf = window.requestIdleCallback, tf = window.cancelIdleCallback;
} else sf = function sf(a) {
  return setTimeout(function () {
    a({ timeRemaining: function timeRemaining() {
        return Infinity;
      } });
  });
}, tf = function tf(a) {
  clearTimeout(a);
};var Ef = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Ff = {},
    Gf = {};
function Hf(a) {
  if (Gf.hasOwnProperty(a)) return !0;if (Ff.hasOwnProperty(a)) return !1;if (Ef.test(a)) return Gf[a] = !0;Ff[a] = !0;return !1;
}
function If(a, b, c) {
  var d = wa(b);if (d && va(b, c)) {
    var e = d.mutationMethod;e ? e(a, c) : null == c || d.hasBooleanValue && !c || d.hasNumericValue && isNaN(c) || d.hasPositiveNumericValue && 1 > c || d.hasOverloadedBooleanValue && !1 === c ? Jf(a, b) : d.mustUseProperty ? a[d.propertyName] = c : (b = d.attributeName, (e = d.attributeNamespace) ? a.setAttributeNS(e, b, "" + c) : d.hasBooleanValue || d.hasOverloadedBooleanValue && !0 === c ? a.setAttribute(b, "") : a.setAttribute(b, "" + c));
  } else Kf(a, b, va(b, c) ? c : null);
}
function Kf(a, b, c) {
  Hf(b) && (null == c ? a.removeAttribute(b) : a.setAttribute(b, "" + c));
}function Jf(a, b) {
  var c = wa(b);c ? (b = c.mutationMethod) ? b(a, void 0) : c.mustUseProperty ? a[c.propertyName] = c.hasBooleanValue ? !1 : "" : a.removeAttribute(c.attributeName) : a.removeAttribute(b);
}
function Lf(a, b) {
  var c = b.value,
      d = b.checked;return B({ type: void 0, step: void 0, min: void 0, max: void 0 }, b, { defaultChecked: void 0, defaultValue: void 0, value: null != c ? c : a._wrapperState.initialValue, checked: null != d ? d : a._wrapperState.initialChecked });
}function Mf(a, b) {
  var c = b.defaultValue;a._wrapperState = { initialChecked: null != b.checked ? b.checked : b.defaultChecked, initialValue: null != b.value ? b.value : c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function Nf(a, b) {
  b = b.checked;null != b && If(a, "checked", b);
}function Of(a, b) {
  Nf(a, b);var c = b.value;if (null != c) {
    if (0 === c && "" === a.value) a.value = "0";else if ("number" === b.type) {
      if (b = parseFloat(a.value) || 0, c != b || c == b && a.value != c) a.value = "" + c;
    } else a.value !== "" + c && (a.value = "" + c);
  } else null == b.value && null != b.defaultValue && a.defaultValue !== "" + b.defaultValue && (a.defaultValue = "" + b.defaultValue), null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function Pf(a, b) {
  switch (b.type) {case "submit":case "reset":
      break;case "color":case "date":case "datetime":case "datetime-local":case "month":case "time":case "week":
      a.value = "";a.value = a.defaultValue;break;default:
      a.value = a.value;}b = a.name;"" !== b && (a.name = "");a.defaultChecked = !a.defaultChecked;a.defaultChecked = !a.defaultChecked;"" !== b && (a.name = b);
}function Qf(a) {
  var b = "";aa.Children.forEach(a, function (a) {
    null == a || "string" !== typeof a && "number" !== typeof a || (b += a);
  });return b;
}
function Rf(a, b) {
  a = B({ children: void 0 }, b);if (b = Qf(b.children)) a.children = b;return a;
}function Sf(a, b, c, d) {
  a = a.options;if (b) {
    b = {};for (var e = 0; e < c.length; e++) {
      b["$" + c[e]] = !0;
    }for (c = 0; c < a.length; c++) {
      e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = !0);
    }
  } else {
    c = "" + c;b = null;for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = !0;d && (a[e].defaultSelected = !0);return;
      }null !== b || a[e].disabled || (b = a[e]);
    }null !== b && (b.selected = !0);
  }
}
function Tf(a, b) {
  var c = b.value;a._wrapperState = { initialValue: null != c ? c : b.defaultValue, wasMultiple: !!b.multiple };
}function Uf(a, b) {
  null != b.dangerouslySetInnerHTML ? E("91") : void 0;return B({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}function Vf(a, b) {
  var c = b.value;null == c && (c = b.defaultValue, b = b.children, null != b && (null != c ? E("92") : void 0, Array.isArray(b) && (1 >= b.length ? void 0 : E("93"), b = b[0]), c = "" + b), null == c && (c = ""));a._wrapperState = { initialValue: "" + c };
}
function Wf(a, b) {
  var c = b.value;null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && (a.defaultValue = c));null != b.defaultValue && (a.defaultValue = b.defaultValue);
}function Xf(a) {
  var b = a.textContent;b === a._wrapperState.initialValue && (a.value = b);
}var Yf = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function Zf(a) {
  switch (a) {case "svg":
      return "http://www.w3.org/2000/svg";case "math":
      return "http://www.w3.org/1998/Math/MathML";default:
      return "http://www.w3.org/1999/xhtml";}
}function $f(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? Zf(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var ag = void 0,
    bg = function (a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function () {
      return a(b, c, d, e);
    });
  } : a;
}(function (a, b) {
  if (a.namespaceURI !== Yf.svg || "innerHTML" in a) a.innerHTML = b;else {
    ag = ag || document.createElement("div");ag.innerHTML = "\x3csvg\x3e" + b + "\x3c/svg\x3e";for (b = ag.firstChild; a.firstChild;) {
      a.removeChild(a.firstChild);
    }for (; b.firstChild;) {
      a.appendChild(b.firstChild);
    }
  }
});
function cg(a, b) {
  if (b) {
    var c = a.firstChild;if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;return;
    }
  }a.textContent = b;
}
var dg = { animationIterationCount: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0,
  stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
    eg = ["Webkit", "ms", "Moz", "O"];Object.keys(dg).forEach(function (a) {
  eg.forEach(function (b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);dg[b] = dg[a];
  });
});
function fg(a, b) {
  a = a.style;for (var c in b) {
    if (b.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--");var e = c;var f = b[c];e = null == f || "boolean" === typeof f || "" === f ? "" : d || "number" !== typeof f || 0 === f || dg.hasOwnProperty(e) && dg[e] ? ("" + f).trim() : f + "px";"float" === c && (c = "cssFloat");d ? a.setProperty(c, e) : a[c] = e;
    }
  }
}var gg = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function hg(a, b, c) {
  b && (gg[a] && (null != b.children || null != b.dangerouslySetInnerHTML ? E("137", a, c()) : void 0), null != b.dangerouslySetInnerHTML && (null != b.children ? E("60") : void 0, "object" === _typeof(b.dangerouslySetInnerHTML) && "__html" in b.dangerouslySetInnerHTML ? void 0 : E("61")), null != b.style && "object" !== _typeof(b.style) ? E("62", c()) : void 0);
}
function ig(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;switch (a) {case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":
      return !1;default:
      return !0;}
}var jg = Yf.html,
    kg = C.thatReturns("");
function lg(a, b) {
  a = 9 === a.nodeType || 11 === a.nodeType ? a : a.ownerDocument;var c = Hd(a);b = Sa[b];for (var d = 0; d < b.length; d++) {
    var e = b[d];c.hasOwnProperty(e) && c[e] || ("topScroll" === e ? wd("topScroll", "scroll", a) : "topFocus" === e || "topBlur" === e ? (wd("topFocus", "focus", a), wd("topBlur", "blur", a), c.topBlur = !0, c.topFocus = !0) : "topCancel" === e ? (yc("cancel", !0) && wd("topCancel", "cancel", a), c.topCancel = !0) : "topClose" === e ? (yc("close", !0) && wd("topClose", "close", a), c.topClose = !0) : Dd.hasOwnProperty(e) && U(e, Dd[e], a), c[e] = !0);
  }
}
var mg = { topAbort: "abort", topCanPlay: "canplay", topCanPlayThrough: "canplaythrough", topDurationChange: "durationchange", topEmptied: "emptied", topEncrypted: "encrypted", topEnded: "ended", topError: "error", topLoadedData: "loadeddata", topLoadedMetadata: "loadedmetadata", topLoadStart: "loadstart", topPause: "pause", topPlay: "play", topPlaying: "playing", topProgress: "progress", topRateChange: "ratechange", topSeeked: "seeked", topSeeking: "seeking", topStalled: "stalled", topSuspend: "suspend", topTimeUpdate: "timeupdate", topVolumeChange: "volumechange",
  topWaiting: "waiting" };function ng(a, b, c, d) {
  c = 9 === c.nodeType ? c : c.ownerDocument;d === jg && (d = Zf(a));d === jg ? "script" === a ? (a = c.createElement("div"), a.innerHTML = "\x3cscript\x3e\x3c/script\x3e", a = a.removeChild(a.firstChild)) : a = "string" === typeof b.is ? c.createElement(a, { is: b.is }) : c.createElement(a) : a = c.createElementNS(d, a);return a;
}function og(a, b) {
  return (9 === b.nodeType ? b : b.ownerDocument).createTextNode(a);
}
function pg(a, b, c, d) {
  var e = ig(b, c);switch (b) {case "iframe":case "object":
      U("topLoad", "load", a);var f = c;break;case "video":case "audio":
      for (f in mg) {
        mg.hasOwnProperty(f) && U(f, mg[f], a);
      }f = c;break;case "source":
      U("topError", "error", a);f = c;break;case "img":case "image":
      U("topError", "error", a);U("topLoad", "load", a);f = c;break;case "form":
      U("topReset", "reset", a);U("topSubmit", "submit", a);f = c;break;case "details":
      U("topToggle", "toggle", a);f = c;break;case "input":
      Mf(a, c);f = Lf(a, c);U("topInvalid", "invalid", a);
      lg(d, "onChange");break;case "option":
      f = Rf(a, c);break;case "select":
      Tf(a, c);f = B({}, c, { value: void 0 });U("topInvalid", "invalid", a);lg(d, "onChange");break;case "textarea":
      Vf(a, c);f = Uf(a, c);U("topInvalid", "invalid", a);lg(d, "onChange");break;default:
      f = c;}hg(b, f, kg);var g = f,
      h;for (h in g) {
    if (g.hasOwnProperty(h)) {
      var k = g[h];"style" === h ? fg(a, k, kg) : "dangerouslySetInnerHTML" === h ? (k = k ? k.__html : void 0, null != k && bg(a, k)) : "children" === h ? "string" === typeof k ? ("textarea" !== b || "" !== k) && cg(a, k) : "number" === typeof k && cg(a, "" + k) : "suppressContentEditableWarning" !== h && "suppressHydrationWarning" !== h && "autoFocus" !== h && (Ra.hasOwnProperty(h) ? null != k && lg(d, h) : e ? Kf(a, h, k) : null != k && If(a, h, k));
    }
  }switch (b) {case "input":
      Bc(a);Pf(a, c);break;case "textarea":
      Bc(a);Xf(a, c);break;case "option":
      null != c.value && a.setAttribute("value", c.value);break;case "select":
      a.multiple = !!c.multiple;b = c.value;null != b ? Sf(a, !!c.multiple, b, !1) : null != c.defaultValue && Sf(a, !!c.multiple, c.defaultValue, !0);break;default:
      "function" === typeof f.onClick && (a.onclick = C);}
}
function sg(a, b, c, d, e) {
  var f = null;switch (b) {case "input":
      c = Lf(a, c);d = Lf(a, d);f = [];break;case "option":
      c = Rf(a, c);d = Rf(a, d);f = [];break;case "select":
      c = B({}, c, { value: void 0 });d = B({}, d, { value: void 0 });f = [];break;case "textarea":
      c = Uf(a, c);d = Uf(a, d);f = [];break;default:
      "function" !== typeof c.onClick && "function" === typeof d.onClick && (a.onclick = C);}hg(b, d, kg);var g, h;a = null;for (g in c) {
    if (!d.hasOwnProperty(g) && c.hasOwnProperty(g) && null != c[g]) if ("style" === g) for (h in b = c[g], b) {
      b.hasOwnProperty(h) && (a || (a = {}), a[h] = "");
    } else "dangerouslySetInnerHTML" !== g && "children" !== g && "suppressContentEditableWarning" !== g && "suppressHydrationWarning" !== g && "autoFocus" !== g && (Ra.hasOwnProperty(g) ? f || (f = []) : (f = f || []).push(g, null));
  }for (g in d) {
    var k = d[g];b = null != c ? c[g] : void 0;if (d.hasOwnProperty(g) && k !== b && (null != k || null != b)) if ("style" === g) {
      if (b) {
        for (h in b) {
          !b.hasOwnProperty(h) || k && k.hasOwnProperty(h) || (a || (a = {}), a[h] = "");
        }for (h in k) {
          k.hasOwnProperty(h) && b[h] !== k[h] && (a || (a = {}), a[h] = k[h]);
        }
      } else a || (f || (f = []), f.push(g, a)), a = k;
    } else "dangerouslySetInnerHTML" === g ? (k = k ? k.__html : void 0, b = b ? b.__html : void 0, null != k && b !== k && (f = f || []).push(g, "" + k)) : "children" === g ? b === k || "string" !== typeof k && "number" !== typeof k || (f = f || []).push(g, "" + k) : "suppressContentEditableWarning" !== g && "suppressHydrationWarning" !== g && (Ra.hasOwnProperty(g) ? (null != k && lg(e, g), f || b === k || (f = [])) : (f = f || []).push(g, k));
  }a && (f = f || []).push("style", a);return f;
}
function tg(a, b, c, d, e) {
  "input" === c && "radio" === e.type && null != e.name && Nf(a, e);ig(c, d);d = ig(c, e);for (var f = 0; f < b.length; f += 2) {
    var g = b[f],
        h = b[f + 1];"style" === g ? fg(a, h, kg) : "dangerouslySetInnerHTML" === g ? bg(a, h) : "children" === g ? cg(a, h) : d ? null != h ? Kf(a, g, h) : a.removeAttribute(g) : null != h ? If(a, g, h) : Jf(a, g);
  }switch (c) {case "input":
      Of(a, e);break;case "textarea":
      Wf(a, e);break;case "select":
      a._wrapperState.initialValue = void 0, b = a._wrapperState.wasMultiple, a._wrapperState.wasMultiple = !!e.multiple, c = e.value, null != c ? Sf(a, !!e.multiple, c, !1) : b !== !!e.multiple && (null != e.defaultValue ? Sf(a, !!e.multiple, e.defaultValue, !0) : Sf(a, !!e.multiple, e.multiple ? [] : "", !1));}
}
function ug(a, b, c, d, e) {
  switch (b) {case "iframe":case "object":
      U("topLoad", "load", a);break;case "video":case "audio":
      for (var f in mg) {
        mg.hasOwnProperty(f) && U(f, mg[f], a);
      }break;case "source":
      U("topError", "error", a);break;case "img":case "image":
      U("topError", "error", a);U("topLoad", "load", a);break;case "form":
      U("topReset", "reset", a);U("topSubmit", "submit", a);break;case "details":
      U("topToggle", "toggle", a);break;case "input":
      Mf(a, c);U("topInvalid", "invalid", a);lg(e, "onChange");break;case "select":
      Tf(a, c);
      U("topInvalid", "invalid", a);lg(e, "onChange");break;case "textarea":
      Vf(a, c), U("topInvalid", "invalid", a), lg(e, "onChange");}hg(b, c, kg);d = null;for (var g in c) {
    c.hasOwnProperty(g) && (f = c[g], "children" === g ? "string" === typeof f ? a.textContent !== f && (d = ["children", f]) : "number" === typeof f && a.textContent !== "" + f && (d = ["children", "" + f]) : Ra.hasOwnProperty(g) && null != f && lg(e, g));
  }switch (b) {case "input":
      Bc(a);Pf(a, c);break;case "textarea":
      Bc(a);Xf(a, c);break;case "select":case "option":
      break;default:
      "function" === typeof c.onClick && (a.onclick = C);}return d;
}function vg(a, b) {
  return a.nodeValue !== b;
}
var wg = Object.freeze({ createElement: ng, createTextNode: og, setInitialProperties: pg, diffProperties: sg, updateProperties: tg, diffHydratedProperties: ug, diffHydratedText: vg, warnForUnmatchedText: function warnForUnmatchedText() {}, warnForDeletedHydratableElement: function warnForDeletedHydratableElement() {}, warnForDeletedHydratableText: function warnForDeletedHydratableText() {}, warnForInsertedHydratedElement: function warnForInsertedHydratedElement() {}, warnForInsertedHydratedText: function warnForInsertedHydratedText() {}, restoreControlledState: function restoreControlledState(a, b, c) {
    switch (b) {case "input":
        Of(a, c);b = c.name;if ("radio" === c.type && null != b) {
          for (c = a; c.parentNode;) {
            c = c.parentNode;
          }c = c.querySelectorAll("input[name\x3d" + JSON.stringify("" + b) + '][type\x3d"radio"]');for (b = 0; b < c.length; b++) {
            var d = c[b];if (d !== a && d.form === a.form) {
              var e = rb(d);e ? void 0 : E("90");Cc(d);Of(d, e);
            }
          }
        }break;case "textarea":
        Wf(a, c);break;case "select":
        b = c.value, null != b && Sf(a, !!c.multiple, b, !1);}
  } });nc.injectFiberControlledHostComponent(wg);var xg = null,
    Mg = null;function Ng(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function Og(a) {
  a = a ? 9 === a.nodeType ? a.documentElement : a.firstChild : null;return !(!a || 1 !== a.nodeType || !a.hasAttribute("data-reactroot"));
}
var Z = of({ getRootHostContext: function getRootHostContext(a) {
    var b = a.nodeType;switch (b) {case 9:case 11:
        a = (a = a.documentElement) ? a.namespaceURI : $f(null, "");break;default:
        b = 8 === b ? a.parentNode : a, a = b.namespaceURI || null, b = b.tagName, a = $f(a, b);}return a;
  }, getChildHostContext: function getChildHostContext(a, b) {
    return $f(a, b);
  }, getPublicInstance: function getPublicInstance(a) {
    return a;
  }, prepareForCommit: function prepareForCommit() {
    xg = td;var a = da();if (Kd(a)) {
      if ("selectionStart" in a) var b = { start: a.selectionStart, end: a.selectionEnd };else a: {
        var c = window.getSelection && window.getSelection();
        if (c && 0 !== c.rangeCount) {
          b = c.anchorNode;var d = c.anchorOffset,
              e = c.focusNode;c = c.focusOffset;try {
            b.nodeType, e.nodeType;
          } catch (z) {
            b = null;break a;
          }var f = 0,
              g = -1,
              h = -1,
              k = 0,
              q = 0,
              v = a,
              y = null;b: for (;;) {
            for (var u;;) {
              v !== b || 0 !== d && 3 !== v.nodeType || (g = f + d);v !== e || 0 !== c && 3 !== v.nodeType || (h = f + c);3 === v.nodeType && (f += v.nodeValue.length);if (null === (u = v.firstChild)) break;y = v;v = u;
            }for (;;) {
              if (v === a) break b;y === b && ++k === d && (g = f);y === e && ++q === c && (h = f);if (null !== (u = v.nextSibling)) break;v = y;y = v.parentNode;
            }v = u;
          }b = -1 === g || -1 === h ? null : { start: g, end: h };
        } else b = null;
      }b = b || { start: 0, end: 0 };
    } else b = null;Mg = { focusedElem: a, selectionRange: b };ud(!1);
  }, resetAfterCommit: function resetAfterCommit() {
    var a = Mg,
        b = da(),
        c = a.focusedElem,
        d = a.selectionRange;if (b !== c && fa(document.documentElement, c)) {
      if (Kd(c)) if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);else if (window.getSelection) {
        b = window.getSelection();var e = c[Eb()].length;a = Math.min(d.start, e);d = void 0 === d.end ? a : Math.min(d.end, e);!b.extend && a > d && (e = d, d = a, a = e);e = Jd(c, a);var f = Jd(c, d);if (e && f && (1 !== b.rangeCount || b.anchorNode !== e.node || b.anchorOffset !== e.offset || b.focusNode !== f.node || b.focusOffset !== f.offset)) {
          var g = document.createRange();g.setStart(e.node, e.offset);b.removeAllRanges();a > d ? (b.addRange(g), b.extend(f.node, f.offset)) : (g.setEnd(f.node, f.offset), b.addRange(g));
        }
      }b = [];for (a = c; a = a.parentNode;) {
        1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      }ia(c);for (c = 0; c < b.length; c++) {
        a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
      }
    }Mg = null;ud(xg);xg = null;
  }, createInstance: function createInstance(a, b, c, d, e) {
    a = ng(a, b, c, d);a[Q] = e;a[ob] = b;return a;
  }, appendInitialChild: function appendInitialChild(a, b) {
    a.appendChild(b);
  }, finalizeInitialChildren: function finalizeInitialChildren(a, b, c, d) {
    pg(a, b, c, d);a: {
      switch (b) {case "button":case "input":case "select":case "textarea":
          a = !!c.autoFocus;break a;}a = !1;
    }return a;
  }, prepareUpdate: function prepareUpdate(a, b, c, d, e) {
    return sg(a, b, c, d, e);
  }, shouldSetTextContent: function shouldSetTextContent(a, b) {
    return "textarea" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === _typeof(b.dangerouslySetInnerHTML) && null !== b.dangerouslySetInnerHTML && "string" === typeof b.dangerouslySetInnerHTML.__html;
  }, shouldDeprioritizeSubtree: function shouldDeprioritizeSubtree(a, b) {
    return !!b.hidden;
  }, createTextInstance: function createTextInstance(a, b, c, d) {
    a = og(a, b);a[Q] = d;return a;
  }, now: rf, mutation: { commitMount: function commitMount(a) {
      a.focus();
    }, commitUpdate: function commitUpdate(a, b, c, d, e) {
      a[ob] = e;tg(a, b, c, d, e);
    }, resetTextContent: function resetTextContent(a) {
      a.textContent = "";
    }, commitTextUpdate: function commitTextUpdate(a, b, c) {
      a.nodeValue = c;
    }, appendChild: function appendChild(a, b) {
      a.appendChild(b);
    }, appendChildToContainer: function appendChildToContainer(a, b) {
      8 === a.nodeType ? a.parentNode.insertBefore(b, a) : a.appendChild(b);
    }, insertBefore: function insertBefore(a, b, c) {
      a.insertBefore(b, c);
    }, insertInContainerBefore: function insertInContainerBefore(a, b, c) {
      8 === a.nodeType ? a.parentNode.insertBefore(b, c) : a.insertBefore(b, c);
    }, removeChild: function removeChild(a, b) {
      a.removeChild(b);
    }, removeChildFromContainer: function removeChildFromContainer(a, b) {
      8 === a.nodeType ? a.parentNode.removeChild(b) : a.removeChild(b);
    } }, hydration: { canHydrateInstance: function canHydrateInstance(a, b) {
      return 1 !== a.nodeType || b.toLowerCase() !== a.nodeName.toLowerCase() ? null : a;
    }, canHydrateTextInstance: function canHydrateTextInstance(a, b) {
      return "" === b || 3 !== a.nodeType ? null : a;
    }, getNextHydratableSibling: function getNextHydratableSibling(a) {
      for (a = a.nextSibling; a && 1 !== a.nodeType && 3 !== a.nodeType;) {
        a = a.nextSibling;
      }return a;
    }, getFirstHydratableChild: function getFirstHydratableChild(a) {
      for (a = a.firstChild; a && 1 !== a.nodeType && 3 !== a.nodeType;) {
        a = a.nextSibling;
      }return a;
    }, hydrateInstance: function hydrateInstance(a, b, c, d, e, f) {
      a[Q] = f;a[ob] = c;return ug(a, b, c, e, d);
    }, hydrateTextInstance: function hydrateTextInstance(a, b, c) {
      a[Q] = c;return vg(a, b);
    }, didNotMatchHydratedContainerTextInstance: function didNotMatchHydratedContainerTextInstance() {}, didNotMatchHydratedTextInstance: function didNotMatchHydratedTextInstance() {},
    didNotHydrateContainerInstance: function didNotHydrateContainerInstance() {}, didNotHydrateInstance: function didNotHydrateInstance() {}, didNotFindHydratableContainerInstance: function didNotFindHydratableContainerInstance() {}, didNotFindHydratableContainerTextInstance: function didNotFindHydratableContainerTextInstance() {}, didNotFindHydratableInstance: function didNotFindHydratableInstance() {}, didNotFindHydratableTextInstance: function didNotFindHydratableTextInstance() {} }, scheduleDeferredCallback: sf, cancelDeferredCallback: tf, useSyncScheduling: !0 });rc = Z.batchedUpdates;
function Pg(a, b, c, d, e) {
  Ng(c) ? void 0 : E("200");var f = c._reactRootContainer;if (f) Z.updateContainer(b, f, a, e);else {
    d = d || Og(c);if (!d) for (f = void 0; f = c.lastChild;) {
      c.removeChild(f);
    }var g = Z.createContainer(c, d);f = c._reactRootContainer = g;Z.unbatchedUpdates(function () {
      Z.updateContainer(b, g, a, e);
    });
  }return Z.getPublicRootInstance(f);
}function Qg(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;Ng(b) ? void 0 : E("200");return pf(a, b, null, c);
}
function Rg(a, b) {
  this._reactRootContainer = Z.createContainer(a, b);
}Rg.prototype.render = function (a, b) {
  Z.updateContainer(a, this._reactRootContainer, null, b);
};Rg.prototype.unmount = function (a) {
  Z.updateContainer(null, this._reactRootContainer, null, a);
};
var Sg = { createPortal: Qg, findDOMNode: function findDOMNode(a) {
    if (null == a) return null;if (1 === a.nodeType) return a;var b = a._reactInternalFiber;if (b) return Z.findHostInstance(b);"function" === typeof a.render ? E("188") : E("213", Object.keys(a));
  }, hydrate: function hydrate(a, b, c) {
    return Pg(null, a, b, !0, c);
  }, render: function render(a, b, c) {
    return Pg(null, a, b, !1, c);
  }, unstable_renderSubtreeIntoContainer: function unstable_renderSubtreeIntoContainer(a, b, c, d) {
    null == a || void 0 === a._reactInternalFiber ? E("38") : void 0;return Pg(a, b, c, !1, d);
  }, unmountComponentAtNode: function unmountComponentAtNode(a) {
    Ng(a) ? void 0 : E("40");return a._reactRootContainer ? (Z.unbatchedUpdates(function () {
      Pg(null, null, a, !1, function () {
        a._reactRootContainer = null;
      });
    }), !0) : !1;
  }, unstable_createPortal: Qg, unstable_batchedUpdates: tc, unstable_deferredUpdates: Z.deferredUpdates, flushSync: Z.flushSync, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { EventPluginHub: mb, EventPluginRegistry: Va, EventPropagators: Cb, ReactControlledComponent: qc, ReactDOMComponentTree: sb, ReactDOMEventListener: xd } };
Z.injectIntoDevTools({ findFiberByHostInstance: pb, bundleType: 0, version: "16.2.0", rendererPackageName: "react-dom" });var Tg = Object.freeze({ default: Sg }),
    Ug = Tg && Sg || Tg;module.exports = Ug["default"] ? Ug["default"] : Ug;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var emptyFunction = __webpack_require__(10);

/**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */
var EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function listen(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function remove() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  },

  /**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  capture: function capture(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, true);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, true);
        }
      };
    } else {
      if (false) {
        console.error('Attempted to listen to events during the capture phase on a ' + 'browser that does not support the capture phase. Your application ' + 'will not receive some events.');
      }
      return {
        remove: emptyFunction
      };
    }
  },

  registerDefault: function registerDefault() {}
};

module.exports = EventListener;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/* eslint-disable fb-www/typeof-undefined */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 *
 * @param {?DOMDocument} doc Defaults to current document.
 * @return {?DOMElement}
 */

function getActiveElement(doc) /*?DOMElement*/{
  doc = doc || (typeof document !== 'undefined' ? document : undefined);
  if (typeof doc === 'undefined') {
    return null;
  }
  try {
    return doc.activeElement || doc.body;
  } catch (e) {
    return doc.body;
  }
}

module.exports = getActiveElement;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var isTextNode = __webpack_require__(66);

/*eslint-disable no-bitwise */

/**
 * Checks if a given DOM node contains or is another DOM node.
 */
function containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode(outerNode, innerNode.parentNode);
  } else if ('contains' in outerNode) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

module.exports = containsNode;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var isNode = __webpack_require__(67);

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isNode(object) {
  var doc = object ? object.ownerDocument || object : document;
  var defaultView = doc.defaultView || window;
  return !!(object && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

module.exports = isNode;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * @param {DOMElement} node input/textarea to focus
 */

function focusNode(node) {
  // IE8 can throw "Can't move focus to the control because it is invisible,
  // not enabled, or of a type that does not accept the focus." for all kinds of
  // reasons that are too expensive and fragile to test.
  try {
    node.focus();
  } catch (e) {}
}

module.exports = focusNode;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(33);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _getRawTag = __webpack_require__(72);

var _getRawTag2 = _interopRequireDefault(_getRawTag);

var _objectToString = __webpack_require__(73);

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag2.default)(value) : (0, _objectToString2.default)(value);
}

exports.default = baseGetTag;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _freeGlobal = __webpack_require__(71);

var _freeGlobal2 = _interopRequireDefault(_freeGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal2.default || freeSelf || Function('return this')();

exports.default = root;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

exports.default = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(33);

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

exports.default = getRawTag;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

exports.default = objectToString;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = __webpack_require__(75);

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg2.default)(Object.getPrototypeOf, Object);

exports.default = getPrototype;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

exports.default = overArg;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

exports.default = isObjectLike;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(79);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2.default)(root);
exports.default = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11), __webpack_require__(78)(module)))

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineReducers;

var _createStore = __webpack_require__(32);

var _isPlainObject = __webpack_require__(18);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(34);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2.default)(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        (0, _warning2.default)('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        (0, _warning2.default)(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMiddleware;

var _compose = __webpack_require__(35);

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2.default.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.createProvider = createProvider;

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(36);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PropTypes = __webpack_require__(37);

var _warning = __webpack_require__(19);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  (0, _warning2.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return _react.Children.only(this.props.children);
    };

    return Provider;
  }(_react.Component);

  if (false) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: _PropTypes.storeShape.isRequired,
    children: _propTypes2.default.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _PropTypes.storeShape.isRequired, _Provider$childContex[subscriptionKey] = _PropTypes.subscriptionShape, _Provider$childContex);

  return Provider;
}

exports.default = createProvider();

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(10);
var invariant = __webpack_require__(85);
var ReactPropTypesSecret = __webpack_require__(86);

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();

exports.default = Subscription;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.createConnect = createConnect;

var _connectAdvanced = __webpack_require__(38);

var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

var _shallowEqual = __webpack_require__(91);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _mapDispatchToProps = __webpack_require__(92);

var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);

var _mapStateToProps = __webpack_require__(93);

var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);

var _mergeProps = __webpack_require__(94);

var _mergeProps2 = _interopRequireDefault(_mergeProps);

var _selectorFactory = __webpack_require__(95);

var _selectorFactory2 = _interopRequireDefault(_selectorFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

exports.default = createConnect();

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;

var _redux = __webpack_require__(17);

var _wrapMapToProps = __webpack_require__(39);

function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && (typeof mapDispatchToProps === 'undefined' ? 'undefined' : _typeof(mapDispatchToProps)) === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
  }) : undefined;
}

exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;

var _wrapMapToProps = __webpack_require__(39);

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
    return {};
  }) : undefined;
}

exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultMergeProps = defaultMergeProps;
exports.wrapMergePropsFunc = wrapMergePropsFunc;
exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;

var _verifyPlainObject = __webpack_require__(40);

var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (false) (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
exports.default = finalPropsSelectorFactory;

var _verifySubselectors = __webpack_require__(96);

var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {
    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifySubselectors;

var _warning = __webpack_require__(19);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e, t) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : t(e.reduxLogger = e.reduxLogger || {});
}(undefined, function (e) {
  "use strict";
  function t(e, t) {
    e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } });
  }function r(e, t) {
    Object.defineProperty(this, "kind", { value: e, enumerable: !0 }), t && t.length && Object.defineProperty(this, "path", { value: t, enumerable: !0 });
  }function n(e, t, r) {
    n.super_.call(this, "E", e), Object.defineProperty(this, "lhs", { value: t, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: r, enumerable: !0 });
  }function o(e, t) {
    o.super_.call(this, "N", e), Object.defineProperty(this, "rhs", { value: t, enumerable: !0 });
  }function i(e, t) {
    i.super_.call(this, "D", e), Object.defineProperty(this, "lhs", { value: t, enumerable: !0 });
  }function a(e, t, r) {
    a.super_.call(this, "A", e), Object.defineProperty(this, "index", { value: t, enumerable: !0 }), Object.defineProperty(this, "item", { value: r, enumerable: !0 });
  }function f(e, t, r) {
    var n = e.slice((r || t) + 1 || e.length);return e.length = t < 0 ? e.length + t : t, e.push.apply(e, n), e;
  }function u(e) {
    var t = "undefined" == typeof e ? "undefined" : N(e);return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object";
  }function l(e, t, r, c, s, d, p) {
    s = s || [], p = p || [];var g = s.slice(0);if ("undefined" != typeof d) {
      if (c) {
        if ("function" == typeof c && c(g, d)) return;if ("object" === ("undefined" == typeof c ? "undefined" : N(c))) {
          if (c.prefilter && c.prefilter(g, d)) return;if (c.normalize) {
            var h = c.normalize(g, d, e, t);h && (e = h[0], t = h[1]);
          }
        }
      }g.push(d);
    }"regexp" === u(e) && "regexp" === u(t) && (e = e.toString(), t = t.toString());var y = "undefined" == typeof e ? "undefined" : N(e),
        v = "undefined" == typeof t ? "undefined" : N(t),
        b = "undefined" !== y || p && p[p.length - 1].lhs && p[p.length - 1].lhs.hasOwnProperty(d),
        m = "undefined" !== v || p && p[p.length - 1].rhs && p[p.length - 1].rhs.hasOwnProperty(d);if (!b && m) r(new o(g, t));else if (!m && b) r(new i(g, e));else if (u(e) !== u(t)) r(new n(g, e, t));else if ("date" === u(e) && e - t !== 0) r(new n(g, e, t));else if ("object" === y && null !== e && null !== t) {
      if (p.filter(function (t) {
        return t.lhs === e;
      }).length) e !== t && r(new n(g, e, t));else {
        if (p.push({ lhs: e, rhs: t }), Array.isArray(e)) {
          var w;e.length;for (w = 0; w < e.length; w++) {
            w >= t.length ? r(new a(g, w, new i(void 0, e[w]))) : l(e[w], t[w], r, c, g, w, p);
          }for (; w < t.length;) {
            r(new a(g, w, new o(void 0, t[w++])));
          }
        } else {
          var x = Object.keys(e),
              S = Object.keys(t);x.forEach(function (n, o) {
            var i = S.indexOf(n);i >= 0 ? (l(e[n], t[n], r, c, g, n, p), S = f(S, i)) : l(e[n], void 0, r, c, g, n, p);
          }), S.forEach(function (e) {
            l(void 0, t[e], r, c, g, e, p);
          });
        }p.length = p.length - 1;
      }
    } else e !== t && ("number" === y && isNaN(e) && isNaN(t) || r(new n(g, e, t)));
  }function c(e, t, r, n) {
    return n = n || [], l(e, t, function (e) {
      e && n.push(e);
    }, r), n.length ? n : void 0;
  }function s(e, t, r) {
    if (r.path && r.path.length) {
      var n,
          o = e[t],
          i = r.path.length - 1;for (n = 0; n < i; n++) {
        o = o[r.path[n]];
      }switch (r.kind) {case "A":
          s(o[r.path[n]], r.index, r.item);break;case "D":
          delete o[r.path[n]];break;case "E":case "N":
          o[r.path[n]] = r.rhs;}
    } else switch (r.kind) {case "A":
        s(e[t], r.index, r.item);break;case "D":
        e = f(e, t);break;case "E":case "N":
        e[t] = r.rhs;}return e;
  }function d(e, t, r) {
    if (e && t && r && r.kind) {
      for (var n = e, o = -1, i = r.path ? r.path.length - 1 : 0; ++o < i;) {
        "undefined" == typeof n[r.path[o]] && (n[r.path[o]] = "number" == typeof r.path[o] ? [] : {}), n = n[r.path[o]];
      }switch (r.kind) {case "A":
          s(r.path ? n[r.path[o]] : n, r.index, r.item);break;case "D":
          delete n[r.path[o]];break;case "E":case "N":
          n[r.path[o]] = r.rhs;}
    }
  }function p(e, t, r) {
    if (r.path && r.path.length) {
      var n,
          o = e[t],
          i = r.path.length - 1;for (n = 0; n < i; n++) {
        o = o[r.path[n]];
      }switch (r.kind) {case "A":
          p(o[r.path[n]], r.index, r.item);break;case "D":
          o[r.path[n]] = r.lhs;break;case "E":
          o[r.path[n]] = r.lhs;break;case "N":
          delete o[r.path[n]];}
    } else switch (r.kind) {case "A":
        p(e[t], r.index, r.item);break;case "D":
        e[t] = r.lhs;break;case "E":
        e[t] = r.lhs;break;case "N":
        e = f(e, t);}return e;
  }function g(e, t, r) {
    if (e && t && r && r.kind) {
      var n,
          o,
          i = e;for (o = r.path.length - 1, n = 0; n < o; n++) {
        "undefined" == typeof i[r.path[n]] && (i[r.path[n]] = {}), i = i[r.path[n]];
      }switch (r.kind) {case "A":
          p(i[r.path[n]], r.index, r.item);break;case "D":
          i[r.path[n]] = r.lhs;break;case "E":
          i[r.path[n]] = r.lhs;break;case "N":
          delete i[r.path[n]];}
    }
  }function h(e, t, r) {
    if (e && t) {
      var n = function n(_n) {
        r && !r(e, t, _n) || d(e, t, _n);
      };l(e, t, n);
    }
  }function y(e) {
    return "color: " + F[e].color + "; font-weight: bold";
  }function v(e) {
    var t = e.kind,
        r = e.path,
        n = e.lhs,
        o = e.rhs,
        i = e.index,
        a = e.item;switch (t) {case "E":
        return [r.join("."), n, "→", o];case "N":
        return [r.join("."), o];case "D":
        return [r.join(".")];case "A":
        return [r.join(".") + "[" + i + "]", a];default:
        return [];}
  }function b(e, t, r, n) {
    var o = c(e, t);try {
      n ? r.groupCollapsed("diff") : r.group("diff");
    } catch (e) {
      r.log("diff");
    }o ? o.forEach(function (e) {
      var t = e.kind,
          n = v(e);r.log.apply(r, ["%c " + F[t].text, y(t)].concat(P(n)));
    }) : r.log("—— no diff ——");try {
      r.groupEnd();
    } catch (e) {
      r.log("—— diff end —— ");
    }
  }function m(e, t, r, n) {
    switch ("undefined" == typeof e ? "undefined" : N(e)) {case "object":
        return "function" == typeof e[n] ? e[n].apply(e, P(r)) : e[n];case "function":
        return e(t);default:
        return e;}
  }function w(e) {
    var t = e.timestamp,
        r = e.duration;return function (e, n, o) {
      var i = ["action"];return i.push("%c" + String(e.type)), t && i.push("%c@ " + n), r && i.push("%c(in " + o.toFixed(2) + " ms)"), i.join(" ");
    };
  }function x(e, t) {
    var r = t.logger,
        n = t.actionTransformer,
        o = t.titleFormatter,
        i = void 0 === o ? w(t) : o,
        a = t.collapsed,
        f = t.colors,
        u = t.level,
        l = t.diff,
        c = "undefined" == typeof t.titleFormatter;e.forEach(function (o, s) {
      var d = o.started,
          p = o.startedTime,
          g = o.action,
          h = o.prevState,
          y = o.error,
          v = o.took,
          w = o.nextState,
          x = e[s + 1];x && (w = x.prevState, v = x.started - d);var S = n(g),
          k = "function" == typeof a ? a(function () {
        return w;
      }, g, o) : a,
          j = D(p),
          E = f.title ? "color: " + f.title(S) + ";" : "",
          A = ["color: gray; font-weight: lighter;"];A.push(E), t.timestamp && A.push("color: gray; font-weight: lighter;"), t.duration && A.push("color: gray; font-weight: lighter;");var O = i(S, j, v);try {
        k ? f.title && c ? r.groupCollapsed.apply(r, ["%c " + O].concat(A)) : r.groupCollapsed(O) : f.title && c ? r.group.apply(r, ["%c " + O].concat(A)) : r.group(O);
      } catch (e) {
        r.log(O);
      }var N = m(u, S, [h], "prevState"),
          P = m(u, S, [S], "action"),
          C = m(u, S, [y, h], "error"),
          F = m(u, S, [w], "nextState");if (N) if (f.prevState) {
        var L = "color: " + f.prevState(h) + "; font-weight: bold";r[N]("%c prev state", L, h);
      } else r[N]("prev state", h);if (P) if (f.action) {
        var T = "color: " + f.action(S) + "; font-weight: bold";r[P]("%c action    ", T, S);
      } else r[P]("action    ", S);if (y && C) if (f.error) {
        var M = "color: " + f.error(y, h) + "; font-weight: bold;";r[C]("%c error     ", M, y);
      } else r[C]("error     ", y);if (F) if (f.nextState) {
        var _ = "color: " + f.nextState(w) + "; font-weight: bold";r[F]("%c next state", _, w);
      } else r[F]("next state", w);l && b(h, w, r, k);try {
        r.groupEnd();
      } catch (e) {
        r.log("—— log end ——");
      }
    });
  }function S() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = Object.assign({}, L, e),
        r = t.logger,
        n = t.stateTransformer,
        o = t.errorTransformer,
        i = t.predicate,
        a = t.logErrors,
        f = t.diffPredicate;if ("undefined" == typeof r) return function () {
      return function (e) {
        return function (t) {
          return e(t);
        };
      };
    };if (e.getState && e.dispatch) return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"), function () {
      return function (e) {
        return function (t) {
          return e(t);
        };
      };
    };var u = [];return function (e) {
      var r = e.getState;return function (e) {
        return function (l) {
          if ("function" == typeof i && !i(r, l)) return e(l);var c = {};u.push(c), c.started = O.now(), c.startedTime = new Date(), c.prevState = n(r()), c.action = l;var s = void 0;if (a) try {
            s = e(l);
          } catch (e) {
            c.error = o(e);
          } else s = e(l);c.took = O.now() - c.started, c.nextState = n(r());var d = t.diff && "function" == typeof f ? f(r, l) : t.diff;if (x(u, Object.assign({}, t, { diff: d })), u.length = 0, c.error) throw c.error;return s;
        };
      };
    };
  }var k,
      j,
      E = function E(e, t) {
    return new Array(t + 1).join(e);
  },
      A = function A(e, t) {
    return E("0", t - e.toString().length) + e;
  },
      D = function D(e) {
    return A(e.getHours(), 2) + ":" + A(e.getMinutes(), 2) + ":" + A(e.getSeconds(), 2) + "." + A(e.getMilliseconds(), 3);
  },
      O = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date,
      N = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
    return typeof e === "undefined" ? "undefined" : _typeof(e);
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
  },
      P = function P(e) {
    if (Array.isArray(e)) {
      for (var t = 0, r = Array(e.length); t < e.length; t++) {
        r[t] = e[t];
      }return r;
    }return Array.from(e);
  },
      C = [];k = "object" === ("undefined" == typeof global ? "undefined" : N(global)) && global ? global : "undefined" != typeof window ? window : {}, j = k.DeepDiff, j && C.push(function () {
    "undefined" != typeof j && k.DeepDiff === c && (k.DeepDiff = j, j = void 0);
  }), t(n, r), t(o, r), t(i, r), t(a, r), Object.defineProperties(c, { diff: { value: c, enumerable: !0 }, observableDiff: { value: l, enumerable: !0 }, applyDiff: { value: h, enumerable: !0 }, applyChange: { value: d, enumerable: !0 }, revertChange: { value: g, enumerable: !0 }, isConflict: { value: function value() {
        return "undefined" != typeof j;
      }, enumerable: !0 }, noConflict: { value: function value() {
        return C && (C.forEach(function (e) {
          e();
        }), C = null), c;
      }, enumerable: !0 } });var F = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } },
      L = { level: "log", logger: console, logErrors: !0, collapsed: void 0, predicate: void 0, duration: !1, timestamp: !0, stateTransformer: function stateTransformer(e) {
      return e;
    }, actionTransformer: function actionTransformer(e) {
      return e;
    }, errorTransformer: function errorTransformer(e) {
      return e;
    }, colors: { title: function title() {
        return "inherit";
      }, prevState: function prevState() {
        return "#9E9E9E";
      }, action: function action() {
        return "#03A9F4";
      }, nextState: function nextState() {
        return "#4CAF50";
      }, error: function error() {
        return "#F20404";
      } }, diff: !1, diffPredicate: void 0, transformer: void 0 },
      T = function T() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.dispatch,
        r = e.getState;return "function" == typeof t || "function" == typeof r ? S()({ dispatch: t, getState: r }) : void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n");
  };e.defaults = L, e.createLogger = S, e.logger = T, e.default = T, Object.defineProperty(e, "__esModule", { value: !0 });
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(17);

var _reduxUndo = __webpack_require__(41);

var _reduxUndo2 = _interopRequireDefault(_reduxUndo);

var _shapes = __webpack_require__(100);

var _shapes2 = _interopRequireDefault(_shapes);

var _baseColor = __webpack_require__(103);

var _baseColor2 = _interopRequireDefault(_baseColor);

var _allShapes = __webpack_require__(104);

var _allShapes2 = _interopRequireDefault(_allShapes);

var _skinCode = __webpack_require__(105);

var _skinCode2 = _interopRequireDefault(_skinCode);

var _topLayer = __webpack_require__(112);

var _topLayer2 = _interopRequireDefault(_topLayer);

var _overlay = __webpack_require__(113);

var _overlay2 = _interopRequireDefault(_overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    shapes: (0, _reduxUndo2.default)(_shapes2.default),
    baseColor: (0, _reduxUndo2.default)(_baseColor2.default),
    allShapes: _allShapes2.default,
    skinCode: _skinCode2.default,
    topLayer: _topLayer2.default,
    overlay: _overlay2.default
});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_SHAPE':
            {
                return [].concat(_toConsumableArray(state), [{
                    uuid: (0, _v2.default)(),
                    name: 'Shape ' + (state.length + 1),
                    shapeID: action.id,
                    selected: true,

                    position: {
                        x: 0,
                        y: 0
                    },
                    rotation: 0,
                    scale: 1,
                    hf: false,
                    vf: false,
                    color: '000000'
                }]);
            }
        case 'DELETE_SELECTED_SHAPE':
            {
                return state.filter(function (shape) {
                    return !shape.selected;
                });
            }

        case 'SELECT_SHAPE':
            {
                return state.map(function (shape) {
                    return _extends({}, shape, { selected: shape.uuid === action.id });
                });
            }
        case 'DESELECT_ALL':
            {
                return state.map(function (shape) {
                    return _extends({}, shape, { selected: false });
                });
            }

        case 'SELECTED_SHAPE_UP':
            {
                var shapeIndex = state.map(function (shape) {
                    return shape.selected;
                }).indexOf(true);
                return state.map(function (shape, i) {
                    if (i === shapeIndex) {
                        return state[i + 1];
                    } else if (i === shapeIndex + 1) {
                        return state[i - 1];
                    } else {
                        return shape;
                    }
                });
            }
        case 'SELECTED_SHAPE_DOWN':
            {
                var shapeIndex = state.map(function (shape) {
                    return shape.selected;
                }).indexOf(true);
                return state.map(function (shape, i) {
                    if (i === shapeIndex) {
                        return state[i - 1];
                    } else if (i === shapeIndex - 1) {
                        return state[i + 1];
                    } else {
                        return shape;
                    }
                });
            }

        case 'CHANGE_SHAPE_TRANSLATION':
            {
                return state.map(function (shape) {
                    if (shape.selected) {
                        return _extends({}, shape, {
                            position: action.position || shape.position,
                            rotation: action.rotation || shape.rotation,
                            scale: action.scale || shape.scale,
                            hf: typeof action.hf === 'undefined' ? shape.hf : action.hf,
                            vf: typeof action.vf === 'undefined' ? shape.vf : action.vf
                        });
                    } else {
                        return shape;
                    }
                });
            }

        case 'CHANGE_SELECTED_COLOR':
            {
                return state.map(function (shape) {
                    if (shape.selected) {
                        return _extends({}, shape, {
                            color: action.color
                        });
                    } else {
                        return shape;
                    }
                });
            }

        case 'SET_ALL_SHAPES':
            {
                return action.shapes;
            }

        default:
            return state;
    }
};

var _v = __webpack_require__(42);

var _v2 = _interopRequireDefault(_v);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
var getRandomValues = typeof crypto != 'undefined' && crypto.getRandomValues.bind(crypto) || typeof msCrypto != 'undefined' && msCrypto.getRandomValues.bind(msCrypto);
if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + '-' + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'fafafa';
    var action = arguments[1];

    switch (action.type) {
        case 'CHANGE_BASE_COLOR':
            {
                return action.color;
            }

        default:
            return state;
    }
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'LOAD_SHAPES':
            {
                return action.shapes.split('||');
            }

        default:
            return state;
    }
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];

    switch (action.type) {
        case 'GENERATE_SKIN_CODE':
            {
                return (0, _skinCode.objectToSkinCode)({
                    baseColor: action.obj.baseColor,
                    shapes: [].concat(_toConsumableArray(action.obj.shapes))
                });
            }

        default:
            return state;
    }
};

var _skinCode = __webpack_require__(43);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function placeHoldersCount(b64) {
  var len = b64.length;
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;
}

function byteLength(b64) {
  // base64 is 4/3 + up to two characters of the original data
  return b64.length * 3 / 4 - placeHoldersCount(b64);
}

function toByteArray(b64) {
  var i, l, tmp, placeHolders, arr;
  var len = b64.length;
  placeHolders = placeHoldersCount(b64);

  arr = new Arr(len * 3 / 4 - placeHolders);

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len;

  var L = 0;

  for (i = 0; i < l; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[L++] = tmp >> 16 & 0xFF;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  if (placeHolders === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[L++] = tmp & 0xFF;
  } else if (placeHolders === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[L++] = tmp >> 8 & 0xFF;
    arr[L++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
    output.push(tripletToBase64(tmp));
  }
  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var output = '';
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    output += lookup[tmp >> 2];
    output += lookup[tmp << 4 & 0x3F];
    output += '==';
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    output += lookup[tmp >> 10];
    output += lookup[tmp >> 4 & 0x3F];
    output += lookup[tmp << 2 & 0x3F];
    output += '=';
  }

  parts.push(output);

  return parts.join('');
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];

  i += d;

  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bufferIndexOf = __webpack_require__(110);

module.exports = function (buf, splitBuf, includeDelim) {

  var search = -1,
      lines = [],
      move = includeDelim ? splitBuf.length : 0;

  while ((search = bufferIndexOf(buf, splitBuf)) > -1) {
    lines.push(buf.slice(0, search + move));
    buf = buf.slice(search + splitBuf.length, buf.length);
  }

  lines.push(buf);

  return lines;
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bufferIndexOf(buf, search, offset) {
  offset = offset || 0;

  var m = 0;
  var s = -1;
  for (var i = offset; i < buf.length; ++i) {
    if (buf[i] == search[m]) {
      if (s == -1) s = i;
      ++m;
      if (m == search.length) break;
    } else {
      s = -1;
      m = 0;
    }
  }

  if (s > -1 && buf.length - s < search.length) return -1;
  return s;
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

module.exports = function bufferIndexOf(buff, search, offset, encoding) {
  if (!Buffer.isBuffer(buff)) {
    throw TypeError('buffer is not a buffer');
  }

  // allow optional offset when providing an encoding
  if (encoding === undefined && typeof offset === 'string') {
    encoding = offset;
    offset = undefined;
  }

  if (typeof search === 'string') {
    search = new Buffer(search, encoding || 'utf8');
  } else if (typeof search === 'number' && !isNaN(search)) {
    search = new Buffer([search]);
  } else if (!Buffer.isBuffer(search)) {
    throw TypeError('search is not a bufferable object');
  }

  if (search.length === 0) {
    return -1;
  }

  if (offset === undefined || typeof offset === 'number' && isNaN(offset)) {
    offset = 0;
  } else if (typeof offset !== 'number') {
    throw TypeError('offset is not a number');
  }

  if (offset < 0) {
    offset = buff.length + offset;
  }

  if (offset < 0) {
    offset = 0;
  }

  var m = 0;
  var s = -1;

  for (var i = offset; i < buff.length; ++i) {
    if (buff[i] != search[m]) {
      s = -1;
      // <-- go back
      // match abc to aabc
      // 'aabc'
      // 'aab'
      //    ^ no match
      // a'abc'
      //   ^ set index here now and look at these again.
      //   'abc' yay!
      i -= m - 1;
      m = 0;
    }

    if (buff[i] == search[m]) {
      if (s == -1) {
        s = i;
      }
      ++m;
      if (m == search.length) {
        break;
      }
    }
  }

  if (s > -1 && buff.length - s < search.length) {
    return -1;
  }
  return s;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(44).Buffer))

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var action = arguments[1];

    switch (action.type) {
        case 'TOP_LAYER':
            {
                return action.value;
            }

        default:
            return state;
    }
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { active: true, scale: 1 };
    var action = arguments[1];

    switch (action.type) {
        case 'CHANGE_OVERLAY_ACTIVE':
            {
                return _extends({}, state, {
                    active: action.active
                });
            }
        case 'CHANGE_OVERLAY_SRC':
            {
                return _extends({}, state, {
                    src: action.src
                });
            }
        case 'CHANGE_OVERLAY_SCALE':
            {
                return _extends({}, state, {
                    scale: action.scale / 100
                });
            }

        default:
            return state;
    }
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (dispatch) {
    return fetch('http://bonkleaguebot.herokuapp.com/shapes.txt').then(function (response) {
        return response.text();
    }).then(function (shapes) {
        shapes = shapes.replace(/height\=\"(.+?)px\" width\=\"(.+?)px\"/g, '\n            height="$1px" width="$2px"\n            viewBox="0 0 $2 $1"\n        ').replace(/width\=\"(.+?)\" height\=\"(.+?)\"/g, '\n            width="$1" height="$2"\n            viewBox="0 0 $1 $2"\n        ');

        dispatch({
            type: 'LOAD_SHAPES',
            shapes: shapes
        });
    }).catch(function (err) {
        dispatch({
            type: 'LOAD_SHAPES_ERROR',
            err: err
        });
    });
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _skinCode = __webpack_require__(43);

exports.default = function (dispatch) {
    var skinCode = decodeURIComponent(window.location.href.split('?')[1]);

    var skinData = (0, _skinCode.skinCodeToObject)(skinCode);

    dispatch({
        type: 'CHANGE_BASE_COLOR',
        color: skinData.baseColor
    });
    for (var i = 0; i < skinData.shapes.length; i++) {
        dispatch({
            type: 'ADD_SHAPE',
            id: skinData.shapes[i].shapeID
        });
        dispatch(_extends({
            type: 'CHANGE_SHAPE_TRANSLATION'
        }, skinData.shapes[i]));
        dispatch({
            type: 'CHANGE_SELECTED_COLOR',
            color: skinData.shapes[i].color
        });
        dispatch({ type: 'DESELECT_ALL' });
    }
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _desc, _value, _class;

// Components


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reduxUndo = __webpack_require__(41);

var _reactKeydown = __webpack_require__(45);

var _reactKeydown2 = _interopRequireDefault(_reactKeydown);

var _Options = __webpack_require__(147);

var _Options2 = _interopRequireDefault(_Options);

var _SkinBase = __webpack_require__(157);

var _SkinBase2 = _interopRequireDefault(_SkinBase);

var _Export = __webpack_require__(163);

var _Export2 = _interopRequireDefault(_Export);

var _Credit = __webpack_require__(164);

var _Credit2 = _interopRequireDefault(_Credit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var App = (_dec = (0, _reactKeydown2.default)('ctrl+z'), _dec2 = (0, _reactKeydown2.default)('ctrl+y'), _dec3 = (0, _reactKeydown2.default)('delete'), (_class = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            keyDown: false
        };
        return _this;
    }

    _createClass(App, [{
        key: 'undo',
        value: function undo(e) {
            this.props.undo(e);
        }
    }, {
        key: 'redo',
        value: function redo(e) {
            this.props.redo(e);
        }
    }, {
        key: 'deleteShape',
        value: function deleteShape(e) {
            this.props.deleteShape(e);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { tabIndex: '0', onKeyDown: this.onKeyDown, onKeyUp: this.onKeyUp, style: { height: '100%' } },
                _react2.default.createElement(_Options2.default, null),
                _react2.default.createElement(_SkinBase2.default, null),
                _react2.default.createElement(_Export2.default, null),
                _react2.default.createElement(_Credit2.default, null)
            );
        }
    }]);

    return App;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'undo', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'undo'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'redo', [_dec2], Object.getOwnPropertyDescriptor(_class.prototype, 'redo'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'deleteShape', [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, 'deleteShape'), _class.prototype)), _class));


var mapStateToProps = function mapStateToProps(state, props) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    return {
        undo: function undo(e) {
            dispatch(_reduxUndo.ActionCreators.undo());
        },
        redo: function redo(e) {
            dispatch(_reduxUndo.ActionCreators.redo());
        },
        deleteShape: function deleteShape(e) {
            dispatch({ type: 'DELETE_SELECTED_SHAPE' });
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keydownScoped = undefined;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _class_decorator = __webpack_require__(118);

var _class_decorator2 = _interopRequireDefault(_class_decorator);

var _method_decorator = __webpack_require__(144);

var _method_decorator2 = _interopRequireDefault(_method_decorator);

var _method_decorator_scoped = __webpack_require__(145);

var _method_decorator_scoped2 = _interopRequireDefault(_method_decorator_scoped);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

/**
 * @module decorators
 *
 */


/**
 * noopDecorator
 *
 * @access private
 * @return {undefined} Returns `undefined` so that the original undecorated instance/method is used
 */
function noopDecorator() {
  return undefined;
}

/**
 * _decorator
 *
 * @access private
 * @param {Function} methodFn The method wrapper to delegate to, based on whether user has specified a scoped decorator or not
 * @param {Array} ...args Remainder of arguments passed in
 * @return {Function} The decorated class or method
 */
function _decorator(methodFn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  // check the first argument to see if it's a user-supplied keycode or array
  // of keycodes, or if it's the wrapped class or method
  var testArg = args[0];
  var isArray = Array.isArray(testArg);

  // if the test argument is not an object or function, it is user-supplied
  // keycodes. else there are no arguments and it's just the wrapped class
  if (isArray || ~['string', 'number', 'symbol'].indexOf(typeof testArg === 'undefined' ? 'undefined' : _typeof(testArg))) {
    var keys = isArray ? testArg : args;

    // return the decorator function, which on the next call will look for
    // the presence of a method name to determine if this is a wrapped method
    // or component
    return function (target, methodName, descriptor) {
      return methodName ? methodFn({ target: target, descriptor: descriptor, keys: keys }) : (0, _class_decorator2.default)(target, keys);
    };
  } else {
    var WrappedComponent = args[0];
    var methodName = args[1];

    // method decorators without keycode (which) arguments are not allowed.
    if (WrappedComponent && !methodName) {
      return _class_decorator2.default.apply(undefined, args);
    } else {
      console.warn(methodName + ': Method decorators must have keycode arguments, so the decorator for this method will not do anything');
      return noopDecorator;
    }
  }
}

/**
 * keydownScoped
 *
 * Method decorator that will look for changes to its targeted component's
 * `keydown` props to decide when to trigger, rather than responding directly
 * to keydown events. This lets you specify a @keydown decorated class higher
 * up in the view hierarchy for larger scoping of keydown events, or for
 * programmatically sending keydown events as props into the components in order
 * to trigger decorated methods with matching keys.
 *
 * @access public
 * @param {Array} ...args  All (or no) arguments passed in from decoration
 * @return {Function} The decorated class or method
 */
function keydownScoped() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return _decorator.apply(undefined, [_method_decorator_scoped2.default].concat(args));
}

/**
 * keydown
 *
 * The main decorator and default export, handles both classes and methods.
 *
 * @access public
 * @param {Array} ...args  All (or no) arguments passed in from decoration
 * @return {Function} The decorated class or method
 */
function keydown() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return _decorator.apply(undefined, [_method_decorator2.default].concat(args));
}

exports.default = keydown;
exports.keydownScoped = keydownScoped;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _store = __webpack_require__(12);

var _store2 = _interopRequireDefault(_store);

var _event_handlers = __webpack_require__(57);

var _keys = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * @module componentWrapper
 *
 */


/**
 * componentWrapper
 *
 * @access public
 * @param {object} WrappedComponent React component class to be wrapped
 * @param {array} [keys] The key(s) bound to the class
 * @return {object} The higher-order function that wraps the decorated class
 */
function componentWrapper(WrappedComponent) {
  var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _keys.ALL_KEYS;

  var KeyBoardHelper = function (_React$Component) {
    _inherits(KeyBoardHelper, _React$Component);

    function KeyBoardHelper(props) {
      _classCallCheck(this, KeyBoardHelper);

      var _this = _possibleConstructorReturn(this, (KeyBoardHelper.__proto__ || Object.getPrototypeOf(KeyBoardHelper)).call(this, props));

      _this.state = {
        event: null
      };
      return _this;
    }

    _createClass(KeyBoardHelper, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        (0, _event_handlers.onMount)(this);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        (0, _event_handlers.onUnmount)(this);
      }
    }, {
      key: 'handleKeyDown',
      value: function handleKeyDown(event) {
        var _this2 = this;

        // to simulate a keypress, set the event and then clear it in the callback
        this.setState({ event: event }, function () {
          return _this2.setState({ event: null });
        });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { keydown: this.state }));
      }
    }]);

    return KeyBoardHelper;
  }(_react2.default.Component);

  _store2.default.setBinding({ keys: [].concat(keys), fn: KeyBoardHelper.prototype.handleKeyDown, target: KeyBoardHelper.prototype });

  return KeyBoardHelper;
}

exports.default = componentWrapper;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(120);
__webpack_require__(139);
module.exports = __webpack_require__(15).Symbol;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var global = __webpack_require__(2);
var has = __webpack_require__(3);
var DESCRIPTORS = __webpack_require__(4);
var $export = __webpack_require__(121);
var redefine = __webpack_require__(23);
var META = __webpack_require__(124).KEY;
var $fails = __webpack_require__(14);
var shared = __webpack_require__(24);
var setToStringTag = __webpack_require__(125);
var uid = __webpack_require__(7);
var wks = __webpack_require__(8);
var wksExt = __webpack_require__(49);
var wksDefine = __webpack_require__(126);
var enumKeys = __webpack_require__(127);
var isArray = __webpack_require__(133);
var anObject = __webpack_require__(16);
var isObject = __webpack_require__(6);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(21);
var createDesc = __webpack_require__(22);
var _create = __webpack_require__(134);
var gOPNExt = __webpack_require__(137);
var $GOPD = __webpack_require__(138);
var $DP = __webpack_require__(5);
var $keys = __webpack_require__(25);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', { value: 7 }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    }return setSymbolDesc(it, key, D);
  }return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(55).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(28).f = $propertyIsEnumerable;
  __webpack_require__(54).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(50)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols =
// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }$replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(20)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var core = __webpack_require__(15);
var hide = __webpack_require__(20);
var redefine = __webpack_require__(23);
var ctx = __webpack_require__(122);
var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// optional / simple context binding
var aFunction = __webpack_require__(123);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var META = __webpack_require__(7)('meta');
var isObject = __webpack_require__(6);
var has = __webpack_require__(3);
var setDesc = __webpack_require__(5).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(14)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {} // weak collections IDs
    } });
};
var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
    // return object ID
  }return it[META].i;
};
var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
    // return hash weak collections IDs
  }return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var def = __webpack_require__(5).f;
var has = __webpack_require__(3);
var TAG = __webpack_require__(8)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(2);
var core = __webpack_require__(15);
var LIBRARY = __webpack_require__(50);
var wksExt = __webpack_require__(49);
var defineProperty = __webpack_require__(5).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(25);
var gOPS = __webpack_require__(54);
var pIE = __webpack_require__(28);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }return result;
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(26);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(9);
var toLength = __webpack_require__(131);
var toAbsoluteIndex = __webpack_require__(132);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.15 ToLength
var toInteger = __webpack_require__(52);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(52);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.2 IsArray(argument)
var cof = __webpack_require__(26);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(16);
var dPs = __webpack_require__(135);
var enumBugKeys = __webpack_require__(27);
var IE_PROTO = __webpack_require__(53)('IE_PROTO');
var Empty = function Empty() {/* empty */};
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(48)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(136).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(5);
var anObject = __webpack_require__(16);
var getKeys = __webpack_require__(25);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(9);
var gOPN = __webpack_require__(55).f;
var toString = {}.toString;

var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pIE = __webpack_require__(28);
var createDesc = __webpack_require__(22);
var toIObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(21);
var has = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(47);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {/* empty */}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()

var classof = __webpack_require__(140);
var test = {};
test[__webpack_require__(8)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(23)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(26);
var TAG = __webpack_require__(8)('toStringTag');
// ES3 wrong here
var ARG = cof(function () {
  return arguments;
}()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {/* empty */}
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
  // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
  // builtinTag case
  : ARG ? cof(O)
  // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uuid;
// Counter being incremented. JS is single-threaded, so it'll Just Work™.
var __counter = 1;

/**
 * Returns a process-wide unique identifier.
 */
function uuid() {
  return "uid-" + __counter++;
}

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactDom = __webpack_require__(31);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var focusableSelector = 'a[href], button, input, object, select, textarea, [tabindex]';

/**
 * bindFocusables: Find any focusable child elements of the component instance and
 * add an onFocus handler to focus our keydown handlers on the parent component
 * when user keys applies focus to the element.
 *
 * NOTE: One limitation of this right now is that if you tab out of the
 * component, _focusedInstance will still be set until next click or mount or
 * controlled focus.
 *
 * @access public
 * @param {object} instance The key-bound component instance
 * @param {callback} activateOnFocus The fn to fire when element is focused
 */
/**
 * @module domHelpers
 *
 */
function bindFocusables(instance, activateOnFocus) {
  if (document.querySelectorAll) {
    try {
      var node = _reactDom2.default.findDOMNode(instance);
      if (node) {
        var focusables = node.querySelectorAll(focusableSelector);
        if (focusables.length) {
          var onFocus = function onFocus(element) {
            var onFocusPrev = element.onfocus;
            return function (event) {
              activateOnFocus(instance);
              if (onFocusPrev) onFocusPrev.call(element, event);
            };
          };
          Array.prototype.slice.call(focusables).forEach(function (element) {
            return element.onfocus = onFocus(element);
          });
        }
      }
    } catch (error) {
      // noop, mostly suppressing error here https://github.com/glortho/react-keydown/issues/76
    }
  }
}

/**
 * findContainerNodes: Called by our click handler to find instances with nodes
 * that are equal to or that contain the click target. Any that pass this test
 * will be recipients of the next keydown event.
 *
 * @access public
 * @param {object} target The click event.target DOM element
 * @return {function} Reducer function
 */
function findContainerNodes(target) {
  return function (memo, instance) {
    try {
      var node = _reactDom2.default.findDOMNode(instance);
      if (node && (node === target || node.contains(target))) {
        memo.push({ instance: instance, node: node });
      }
    } finally {
      return memo;
    }
  };
}

/**
 * sortByDOMPosition: Called by our click handler to sort a list of instances
 * according to least -> most nested. This is so that if multiple keybound
 * instances have nodes that are ancestors of the click target, they will be
 * sorted to let the instance closest to the click target get first dibs on the
 * next key down event.
 */
function sortByDOMPosition(a, b) {
  return a.node.compareDocumentPosition(b.node) === 10 ? 1 : -1;
}

exports.default = { bindFocusables: bindFocusables, findContainerNodes: findContainerNodes, sortByDOMPosition: sortByDOMPosition };

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @module Listeners
 *
 */

// flag for whether click listener has been bound to document
var _clicksBound = false;

// flag for whether keydown listener has been bound to document
var _keysBound = false;

var Listeners = {
  /**
   * _bindKeys
   *
   * @access public
   */
  bindKeys: function bindKeys(callback) {
    if (!_keysBound) {
      document.addEventListener('keydown', callback);
      _keysBound = true;
    }
  },

  /**
   * unbindKeys
   *
   * @access public
   */
  unbindKeys: function unbindKeys(callback) {
    if (_keysBound) {
      document.removeEventListener('keydown', callback);
      _keysBound = false;
    }
  },

  /**
   * bindClicks
   *
   * @access public
   */
  bindClicks: function bindClicks(callback) {
    if (!_clicksBound) {
      document.addEventListener('click', callback, true);
      _clicksBound = true;
    }
  },

  /**
   * unbindClicks
   *
   * @access public
   */
  unbindClicks: function unbindClicks(callback) {
    if (_clicksBound) {
      document.removeEventListener('click', callback, true);
      _clicksBound = false;
    }
  }
};

exports.default = Listeners;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _store = __webpack_require__(12);

var _store2 = _interopRequireDefault(_store);

var _event_handlers = __webpack_require__(57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

/**
 * @module methodWrapper
 *
 */


/**
 * _isReactKeyDown
 *
 * @access private
 * @param {object} event The possibly synthetic event passed as an argument with
 * the method invocation.
 * @return {boolean}
 */
function _isReactKeyDown(event) {
  return event && (typeof event === 'undefined' ? 'undefined' : _typeof(event)) === 'object' && event.nativeEvent instanceof window.KeyboardEvent && event.type === 'keydown';
}

/**
 * methodWrapper
 *
 * @access public
 * @param {object} args All arguments necessary for wrapping method
 * @param {object} args.target The decorated class
 * @param {object} args.descriptor Method descriptor
 * @param {array} args.keys The array of keys bound to the given method
 * @return {object} The method descriptor
 */
function methodWrapper(_ref) {
  var target = _ref.target,
      descriptor = _ref.descriptor,
      keys = _ref.keys;

  var fn = descriptor.value;

  // if we haven't already created a binding for this class (via another
  // decorated method), wrap these lifecycle methods.
  if (!_store2.default.getBinding(target)) {
    var componentDidMount = target.componentDidMount,
        componentWillUnmount = target.componentWillUnmount;

    target.componentDidMount = function () {
      (0, _event_handlers.onMount)(this);
      if (componentDidMount) return componentDidMount.call(this);
    };

    target.componentWillUnmount = function () {
      (0, _event_handlers.onUnmount)(this);
      if (componentWillUnmount) return componentWillUnmount.call(this);
    };
  }

  // add this binding of keys and method to the target's bindings
  _store2.default.setBinding({ keys: keys, target: target, fn: fn });

  descriptor.value = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var maybeEvent = args[0];

    if (_isReactKeyDown(maybeEvent)) {
      // proxy method in order to use @keydown as filter for keydown events coming
      // from an actual onKeyDown binding (as identified by react's addition of
      // 'nativeEvent' + type === 'keydown')
      if (!maybeEvent.ctrlKey) {
        // we already whitelist shortcuts with ctrl modifiers so if we were to
        // fire it again here the method would trigger twice. see https://github.com/glortho/react-keydown/issues/38
        return (0, _event_handlers._onKeyDown)(maybeEvent, true);
      }
    } else if (!maybeEvent || !(maybeEvent instanceof window.KeyboardEvent) || maybeEvent.type !== 'keydown') {
      // if our first argument is a keydown event it is being handled by our
      // binding system. if it's anything else, just pass through.
      return fn.call.apply(fn, [this].concat(args));
    }
  };

  return descriptor;
}

exports.default = methodWrapper;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _match_keys = __webpack_require__(46);

var _match_keys2 = _interopRequireDefault(_match_keys);

var _parse_keys = __webpack_require__(56);

var _parse_keys2 = _interopRequireDefault(_parse_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * methodWrapperScoped
 *
 * @access public
 * @param {object} args All args necessary for decorating the method
 * @param {object} args.target The decorated method's class object
 * @param {object} args.descriptor The method's descriptor object
 * @param {array} args.keys The key codes bound to the decorated method
 * @return {object} The method's descriptor object
 */
/**
 * @module methodWrapperScoped
 *
 */
function methodWrapperScoped(_ref) {
  var target = _ref.target,
      descriptor = _ref.descriptor,
      keys = _ref.keys;
  var componentWillReceiveProps = target.componentWillReceiveProps;

  var fn = descriptor.value;
  if (!keys) {
    console.warn(fn + ': keydownScoped requires one or more keys');
  } else {

    /**
     * _shouldTrigger
     *
     * @access private
     * @param {object} thisProps Exsting props from the wrapped component
     * @param {object} thisProps.keydown The namespaced state from the higher-order
     * component (class_decorator)
     * @param {object} nextProps The incoming props from the wrapped component
     * @param {object} nextProps.keydown The namescaped state from the higher-order
     * component (class_decorator)
     * @param {array} keys The keys bound to the decorated method
     * @return {boolean} Whether all tests have passed
     */
    var _shouldTrigger = function _shouldTrigger(keydownThis, keydownNext) {
      if (!(keydownNext && keydownNext.event && !keydownThis.event)) return false;

      return keySets.some(function (keySet) {
        return (0, _match_keys2.default)({ keySet: keySet, event: keydownNext.event });
      });
    };

    // wrap the component's lifecycle method to intercept key codes coming down
    // from the wrapped/scoped component up the view hierarchy. if new keydown
    // event has arrived and the key codes match what was specified in the
    // decorator, call the wrapped method.


    var keySets = (0, _parse_keys2.default)(keys);target.componentWillReceiveProps = function (nextProps) {
      var keydownNext = nextProps.keydown;
      var keydownThis = this.props.keydown;

      if (_shouldTrigger(keydownThis, keydownNext)) {
        return fn.call(this, keydownNext.event);
      }

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (componentWillReceiveProps) return componentWillReceiveProps.call.apply(componentWillReceiveProps, [this, nextProps].concat(args));
    };
  }

  return descriptor;
}

exports.default = methodWrapperScoped;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Production steps of ECMA-262, Edition 6, 22.1.2.1
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;
    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function toInteger(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError("Array.from requires an array-like object - not null or undefined");
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method 
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }();
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _AddShape = __webpack_require__(148);

var _AddShape2 = _interopRequireDefault(_AddShape);

var _ColorPicker = __webpack_require__(150);

var _ColorPicker2 = _interopRequireDefault(_ColorPicker);

var _LayerButtons = __webpack_require__(153);

var _LayerButtons2 = _interopRequireDefault(_LayerButtons);

var _AllInputs = __webpack_require__(154);

var _AllInputs2 = _interopRequireDefault(_AllInputs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Options = function (_React$Component) {
    _inherits(Options, _React$Component);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this.componentWillReceiveProps = function (newProps) {
            _this.setState({
                scale: newProps.shape && newProps.shape.scale
            });
        };

        _this.state = {
            scale: _this.props.shape ? _this.props.shape.scale : 1
        };
        return _this;
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            var selected = this.props.shape;
            return _react2.default.createElement(
                'div',
                { className: 'options-panel',
                    onMouseEnter: this.props.disableTopLayer,
                    onMouseLeave: this.props.enableTopLayer
                },
                _react2.default.createElement(
                    'h1',
                    { className: 'shape-name' },
                    selected ? selected.name : 'Base'
                ),
                selected && _react2.default.createElement(_LayerButtons2.default, {
                    up: this.props.moveShapeUp,
                    down: this.props.moveShapeDown,
                    upDisabled: this.props.upDisabled,
                    downDisabled: this.props.downDisabled
                }),
                _react2.default.createElement(_ColorPicker2.default, null),
                this.props.shape && _react2.default.createElement(_AllInputs2.default, null),
                _react2.default.createElement(_AddShape2.default, null)
            );
        }
    }]);

    return Options;
}(_react2.default.Component);

function round(x) {
    return Math.round(x * 100) / 100;
}

var mapStateToProps = function mapStateToProps(state, props) {
    var shapes = state.shapes.present;

    var shapeIndex = shapes.map(function (shape) {
        return shape.selected;
    }).indexOf(true);
    var shape = shapes[shapeIndex];
    return {
        shape: shape,
        shapeIndex: shapeIndex,
        upDisabled: shapeIndex == shapes.length - 1,
        downDisabled: shapeIndex == 0
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    return {
        onScaleChange: function onScaleChange(scale, shape) {
            if (scale) {
                dispatch({
                    type: 'CHANGE_SHAPE_TRANSLATION',
                    scale: scale
                });
            }
        },

        moveShapeUp: function moveShapeUp() {
            dispatch({ type: 'SELECTED_SHAPE_UP' });
        },
        moveShapeDown: function moveShapeDown() {
            dispatch({ type: 'SELECTED_SHAPE_DOWN' });
        },

        enableTopLayer: function enableTopLayer() {
            dispatch({
                type: 'TOP_LAYER',
                value: true
            });
        },
        disableTopLayer: function disableTopLayer() {
            dispatch({
                type: 'TOP_LAYER',
                value: false
            });
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Options);

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _DialogShape = __webpack_require__(149);

var _DialogShape2 = _interopRequireDefault(_DialogShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddShape = function (_React$Component) {
    _inherits(AddShape, _React$Component);

    function AddShape(props) {
        _classCallCheck(this, AddShape);

        var _this = _possibleConstructorReturn(this, (AddShape.__proto__ || Object.getPrototypeOf(AddShape)).call(this, props));

        _this.toggleDialog = function () {
            _this.setState({
                dialog: !_this.state.dialog
            });
        };

        _this.state = {
            dialog: false
        };
        return _this;
    }

    _createClass(AddShape, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var size = 41;
            return _react2.default.createElement(
                'div',
                { className: 'add-shape' },
                _react2.default.createElement(
                    'div',
                    { className: 'add-dialog-wrapper', style: this.state.dialog ? {
                            width: '320px',
                            height: '300px',
                            top: '4px'
                        } : {
                            width: '30px',
                            height: '16px',
                            top: '30px'
                        } },
                    _react2.default.createElement(
                        'div',
                        { className: 'add-dialog' },
                        this.props.shapes.map(function (shape, i) {
                            return _react2.default.createElement(_DialogShape2.default, { shape: shape.replace(/fill\=\".+?\"/g, 'fill="#fff"').replace(/height\=\".+?px\" width\=\".+?px\"/, 'height="' + size + 'px" width="' + size + 'px"').replace(/width\=\".+?\" height\=\".+?\"/, 'width="' + size + '" height="' + size + '"'), toggleDialog: _this2.toggleDialog, id: i, key: i });
                        })
                    )
                ),
                _react2.default.createElement(
                    'button',
                    { className: 'add-button', onClick: this.toggleDialog },
                    '+'
                )
            );
        }
    }]);

    return AddShape;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        shapes: state.allShapes
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(AddShape);

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogShape = function DialogShape(_ref) {
    var shape = _ref.shape,
        _onClick = _ref.onClick,
        toggleDialog = _ref.toggleDialog;
    return _react2.default.createElement('div', { className: 'dialog-shape', onClick: function onClick(e) {
            _onClick();
            if (!e.shiftKey) toggleDialog();
        }, dangerouslySetInnerHTML: { __html: shape } });
};

var mapStateToProps = function mapStateToProps(state, props) {
    return {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    return {
        onClick: function onClick() {
            dispatch({ type: 'DESELECT_ALL' });
            dispatch({
                type: 'ADD_SHAPE',
                id: props.id
            });
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(DialogShape);

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _colors = __webpack_require__(151);

var _colors2 = _interopRequireDefault(_colors);

var _Color = __webpack_require__(152);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        { className: 'color-picker' },
        _colors2.default.map(function (color, i) {
            return _react2.default.createElement(_Color2.default, { color: color, key: i });
        })
    );
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ["ef9a9a", "f48fb1", "ce93d8", "b39ddb", "9fa8da", "90caf9", "81d4fa", "80deea", "80cbc4", "a5d6a7", "c5e1a5", "e6ee9c", "fff59d", "ffe082", "ffcc80", "ffab91", "e57373", "f06292", "ba68c8", "9575cd", "7986cb", "64b5f6", "4fc3f7", "4dd0e1", "4db6ac", "81c784", "aed581", "dce775", "fff176", "ffd54f", "ffb74d", "ff8a65", "ef5350", "ec407a", "ab47bc", "7e57c2", "5c6bc0", "42a5f5", "29b6f6", "26c6da", "26a69a", "66bb6a", "9ccc65", "d4e157", "ffee58", "ffca28", "ffa726", "ff7043", "f44336", "e91e63", "9c27b0", "673ab7", "3f51b5", "2196f3", "03a9f4", "00bcd4", "009688", "4caf50", "8bc34a", "cddc39", "ffeb3b", "ffc107", "ff9800", "ff5722", "e53935", "d81b60", "8e24aa", "5e35b1", "3949ab", "1e88e5", "039be5", "00acc1", "00897b", "43a047", "7cb342", "c0ca33", "fdd835", "ffb300", "fb8c00", "f4511e", "d32f2f", "c2185b", "7b1fa2", "512da8", "303f9f", "1976d2", "0288d1", "0097a7", "00796b", "388e3c", "689f38", "afb42b", "fbc02d", "ffa000", "f57c00", "e64a19", "c62828", "ad1457", "6a1b9a", "4527a0", "283593", "1565c0", "0277bd", "00838f", "00695c", "2e7d32", "558b2f", "9e9d24", "f9a825", "ff8f00", "ef6c00", "d84315", "b71c1c", "880e4f", "4a148c", "311b92", "1a237e", "0d47a1", "01579b", "006064", "004d40", "1b5e20", "33691e", "827717", "f57f17", "ff6f00", "e65100", "bf360c", "fafafa", "f5f5f5", "eeeeee", "e0e0e0", "bdbdbd", "9e9e9e", "757575", "616161", "424242", "212121", "000000", "1abc9c", "448aff", "d32f2f"];

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Color = function Color(_ref) {
    var color = _ref.color,
        anySelected = _ref.anySelected,
        _onClick = _ref.onClick;
    return _react2.default.createElement('div', { className: 'color', onClick: function onClick() {
            return _onClick(anySelected);
        }, style: {
            background: '#' + color
        } });
};

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        anySelected: state.shapes.present.filter(function (shape) {
            return shape.selected;
        }).length > 0
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    return {
        onClick: function onClick(anySelected) {
            if (anySelected) {
                dispatch({
                    type: 'CHANGE_SELECTED_COLOR',
                    color: props.color
                });
            } else {
                dispatch({
                    type: 'CHANGE_BASE_COLOR',
                    color: props.color
                });
            }
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Color);

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
    var upDisabled = _ref.upDisabled,
        downDisabled = _ref.downDisabled,
        up = _ref.up,
        down = _ref.down;
    return _react2.default.createElement(
        "div",
        { className: "layer-buttons" },
        _react2.default.createElement(
            "button",
            { className: "up-layer", onClick: up, disabled: upDisabled },
            _react2.default.createElement("img", { src: "img/up.svg" })
        ),
        _react2.default.createElement(
            "button",
            { className: "down-layer", onClick: down, disabled: downDisabled },
            _react2.default.createElement("img", { src: "img/down.svg" })
        )
    );
};

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _OptionsInput = __webpack_require__(155);

var _OptionsInput2 = _interopRequireDefault(_OptionsInput);

var _OptionsCheckbox = __webpack_require__(156);

var _OptionsCheckbox2 = _interopRequireDefault(_OptionsCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_OptionsInput2.default, { type: 'scale' }),
        _react2.default.createElement(_OptionsInput2.default, { type: 'rotation' }),
        _react2.default.createElement(_OptionsInput2.default, { type: 'position.x' }),
        _react2.default.createElement(_OptionsInput2.default, { type: 'position.y' }),
        _react2.default.createElement(
            'div',
            { className: 'checkboxes' },
            _react2.default.createElement(_OptionsCheckbox2.default, { type: 'hf' }),
            _react2.default.createElement(_OptionsCheckbox2.default, { type: 'vf' })
        )
    );
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionsInput = function (_React$Component) {
    _inherits(OptionsInput, _React$Component);

    function OptionsInput(props) {
        _classCallCheck(this, OptionsInput);

        var _this = _possibleConstructorReturn(this, (OptionsInput.__proto__ || Object.getPrototypeOf(OptionsInput)).call(this, props));

        _this.componentWillReceiveProps = function (newProps) {
            _this.setState({
                data: newProps.shape && getKey(newProps.shape, _this.props.type)
            });
        };

        _this.state = {
            data: getKey(_this.props.shape, _this.props.type)
        };
        return _this;
    }

    _createClass(OptionsInput, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'label',
                { className: 'options-input' },
                _react2.default.createElement(
                    'div',
                    { className: 'title' },
                    function () {
                        switch (_this2.props.type) {
                            case 'scale':
                                return 'Scale: ';
                            case 'rotation':
                                return 'Angle: ';
                            case 'position.x':
                                return 'X Pos: ';
                            case 'position.y':
                                return 'Y Pos: ';
                        }
                    }()
                ),
                _react2.default.createElement('input', { onChange: function onChange(e) {
                        _this2.setState({
                            data: e.target.value
                        });
                        _this2.props.onChange(e.target.value, _this2.props.shape);
                    }, value: this.state.data, type: 'text' })
            );
        }
    }]);

    return OptionsInput;
}(_react2.default.Component);

function getKey(shape, type) {
    if (type === 'position.x') {
        return shape.position.x;
    } else if (type === 'position.y') {
        return shape.position.y;
    } else {
        return shape[type];
    }
}

var mapStateToProps = function mapStateToProps(state, props) {
    var shape = state.shapes.present.filter(function (shape) {
        return shape.selected;
    })[0];
    return shape ? {
        shape: shape
    } : {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    return {
        onChange: function onChange(data, shape) {
            if (data) {
                if (props.type === 'position.x') {
                    return dispatch({
                        type: 'CHANGE_SHAPE_TRANSLATION',
                        position: {
                            x: data,
                            y: shape.position.y
                        }
                    });
                }
                if (props.type === 'position.y') {
                    return dispatch({
                        type: 'CHANGE_SHAPE_TRANSLATION',
                        position: {
                            x: shape.position.x,
                            y: data
                        }
                    });
                }
                dispatch(_defineProperty({
                    type: 'CHANGE_SHAPE_TRANSLATION'
                }, props.type, data));
            }
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OptionsInput);

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OptionsCheckbox = function (_React$Component) {
    _inherits(OptionsCheckbox, _React$Component);

    function OptionsCheckbox(props) {
        _classCallCheck(this, OptionsCheckbox);

        var _this = _possibleConstructorReturn(this, (OptionsCheckbox.__proto__ || Object.getPrototypeOf(OptionsCheckbox)).call(this, props));

        _this.componentWillReceiveProps = function (newProps) {
            _this.setState({
                ticked: newProps.shape && newProps.shape[_this.props.type]
            });
        };

        _this.onChange = function () {
            _this.setState({
                ticked: !_this.state.ticked
            });
            _this.props.onChange(!_this.state.ticked);
        };

        _this.state = {
            ticked: _this.props.shape[_this.props.type]
        };
        return _this;
    }

    _createClass(OptionsCheckbox, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'label',
                { className: 'options-checkbox' },
                _react2.default.createElement(
                    'div',
                    { className: 'title' },
                    function () {
                        switch (_this2.props.type) {
                            case 'hf':
                                return 'H Flip: ';
                            case 'vf':
                                return 'V Flip: ';
                        }
                    }()
                ),
                _react2.default.createElement('div', { className: 'checkbox ' + (this.state.ticked ? 'ticked' : ''), onClick: this.onChange })
            );
        }
    }]);

    return OptionsCheckbox;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, props) {
    var shape = state.shapes.present.filter(function (shape) {
        return shape.selected;
    })[0];
    return shape ? {
        shape: shape
    } : {};
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    return {
        onChange: function onChange(ticked) {
            dispatch(_defineProperty({
                type: 'CHANGE_SHAPE_TRANSLATION'
            }, props.type, ticked));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OptionsCheckbox);

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _ShapeCount = __webpack_require__(158);

var _ShapeCount2 = _interopRequireDefault(_ShapeCount);

var _MoveableShape = __webpack_require__(159);

var _MoveableShape2 = _interopRequireDefault(_MoveableShape);

var _Overlay = __webpack_require__(160);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _OverlayPanel = __webpack_require__(161);

var _OverlayPanel2 = _interopRequireDefault(_OverlayPanel);

var _translation = __webpack_require__(162);

var _translation2 = _interopRequireDefault(_translation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SkinBase = function (_React$Component) {
    _inherits(SkinBase, _React$Component);

    function SkinBase(props) {
        _classCallCheck(this, SkinBase);

        var _this = _possibleConstructorReturn(this, (SkinBase.__proto__ || Object.getPrototypeOf(SkinBase)).call(this, props));

        _this.onShapeDown = function (e, moveableShape) {
            _this.setState({
                moving: true,
                editingShape: moveableShape,
                shapeRect: moveableShape.state.rect,
                moveOffset: {
                    x: e.clientX - moveableShape.state.position.x,
                    y: e.clientY - moveableShape.state.position.y
                }
            });
        };

        _this.onDraggerDown = function (moveableShape) {
            _this.setState({
                scaling: true,
                editingShape: moveableShape,
                shapeRect: moveableShape.state.rect
            });
        };

        _this.onMouseMove = function (e) {
            (0, _translation2.default)(e, _this.state);
        };

        _this.onMouseUp = function () {
            if (_this.state.moving || _this.state.scaling) {
                _this.props.changeShapeTranslation(_this.state);
                _this.setState({
                    moving: false,
                    scaling: false,
                    editingShape: null
                });
            }
        };

        _this.state = {
            moving: false,
            scaling: false,
            editingShape: null,
            shapeRect: null,
            moveOffset: {
                x: null,
                y: null
            },

            keyDown: false
        };
        return _this;
    }

    _createClass(SkinBase, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'base-panel',
                    onMouseDown: this.props.anySelected ? this.props.onClick : undefined,
                    onMouseMove: this.onMouseMove,
                    onMouseUp: this.onMouseUp
                },
                _react2.default.createElement(_ShapeCount2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'base', style: {
                            background: '#' + this.props.baseColor,
                            overflow: this.props.anySelected ? 'visible' : 'hidden'
                        } },
                    this.props.shapes.map(function (shape, i) {
                        return _react2.default.createElement(_MoveableShape2.default, {
                            shape: shape,
                            onShapeDown: _this2.onShapeDown,
                            onDraggerDown: _this2.onDraggerDown,
                            name: shape.name,
                            key: shape.uuid
                        });
                    }),
                    _react2.default.createElement(_Overlay2.default, null)
                ),
                _react2.default.createElement(_OverlayPanel2.default, null)
            );
        }
    }]);

    return SkinBase;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        baseColor: state.baseColor.present,
        shapes: state.shapes.present,
        anySelected: state.shapes.present.filter(function (shape) {
            return shape.selected;
        }).length > 0
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    return {
        onClick: function onClick() {
            dispatch({ type: 'DESELECT_ALL' });
        },

        changeShapeTranslation: function changeShapeTranslation(state) {
            var shapeTranslation = state.editingShape.state;
            dispatch(_extends({
                type: 'CHANGE_SHAPE_TRANSLATION'
            }, shapeTranslation));
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SkinBase);

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ShapeCount = function ShapeCount(_ref) {
    var count = _ref.count;
    return _react2.default.createElement(
        'h1',
        { style: {
                fontSize: '30px',
                padding: '10px'
            } },
        'Shape Count: ',
        count
    );
};

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        count: state.shapes.present.length
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ShapeCount);

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactKeydown = __webpack_require__(45);

var _reactKeydown2 = _interopRequireDefault(_reactKeydown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MoveableShape = function (_React$Component) {
    _inherits(MoveableShape, _React$Component);

    function MoveableShape(props) {
        _classCallCheck(this, MoveableShape);

        var _this = _possibleConstructorReturn(this, (MoveableShape.__proto__ || Object.getPrototypeOf(MoveableShape)).call(this, props));

        _this.state = _extends({
            rect: null
        }, _this.props.shape);
        return _this;
    }

    _createClass(MoveableShape, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            this.setState(_extends({}, newProps));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var scaleFactor = 700 / 30;

            var selected = this.props.shape.selected;
            var topLayer = selected && this.props.topLayer;

            return _react2.default.createElement(
                'div',
                { className: "shape" + (selected ? " selected" : "") + (topLayer ? " top" : ""),
                    onMouseDown: function onMouseDown(e) {
                        e.stopPropagation();
                        !_this2.props.shape.selected && _this2.props.onClick();
                    },
                    style: {
                        transform: '\n                        translate(' + this.state.position.x + 'px,' + this.state.position.y + 'px)\n                        translate(-50%,-50%)\n                        scale(' + this.state.scale + ')\n                        rotate(' + this.state.rotation + 'deg)\n                        translateX(' + (this.state.rect ? this.state.rect.width / 2 - this.props.origin.x : '0') + 'px)\n                        translateY(' + (this.state.rect ? this.state.rect.height / 2 - this.props.origin.y : '0') + 'px)\n                    '
                    },
                    ref: function ref(shape) {
                        if (shape && !_this2.state.rect) {
                            _this2.setState({
                                rect: shape.getBoundingClientRect()
                            });
                        }
                    }
                },
                _react2.default.createElement('span', { className: (this.state.hf ? 'hf' : '') + ' ' + (this.state.vf ? 'vf' : ''), onMouseDown: function onMouseDown(e) {
                        return _this2.props.onShapeDown(e, _this2);
                    }, dangerouslySetInnerHTML: { __html: this.props.shapeHTML } }),
                this.props.shape.selected && _react2.default.createElement('div', { className: 'dragger', onMouseDown: function onMouseDown() {
                        return _this2.props.onDraggerDown(_this2);
                    } })
            );
        }
    }]);

    return MoveableShape;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, props) {
    var shapeHTML = state.allShapes[props.shape.shapeID].replace(/fill\=\".+?\"/g, 'fill="#' + (props.shape.color || '000') + '"');
    var confusingOffsetRegex = shapeHTML.match(/matrix\((1\.0|1),\s*(0\.0|0),\s*(0\.0|0),\s*(1\.0|1),\s*(.+),\s*(.+)\)/);

    return _extends({
        shapeHTML: shapeHTML
    }, props.shape, {
        origin: {
            x: parseFloat(confusingOffsetRegex[5]) + 2,
            y: parseFloat(confusingOffsetRegex[6]) + 2
        },
        topLayer: state.topLayer
    });
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    return {
        onClick: function onClick(e) {
            dispatch({
                type: 'SELECT_SHAPE',
                id: props.shape.uuid
            });
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MoveableShape);

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_React$Component) {
    _inherits(Overlay, _React$Component);

    function Overlay(props) {
        _classCallCheck(this, Overlay);

        var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, props));

        _this.onError = function () {
            _this.setState({ display: false });
        };

        _this.onLoad = function () {
            _this.setState({ display: true });
        };

        _this.state = {
            display: false
        };
        return _this;
    }

    _createClass(Overlay, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('img', {
                onError: this.onError,
                onLoad: this.onLoad,
                style: {
                    opacity: this.props.active ? .5 : 0,
                    zIndex: '133769420',
                    pointerEvents: 'none',
                    height: '400px',
                    display: this.state.display ? 'block' : 'none',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%) scale(' + this.props.scale + ')'
                },
                src: this.props.src
            });
        }
    }]);

    return Overlay;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state, props) {
    return _extends({}, state.overlay);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Overlay);

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OverlayPanel = function OverlayPanel(_ref) {
    var active = _ref.active,
        onActiveChange = _ref.onActiveChange,
        onSrcChange = _ref.onSrcChange,
        onScaleChange = _ref.onScaleChange;
    return _react2.default.createElement(
        'div',
        { className: 'overlay-panel' },
        _react2.default.createElement('div', { onClick: function onClick() {
                return onActiveChange(active);
            }, className: 'checkbox ' + (active ? 'ticked' : '') }),
        _react2.default.createElement('input', { onChange: onSrcChange, placeholder: 'Overlay URL...', type: 'text' }),
        _react2.default.createElement('input', { onChange: onScaleChange, defaultValue: 100, min: 25, max: 300, type: 'range' })
    );
};

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        active: state.overlay.active
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    return {
        onActiveChange: function onActiveChange(active) {
            dispatch({
                type: 'CHANGE_OVERLAY_ACTIVE',
                active: !active
            });
        },
        onSrcChange: function onSrcChange(e) {
            dispatch({
                type: 'CHANGE_OVERLAY_SRC',
                src: e.target.value
            });
        },
        onScaleChange: function onScaleChange(e) {
            dispatch({
                type: 'CHANGE_OVERLAY_SCALE',
                scale: e.target.value
            });
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(OverlayPanel);

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (e, state) {
    var scaleFactor = 30 / 700;
    if (state.scaling) {
        var shapeRect = state.shapeRect;
        var position = state.editingShape.state.position;

        console.log(shapeRect);
        console.log(state.editingShape.props.origin);

        var origin = {
            x: shapeRect.x + state.editingShape.props.origin.x + parseFloat(position.x),
            y: shapeRect.y + state.editingShape.props.origin.y + parseFloat(position.y)
        };
        var dragger = {
            x: shapeRect.x + shapeRect.width + parseFloat(position.x),
            y: shapeRect.y + shapeRect.height + parseFloat(position.y)
        };

        var cursorDiff = {
            x: e.clientX - origin.x,
            y: e.clientY - origin.y
        };
        var draggerDiff = {
            x: dragger.x - origin.x,
            y: dragger.y - origin.y
        };

        var cursorAngle = Math.atan(cursorDiff.x / cursorDiff.y);
        var draggerAngle = Math.atan(draggerDiff.x / draggerDiff.y);
        var finalAngle = draggerAngle - cursorAngle;

        var cursorDist = cursorDiff.x * cursorDiff.x + cursorDiff.y * cursorDiff.y;
        var draggerDist = draggerDiff.x * draggerDiff.x + draggerDiff.y * draggerDiff.y;

        state.editingShape.setState({
            rotation: e.shiftKey ? state.editingShape.props.rotation : finalAngle * 180 / Math.PI + (e.clientY < origin.y ? 180 : 0),
            scale: e.ctrlKey ? state.editingShape.props.scale : Math.sqrt(cursorDist / draggerDist)
        });
    } else if (state.moving) {
        var moveOffset = state.moveOffset;

        state.editingShape.setState({
            position: {
                x: e.clientX - moveOffset.x,
                y: e.clientY - moveOffset.y
            }
        });
    }
};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Export = function Export(_ref) {
    var skinCode = _ref.skinCode,
        shapeObj = _ref.shapeObj,
        _onClick = _ref.onClick;
    return _react2.default.createElement(
        'div',
        { onMouseEnter: function onMouseEnter() {
                skinCode && _onClick(shapeObj);
            }, style: { height: skinCode ? '100px' : '25px' }, className: 'export' },
        _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                    return _onClick(shapeObj);
                } },
            'Generate Skin Code'
        ),
        skinCode && _react2.default.createElement(
            'div',
            { className: 'skin-codes' },
            _react2.default.createElement('input', { type: 'text', value: skinCode, readOnly: true }),
            _react2.default.createElement(
                'div',
                null,
                'or ',
                _react2.default.createElement(
                    'a',
                    { href: "https://bonkleagues.github.io/skins.html#Untitled|Bonk Leagues Skin Editor|" + encodeURIComponent(skinCode), target: '_blank' },
                    'click here'
                )
            )
        )
    );
};

var mapStateToProps = function mapStateToProps(state, props) {
    return {
        skinCode: state.skinCode,
        shapeObj: {
            baseColor: state.baseColor.present,
            shapes: state.shapes.present
        }
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, props) {
    return {
        onClick: function onClick(shapeObj) {
            dispatch({
                type: 'GENERATE_SKIN_CODE',
                obj: shapeObj
            });
        }
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Export);

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        "div",
        { className: "credit" },
        _react2.default.createElement("img", { src: "img/logo.svg", draggable: "false" }),
        _react2.default.createElement(
            "span",
            null,
            "SKIN EDITOR by its_magic"
        )
    );
};

/***/ })
/******/ ]);