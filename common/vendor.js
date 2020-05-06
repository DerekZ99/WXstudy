(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.default = void 0;

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}
/**
 * Create a cached version of a pure function.
 */


function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delimited string.
 */


var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);

  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }

  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (_typeof(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;

  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];

    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);

      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }

      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }

  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}

function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];

      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];

  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }

  var interceptor = scopedInterceptors[method];

  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }

  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];

  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }

  return interceptor;
}

function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }

  var interceptor = getApiInterceptorHooks(method);

  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }

  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }

    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  }
};
var SYNC_API_RE = /^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;
var CONTEXT_API_RE = /^create|Manager$/; // Context例外情况

var CONTEXT_API_RE_EXC = ['createBLEConnection']; // 同步例外情况

var ASYNC_API = ['createBLEConnection'];
var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}

function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}

function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }

  return true;
}
/* eslint-disable no-extend-native */


if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }

  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }

    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }

    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
      platform = _wx$getSystemInfoSync.platform,
      pixelRatio = _wx$getSystemInfoSync.pixelRatio,
      windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni


  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);

  if (number === 0) {
    return 0;
  }

  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);

  if (result < 0) {
    result = -result;
  }

  result = Math.floor(result + EPS);

  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }

  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);

    if (isNaN(currentIndex)) {
      return;
    }

    var urls = fromArgs.urls;

    if (!Array.isArray(urls)) {
      return;
    }

    var len = urls.length;

    if (!len) {
      return;
    }

    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }

    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }

    return {
      indicator: false,
      loop: false
    };
  }
};

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom
    };
  }
}

var protocols = {
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets
  },
  getSystemInfoSync: {
    returnValue: addSafeAreaInsets
  }
};
var todos = ['vibrate'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值

    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }

    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];

        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }

        if (!keyOption) {
          // 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }

    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }

  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }

  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];

    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }

    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;

      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];

      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }

      var returnValue = wx[options.name || methodName].apply(wx, args);

      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }

      return returnValue;
    };
  }

  return method;
}

var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];

function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
        complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};

function getProvider(_ref2) {
  var service = _ref2.service,
      success = _ref2.success,
      fail = _ref2.fail,
      complete = _ref2.complete;
  var res = false;

  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在'
    };
    isFn(fail) && fail(res);
  }

  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});

var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }

  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }

    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}

function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}

function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}

function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});
var api = /*#__PURE__*/Object.freeze({
  __proto__: null
});
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;

  mpInstance.triggerEvent = function (event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];

  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);

      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];

function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }

    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }

    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }

  var mixins = vueOptions.mixins;

  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;

  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }

  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];

  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));

      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }

  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }

  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }

  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }

  return type;
}

function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};

  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }

  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];

      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;

        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }

  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = _typeof(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];

    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};

  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }

  return obj;
}

function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';

    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }

      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}

function handleEvent(event) {
  var _this = this;

  event = wrapper$1(event); // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]

  var dataset = (event.currentTarget || event.target).dataset;

  if (!dataset) {
    return console.warn('事件信息不存在');
  }

  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰

  if (!eventOpts) {
    return console.warn('事件信息不存在');
  } // [['handle',[1,2,a]],['handle1',[1,2,a]]]


  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];

        if (methodName) {
          var handlerCtx = _this.$vm;

          if (handlerCtx.$options.generic && handlerCtx.$parent && handlerCtx.$parent.$parent) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }

          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }

          var handler = handlerCtx[methodName];

          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }

          if (isOnce) {
            if (handler.once) {
              return;
            }

            handler.once = true;
          }

          ret.push(handler.apply(handlerCtx, processEventArgs(_this.$vm, event, eventArray[1], eventArray[2], isCustom, methodName)));
        }
      });
    }
  });

  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}

var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound'];

function parseBaseApp(vm, _ref3) {
  var mocks = _ref3.mocks,
      initRefs = _ref3.initRefs;

  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;
      this.$mp = _defineProperty({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });

  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }

      {
        if (!wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this; // vm 上也挂载 globalData

      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;

      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    }
  }; // 兼容旧版本 globalData

  appOptions.globalData = vm.$options.globalData || {}; // 将 methods 中的方法挂在 getApp() 中

  var methods = vm.$options.methods;

  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);
  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children; // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)

  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];

    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  } // 反向递归查找


  var parentVm;

  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);

    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;

        if (!$refs[ref]) {
          $refs[ref] = [];
        }

        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    }
  });
}

function handleLink(event) {
  var _ref4 = event.detail || event.value,
      vuePid = _ref4.vuePid,
      vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)


  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      isPage = _ref5.isPage,
      initRelation = _ref5.initRelation;

  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
      _initVueComponent2 = _slicedToArray(_initVueComponent, 2),
      VueComponent = _initVueComponent2[0],
      vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true
  }, vueOptions.options || {});

  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this); // 处理父子关系

        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        }); // 初始化 vue 实例

        this.$vm = new VueComponent(options); // 处理$slots,$scopedSlots（暂不支持动态变化$slots）

        initSlots(this.$vm, properties.vueSlots); // 触发首次 setData

        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;

          this.$vm.__call_hook('mounted');

          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }

  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  });
}

var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6) {
  var isPage = _ref6.isPage,
      initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);
  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue

    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation
  });
}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;

  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (target[name]) {
        return target[name];
      }

      if (baseApi[name]) {
        return baseApi[name];
      }

      if (api[name]) {
        return promisify(name, api[name]);
      }

      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }

        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }

      if (eventApi[name]) {
        return eventApi[name];
      }

      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }

      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  // fixed by xxxxxx (nvue vuex)
  /* eslint-disable no-undef */
  if(typeof SharedObject !== 'undefined'){
    this.id = SharedObject.uid++;
  } else {
    this.id = uid++;
  }
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = typeof SharedObject !== 'undefined' ? SharedObject : {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!************************!*\
  !*** ./src/pages.json ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _package = __webpack_require__(/*! ../package.json */ 6);

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;
var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';

  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }

    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);

    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }

  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';

  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  } // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');


  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1)
  };
};

var getSplicing = function getSplicing(data) {
  var str = '';

  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }

  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq'
  };
  return platformList["mp-weixin"];
};

var getPackName = function getPackName() {
  var packName = '';

  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }

  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';

  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }

  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';

  if (options) {
    return options;
  }

  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }

  return scene;
};

var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;

  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }

  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;

  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }

  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};

var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;

var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();

  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }

  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();

  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }

  return Last_Page_residence_time - First_Page_residence_time;
};

var TOTAL__VISIT__COUNT = 'Total__Visit__Count';

var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;

  if (timeStorge) {
    count = timeStorge;
    count++;
  }

  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};

  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }

  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};

var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};

var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;

  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;

  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime
    };
  }

  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;

    return {
      residenceTime: residenceTime,
      overtime: _overtime
    };
  }

  return {
    residenceTime: residenceTime
  };
};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : ''; // clear

  self._query = '';

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }

  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }

  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }

  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && _typeof(options) !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 7).default;

var statConfig = __webpack_require__(/*! uni-stat-config */ 8).default || __webpack_require__(/*! uni-stat-config */ 8);

var resultOptions = uni.getSystemInfoSync();

var Util = /*#__PURE__*/function () {
  function Util() {
    _classCallCheck(this, Util);

    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: ''
    };
    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': []
    };
    this.__prevent_triggering = false;
    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight
    };
  }

  _createClass(Util, [{
    key: "_applicationShow",
    value: function _applicationShow() {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');

        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc
          };

          this._sendReportRequest(options);
        }

        this.__licationHide = false;
      }
    }
  }, {
    key: "_applicationHide",
    value: function _applicationHide(self, type) {
      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);

      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime
      }, type);
    }
  }, {
    key: "_pageShow",
    value: function _pageShow() {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson && PagesJson.pages[routepath] && PagesJson.pages[routepath].titleNView && PagesJson.pages[routepath].titleNView.titleText || PagesJson && PagesJson.pages[routepath] && PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false; // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');

        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');

      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc
        };

        this._sendReportRequest(options);
      }

      getFirstTime();
    }
  }, {
    key: "_pageHide",
    value: function _pageHide() {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');

        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime
        });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: ''
        };
        return;
      }
    }
  }, {
    key: "_login",
    value: function _login() {
      this._sendEventRequest({
        key: 'login'
      }, 0);
    }
  }, {
    key: "_share",
    value: function _share() {
      this._sendEventRequest({
        key: 'share'
      }, 0);
    }
  }, {
    key: "_payment",
    value: function _payment(key) {
      this._sendEventRequest({
        key: key
      }, 0);
    }
  }, {
    key: "_sendReportRequest",
    value: function _sendReportRequest(options) {
      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();

      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    }
  }, {
    key: "_sendPageRequest",
    value: function _sendPageRequest(opt) {
      var url = opt.url,
          urlref = opt.urlref,
          urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p
      };
      this.request(options);
    }
  }, {
    key: "_sendHideRequest",
    value: function _sendHideRequest(opt, type) {
      var urlref = opt.urlref,
          urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p
      };
      this.request(options, type);
    }
  }, {
    key: "_sendEventRequest",
    value: function _sendEventRequest() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$key = _ref.key,
          key = _ref$key === void 0 ? '' : _ref$key,
          _ref$value = _ref.value,
          value = _ref$value === void 0 ? "" : _ref$value;

      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: _typeof(value) === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p
      };
      this.request(options);
    }
  }, {
    key: "getNetworkInfo",
    value: function getNetworkInfo() {
      var _this = this;

      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;

          _this.getLocation();
        }
      });
    }
  }, {
    key: "getProperty",
    value: function getProperty() {
      var _this2 = this;

      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';

        _this2.getNetworkInfo();
      });
    }
  }, {
    key: "getLocation",
    value: function getLocation() {
      var _this3 = this;

      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;

            _this3.request(_this3.statData);
          }
        });
      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    }
  }, {
    key: "request",
    value: function request(data, type) {
      var _this4 = this;

      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;
      var requestData = this._reportingRequestData;

      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }

      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }

      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }

      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }

      var uniStatData = this._reportingRequestData;

      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      } // 时间超过，重新获取时间戳


      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];

      var _loop = function _loop(i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);

          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });
      };

      for (var i in uniStatData) {
        _loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION,
        //统计 SDK 版本号
        t: time,
        //发送请求时的时间戮
        requests: JSON.stringify(firstArr)
      };
      this._reportingRequestData = {};

      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }

      this._sendRequest(optionsData);
    }
  }, {
    key: "_sendRequest",
    value: function _sendRequest(optionsData) {
      var _this5 = this;

      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {// if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        }
      });
    }
    /**
     * h5 请求
     */

  }, {
    key: "imageRequest",
    value: function imageRequest(data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    }
  }, {
    key: "sendEvent",
    value: function sendEvent(key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }

      this._sendEventRequest({
        key: key,
        value: _typeof(value) === 'object' ? JSON.stringify(value) : value
      }, 1);
    }
  }]);

  return Util;
}();

var Stat = /*#__PURE__*/function (_Util) {
  _inherits(Stat, _Util);

  var _super = _createSuper(Stat);

  _createClass(Stat, null, [{
    key: "getInstance",
    value: function getInstance() {
      if (!this.instance) {
        this.instance = new Stat();
      }

      return this.instance;
    }
  }]);

  function Stat() {
    var _this6;

    _classCallCheck(this, Stat);

    _this6 = _super.call(this);
    _this6.instance = null; // 注册拦截器

    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();

      _this6.interceptLogin();

      _this6.interceptShare(true);

      _this6.interceptRequestPayment();
    }

    return _this6;
  }

  _createClass(Stat, [{
    key: "addInterceptorInit",
    value: function addInterceptorInit() {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        }
      });
    }
  }, {
    key: "interceptLogin",
    value: function interceptLogin() {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        }
      });
    }
  }, {
    key: "interceptShare",
    value: function interceptShare(type) {
      var self = this;

      if (!type) {
        self._share();

        return;
      }

      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        }
      });
    }
  }, {
    key: "interceptRequestPayment",
    value: function interceptRequestPayment() {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        }
      });
    }
  }, {
    key: "report",
    value: function report(options, self) {
      this.self = self; // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }

      setPageResidenceTime();
      this.__licationShow = true;

      this._sendReportRequest(options, true);
    }
  }, {
    key: "load",
    value: function load(options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }

      this.self = self;
      this._query = options;
    }
  }, {
    key: "show",
    value: function show(self) {
      this.self = self;

      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    }
  }, {
    key: "ready",
    value: function ready(self) {// this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    }
  }, {
    key: "hide",
    value: function hide(self) {
      this.self = self;

      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    }
  }, {
    key: "error",
    value: function error(em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        } // return;

      }

      var emVal = '';

      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }

      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p
      };
      this.request(options);
    }
  }]);

  return Stat;
}(Util);

var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this); // 重写分享，获取分享上报事件

    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;

      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }

    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  }
};

function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 6 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"@dcloudio/uni-stat@^2.0.0-26920200424005\",\"_id\":\"@dcloudio/uni-stat@2.0.0-26920200424005\",\"_inBundle\":false,\"_integrity\":\"sha1-R/Q3UJXtowic9GeLS5b8ZWp6tiM=\",\"_location\":\"/@dcloudio/uni-stat\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"range\",\"registry\":true,\"raw\":\"@dcloudio/uni-stat@^2.0.0-26920200424005\",\"name\":\"@dcloudio/uni-stat\",\"escapedName\":\"@dcloudio%2funi-stat\",\"scope\":\"@dcloudio\",\"rawSpec\":\"^2.0.0-26920200424005\",\"saveSpec\":null,\"fetchSpec\":\"^2.0.0-26920200424005\"},\"_requiredBy\":[\"/@dcloudio/vue-cli-plugin-uni\"],\"_resolved\":\"https://registry.npm.taobao.org/@dcloudio/uni-stat/download/@dcloudio/uni-stat-2.0.0-26920200424005.tgz?cache=0&sync_timestamp=1588228689741&other_urls=https%3A%2F%2Fregistry.npm.taobao.org%2F%40dcloudio%2Funi-stat%2Fdownload%2F%40dcloudio%2Funi-stat-2.0.0-26920200424005.tgz\",\"_shasum\":\"47f4375095eda3089cf4678b4b96fc656a7ab623\",\"_spec\":\"@dcloudio/uni-stat@^2.0.0-26920200424005\",\"_where\":\"C:\\\\Users\\\\User\\\\Desktop\\\\my-project\\\\node_modules\\\\@dcloudio\\\\vue-cli-plugin-uni\",\"author\":\"\",\"bugs\":{\"url\":\"https://github.com/dcloudio/uni-app/issues\"},\"bundleDependencies\":false,\"deprecated\":false,\"description\":\"\",\"devDependencies\":{\"@babel/core\":\"^7.5.5\",\"@babel/preset-env\":\"^7.5.5\",\"eslint\":\"^6.1.0\",\"rollup\":\"^1.19.3\",\"rollup-plugin-babel\":\"^4.3.3\",\"rollup-plugin-clear\":\"^2.0.7\",\"rollup-plugin-commonjs\":\"^10.0.2\",\"rollup-plugin-copy\":\"^3.1.0\",\"rollup-plugin-eslint\":\"^7.0.0\",\"rollup-plugin-json\":\"^4.0.0\",\"rollup-plugin-node-resolve\":\"^5.2.0\",\"rollup-plugin-replace\":\"^2.2.0\",\"rollup-plugin-uglify\":\"^6.0.2\"},\"files\":[\"dist\",\"package.json\",\"LICENSE\"],\"gitHead\":\"94494d54ed23e2dcf9ab8e3245b48b770b4e98a9\",\"homepage\":\"https://github.com/dcloudio/uni-app#readme\",\"license\":\"Apache-2.0\",\"main\":\"dist/index.js\",\"name\":\"@dcloudio/uni-stat\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/dcloudio/uni-app.git\",\"directory\":\"packages/uni-stat\"},\"scripts\":{\"build\":\"NODE_ENV=production rollup -c rollup.config.js\",\"dev\":\"NODE_ENV=development rollup -w -c rollup.config.js\"},\"version\":\"2.0.0-26920200424005\"}");

/***/ }),
/* 7 */
/*!*****************************************!*\
  !*** ./src/pages.json?{"type":"style"} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "pages": {
    "pages/home/index": {
      "navigationBarTitleText": "home",
      "usingComponents": {
        "home-album": "/pages/home/home-album/index",
        "home-category": "/pages/home/home-category/index",
        "home-new": "/pages/home/home-new/index",
        "home-recommend": "/pages/home/home-recommend/index",
        "uni-segmented-control": "/node-modules/@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control"
      },
      "usingAutoImportComponents": {}
    },
    "pages/demo/index": {
      "navigationBarTitleText": "demo",
      "usingComponents": {},
      "usingAutoImportComponents": {}
    },
    "pages/horizontal/index": {
      "navigationBarTitleText": "horizontal",
      "usingComponents": {},
      "usingAutoImportComponents": {}
    },
    "pages/mine/index": {
      "navigationBarTitleText": "mine",
      "usingComponents": {},
      "usingAutoImportComponents": {}
    },
    "pages/video/index": {
      "navigationBarTitleText": "video",
      "usingComponents": {
        "uni-segmented-control": "/node-modules/@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control",
        "video-main": "/pages/video/videoMain/index",
        "video-category": "/pages/video/videoCategory/index"
      },
      "usingAutoImportComponents": {}
    },
    "pages/search/index": {
      "navigationBarTitleText": "search",
      "usingComponents": {},
      "usingAutoImportComponents": {}
    },
    "pages/album/index": {
      "navigationBarTitleText": "专辑详情",
      "usingComponents": {
        "go-detail": "/components/goDetail"
      },
      "usingAutoImportComponents": {}
    },
    "pages/imgDetail/index": {
      "navigationBarTitleText": "图片详情",
      "usingComponents": {
        "swiper-action": "/components/swiperAction"
      },
      "usingAutoImportComponents": {}
    },
    "pages/img/index": {
      "navigationBarTitleText": "home"
    },
    "pages/imgCategory/index": {
      "navigationBarTitleText": "图片分类",
      "usingComponents": {
        "uni-segmented-control": "/node-modules/@dcloudio/uni-ui/lib/uni-segmented-control/uni-segmented-control"
      },
      "usingAutoImportComponents": {}
    },
    "pages/videoPlay/index": {
      "navigationBarTitleText": "视频播放",
      "usingComponents": {},
      "usingAutoImportComponents": {}
    }
  },
  "globalStyle": {
    "navigationBarTextStyle": "white",
    "navigationBarTitleText": "懂你找图",
    "navigationBarBackgroundColor": "#000"
  }
};
exports.default = _default;

/***/ }),
/* 8 */
/*!****************************************!*\
  !*** ./src/pages.json?{"type":"stat"} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "appid": ""
};
exports.default = _default;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 15 */
/*!******************************!*\
  !*** ./src/utils/request.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(params) {
  //加载中
  uni.showLoading({
    title: "加载中"
  });
  return new Promise(function (resolve, reject) {
    wx.request(_objectSpread(_objectSpread({}, params), {}, {
      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
      },
      complete: function complete() {
        uni.hideLoading();
      }
    }));
  });
};

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 71);

/***/ }),
/* 71 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 72);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 72 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 73 */
/*!*******************************************!*\
  !*** ./node_modules/moment/src/moment.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/utils/hooks */ 74);
/* harmony import */ var _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/moment/moment */ 75);
/* harmony import */ var _lib_moment_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/moment/calendar */ 142);
/* harmony import */ var _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/locale/locale */ 166);
/* harmony import */ var _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/duration/duration */ 171);
/* harmony import */ var _lib_units_units__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/units/units */ 182);
/* harmony import */ var _lib_utils_is_date__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/utils/is-date */ 84);
//! moment.js
//! version : 2.25.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com



_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].version = '2.25.1';













Object(_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["setHookCallback"])(_lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["createLocal"]);

_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].fn = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["momentPrototype"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].min = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["min"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].max = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["max"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].now = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["now"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].utc = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["createUTC"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].unix = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["createUnix"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].months = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listMonths"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].isDate = _lib_utils_is_date__WEBPACK_IMPORTED_MODULE_6__["default"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].locale = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["getSetGlobalLocale"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].invalid = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["createInvalid"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].duration = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__["createDuration"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].isMoment = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["isMoment"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].weekdays = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listWeekdays"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].parseZone = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["createInZone"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].localeData = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["getLocale"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].isDuration = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__["isDuration"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].monthsShort = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listMonthsShort"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].weekdaysMin = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listWeekdaysMin"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].defineLocale = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["defineLocale"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].updateLocale = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["updateLocale"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].locales = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listLocales"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].weekdaysShort = _lib_locale_locale__WEBPACK_IMPORTED_MODULE_3__["listWeekdaysShort"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].normalizeUnits = _lib_units_units__WEBPACK_IMPORTED_MODULE_5__["normalizeUnits"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].relativeTimeRounding = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__["getSetRelativeTimeRounding"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].relativeTimeThreshold = _lib_duration_duration__WEBPACK_IMPORTED_MODULE_4__["getSetRelativeTimeThreshold"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].calendarFormat = _lib_moment_calendar__WEBPACK_IMPORTED_MODULE_2__["getCalendarFormat"];
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].prototype = _lib_moment_moment__WEBPACK_IMPORTED_MODULE_1__["momentPrototype"];

// currently HTML5 input type only supports 24-hour formats
_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].HTML5_FMT = {
    DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
    DATE: 'YYYY-MM-DD', // <input type="date" />
    TIME: 'HH:mm', // <input type="time" />
    TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
    TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
    WEEK: 'GGGG-[W]WW', // <input type="week" />
    MONTH: 'YYYY-MM', // <input type="month" />
};

/* harmony default export */ __webpack_exports__["default"] = (_lib_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"]);


/***/ }),
/* 74 */
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/hooks.js ***!
  \****************************************************/
/*! exports provided: hooks, setHookCallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hooks", function() { return hooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHookCallback", function() { return setHookCallback; });


var hookCallback;

function hooks() {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback(callback) {
    hookCallback = callback;
}


/***/ }),
/* 75 */
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/moment.js ***!
  \******************************************************/
/*! exports provided: now, min, max, isMoment, createUTC, createUnix, createLocal, createInZone, createInvalid, momentPrototype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUnix", function() { return createUnix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInZone", function() { return createInZone; });
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/local */ 76);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createLocal", function() { return _create_local__WEBPACK_IMPORTED_MODULE_0__["createLocal"]; });

/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/utc */ 88);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createUTC", function() { return _create_utc__WEBPACK_IMPORTED_MODULE_1__["createUTC"]; });

/* harmony import */ var _create_valid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/valid */ 86);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createInvalid", function() { return _create_valid__WEBPACK_IMPORTED_MODULE_2__["createInvalid"]; });

/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constructor */ 91);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMoment", function() { return _constructor__WEBPACK_IMPORTED_MODULE_3__["isMoment"]; });

/* harmony import */ var _min_max__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./min-max */ 132);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min_max__WEBPACK_IMPORTED_MODULE_4__["min"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _min_max__WEBPACK_IMPORTED_MODULE_4__["max"]; });

/* harmony import */ var _now__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./now */ 133);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "now", function() { return _now__WEBPACK_IMPORTED_MODULE_5__["now"]; });

/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prototype */ 134);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "momentPrototype", function() { return _prototype__WEBPACK_IMPORTED_MODULE_6__["default"]; });









function createUnix(input) {
    return Object(_create_local__WEBPACK_IMPORTED_MODULE_0__["createLocal"])(input * 1000);
}

function createInZone() {
    return _create_local__WEBPACK_IMPORTED_MODULE_0__["createLocal"].apply(null, arguments).parseZone();
}




/***/ }),
/* 76 */
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/create/local.js ***!
  \*****************************************************/
/*! exports provided: createLocal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocal", function() { return createLocal; });
/* harmony import */ var _from_anything__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-anything */ 77);


function createLocal(input, format, locale, strict) {
    return Object(_from_anything__WEBPACK_IMPORTED_MODULE_0__["createLocalOrUTC"])(input, format, locale, strict, false);
}


/***/ }),
/* 77 */
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-anything.js ***!
  \*************************************************************/
/*! exports provided: prepareConfig, createLocalOrUTC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareConfig", function() { return prepareConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLocalOrUTC", function() { return createLocalOrUTC; });
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-array */ 78);
/* harmony import */ var _utils_is_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-object */ 79);
/* harmony import */ var _utils_is_object_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-object-empty */ 80);
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/is-undefined */ 82);
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/is-number */ 83);
/* harmony import */ var _utils_is_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-date */ 84);
/* harmony import */ var _utils_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/map */ 85);
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./valid */ 86);
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../moment/constructor */ 91);
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../locale/locales */ 92);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/hooks */ 74);
/* harmony import */ var _check_overflow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./check-overflow */ 125);
/* harmony import */ var _from_string_and_array__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./from-string-and-array */ 126);
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./from-string-and-format */ 127);
/* harmony import */ var _from_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./from-string */ 128);
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./from-array */ 129);
/* harmony import */ var _from_object__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./from-object */ 131);




















function createFromConfig(config) {
    var res = new _moment_constructor__WEBPACK_IMPORTED_MODULE_8__["Moment"](Object(_check_overflow__WEBPACK_IMPORTED_MODULE_11__["default"])(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig(config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || Object(_locale_locales__WEBPACK_IMPORTED_MODULE_9__["getLocale"])(config._l);

    if (input === null || (format === undefined && input === '')) {
        return Object(_valid__WEBPACK_IMPORTED_MODULE_7__["createInvalid"])({ nullInput: true });
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_8__["isMoment"])(input)) {
        return new _moment_constructor__WEBPACK_IMPORTED_MODULE_8__["Moment"](Object(_check_overflow__WEBPACK_IMPORTED_MODULE_11__["default"])(input));
    } else if (Object(_utils_is_date__WEBPACK_IMPORTED_MODULE_5__["default"])(input)) {
        config._d = input;
    } else if (Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_0__["default"])(format)) {
        Object(_from_string_and_array__WEBPACK_IMPORTED_MODULE_12__["configFromStringAndArray"])(config);
    } else if (format) {
        Object(_from_string_and_format__WEBPACK_IMPORTED_MODULE_13__["configFromStringAndFormat"])(config);
    } else {
        configFromInput(config);
    }

    if (!Object(_valid__WEBPACK_IMPORTED_MODULE_7__["isValid"])(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_3__["default"])(input)) {
        config._d = new Date(_utils_hooks__WEBPACK_IMPORTED_MODULE_10__["hooks"].now());
    } else if (Object(_utils_is_date__WEBPACK_IMPORTED_MODULE_5__["default"])(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        Object(_from_string__WEBPACK_IMPORTED_MODULE_14__["configFromString"])(config);
    } else if (Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_0__["default"])(input)) {
        config._a = Object(_utils_map__WEBPACK_IMPORTED_MODULE_6__["default"])(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        Object(_from_array__WEBPACK_IMPORTED_MODULE_15__["configFromArray"])(config);
    } else if (Object(_utils_is_object__WEBPACK_IMPORTED_MODULE_1__["default"])(input)) {
        Object(_from_object__WEBPACK_IMPORTED_MODULE_16__["configFromObject"])(config);
    } else if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_4__["default"])(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        _utils_hooks__WEBPACK_IMPORTED_MODULE_10__["hooks"].createFromInputFallback(config);
    }
}

function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};

    if (format === true || format === false) {
        strict = format;
        format = undefined;
    }

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if (
        (Object(_utils_is_object__WEBPACK_IMPORTED_MODULE_1__["default"])(input) && Object(_utils_is_object_empty__WEBPACK_IMPORTED_MODULE_2__["default"])(input)) ||
        (Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_0__["default"])(input) && input.length === 0)
    ) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}


/***/ }),
/* 78 */
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-array.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isArray; });
function isArray(input) {
    return (
        input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]'
    );
}


/***/ }),
/* 79 */
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-object.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObject; });
function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (
        input != null &&
        Object.prototype.toString.call(input) === '[object Object]'
    );
}


/***/ }),
/* 80 */
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-object-empty.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isObjectEmpty; });
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-own-prop */ 81);


function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return Object.getOwnPropertyNames(obj).length === 0;
    } else {
        var k;
        for (k in obj) {
            if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, k)) {
                return false;
            }
        }
        return true;
    }
}


/***/ }),
/* 81 */
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/has-own-prop.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasOwnProp; });
function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}


/***/ }),
/* 82 */
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-undefined.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isUndefined; });
function isUndefined(input) {
    return input === void 0;
}


/***/ }),
/* 83 */
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-number.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isNumber; });
function isNumber(input) {
    return (
        typeof input === 'number' ||
        Object.prototype.toString.call(input) === '[object Number]'
    );
}


/***/ }),
/* 84 */
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-date.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDate; });
function isDate(input) {
    return (
        input instanceof Date ||
        Object.prototype.toString.call(input) === '[object Date]'
    );
}


/***/ }),
/* 85 */
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/map.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return map; });
function map(arr, fn) {
    var res = [],
        i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}


/***/ }),
/* 86 */
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/create/valid.js ***!
  \*****************************************************/
/*! exports provided: isValid, createInvalid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInvalid", function() { return createInvalid; });
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/extend */ 87);
/* harmony import */ var _utc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utc */ 88);
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ 89);
/* harmony import */ var _utils_some__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/some */ 90);





function isValid(m) {
    if (m._isValid == null) {
        var flags = Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m),
            parsedParts = _utils_some__WEBPACK_IMPORTED_MODULE_3__["default"].call(flags.parsedDateParts, function (i) {
                return i != null;
            }),
            isNowValid =
                !isNaN(m._d.getTime()) &&
                flags.overflow < 0 &&
                !flags.empty &&
                !flags.invalidEra &&
                !flags.invalidMonth &&
                !flags.invalidWeekday &&
                !flags.weekdayMismatch &&
                !flags.nullInput &&
                !flags.invalidFormat &&
                !flags.userInvalidated &&
                (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid =
                isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        } else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid(flags) {
    var m = Object(_utc__WEBPACK_IMPORTED_MODULE_1__["createUTC"])(NaN);
    if (flags != null) {
        Object(_utils_extend__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m), flags);
    } else {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m).userInvalidated = true;
    }

    return m;
}


/***/ }),
/* 87 */
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/extend.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return extend; });
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-own-prop */ 81);


function extend(a, b) {
    for (var i in b) {
        if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(b, i)) {
            a[i] = b[i];
        }
    }

    if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(b, 'toString')) {
        a.toString = b.toString;
    }

    if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}


/***/ }),
/* 88 */
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/create/utc.js ***!
  \***************************************************/
/*! exports provided: createUTC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUTC", function() { return createUTC; });
/* harmony import */ var _from_anything__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-anything */ 77);


function createUTC(input, format, locale, strict) {
    return Object(_from_anything__WEBPACK_IMPORTED_MODULE_0__["createLocalOrUTC"])(input, format, locale, strict, true).utc();
}


/***/ }),
/* 89 */
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/parsing-flags.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getParsingFlags; });
function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidEra: null,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        era: null,
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false,
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}


/***/ }),
/* 90 */
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/some.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return some; });
var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this),
            len = t.length >>> 0,
            i;

        for (i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}




/***/ }),
/* 91 */
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/constructor.js ***!
  \***********************************************************/
/*! exports provided: copyConfig, Moment, isMoment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyConfig", function() { return copyConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Moment", function() { return Moment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMoment", function() { return isMoment; });
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/hooks */ 74);
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-undefined */ 82);
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ 89);




// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = (_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].momentProperties = []),
    updateInProgress = false;

function copyConfig(to, from) {
    var i, prop, val;

    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._i)) {
        to._i = from._i;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._f)) {
        to._f = from._f;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._l)) {
        to._l = from._l;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._strict)) {
        to._strict = from._strict;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._offset)) {
        to._offset = from._offset;
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._pf)) {
        to._pf = Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(from);
    }
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        _utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment(obj) {
    return (
        obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
    );
}


/***/ }),
/* 92 */
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/locales.js ***!
  \*******************************************************/
/*! exports provided: getSetGlobalLocale, defineLocale, updateLocale, getLocale, listLocales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetGlobalLocale", function() { return getSetGlobalLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineLocale", function() { return defineLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLocale", function() { return updateLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return getLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listLocales", function() { return listLocales; });
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-array */ 78);
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-undefined */ 82);
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/deprecate */ 94);
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set */ 95);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constructor */ 97);
/* harmony import */ var _utils_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/keys */ 98);
/* harmony import */ var _base_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./base-config */ 99);
var require;








// internal storage for locale config files
var locales = {},
    localeFamilies = {},
    globalLocale;

function commonPrefix(arr1, arr2) {
    var i,
        minl = Math.min(arr1.length, arr2.length);
    for (i = 0; i < minl; i += 1) {
        if (arr1[i] !== arr2[i]) {
            return i;
        }
    }
    return minl;
}

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0,
        j,
        next,
        locale,
        split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (
                next &&
                next.length >= j &&
                commonPrefix(split, next) >= j - 1
            ) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return globalLocale;
}

function loadLocale(name) {
    var oldLocale = null,
        aliasedRequire;
    // TODO: Find a better way to register and load all the locales in Node
    if (
        locales[name] === undefined &&
        typeof module !== 'undefined' &&
        module &&
        module.exports
    ) {
        try {
            oldLocale = globalLocale._abbr;
            aliasedRequire = require;
            !(function webpackMissingModule() { var e = new Error("Cannot find module 'undefined'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
            getSetGlobalLocale(oldLocale);
        } catch (e) {
            // mark as not found to avoid repeating expensive file require call causing high CPU
            // when trying to find en-US, en_US, en-us for every format call
            locales[name] = null; // null means not found
        }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale(key, values) {
    var data;
    if (key) {
        if (Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_1__["default"])(values)) {
            data = getLocale(key);
        } else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        } else {
            if (typeof console !== 'undefined' && console.warn) {
                //warn user if arguments are passed but the locale could not be set
                console.warn(
                    'Locale ' + key + ' not found. Did you forget to load it?'
                );
            }
        }
    }

    return globalLocale._abbr;
}

function defineLocale(name, config) {
    if (config !== null) {
        var locale,
            parentConfig = _base_config__WEBPACK_IMPORTED_MODULE_6__["baseConfig"];
        config.abbr = name;
        if (locales[name] != null) {
            Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_2__["deprecateSimple"])(
                'defineLocaleOverride',
                'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
            );
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                locale = loadLocale(config.parentLocale);
                if (locale != null) {
                    parentConfig = locale._config;
                } else {
                    if (!localeFamilies[config.parentLocale]) {
                        localeFamilies[config.parentLocale] = [];
                    }
                    localeFamilies[config.parentLocale].push({
                        name: name,
                        config: config,
                    });
                    return null;
                }
            }
        }
        locales[name] = new _constructor__WEBPACK_IMPORTED_MODULE_4__["Locale"](Object(_set__WEBPACK_IMPORTED_MODULE_3__["mergeConfigs"])(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);

        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale,
            tmpLocale,
            parentConfig = _base_config__WEBPACK_IMPORTED_MODULE_6__["baseConfig"];

        if (locales[name] != null && locales[name].parentLocale != null) {
            // Update existing child locale in-place to avoid memory-leaks
            locales[name].set(Object(_set__WEBPACK_IMPORTED_MODULE_3__["mergeConfigs"])(locales[name]._config, config));
        } else {
            // MERGE
            tmpLocale = loadLocale(name);
            if (tmpLocale != null) {
                parentConfig = tmpLocale._config;
            }
            config = Object(_set__WEBPACK_IMPORTED_MODULE_3__["mergeConfigs"])(parentConfig, config);
            if (tmpLocale == null) {
                // updateLocale is called for creating a new locale
                // Set abbr so it will have a name (getters return
                // undefined otherwise).
                config.abbr = name;
            }
            locale = new _constructor__WEBPACK_IMPORTED_MODULE_4__["Locale"](config);
            locale.parentLocale = locales[name];
            locales[name] = locale;
        }

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
                if (name === getSetGlobalLocale()) {
                    getSetGlobalLocale(name);
                }
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale(key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_0__["default"])(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return Object(_utils_keys__WEBPACK_IMPORTED_MODULE_5__["default"])(locales);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/harmony-module.js */ 93)(module)))

/***/ }),
/* 93 */
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 94 */
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/deprecate.js ***!
  \********************************************************/
/*! exports provided: deprecate, deprecateSimple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecateSimple", function() { return deprecateSimple; });
/* harmony import */ var _extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend */ 87);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ 74);
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./has-own-prop */ 81);




function warn(msg) {
    if (
        _hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].suppressDeprecationWarnings === false &&
        typeof console !== 'undefined' &&
        console.warn
    ) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return Object(_extend__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
        if (_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].deprecationHandler != null) {
            _hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [],
                arg,
                i,
                key;
            for (i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (key in arguments[0]) {
                        if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_2__["default"])(arguments[0], key)) {
                            arg += key + ': ' + arguments[0][key] + ', ';
                        }
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(
                msg +
                    '\nArguments: ' +
                    Array.prototype.slice.call(args).join('') +
                    '\n' +
                    new Error().stack
            );
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].deprecationHandler != null) {
        _hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].suppressDeprecationWarnings = false;
_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].deprecationHandler = null;


/***/ }),
/* 95 */
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/set.js ***!
  \***************************************************/
/*! exports provided: set, mergeConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeConfigs", function() { return mergeConfigs; });
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-function */ 96);
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/extend */ 87);
/* harmony import */ var _utils_is_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-object */ 79);
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/has-own-prop */ 81);





function set(config) {
    var prop, i;
    for (i in config) {
        if (Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__["default"])(config, i)) {
            prop = config[i];
            if (Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_0__["default"])(prop)) {
                this[i] = prop;
            } else {
                this['_' + i] = prop;
            }
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' +
            /\d{1,2}/.source
    );
}

function mergeConfigs(parentConfig, childConfig) {
    var res = Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__["default"])({}, parentConfig),
        prop;
    for (prop in childConfig) {
        if (Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__["default"])(childConfig, prop)) {
            if (Object(_utils_is_object__WEBPACK_IMPORTED_MODULE_2__["default"])(parentConfig[prop]) && Object(_utils_is_object__WEBPACK_IMPORTED_MODULE_2__["default"])(childConfig[prop])) {
                res[prop] = {};
                Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__["default"])(res[prop], parentConfig[prop]);
                Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__["default"])(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (
            Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__["default"])(parentConfig, prop) &&
            !Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_3__["default"])(childConfig, prop) &&
            Object(_utils_is_object__WEBPACK_IMPORTED_MODULE_2__["default"])(parentConfig[prop])
        ) {
            // make sure changes to properties don't modify parent config
            res[prop] = Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__["default"])({}, res[prop]);
        }
    }
    return res;
}


/***/ }),
/* 96 */
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-function.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isFunction; });
function isFunction(input) {
    return (
        (typeof Function !== 'undefined' && input instanceof Function) ||
        Object.prototype.toString.call(input) === '[object Function]'
    );
}


/***/ }),
/* 97 */
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/constructor.js ***!
  \***********************************************************/
/*! exports provided: Locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Locale", function() { return Locale; });
function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}


/***/ }),
/* 98 */
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/keys.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return keys; });
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-own-prop */ 81);


var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i,
            res = [];
        for (i in obj) {
            if (Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}




/***/ }),
/* 99 */
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/base-config.js ***!
  \***********************************************************/
/*! exports provided: baseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseConfig", function() { return baseConfig; });
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ 100);
/* harmony import */ var _formats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formats */ 101);
/* harmony import */ var _invalid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invalid */ 104);
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ordinal */ 105);
/* harmony import */ var _relative__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./relative */ 106);
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../units/month */ 107);
/* harmony import */ var _units_week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/week */ 119);
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../units/day-of-week */ 123);
/* harmony import */ var _units_hour__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../units/hour */ 124);






// months


// week


// weekdays


// meridiem


var baseConfig = {
    calendar: _calendar__WEBPACK_IMPORTED_MODULE_0__["defaultCalendar"],
    longDateFormat: _formats__WEBPACK_IMPORTED_MODULE_1__["defaultLongDateFormat"],
    invalidDate: _invalid__WEBPACK_IMPORTED_MODULE_2__["defaultInvalidDate"],
    ordinal: _ordinal__WEBPACK_IMPORTED_MODULE_3__["defaultOrdinal"],
    dayOfMonthOrdinalParse: _ordinal__WEBPACK_IMPORTED_MODULE_3__["defaultDayOfMonthOrdinalParse"],
    relativeTime: _relative__WEBPACK_IMPORTED_MODULE_4__["defaultRelativeTime"],

    months: _units_month__WEBPACK_IMPORTED_MODULE_5__["defaultLocaleMonths"],
    monthsShort: _units_month__WEBPACK_IMPORTED_MODULE_5__["defaultLocaleMonthsShort"],

    week: _units_week__WEBPACK_IMPORTED_MODULE_6__["defaultLocaleWeek"],

    weekdays: _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__["defaultLocaleWeekdays"],
    weekdaysMin: _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__["defaultLocaleWeekdaysMin"],
    weekdaysShort: _units_day_of_week__WEBPACK_IMPORTED_MODULE_7__["defaultLocaleWeekdaysShort"],

    meridiemParse: _units_hour__WEBPACK_IMPORTED_MODULE_8__["defaultLocaleMeridiemParse"],
};


/***/ }),
/* 100 */
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/calendar.js ***!
  \********************************************************/
/*! exports provided: defaultCalendar, calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultCalendar", function() { return defaultCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-function */ 96);
var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L',
};



function calendar(key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_0__["default"])(output) ? output.call(mom, now) : output;
}


/***/ }),
/* 101 */
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/formats.js ***!
  \*******************************************************/
/*! exports provided: defaultLongDateFormat, longDateFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLongDateFormat", function() { return defaultLongDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "longDateFormat", function() { return longDateFormat; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 102);


var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A',
};

function longDateFormat(key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper
        .match(_format_format__WEBPACK_IMPORTED_MODULE_0__["formattingTokens"])
        .map(function (tok) {
            if (
                tok === 'MMMM' ||
                tok === 'MM' ||
                tok === 'DD' ||
                tok === 'dddd'
            ) {
                return tok.slice(1);
            }
            return tok;
        })
        .join('');

    return this._longDateFormat[key];
}


/***/ }),
/* 102 */
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/format/format.js ***!
  \******************************************************/
/*! exports provided: formattingTokens, formatTokenFunctions, addFormatToken, formatMoment, expandFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formattingTokens", function() { return formattingTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTokenFunctions", function() { return formatTokenFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFormatToken", function() { return addFormatToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMoment", function() { return formatMoment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expandFormat", function() { return expandFormat; });
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/zero-fill */ 103);
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-function */ 96);



var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    formatFunctions = {},
    formatTokenFunctions = {};



// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__["default"])(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(
                func.apply(this, arguments),
                token
            );
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
        i,
        length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '',
            i;
        for (i = 0; i < length; i++) {
            output += Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_1__["default"])(array[i])
                ? array[i].call(mom, format)
                : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] =
        formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(
            localFormattingTokens,
            replaceLongDateFormatTokens
        );
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}


/***/ }),
/* 103 */
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/zero-fill.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return zeroFill; });
function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (
        (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
        absNumber
    );
}


/***/ }),
/* 104 */
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/invalid.js ***!
  \*******************************************************/
/*! exports provided: defaultInvalidDate, invalidDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultInvalidDate", function() { return defaultInvalidDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidDate", function() { return invalidDate; });
var defaultInvalidDate = 'Invalid date';

function invalidDate() {
    return this._invalidDate;
}


/***/ }),
/* 105 */
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/ordinal.js ***!
  \*******************************************************/
/*! exports provided: defaultOrdinal, defaultDayOfMonthOrdinalParse, ordinal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOrdinal", function() { return defaultOrdinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDayOfMonthOrdinalParse", function() { return defaultDayOfMonthOrdinalParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinal", function() { return ordinal; });
var defaultOrdinal = '%d',
    defaultDayOfMonthOrdinalParse = /\d{1,2}/;



function ordinal(number) {
    return this._ordinal.replace('%d', number);
}


/***/ }),
/* 106 */
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/relative.js ***!
  \********************************************************/
/*! exports provided: defaultRelativeTime, relativeTime, pastFuture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRelativeTime", function() { return defaultRelativeTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relativeTime", function() { return relativeTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pastFuture", function() { return pastFuture; });
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-function */ 96);
var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    w: 'a week',
    ww: '%d weeks',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years',
};



function relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_0__["default"])(output)
        ? output(number, withoutSuffix, string, isFuture)
        : output.replace(/%d/i, number);
}

function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_0__["default"])(format) ? format(output) : format.replace(/%s/i, output);
}


/***/ }),
/* 107 */
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/month.js ***!
  \****************************************************/
/*! exports provided: daysInMonth, defaultLocaleMonths, defaultLocaleMonthsShort, localeMonths, localeMonthsShort, localeMonthsParse, setMonth, getSetMonth, getDaysInMonth, monthsShortRegex, monthsRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysInMonth", function() { return daysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleMonths", function() { return defaultLocaleMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleMonthsShort", function() { return defaultLocaleMonthsShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeMonths", function() { return localeMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeMonthsShort", function() { return localeMonthsShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeMonthsParse", function() { return localeMonthsParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMonth", function() { return setMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetMonth", function() { return getSetMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDaysInMonth", function() { return getDaysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthsShortRegex", function() { return monthsShortRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthsRegex", function() { return monthsRegex; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ 108);
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/has-own-prop */ 81);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aliases */ 109);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./priorities */ 110);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/regex */ 114);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parse/token */ 115);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ 74);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ 116);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/to-int */ 112);
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/is-array */ 78);
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/is-number */ 83);
/* harmony import */ var _utils_mod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/mod */ 117);
/* harmony import */ var _utils_index_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/index-of */ 118);
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../create/utc */ 88);
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../create/parsing-flags */ 89);
/* harmony import */ var _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/is-leap-year */ 111);


















function daysInMonth(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var modMonth = Object(_utils_mod__WEBPACK_IMPORTED_MODULE_12__["default"])(month, 12);
    year += (month - modMonth) / 12;
    return modMonth === 1
        ? Object(_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_16__["isLeapYear"])(year)
            ? 29
            : 28
        : 31 - ((modMonth % 7) % 2);
}

// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_2__["addFormatToken"])('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_2__["addFormatToken"])('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_2__["addFormatToken"])('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_3__["addUnitAlias"])('month', 'M');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_4__["addUnitPriority"])('month', 8);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('M', _parse_regex__WEBPACK_IMPORTED_MODULE_5__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('MM', _parse_regex__WEBPACK_IMPORTED_MODULE_5__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_5__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('MMM', function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_6__["addParseToken"])(['M', 'MM'], function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__["MONTH"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_9__["default"])(input) - 1;
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_6__["addParseToken"])(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[_constants__WEBPACK_IMPORTED_MODULE_8__["MONTH"]] = month;
    } else {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_15__["default"])(config).invalidMonth = input;
    }
});

// LOCALES

var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
        '_'
    ),
    defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split(
        '_'
    ),
    MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    defaultMonthsShortRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchWord"],
    defaultMonthsRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchWord"];



function localeMonths(m, format) {
    if (!m) {
        return Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_10__["default"])(this._months)
            ? this._months
            : this._months['standalone'];
    }
    return Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_10__["default"])(this._months)
        ? this._months[m.month()]
        : this._months[
              (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                  ? 'format'
                  : 'standalone'
          ][m.month()];
}

function localeMonthsShort(m, format) {
    if (!m) {
        return Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_10__["default"])(this._monthsShort)
            ? this._monthsShort
            : this._monthsShort['standalone'];
    }
    return Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_10__["default"])(this._monthsShort)
        ? this._monthsShort[m.month()]
        : this._monthsShort[
              MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
          ][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i,
        ii,
        mom,
        llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_14__["createUTC"])([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(
                mom,
                ''
            ).toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_13__["default"].call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse(monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_14__["createUTC"])([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp(
                '^' + this.months(mom, '').replace('.', '') + '$',
                'i'
            );
            this._shortMonthsParse[i] = new RegExp(
                '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                'i'
            );
        }
        if (!strict && !this._monthsParse[i]) {
            regex =
                '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (
            strict &&
            format === 'MMMM' &&
            this._longMonthsParse[i].test(monthName)
        ) {
            return i;
        } else if (
            strict &&
            format === 'MMM' &&
            this._shortMonthsParse[i].test(monthName)
        ) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth(mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_9__["default"])(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_11__["default"])(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth(value) {
    if (value != null) {
        setMonth(this, value);
        _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].updateOffset(this, true);
        return this;
    } else {
        return Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["get"])(this, 'Month');
    }
}

function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
}

function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex;
    }
}

function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict
            ? this._monthsStrictRegex
            : this._monthsRegex;
    }
}

function computeMonthsParse() {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_14__["createUTC"])([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["regexEscape"])(shortPieces[i]);
        longPieces[i] = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["regexEscape"])(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["regexEscape"])(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp(
        '^(' + longPieces.join('|') + ')',
        'i'
    );
    this._monthsShortStrictRegex = new RegExp(
        '^(' + shortPieces.join('|') + ')',
        'i'
    );
}


/***/ }),
/* 108 */
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/get-set.js ***!
  \*******************************************************/
/*! exports provided: makeGetSet, get, set, stringGet, stringSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeGetSet", function() { return makeGetSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringGet", function() { return stringGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringSet", function() { return stringSet; });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ 109);
/* harmony import */ var _units_priorities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/priorities */ 110);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hooks */ 74);
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/is-function */ 96);
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units/month */ 107);
/* harmony import */ var _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-leap-year */ 111);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/to-int */ 112);








function makeGetSet(unit, keepTime) {
    return function (value) {
        if (value != null) {
            set(this, unit, value);
            _utils_hooks__WEBPACK_IMPORTED_MODULE_2__["hooks"].updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get(mom, unit) {
    return mom.isValid()
        ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
        : NaN;
}

function set(mom, unit, value) {
    if (mom.isValid() && !isNaN(value)) {
        if (
            unit === 'FullYear' &&
            Object(_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_5__["isLeapYear"])(mom.year()) &&
            mom.month() === 1 &&
            mom.date() === 29
        ) {
            value = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_6__["default"])(value);
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                value,
                mom.month(),
                Object(_units_month__WEBPACK_IMPORTED_MODULE_4__["daysInMonth"])(value, mom.month())
            );
        } else {
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
        }
    }
}

// MOMENTS

function stringGet(units) {
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeUnits"])(units);
    if (Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_3__["default"])(this[units])) {
        return this[units]();
    }
    return this;
}

function stringSet(units, value) {
    if (typeof units === 'object') {
        units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeObjectUnits"])(units);
        var prioritized = Object(_units_priorities__WEBPACK_IMPORTED_MODULE_1__["getPrioritizedUnits"])(units),
            i;
        for (i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeUnits"])(units);
        if (Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_3__["default"])(this[units])) {
            return this[units](value);
        }
    }
    return this;
}


/***/ }),
/* 109 */
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/units/aliases.js ***!
  \******************************************************/
/*! exports provided: addUnitAlias, normalizeUnits, normalizeObjectUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUnitAlias", function() { return addUnitAlias; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeUnits", function() { return normalizeUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeObjectUnits", function() { return normalizeObjectUnits; });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ 81);


var aliases = {};

function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string'
        ? aliases[units] || aliases[units.toLowerCase()]
        : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}


/***/ }),
/* 110 */
/*!*********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/priorities.js ***!
  \*********************************************************/
/*! exports provided: addUnitPriority, getPrioritizedUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUnitPriority", function() { return addUnitPriority; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrioritizedUnits", function() { return getPrioritizedUnits; });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ 81);


var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [],
        u;
    for (u in unitsObj) {
        if (Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(unitsObj, u)) {
            units.push({ unit: u, priority: priorities[u] });
        }
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}


/***/ }),
/* 111 */
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-leap-year.js ***!
  \***********************************************************/
/*! exports provided: isLeapYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLeapYear", function() { return isLeapYear; });
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}


/***/ }),
/* 112 */
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/to-int.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toInt; });
/* harmony import */ var _abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abs-floor */ 113);


function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = Object(_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(coercedNumber);
    }

    return value;
}


/***/ }),
/* 113 */
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/abs-floor.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return absFloor; });
function absFloor(number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}


/***/ }),
/* 114 */
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/parse/regex.js ***!
  \****************************************************/
/*! exports provided: match1, match2, match3, match4, match6, match1to2, match3to4, match5to6, match1to3, match1to4, match1to6, matchUnsigned, matchSigned, matchOffset, matchShortOffset, matchTimestamp, matchWord, addRegexToken, getParseRegexForToken, regexEscape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1", function() { return match1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match2", function() { return match2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match3", function() { return match3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match4", function() { return match4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match6", function() { return match6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1to2", function() { return match1to2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match3to4", function() { return match3to4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match5to6", function() { return match5to6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1to3", function() { return match1to3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1to4", function() { return match1to4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match1to6", function() { return match1to6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchUnsigned", function() { return matchUnsigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchSigned", function() { return matchSigned; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchOffset", function() { return matchOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchShortOffset", function() { return matchShortOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchTimestamp", function() { return matchTimestamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchWord", function() { return matchWord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRegexToken", function() { return addRegexToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParseRegexForToken", function() { return getParseRegexForToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regexEscape", function() { return regexEscape; });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ 81);
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-function */ 96);
var match1 = /\d/, //       0 - 9
    match2 = /\d\d/, //      00 - 99
    match3 = /\d{3}/, //     000 - 999
    match4 = /\d{4}/, //    0000 - 9999
    match6 = /[+-]?\d{6}/, // -999999 - 999999
    match1to2 = /\d\d?/, //       0 - 99
    match3to4 = /\d\d\d\d?/, //     999 - 9999
    match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
    match1to3 = /\d{1,3}/, //       0 - 999
    match1to4 = /\d{1,4}/, //       0 - 9999
    match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
    matchUnsigned = /\d+/, //       0 - inf
    matchSigned = /[+-]?\d+/, //    -inf - inf
    matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
    matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
    matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
    // any word (or two) characters or numbers including two/three word month in arabic.
    // includes scottish gaelic two word and hyphenated months
    matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    regexes;






regexes = {};

function addRegexToken(token, regex, strictRegex) {
    regexes[token] = Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_1__["default"])(regex)
        ? regex
        : function (isStrict, localeData) {
              return isStrict && strictRegex ? strictRegex : regex;
          };
}

function getParseRegexForToken(token, config) {
    if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(
        s
            .replace('\\', '')
            .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (
                matched,
                p1,
                p2,
                p3,
                p4
            ) {
                return p1 || p2 || p3 || p4;
            })
    );
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}


/***/ }),
/* 115 */
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/parse/token.js ***!
  \****************************************************/
/*! exports provided: addParseToken, addWeekParseToken, addTimeToArrayFromToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addParseToken", function() { return addParseToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWeekParseToken", function() { return addWeekParseToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTimeToArrayFromToken", function() { return addTimeToArrayFromToken; });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ 81);
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-number */ 83);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ 112);




var tokens = {};

function addParseToken(token, callback) {
    var i,
        func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_1__["default"])(callback)) {
        func = function (input, array) {
            array[callback] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}


/***/ }),
/* 116 */
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/constants.js ***!
  \********************************************************/
/*! exports provided: YEAR, MONTH, DATE, HOUR, MINUTE, SECOND, MILLISECOND, WEEK, WEEKDAY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YEAR", function() { return YEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTH", function() { return MONTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE", function() { return DATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOUR", function() { return HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUTE", function() { return MINUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECOND", function() { return SECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MILLISECOND", function() { return MILLISECOND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEK", function() { return WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEEKDAY", function() { return WEEKDAY; });
var YEAR = 0,
    MONTH = 1,
    DATE = 2,
    HOUR = 3,
    MINUTE = 4,
    SECOND = 5,
    MILLISECOND = 6,
    WEEK = 7,
    WEEKDAY = 8;


/***/ }),
/* 117 */
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/mod.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mod; });
function mod(n, x) {
    return ((n % x) + x) % x;
}


/***/ }),
/* 118 */
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/index-of.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return indexOf; });
var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}




/***/ }),
/* 119 */
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/units/week.js ***!
  \***************************************************/
/*! exports provided: localeWeek, defaultLocaleWeek, localeFirstDayOfWeek, localeFirstDayOfYear, getSetWeek, getSetISOWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeWeek", function() { return localeWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleWeek", function() { return defaultLocaleWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeFirstDayOfWeek", function() { return localeFirstDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeFirstDayOfYear", function() { return localeFirstDayOfYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetWeek", function() { return getSetWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetISOWeek", function() { return getSetISOWeek; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ 109);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ 110);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ 114);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ 115);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/to-int */ 112);
/* harmony import */ var _week_calendar_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./week-calendar-utils */ 120);








// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('w', ['ww', 2], 'wo', 'week');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('week', 'w');
Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('isoWeek', 'W');

// PRIORITIES

Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('week', 5);
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('isoWeek', 5);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('w', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('ww', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('W', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('WW', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['w', 'ww', 'W', 'WW'], function (
    input,
    week,
    config,
    token
) {
    week[token.substr(0, 1)] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_5__["default"])(input);
});

// HELPERS

// LOCALES

function localeWeek(mom) {
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_6__["weekOfYear"])(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow: 0, // Sunday is the first day of the week.
    doy: 6, // The week that contains Jan 6th is the first week of the year.
};

function localeFirstDayOfWeek() {
    return this._week.dow;
}

function localeFirstDayOfYear() {
    return this._week.doy;
}

// MOMENTS

function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek(input) {
    var week = Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_6__["weekOfYear"])(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}


/***/ }),
/* 120 */
/*!******************************************************************!*\
  !*** ./node_modules/moment/src/lib/units/week-calendar-utils.js ***!
  \******************************************************************/
/*! exports provided: dayOfYearFromWeeks, weekOfYear, weeksInYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayOfYearFromWeeks", function() { return dayOfYearFromWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekOfYear", function() { return weekOfYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weeksInYear", function() { return weeksInYear; });
/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./year */ 121);
/* harmony import */ var _create_date_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/date-from-array */ 122);



// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + Object(_create_date_from_array__WEBPACK_IMPORTED_MODULE_1__["createUTCDate"])(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear,
        resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = Object(_year__WEBPACK_IMPORTED_MODULE_0__["daysInYear"])(resYear) + dayOfYear;
    } else if (dayOfYear > Object(_year__WEBPACK_IMPORTED_MODULE_0__["daysInYear"])(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - Object(_year__WEBPACK_IMPORTED_MODULE_0__["daysInYear"])(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear,
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek,
        resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear,
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (Object(_year__WEBPACK_IMPORTED_MODULE_0__["daysInYear"])(year) - weekOffset + weekOffsetNext) / 7;
}


/***/ }),
/* 121 */
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/units/year.js ***!
  \***************************************************/
/*! exports provided: daysInYear, isLeapYear, getSetYear, getIsLeapYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysInYear", function() { return daysInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetYear", function() { return getSetYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLeapYear", function() { return getIsLeapYear; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ 108);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ 109);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ 110);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ 114);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ 115);
/* harmony import */ var _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/is-leap-year */ 111);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isLeapYear", function() { return _utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__["isLeapYear"]; });

/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ 74);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ 116);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/to-int */ 112);
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/zero-fill */ 103);












// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_10__["default"])(y, 4) : '+' + y;
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['YYYY', 4], 0, 'year');
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['YYYYY', 5], 0, 'year');
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('year', 'y');

// PRIORITIES

Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('year', 1);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('Y', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["matchSigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('YY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('YYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to4"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('YYYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to6"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match6"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('YYYYYY', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to6"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match6"]);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['YYYYY', 'YYYYYY'], _constants__WEBPACK_IMPORTED_MODULE_8__["YEAR"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('YYYY', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__["YEAR"]] =
        input.length === 2 ? _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].parseTwoDigitYear(input) : Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_9__["default"])(input);
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('YY', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__["YEAR"]] = _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].parseTwoDigitYear(input);
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('Y', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_8__["YEAR"]] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return Object(_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__["isLeapYear"])(year) ? 366 : 365;
}



// HOOKS

_utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].parseTwoDigitYear = function (input) {
    return Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_9__["default"])(input) + (Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_9__["default"])(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('FullYear', true);

function getIsLeapYear() {
    return Object(_utils_is_leap_year__WEBPACK_IMPORTED_MODULE_6__["isLeapYear"])(this.year());
}


/***/ }),
/* 122 */
/*!***************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/date-from-array.js ***!
  \***************************************************************/
/*! exports provided: createDate, createUTCDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDate", function() { return createDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUTCDate", function() { return createUTCDate; });
function createDate(y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date;
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        date = new Date(y + 400, m, d, h, M, s, ms);
        if (isFinite(date.getFullYear())) {
            date.setFullYear(y);
        }
    } else {
        date = new Date(y, m, d, h, M, s, ms);
    }

    return date;
}

function createUTCDate(y) {
    var date, args;
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        args = Array.prototype.slice.call(arguments);
        // preserve leap years using a full 400 year cycle, then reset
        args[0] = y + 400;
        date = new Date(Date.UTC.apply(null, args));
        if (isFinite(date.getUTCFullYear())) {
            date.setUTCFullYear(y);
        }
    } else {
        date = new Date(Date.UTC.apply(null, arguments));
    }

    return date;
}


/***/ }),
/* 123 */
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/day-of-week.js ***!
  \**********************************************************/
/*! exports provided: defaultLocaleWeekdays, defaultLocaleWeekdaysShort, defaultLocaleWeekdaysMin, localeWeekdays, localeWeekdaysShort, localeWeekdaysMin, localeWeekdaysParse, getSetDayOfWeek, getSetLocaleDayOfWeek, getSetISODayOfWeek, weekdaysRegex, weekdaysShortRegex, weekdaysMinRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleWeekdays", function() { return defaultLocaleWeekdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleWeekdaysShort", function() { return defaultLocaleWeekdaysShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleWeekdaysMin", function() { return defaultLocaleWeekdaysMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeWeekdays", function() { return localeWeekdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeWeekdaysShort", function() { return localeWeekdaysShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeWeekdaysMin", function() { return localeWeekdaysMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeWeekdaysParse", function() { return localeWeekdaysParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetDayOfWeek", function() { return getSetDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetLocaleDayOfWeek", function() { return getSetLocaleDayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetISODayOfWeek", function() { return getSetISODayOfWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekdaysRegex", function() { return weekdaysRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekdaysShortRegex", function() { return weekdaysShortRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekdaysMinRegex", function() { return weekdaysMinRegex; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ 109);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ 110);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ 114);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ 115);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/to-int */ 112);
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/is-array */ 78);
/* harmony import */ var _utils_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/index-of */ 118);
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/has-own-prop */ 81);
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/utc */ 88);
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../create/parsing-flags */ 89);












// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('d', 0, 'do', 'day');

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('e', 0, 0, 'weekday');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('E', 0, 0, 'isoWeekday');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('day', 'd');
Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('weekday', 'e');
Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('isoWeekday', 'E');

// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('day', 11);
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('weekday', 11);
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('isoWeekday', 11);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('d', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('e', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('E', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('dd', function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('ddd', function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('dddd', function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_10__["default"])(config).invalidWeekday = input;
    }
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_5__["default"])(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES
function shiftWeekdays(ws, n) {
    return ws.slice(n, 7).concat(ws.slice(0, n));
}

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
        '_'
    ),
    defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    defaultWeekdaysRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchWord"],
    defaultWeekdaysShortRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchWord"],
    defaultWeekdaysMinRegex = _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchWord"];



function localeWeekdays(m, format) {
    var weekdays = Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_6__["default"])(this._weekdays)
        ? this._weekdays
        : this._weekdays[
              m && m !== true && this._weekdays.isFormat.test(format)
                  ? 'format'
                  : 'standalone'
          ];
    return m === true
        ? shiftWeekdays(weekdays, this._week.dow)
        : m
        ? weekdays[m.day()]
        : weekdays;
}

function localeWeekdaysShort(m) {
    return m === true
        ? shiftWeekdays(this._weekdaysShort, this._week.dow)
        : m
        ? this._weekdaysShort[m.day()]
        : this._weekdaysShort;
}

function localeWeekdaysMin(m) {
    return m === true
        ? shiftWeekdays(this._weekdaysMin, this._week.dow)
        : m
        ? this._weekdaysMin[m.day()]
        : this._weekdaysMin;
}

function handleStrictParse(weekdayName, format, strict) {
    var i,
        ii,
        mom,
        llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_9__["createUTC"])([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(
                mom,
                ''
            ).toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(
                mom,
                ''
            ).toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = _utils_index_of__WEBPACK_IMPORTED_MODULE_7__["default"].call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse(weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_9__["createUTC"])([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp(
                '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                'i'
            );
            this._shortWeekdaysParse[i] = new RegExp(
                '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                'i'
            );
            this._minWeekdaysParse[i] = new RegExp(
                '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                'i'
            );
        }
        if (!this._weekdaysParse[i]) {
            regex =
                '^' +
                this.weekdays(mom, '') +
                '|^' +
                this.weekdaysShort(mom, '') +
                '|^' +
                this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (
            strict &&
            format === 'dddd' &&
            this._fullWeekdaysParse[i].test(weekdayName)
        ) {
            return i;
        } else if (
            strict &&
            format === 'ddd' &&
            this._shortWeekdaysParse[i].test(weekdayName)
        ) {
            return i;
        } else if (
            strict &&
            format === 'dd' &&
            this._minWeekdaysParse[i].test(weekdayName)
        ) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex;
    }
}

function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex;
    }
}

function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_8__["default"])(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex;
    }
}

function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [],
        shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom,
        minp,
        shortp,
        longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = Object(_create_utc__WEBPACK_IMPORTED_MODULE_9__["createUTC"])([2000, 1]).day(i);
        minp = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["regexEscape"])(this.weekdaysMin(mom, ''));
        shortp = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["regexEscape"])(this.weekdaysShort(mom, ''));
        longp = Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["regexEscape"])(this.weekdays(mom, ''));
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp(
        '^(' + longPieces.join('|') + ')',
        'i'
    );
    this._weekdaysShortStrictRegex = new RegExp(
        '^(' + shortPieces.join('|') + ')',
        'i'
    );
    this._weekdaysMinStrictRegex = new RegExp(
        '^(' + minPieces.join('|') + ')',
        'i'
    );
}


/***/ }),
/* 124 */
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/units/hour.js ***!
  \***************************************************/
/*! exports provided: localeIsPM, defaultLocaleMeridiemParse, getSetHour, localeMeridiem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeIsPM", function() { return localeIsPM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultLocaleMeridiemParse", function() { return defaultLocaleMeridiemParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetHour", function() { return getSetHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeMeridiem", function() { return localeMeridiem; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ 108);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ 109);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ 110);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ 114);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ 115);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ 116);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-int */ 112);
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/zero-fill */ 103);
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/parsing-flags */ 89);











// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('H', ['HH', 2], 0, 'hour');
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('h', ['hh', 2], 0, hFormat);
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('k', ['kk', 2], 0, kFormat);

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.minutes(), 2);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('hmmss', 0, 0, function () {
    return (
        '' +
        hFormat.apply(this) +
        Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.minutes(), 2) +
        Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.seconds(), 2)
    );
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('Hmm', 0, 0, function () {
    return '' + this.hours() + Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.minutes(), 2);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('Hmmss', 0, 0, function () {
    return (
        '' +
        this.hours() +
        Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.minutes(), 2) +
        Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_8__["default"])(this.seconds(), 2)
    );
});

function meridiem(token, lowercase) {
    Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(token, 0, 0, function () {
        return this.localeData().meridiem(
            this.hours(),
            this.minutes(),
            lowercase
        );
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('hour', 'h');

// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('hour', 13);

// PARSING

function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
}

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('a', matchMeridiem);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('A', matchMeridiem);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('H', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('h', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('k', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('HH', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('hh', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('kk', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('hmm', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match3to4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('hmmss', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match5to6"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('Hmm', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match3to4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('Hmmss', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match5to6"]);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['H', 'HH'], _constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['k', 'kk'], function (input, array, config) {
    var kInput = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input);
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = kInput === 24 ? 0 : kInput;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['h', 'hh'], function (input, array, config) {
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input);
    Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__["default"])(config).bigHour = true;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(0, pos));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["MINUTE"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos));
    Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__["default"])(config).bigHour = true;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('hmmss', function (input, array, config) {
    var pos1 = input.length - 4,
        pos2 = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(0, pos1));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["MINUTE"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos1, 2));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["SECOND"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos2));
    Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_9__["default"])(config).bigHour = true;
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(0, pos));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["MINUTE"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos));
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4,
        pos2 = input.length - 2;
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(0, pos1));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["MINUTE"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos1, 2));
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["SECOND"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.substr(pos2));
});

// LOCALES

function localeIsPM(input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return (input + '').toLowerCase().charAt(0) === 'p';
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
    // Setting the hour should keep the time, because the user explicitly
    // specified which hour they want. So trying to maintain the same hour (in
    // a new timezone) makes sense. Adding/subtracting hours does not follow
    // this rule.
    getSetHour = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('Hours', true);

function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


/***/ }),
/* 125 */
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/check-overflow.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkOverflow; });
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/month */ 107);
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/constants */ 116);
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ 89);




function checkOverflow(m) {
    var overflow,
        a = m._a;

    if (a && Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m).overflow === -2) {
        overflow =
            a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MONTH"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MONTH"]] > 11
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["MONTH"]
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"]] < 1 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"]] > Object(_units_month__WEBPACK_IMPORTED_MODULE_0__["daysInMonth"])(a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["YEAR"]], a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MONTH"]])
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"]
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["HOUR"]] < 0 ||
                  a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["HOUR"]] > 24 ||
                  (a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["HOUR"]] === 24 &&
                      (a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MINUTE"]] !== 0 ||
                          a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["SECOND"]] !== 0 ||
                          a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MILLISECOND"]] !== 0))
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["HOUR"]
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MINUTE"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MINUTE"]] > 59
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["MINUTE"]
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["SECOND"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["SECOND"]] > 59
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["SECOND"]
                : a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MILLISECOND"]] < 0 || a[_units_constants__WEBPACK_IMPORTED_MODULE_1__["MILLISECOND"]] > 999
                ? _units_constants__WEBPACK_IMPORTED_MODULE_1__["MILLISECOND"]
                : -1;

        if (
            Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m)._overflowDayOfYear &&
            (overflow < _units_constants__WEBPACK_IMPORTED_MODULE_1__["YEAR"] || overflow > _units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"])
        ) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__["DATE"];
        }
        if (Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m)._overflowWeeks && overflow === -1) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__["WEEK"];
        }
        if (Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m)._overflowWeekday && overflow === -1) {
            overflow = _units_constants__WEBPACK_IMPORTED_MODULE_1__["WEEKDAY"];
        }

        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(m).overflow = overflow;
    }

    return m;
}


/***/ }),
/* 126 */
/*!*********************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-string-and-array.js ***!
  \*********************************************************************/
/*! exports provided: configFromStringAndArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromStringAndArray", function() { return configFromStringAndArray; });
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/constructor */ 91);
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-string-and-format */ 127);
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsing-flags */ 89);
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./valid */ 86);
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/extend */ 87);






// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,
        scoreToBeat,
        i,
        currentScore,
        validFormatFound,
        bestFormatIsValid = false;

    if (config._f.length === 0) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        validFormatFound = false;
        tempConfig = Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_0__["copyConfig"])({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        Object(_from_string_and_format__WEBPACK_IMPORTED_MODULE_1__["configFromStringAndFormat"])(tempConfig);

        if (Object(_valid__WEBPACK_IMPORTED_MODULE_3__["isValid"])(tempConfig)) {
            validFormatFound = true;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(tempConfig).charsLeftOver;

        //or tokens
        currentScore += Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(tempConfig).unusedTokens.length * 10;

        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(tempConfig).score = currentScore;

        if (!bestFormatIsValid) {
            if (
                scoreToBeat == null ||
                currentScore < scoreToBeat ||
                validFormatFound
            ) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
                if (validFormatFound) {
                    bestFormatIsValid = true;
                }
            }
        } else {
            if (currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }
    }

    Object(_utils_extend__WEBPACK_IMPORTED_MODULE_4__["default"])(config, bestMoment || tempConfig);
}


/***/ }),
/* 127 */
/*!**********************************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-string-and-format.js ***!
  \**********************************************************************/
/*! exports provided: configFromStringAndFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromStringAndFormat", function() { return configFromStringAndFormat; });
/* harmony import */ var _from_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-string */ 128);
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-array */ 129);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/regex */ 114);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/token */ 115);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _check_overflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./check-overflow */ 125);
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/constants */ 116);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ 74);
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parsing-flags */ 89);










// constant that refers to the ISO standard
_utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
_utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].ISO_8601) {
        Object(_from_string__WEBPACK_IMPORTED_MODULE_0__["configFromISO"])(config);
        return;
    }
    if (config._f === _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].RFC_2822) {
        Object(_from_string__WEBPACK_IMPORTED_MODULE_0__["configFromRFC2822"])(config);
        return;
    }
    config._a = [];
    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0,
        era;

    tokens =
        Object(_format_format__WEBPACK_IMPORTED_MODULE_4__["expandFormat"])(config._f, config._locale).match(_format_format__WEBPACK_IMPORTED_MODULE_4__["formattingTokens"]) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_2__["getParseRegexForToken"])(token, config)) ||
            [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).unusedInput.push(skipped);
            }
            string = string.slice(
                string.indexOf(parsedInput) + parsedInput.length
            );
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (_format_format__WEBPACK_IMPORTED_MODULE_4__["formatTokenFunctions"][token]) {
            if (parsedInput) {
                Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).empty = false;
            } else {
                Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).unusedTokens.push(token);
            }
            Object(_parse_token__WEBPACK_IMPORTED_MODULE_3__["addTimeToArrayFromToken"])(token, parsedInput, config);
        } else if (config._strict && !parsedInput) {
            Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).charsLeftOver =
        stringLength - totalParsedInputLength;
    if (string.length > 0) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] <= 12 &&
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).bigHour === true &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] > 0
    ) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).bigHour = undefined;
    }

    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).parsedDateParts = config._a.slice(0);
    Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]] = meridiemFixWrap(
        config._locale,
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["HOUR"]],
        config._meridiem
    );

    // handle era
    era = Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_8__["default"])(config).era;
    if (era !== null) {
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["YEAR"]] = config._locale.erasConvertYear(era, config._a[_units_constants__WEBPACK_IMPORTED_MODULE_6__["YEAR"]]);
    }

    Object(_from_array__WEBPACK_IMPORTED_MODULE_1__["configFromArray"])(config);
    Object(_check_overflow__WEBPACK_IMPORTED_MODULE_5__["default"])(config);
}

function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}


/***/ }),
/* 128 */
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-string.js ***!
  \***********************************************************/
/*! exports provided: configFromISO, configFromRFC2822, configFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromISO", function() { return configFromISO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromRFC2822", function() { return configFromRFC2822; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromString", function() { return configFromString; });
/* harmony import */ var _from_string_and_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./from-string-and-format */ 127);
/* harmony import */ var _date_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-from-array */ 122);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/hooks */ 74);
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/deprecate */ 94);
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parsing-flags */ 89);
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../units/month */ 107);
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/day-of-week */ 123);








// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
    isoDates = [
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
        ['YYYY-DDD', /\d{4}-\d{3}/],
        ['YYYY-MM', /\d{4}-\d\d/, false],
        ['YYYYYYMMDD', /[+-]\d{10}/],
        ['YYYYMMDD', /\d{8}/],
        ['GGGG[W]WWE', /\d{4}W\d{3}/],
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
        ['YYYYDDD', /\d{7}/],
        ['YYYYMM', /\d{6}/, false],
        ['YYYY', /\d{4}/, false],
    ],
    // iso time formats and regexes
    isoTimes = [
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
        ['HH:mm', /\d\d:\d\d/],
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
        ['HHmmss', /\d\d\d\d\d\d/],
        ['HHmm', /\d\d\d\d/],
        ['HH', /\d\d/],
    ],
    aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
    rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    obsOffsets = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60,
    };

// date from iso format
function configFromISO(config) {
    var i,
        l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime,
        dateFormat,
        timeFormat,
        tzFormat;

    if (match) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_4__["default"])(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        Object(_from_string_and_format__WEBPACK_IMPORTED_MODULE_0__["configFromStringAndFormat"])(config);
    } else {
        config._isValid = false;
    }
}

function extractFromRFC2822Strings(
    yearStr,
    monthStr,
    dayStr,
    hourStr,
    minuteStr,
    secondStr
) {
    var result = [
        untruncateYear(yearStr),
        _units_month__WEBPACK_IMPORTED_MODULE_5__["defaultLocaleMonthsShort"].indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10),
    ];

    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }

    return result;
}

function untruncateYear(yearStr) {
    var year = parseInt(yearStr, 10);
    if (year <= 49) {
        return 2000 + year;
    } else if (year <= 999) {
        return 1900 + year;
    }
    return year;
}

function preprocessRFC2822(s) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return s
        .replace(/\([^)]*\)|[\n\t]/g, ' ')
        .replace(/(\s\s+)/g, ' ')
        .replace(/^\s\s*/, '')
        .replace(/\s\s*$/, '');
}

function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
        var weekdayProvided = _units_day_of_week__WEBPACK_IMPORTED_MODULE_6__["defaultLocaleWeekdaysShort"].indexOf(weekdayStr),
            weekdayActual = new Date(
                parsedInput[0],
                parsedInput[1],
                parsedInput[2]
            ).getDay();
        if (weekdayProvided !== weekdayActual) {
            Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_4__["default"])(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}

function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    } else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    } else {
        var hm = parseInt(numOffset, 10),
            m = hm % 100,
            h = (hm - m) / 100;
        return h * 60 + m;
    }
}

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var match = rfc2822.exec(preprocessRFC2822(config._i)),
        parsedArray;
    if (match) {
        parsedArray = extractFromRFC2822Strings(
            match[4],
            match[3],
            match[2],
            match[5],
            match[6],
            match[7]
        );
        if (!checkWeekday(match[1], parsedArray, config)) {
            return;
        }

        config._a = parsedArray;
        config._tzm = calculateOffset(match[8], match[9], match[10]);

        config._d = _date_from_array__WEBPACK_IMPORTED_MODULE_1__["createUTCDate"].apply(null, config._a);
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_4__["default"])(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    if (config._strict) {
        config._isValid = false;
    } else {
        // Final attempt, use Input Fallback
        _utils_hooks__WEBPACK_IMPORTED_MODULE_2__["hooks"].createFromInputFallback(config);
    }
}

_utils_hooks__WEBPACK_IMPORTED_MODULE_2__["hooks"].createFromInputFallback = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__["deprecate"])(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
        'discouraged and will be removed in an upcoming major release. Please refer to ' +
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);


/***/ }),
/* 129 */
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-array.js ***!
  \**********************************************************/
/*! exports provided: configFromArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromArray", function() { return configFromArray; });
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/hooks */ 74);
/* harmony import */ var _date_from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date-from-array */ 122);
/* harmony import */ var _units_year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../units/year */ 121);
/* harmony import */ var _units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../units/week-calendar-utils */ 120);
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../units/constants */ 116);
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./local */ 76);
/* harmony import */ var _utils_defaults__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/defaults */ 130);
/* harmony import */ var _parsing_flags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parsing-flags */ 89);









function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(_utils_hooks__WEBPACK_IMPORTED_MODULE_0__["hooks"].now());
    if (config._useUTC) {
        return [
            nowValue.getUTCFullYear(),
            nowValue.getUTCMonth(),
            nowValue.getUTCDate(),
        ];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray(config) {
    var i,
        date,
        input = [],
        currentDate,
        expectedWeekday,
        yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["DATE"]] == null && config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["MONTH"]] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]], currentDate[_units_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]]);

        if (
            config._dayOfYear > Object(_units_year__WEBPACK_IMPORTED_MODULE_2__["daysInYear"])(yearToUse) ||
            config._dayOfYear === 0
        ) {
            Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_7__["default"])(config)._overflowDayOfYear = true;
        }

        date = Object(_date_from_array__WEBPACK_IMPORTED_MODULE_1__["createUTCDate"])(yearToUse, 0, config._dayOfYear);
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["MONTH"]] = date.getUTCMonth();
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["DATE"]] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] =
            config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["HOUR"]] === 24 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["MINUTE"]] === 0 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["SECOND"]] === 0 &&
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["MILLISECOND"]] === 0
    ) {
        config._nextDay = true;
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["HOUR"]] = 0;
    }

    config._d = (config._useUTC ? _date_from_array__WEBPACK_IMPORTED_MODULE_1__["createUTCDate"] : _date_from_array__WEBPACK_IMPORTED_MODULE_1__["createDate"]).apply(
        null,
        input
    );
    expectedWeekday = config._useUTC
        ? config._d.getUTCDay()
        : config._d.getDay();

    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["HOUR"]] = 24;
    }

    // check for mismatching day of week
    if (
        config._w &&
        typeof config._w.d !== 'undefined' &&
        config._w.d !== expectedWeekday
    ) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_7__["default"])(config).weekdayMismatch = true;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(
            w.GG,
            config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]],
            Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__["weekOfYear"])(Object(_local__WEBPACK_IMPORTED_MODULE_5__["createLocal"])(), 1, 4).year
        );
        week = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(w.W, 1);
        weekday = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        curWeek = Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__["weekOfYear"])(Object(_local__WEBPACK_IMPORTED_MODULE_5__["createLocal"])(), dow, doy);

        weekYear = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(w.gg, config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]], curWeek.year);

        // Default to current week.
        week = Object(_utils_defaults__WEBPACK_IMPORTED_MODULE_6__["default"])(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from beginning of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to beginning of week
            weekday = dow;
        }
    }
    if (week < 1 || week > Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__["weeksInYear"])(weekYear, dow, doy)) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_7__["default"])(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        Object(_parsing_flags__WEBPACK_IMPORTED_MODULE_7__["default"])(config)._overflowWeekday = true;
    } else {
        temp = Object(_units_week_calendar_utils__WEBPACK_IMPORTED_MODULE_3__["dayOfYearFromWeeks"])(weekYear, week, weekday, dow, doy);
        config._a[_units_constants__WEBPACK_IMPORTED_MODULE_4__["YEAR"]] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}


/***/ }),
/* 130 */
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/defaults.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaults; });
// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}


/***/ }),
/* 131 */
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/create/from-object.js ***!
  \***********************************************************/
/*! exports provided: configFromObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configFromObject", function() { return configFromObject; });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ 109);
/* harmony import */ var _from_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from-array */ 129);
/* harmony import */ var _utils_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/map */ 85);




function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeObjectUnits"])(config._i),
        dayOrDate = i.day === undefined ? i.date : i.day;
    config._a = Object(_utils_map__WEBPACK_IMPORTED_MODULE_2__["default"])(
        [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
        function (obj) {
            return obj && parseInt(obj, 10);
        }
    );

    Object(_from_array__WEBPACK_IMPORTED_MODULE_1__["configFromArray"])(config);
}


/***/ }),
/* 132 */
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/min-max.js ***!
  \*******************************************************/
/*! exports provided: prototypeMin, prototypeMax, min, max */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prototypeMin", function() { return prototypeMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prototypeMax", function() { return prototypeMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/deprecate */ 94);
/* harmony import */ var _utils_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-array */ 78);
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/local */ 76);
/* harmony import */ var _create_valid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../create/valid */ 86);





var prototypeMin = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_0__["deprecate"])(
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = _create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"].apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other < this ? this : other;
            } else {
                return Object(_create_valid__WEBPACK_IMPORTED_MODULE_3__["createInvalid"])();
            }
        }
    ),
    prototypeMax = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_0__["deprecate"])(
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
        function () {
            var other = _create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"].apply(null, arguments);
            if (this.isValid() && other.isValid()) {
                return other > this ? this : other;
            } else {
                return Object(_create_valid__WEBPACK_IMPORTED_MODULE_3__["createInvalid"])();
            }
        }
    );

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && Object(_utils_is_array__WEBPACK_IMPORTED_MODULE_1__["default"])(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min() {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max() {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}


/***/ }),
/* 133 */
/*!***************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/now.js ***!
  \***************************************************/
/*! exports provided: now */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
var now = function () {
    return Date.now ? Date.now() : +new Date();
};


/***/ }),
/* 134 */
/*!*********************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/prototype.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ 91);
/* harmony import */ var _add_subtract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-subtract */ 135);
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar */ 142);
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clone */ 146);
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compare */ 147);
/* harmony import */ var _diff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./diff */ 148);
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./format */ 149);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./from */ 150);
/* harmony import */ var _to__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./to */ 151);
/* harmony import */ var _get_set__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./get-set */ 108);
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locale */ 152);
/* harmony import */ var _min_max__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./min-max */ 132);
/* harmony import */ var _start_end_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./start-end-of */ 153);
/* harmony import */ var _to_type__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./to-type */ 154);
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./valid */ 155);
/* harmony import */ var _creation_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./creation-data */ 156);
/* harmony import */ var _units_era__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../units/era */ 157);
/* harmony import */ var _units_year__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../units/year */ 121);
/* harmony import */ var _units_week_year__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../units/week-year */ 158);
/* harmony import */ var _units_quarter__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../units/quarter */ 159);
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../units/month */ 107);
/* harmony import */ var _units_week__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../units/week */ 119);
/* harmony import */ var _units_day_of_month__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../units/day-of-month */ 160);
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../units/day-of-week */ 123);
/* harmony import */ var _units_day_of_year__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../units/day-of-year */ 161);
/* harmony import */ var _units_hour__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../units/hour */ 124);
/* harmony import */ var _units_minute__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../units/minute */ 162);
/* harmony import */ var _units_second__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../units/second */ 163);
/* harmony import */ var _units_millisecond__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../units/millisecond */ 164);
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../units/offset */ 140);
/* harmony import */ var _units_timezone__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../units/timezone */ 165);
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../utils/deprecate */ 94);


var proto = _constructor__WEBPACK_IMPORTED_MODULE_0__["Moment"].prototype;

















proto.add = _add_subtract__WEBPACK_IMPORTED_MODULE_1__["add"];
proto.calendar = _calendar__WEBPACK_IMPORTED_MODULE_2__["calendar"];
proto.clone = _clone__WEBPACK_IMPORTED_MODULE_3__["clone"];
proto.diff = _diff__WEBPACK_IMPORTED_MODULE_5__["diff"];
proto.endOf = _start_end_of__WEBPACK_IMPORTED_MODULE_12__["endOf"];
proto.format = _format__WEBPACK_IMPORTED_MODULE_6__["format"];
proto.from = _from__WEBPACK_IMPORTED_MODULE_7__["from"];
proto.fromNow = _from__WEBPACK_IMPORTED_MODULE_7__["fromNow"];
proto.to = _to__WEBPACK_IMPORTED_MODULE_8__["to"];
proto.toNow = _to__WEBPACK_IMPORTED_MODULE_8__["toNow"];
proto.get = _get_set__WEBPACK_IMPORTED_MODULE_9__["stringGet"];
proto.invalidAt = _valid__WEBPACK_IMPORTED_MODULE_14__["invalidAt"];
proto.isAfter = _compare__WEBPACK_IMPORTED_MODULE_4__["isAfter"];
proto.isBefore = _compare__WEBPACK_IMPORTED_MODULE_4__["isBefore"];
proto.isBetween = _compare__WEBPACK_IMPORTED_MODULE_4__["isBetween"];
proto.isSame = _compare__WEBPACK_IMPORTED_MODULE_4__["isSame"];
proto.isSameOrAfter = _compare__WEBPACK_IMPORTED_MODULE_4__["isSameOrAfter"];
proto.isSameOrBefore = _compare__WEBPACK_IMPORTED_MODULE_4__["isSameOrBefore"];
proto.isValid = _valid__WEBPACK_IMPORTED_MODULE_14__["isValid"];
proto.lang = _locale__WEBPACK_IMPORTED_MODULE_10__["lang"];
proto.locale = _locale__WEBPACK_IMPORTED_MODULE_10__["locale"];
proto.localeData = _locale__WEBPACK_IMPORTED_MODULE_10__["localeData"];
proto.max = _min_max__WEBPACK_IMPORTED_MODULE_11__["prototypeMax"];
proto.min = _min_max__WEBPACK_IMPORTED_MODULE_11__["prototypeMin"];
proto.parsingFlags = _valid__WEBPACK_IMPORTED_MODULE_14__["parsingFlags"];
proto.set = _get_set__WEBPACK_IMPORTED_MODULE_9__["stringSet"];
proto.startOf = _start_end_of__WEBPACK_IMPORTED_MODULE_12__["startOf"];
proto.subtract = _add_subtract__WEBPACK_IMPORTED_MODULE_1__["subtract"];
proto.toArray = _to_type__WEBPACK_IMPORTED_MODULE_13__["toArray"];
proto.toObject = _to_type__WEBPACK_IMPORTED_MODULE_13__["toObject"];
proto.toDate = _to_type__WEBPACK_IMPORTED_MODULE_13__["toDate"];
proto.toISOString = _format__WEBPACK_IMPORTED_MODULE_6__["toISOString"];
proto.inspect = _format__WEBPACK_IMPORTED_MODULE_6__["inspect"];
if (typeof Symbol !== 'undefined' && Symbol.for != null) {
    proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
        return 'Moment<' + this.format() + '>';
    };
}
proto.toJSON = _to_type__WEBPACK_IMPORTED_MODULE_13__["toJSON"];
proto.toString = _format__WEBPACK_IMPORTED_MODULE_6__["toString"];
proto.unix = _to_type__WEBPACK_IMPORTED_MODULE_13__["unix"];
proto.valueOf = _to_type__WEBPACK_IMPORTED_MODULE_13__["valueOf"];
proto.creationData = _creation_data__WEBPACK_IMPORTED_MODULE_15__["creationData"];

// Era

proto.eraName = _units_era__WEBPACK_IMPORTED_MODULE_16__["getEraName"];
proto.eraNarrow = _units_era__WEBPACK_IMPORTED_MODULE_16__["getEraNarrow"];
proto.eraAbbr = _units_era__WEBPACK_IMPORTED_MODULE_16__["getEraAbbr"];
proto.eraYear = _units_era__WEBPACK_IMPORTED_MODULE_16__["getEraYear"];

// Year

proto.year = _units_year__WEBPACK_IMPORTED_MODULE_17__["getSetYear"];
proto.isLeapYear = _units_year__WEBPACK_IMPORTED_MODULE_17__["getIsLeapYear"];

// Week Year

proto.weekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getSetWeekYear"];
proto.isoWeekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getSetISOWeekYear"];

// Quarter

proto.quarter = proto.quarters = _units_quarter__WEBPACK_IMPORTED_MODULE_19__["getSetQuarter"];

// Month

proto.month = _units_month__WEBPACK_IMPORTED_MODULE_20__["getSetMonth"];
proto.daysInMonth = _units_month__WEBPACK_IMPORTED_MODULE_20__["getDaysInMonth"];

// Week

proto.week = proto.weeks = _units_week__WEBPACK_IMPORTED_MODULE_21__["getSetWeek"];
proto.isoWeek = proto.isoWeeks = _units_week__WEBPACK_IMPORTED_MODULE_21__["getSetISOWeek"];
proto.weeksInYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getWeeksInYear"];
proto.weeksInWeekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getWeeksInWeekYear"];
proto.isoWeeksInYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getISOWeeksInYear"];
proto.isoWeeksInISOWeekYear = _units_week_year__WEBPACK_IMPORTED_MODULE_18__["getISOWeeksInISOWeekYear"];

// Day



proto.date = _units_day_of_month__WEBPACK_IMPORTED_MODULE_22__["getSetDayOfMonth"];
proto.day = proto.days = _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__["getSetDayOfWeek"];
proto.weekday = _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__["getSetLocaleDayOfWeek"];
proto.isoWeekday = _units_day_of_week__WEBPACK_IMPORTED_MODULE_23__["getSetISODayOfWeek"];
proto.dayOfYear = _units_day_of_year__WEBPACK_IMPORTED_MODULE_24__["getSetDayOfYear"];

// Hour

proto.hour = proto.hours = _units_hour__WEBPACK_IMPORTED_MODULE_25__["getSetHour"];

// Minute

proto.minute = proto.minutes = _units_minute__WEBPACK_IMPORTED_MODULE_26__["getSetMinute"];

// Second

proto.second = proto.seconds = _units_second__WEBPACK_IMPORTED_MODULE_27__["getSetSecond"];

// Millisecond

proto.millisecond = proto.milliseconds = _units_millisecond__WEBPACK_IMPORTED_MODULE_28__["getSetMillisecond"];

// Offset

proto.utcOffset = _units_offset__WEBPACK_IMPORTED_MODULE_29__["getSetOffset"];
proto.utc = _units_offset__WEBPACK_IMPORTED_MODULE_29__["setOffsetToUTC"];
proto.local = _units_offset__WEBPACK_IMPORTED_MODULE_29__["setOffsetToLocal"];
proto.parseZone = _units_offset__WEBPACK_IMPORTED_MODULE_29__["setOffsetToParsedOffset"];
proto.hasAlignedHourOffset = _units_offset__WEBPACK_IMPORTED_MODULE_29__["hasAlignedHourOffset"];
proto.isDST = _units_offset__WEBPACK_IMPORTED_MODULE_29__["isDaylightSavingTime"];
proto.isLocal = _units_offset__WEBPACK_IMPORTED_MODULE_29__["isLocal"];
proto.isUtcOffset = _units_offset__WEBPACK_IMPORTED_MODULE_29__["isUtcOffset"];
proto.isUtc = _units_offset__WEBPACK_IMPORTED_MODULE_29__["isUtc"];
proto.isUTC = _units_offset__WEBPACK_IMPORTED_MODULE_29__["isUtc"];

// Timezone

proto.zoneAbbr = _units_timezone__WEBPACK_IMPORTED_MODULE_30__["getZoneAbbr"];
proto.zoneName = _units_timezone__WEBPACK_IMPORTED_MODULE_30__["getZoneName"];

// Deprecations

proto.dates = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__["deprecate"])(
    'dates accessor is deprecated. Use date instead.',
    _units_day_of_month__WEBPACK_IMPORTED_MODULE_22__["getSetDayOfMonth"]
);
proto.months = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__["deprecate"])(
    'months accessor is deprecated. Use month instead',
    _units_month__WEBPACK_IMPORTED_MODULE_20__["getSetMonth"]
);
proto.years = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__["deprecate"])(
    'years accessor is deprecated. Use year instead',
    _units_year__WEBPACK_IMPORTED_MODULE_17__["getSetYear"]
);
proto.zone = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__["deprecate"])(
    'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
    _units_offset__WEBPACK_IMPORTED_MODULE_29__["getSetZone"]
);
proto.isDSTShifted = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_31__["deprecate"])(
    'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
    _units_offset__WEBPACK_IMPORTED_MODULE_29__["isDaylightSavingTimeShifted"]
);

/* harmony default export */ __webpack_exports__["default"] = (proto);


/***/ }),
/* 135 */
/*!************************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/add-subtract.js ***!
  \************************************************************/
/*! exports provided: addSubtract, add, subtract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSubtract", function() { return addSubtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony import */ var _get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-set */ 108);
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/month */ 107);
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../duration/create */ 136);
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/deprecate */ 94);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ 74);
/* harmony import */ var _utils_abs_round__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/abs-round */ 139);







// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__["deprecateSimple"])(
                name,
                'moment().' +
                    name +
                    '(period, number) is deprecated. Please use moment().' +
                    name +
                    '(number, period). ' +
                    'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
            );
            tmp = val;
            val = period;
            period = tmp;
        }

        dur = Object(_duration_create__WEBPACK_IMPORTED_MODULE_2__["createDuration"])(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = Object(_utils_abs_round__WEBPACK_IMPORTED_MODULE_5__["default"])(duration._days),
        months = Object(_utils_abs_round__WEBPACK_IMPORTED_MODULE_5__["default"])(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (months) {
        Object(_units_month__WEBPACK_IMPORTED_MODULE_1__["setMonth"])(mom, Object(_get_set__WEBPACK_IMPORTED_MODULE_0__["get"])(mom, 'Month') + months * isAdding);
    }
    if (days) {
        Object(_get_set__WEBPACK_IMPORTED_MODULE_0__["set"])(mom, 'Date', Object(_get_set__WEBPACK_IMPORTED_MODULE_0__["get"])(mom, 'Date') + days * isAdding);
    }
    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (updateOffset) {
        _utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"].updateOffset(mom, days || months);
    }
}

var add = createAdder(1, 'add'),
    subtract = createAdder(-1, 'subtract');


/***/ }),
/* 136 */
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/create.js ***!
  \********************************************************/
/*! exports provided: createDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDuration", function() { return createDuration; });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ 137);
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/is-number */ 83);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ 112);
/* harmony import */ var _utils_abs_round__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/abs-round */ 139);
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/has-own-prop */ 81);
/* harmony import */ var _units_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../units/constants */ 116);
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../units/offset */ 140);
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create/local */ 76);
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./valid */ 138);










// ASP.NET json date format regex
var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
    // and further modified to allow for strings containing both week and day
    isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

function createDuration(input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isDuration"])(input)) {
        duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months,
        };
    } else if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_1__["default"])(input) || !isNaN(+input)) {
        duration = {};
        if (key) {
            duration[key] = +input;
        } else {
            duration.milliseconds = +input;
        }
    } else if ((match = aspNetRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
            y: 0,
            d: Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__["DATE"]]) * sign,
            h: Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__["HOUR"]]) * sign,
            m: Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__["MINUTE"]]) * sign,
            s: Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__["SECOND"]]) * sign,
            ms: Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_utils_abs_round__WEBPACK_IMPORTED_MODULE_3__["default"])(match[_units_constants__WEBPACK_IMPORTED_MODULE_5__["MILLISECOND"]] * 1000)) * sign, // the millisecond decimal point is included in the match
        };
    } else if ((match = isoRegex.exec(input))) {
        sign = match[1] === '-' ? -1 : 1;
        duration = {
            y: parseIso(match[2], sign),
            M: parseIso(match[3], sign),
            w: parseIso(match[4], sign),
            d: parseIso(match[5], sign),
            h: parseIso(match[6], sign),
            m: parseIso(match[7], sign),
            s: parseIso(match[8], sign),
        };
    } else if (duration == null) {
        // checks for null or undefined
        duration = {};
    } else if (
        typeof duration === 'object' &&
        ('from' in duration || 'to' in duration)
    ) {
        diffRes = momentsDifference(
            Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(duration.from),
            Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(duration.to)
        );

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new _constructor__WEBPACK_IMPORTED_MODULE_0__["Duration"](duration);

    if (Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isDuration"])(input) && Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_4__["default"])(input, '_locale')) {
        ret._locale = input._locale;
    }

    if (Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isDuration"])(input) && Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_4__["default"])(input, '_isValid')) {
        ret._isValid = input._isValid;
    }

    return ret;
}

createDuration.fn = _constructor__WEBPACK_IMPORTED_MODULE_0__["Duration"].prototype;
createDuration.invalid = _valid__WEBPACK_IMPORTED_MODULE_8__["createInvalid"];

function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {};

    res.months =
        other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +base.clone().add(res.months, 'M');

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return { milliseconds: 0, months: 0 };
    }

    other = Object(_units_offset__WEBPACK_IMPORTED_MODULE_6__["cloneWithOffset"])(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}


/***/ }),
/* 137 */
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/constructor.js ***!
  \*************************************************************/
/*! exports provided: Duration, isDuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Duration", function() { return Duration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDuration", function() { return isDuration; });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ 109);
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/locales */ 92);
/* harmony import */ var _valid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valid.js */ 138);




function Duration(duration) {
    var normalizedInput = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeObjectUnits"])(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = Object(_valid_js__WEBPACK_IMPORTED_MODULE_2__["default"])(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds =
        +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days + weeks * 7;
    // It is impossible to translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months + quarters * 3 + years * 12;

    this._data = {};

    this._locale = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"])();

    this._bubble();
}

function isDuration(obj) {
    return obj instanceof Duration;
}


/***/ }),
/* 138 */
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/valid.js ***!
  \*******************************************************/
/*! exports provided: default, isValid, createInvalid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isDurationValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInvalid", function() { return createInvalid; });
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/has-own-prop */ 81);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/to-int */ 112);
/* harmony import */ var _utils_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index-of */ 118);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create */ 136);





var ordering = [
    'year',
    'quarter',
    'month',
    'week',
    'day',
    'hour',
    'minute',
    'second',
    'millisecond',
];

function isDurationValid(m) {
    var key,
        unitHasDecimal = false,
        i;
    for (key in m) {
        if (
            Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_0__["default"])(m, key) &&
            !(
                _utils_index_of__WEBPACK_IMPORTED_MODULE_2__["default"].call(ordering, key) !== -1 &&
                (m[key] == null || !isNaN(m[key]))
            )
        ) {
            return false;
        }
    }

    for (i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_1__["default"])(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid() {
    return this._isValid;
}

function createInvalid() {
    return Object(_create__WEBPACK_IMPORTED_MODULE_3__["createDuration"])(NaN);
}


/***/ }),
/* 139 */
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/abs-round.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return absRound; });
function absRound(number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}


/***/ }),
/* 140 */
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/offset.js ***!
  \*****************************************************/
/*! exports provided: cloneWithOffset, getSetOffset, getSetZone, setOffsetToUTC, setOffsetToLocal, setOffsetToParsedOffset, hasAlignedHourOffset, isDaylightSavingTime, isDaylightSavingTimeShifted, isLocal, isUtcOffset, isUtc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneWithOffset", function() { return cloneWithOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetOffset", function() { return getSetOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetZone", function() { return getSetZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOffsetToUTC", function() { return setOffsetToUTC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOffsetToLocal", function() { return setOffsetToLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOffsetToParsedOffset", function() { return setOffsetToParsedOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAlignedHourOffset", function() { return hasAlignedHourOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDaylightSavingTime", function() { return isDaylightSavingTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDaylightSavingTimeShifted", function() { return isDaylightSavingTimeShifted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLocal", function() { return isLocal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUtcOffset", function() { return isUtcOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUtc", function() { return isUtc; });
/* harmony import */ var _utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/zero-fill */ 103);
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../duration/create */ 136);
/* harmony import */ var _moment_add_subtract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moment/add-subtract */ 135);
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moment/constructor */ 91);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/regex */ 114);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parse/token */ 115);
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create/local */ 76);
/* harmony import */ var _create_from_anything__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create/from-anything */ 77);
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../create/utc */ 88);
/* harmony import */ var _utils_is_date__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/is-date */ 84);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/to-int */ 112);
/* harmony import */ var _utils_is_undefined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/is-undefined */ 82);
/* harmony import */ var _utils_compare_arrays__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/compare-arrays */ 141);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/hooks */ 74);
















// FORMATTING

function offset(token, separator) {
    Object(_format_format__WEBPACK_IMPORTED_MODULE_4__["addFormatToken"])(token, 0, 0, function () {
        var offset = this.utcOffset(),
            sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return (
            sign +
            Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__["default"])(~~(offset / 60), 2) +
            separator +
            Object(_utils_zero_fill__WEBPACK_IMPORTED_MODULE_0__["default"])(~~offset % 60, 2)
        );
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('Z', _parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchShortOffset"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["addRegexToken"])('ZZ', _parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchShortOffset"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_6__["addParseToken"])(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchShortOffset"], input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher),
        chunk,
        parts,
        minutes;

    if (matches === null) {
        return null;
    }

    chunk = matches[matches.length - 1] || [];
    parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    minutes = +(parts[1] * 60) + Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_11__["default"])(parts[2]);

    return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff =
            (Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_3__["isMoment"])(input) || Object(_utils_is_date__WEBPACK_IMPORTED_MODULE_10__["default"])(input)
                ? input.valueOf()
                : Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        _utils_hooks__WEBPACK_IMPORTED_MODULE_14__["hooks"].updateOffset(res, false);
        return res;
    } else {
        return Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(input).local();
    }
}

function getDateOffset(m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset());
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
_utils_hooks__WEBPACK_IMPORTED_MODULE_14__["hooks"].updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset(input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchShortOffset"], input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                Object(_moment_add_subtract__WEBPACK_IMPORTED_MODULE_2__["addSubtract"])(
                    this,
                    Object(_duration_create__WEBPACK_IMPORTED_MODULE_1__["createDuration"])(input - offset, 'm'),
                    1,
                    false
                );
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                _utils_hooks__WEBPACK_IMPORTED_MODULE_14__["hooks"].updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone(input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset() {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(_parse_regex__WEBPACK_IMPORTED_MODULE_5__["matchOffset"], this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        } else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime() {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted() {
    if (!Object(_utils_is_undefined__WEBPACK_IMPORTED_MODULE_12__["default"])(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {},
        other;

    Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_3__["copyConfig"])(c, this);
    c = Object(_create_from_anything__WEBPACK_IMPORTED_MODULE_8__["prepareConfig"])(c);

    if (c._a) {
        other = c._isUTC ? Object(_create_utc__WEBPACK_IMPORTED_MODULE_9__["createUTC"])(c._a) : Object(_create_local__WEBPACK_IMPORTED_MODULE_7__["createLocal"])(c._a);
        this._isDSTShifted =
            this.isValid() && Object(_utils_compare_arrays__WEBPACK_IMPORTED_MODULE_13__["default"])(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal() {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
}

function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}


/***/ }),
/* 141 */
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/compare-arrays.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compareArrays; });
/* harmony import */ var _to_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-int */ 112);


// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if (
            (dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && Object(_to_int__WEBPACK_IMPORTED_MODULE_0__["default"])(array1[i]) !== Object(_to_int__WEBPACK_IMPORTED_MODULE_0__["default"])(array2[i]))
        ) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}


/***/ }),
/* 142 */
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/calendar.js ***!
  \********************************************************/
/*! exports provided: getCalendarFormat, calendar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCalendarFormat", function() { return getCalendarFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/local */ 76);
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/offset */ 140);
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-function */ 96);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/hooks */ 74);
/* harmony import */ var _utils_is_moment_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/is-moment-input */ 143);
/* harmony import */ var _utils_is_calendar_spec__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/is-calendar-spec */ 145);







function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6
        ? 'sameElse'
        : diff < -1
        ? 'lastWeek'
        : diff < 0
        ? 'lastDay'
        : diff < 1
        ? 'sameDay'
        : diff < 2
        ? 'nextDay'
        : diff < 7
        ? 'nextWeek'
        : 'sameElse';
}

function calendar(time, formats) {
    // Support for single parameter, formats only overload to the calendar function
    if (arguments.length === 1) {
        if (Object(_utils_is_moment_input__WEBPACK_IMPORTED_MODULE_4__["isMomentInput"])(arguments[0])) {
            time = arguments[0];
            formats = undefined;
        } else if (Object(_utils_is_calendar_spec__WEBPACK_IMPORTED_MODULE_5__["default"])(arguments[0])) {
            formats = arguments[0];
            time = undefined;
        }
    }
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || Object(_create_local__WEBPACK_IMPORTED_MODULE_0__["createLocal"])(),
        sod = Object(_units_offset__WEBPACK_IMPORTED_MODULE_1__["cloneWithOffset"])(now, this).startOf('day'),
        format = _utils_hooks__WEBPACK_IMPORTED_MODULE_3__["hooks"].calendarFormat(this, sod) || 'sameElse',
        output =
            formats &&
            (Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_2__["default"])(formats[format])
                ? formats[format].call(this, now)
                : formats[format]);

    return this.format(
        output || this.localeData().calendar(format, this, Object(_create_local__WEBPACK_IMPORTED_MODULE_0__["createLocal"])(now))
    );
}


/***/ }),
/* 143 */
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-moment-input.js ***!
  \**************************************************************/
/*! exports provided: isMomentInput, isMomentInputObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMomentInput", function() { return isMomentInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMomentInputObject", function() { return isMomentInputObject; });
/* harmony import */ var _is_object_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-object-empty */ 80);
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./has-own-prop */ 81);
/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-object */ 79);
/* harmony import */ var _is_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-date */ 84);
/* harmony import */ var _is_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./is-number */ 83);
/* harmony import */ var _is_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-string */ 144);
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moment/constructor */ 91);
/* harmony import */ var _is_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./is-array */ 78);









// type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
function isMomentInput(input) {
    return (
        Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_6__["isMoment"])(input) ||
        Object(_is_date__WEBPACK_IMPORTED_MODULE_3__["default"])(input) ||
        Object(_is_string__WEBPACK_IMPORTED_MODULE_5__["default"])(input) ||
        Object(_is_number__WEBPACK_IMPORTED_MODULE_4__["default"])(input) ||
        isNumberOrStringArray(input) ||
        isMomentInputObject(input) ||
        input === null ||
        input === undefined
    );
}

function isMomentInputObject(input) {
    var objectTest = Object(_is_object__WEBPACK_IMPORTED_MODULE_2__["default"])(input) && !Object(_is_object_empty__WEBPACK_IMPORTED_MODULE_0__["default"])(input),
        propertyTest = false,
        properties = [
            'years',
            'year',
            'y',
            'months',
            'month',
            'M',
            'days',
            'day',
            'd',
            'dates',
            'date',
            'D',
            'hours',
            'hour',
            'h',
            'minutes',
            'minute',
            'm',
            'seconds',
            'second',
            's',
            'milliseconds',
            'millisecond',
            'ms',
        ],
        i,
        property;

    for (i = 0; i < properties.length; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(input, property);
    }

    return objectTest && propertyTest;
}

function isNumberOrStringArray(input) {
    var arrayTest = Object(_is_array__WEBPACK_IMPORTED_MODULE_7__["default"])(input),
        dataTypeTest = false;
    if (arrayTest) {
        dataTypeTest =
            input.filter(function (item) {
                return !Object(_is_number__WEBPACK_IMPORTED_MODULE_4__["default"])(item) && Object(_is_string__WEBPACK_IMPORTED_MODULE_5__["default"])(input);
            }).length === 0;
    }
    return arrayTest && dataTypeTest;
}


/***/ }),
/* 144 */
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-string.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isString; });
function isString(input) {
    return typeof input === 'string' || input instanceof String;
}


/***/ }),
/* 145 */
/*!***************************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/is-calendar-spec.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isCalendarSpec; });
/* harmony import */ var _is_object_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-object-empty */ 80);
/* harmony import */ var _has_own_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./has-own-prop */ 81);
/* harmony import */ var _is_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-object */ 79);




function isCalendarSpec(input) {
    var objectTest = Object(_is_object__WEBPACK_IMPORTED_MODULE_2__["default"])(input) && !Object(_is_object_empty__WEBPACK_IMPORTED_MODULE_0__["default"])(input),
        propertyTest = false,
        properties = [
            'sameDay',
            'nextDay',
            'lastDay',
            'nextWeek',
            'lastWeek',
            'sameElse',
        ],
        i,
        property;

    for (i = 0; i < properties.length; i += 1) {
        property = properties[i];
        propertyTest = propertyTest || Object(_has_own_prop__WEBPACK_IMPORTED_MODULE_1__["default"])(input, property);
    }

    return objectTest && propertyTest;
}


/***/ }),
/* 146 */
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/clone.js ***!
  \*****************************************************/
/*! exports provided: clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ 91);


function clone() {
    return new _constructor__WEBPACK_IMPORTED_MODULE_0__["Moment"](this);
}


/***/ }),
/* 147 */
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/compare.js ***!
  \*******************************************************/
/*! exports provided: isAfter, isBefore, isBetween, isSame, isSameOrAfter, isSameOrBefore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAfter", function() { return isAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBefore", function() { return isBefore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBetween", function() { return isBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return isSame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameOrAfter", function() { return isSameOrAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameOrBefore", function() { return isSameOrBefore; });
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ 91);
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/aliases */ 109);
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/local */ 76);




function isAfter(input, units) {
    var localInput = Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isMoment"])(input) ? input : Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_1__["normalizeUnits"])(units) || 'millisecond';
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore(input, units) {
    var localInput = Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isMoment"])(input) ? input : Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_1__["normalizeUnits"])(units) || 'millisecond';
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween(from, to, units, inclusivity) {
    var localFrom = Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isMoment"])(from) ? from : Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])(from),
        localTo = Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isMoment"])(to) ? to : Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])(to);
    if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
        return false;
    }
    inclusivity = inclusivity || '()';
    return (
        (inclusivity[0] === '('
            ? this.isAfter(localFrom, units)
            : !this.isBefore(localFrom, units)) &&
        (inclusivity[1] === ')'
            ? this.isBefore(localTo, units)
            : !this.isAfter(localTo, units))
    );
}

function isSame(input, units) {
    var localInput = Object(_constructor__WEBPACK_IMPORTED_MODULE_0__["isMoment"])(input) ? input : Object(_create_local__WEBPACK_IMPORTED_MODULE_2__["createLocal"])(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_1__["normalizeUnits"])(units) || 'millisecond';
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return (
            this.clone().startOf(units).valueOf() <= inputMs &&
            inputMs <= this.clone().endOf(units).valueOf()
        );
    }
}

function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
}

function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
}


/***/ }),
/* 148 */
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/diff.js ***!
  \****************************************************/
/*! exports provided: diff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return diff; });
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abs-floor */ 113);
/* harmony import */ var _units_offset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/offset */ 140);
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../units/aliases */ 109);




function diff(input, units, asFloat) {
    var that, zoneDelta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = Object(_units_offset__WEBPACK_IMPORTED_MODULE_1__["cloneWithOffset"])(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_2__["normalizeUnits"])(units);

    switch (units) {
        case 'year':
            output = monthDiff(this, that) / 12;
            break;
        case 'month':
            output = monthDiff(this, that);
            break;
        case 'quarter':
            output = monthDiff(this, that) / 3;
            break;
        case 'second':
            output = (this - that) / 1e3;
            break; // 1000
        case 'minute':
            output = (this - that) / 6e4;
            break; // 1000 * 60
        case 'hour':
            output = (this - that) / 36e5;
            break; // 1000 * 60 * 60
        case 'day':
            output = (this - that - zoneDelta) / 864e5;
            break; // 1000 * 60 * 60 * 24, negate dst
        case 'week':
            output = (this - that - zoneDelta) / 6048e5;
            break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default:
            output = this - that;
    }

    return asFloat ? output : Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(output);
}

function monthDiff(a, b) {
    if (a.date() < b.date()) {
        // end-of-month calculations work correct when the start month has more
        // days than the end month.
        return -monthDiff(b, a);
    }
    // difference in months
    var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2,
        adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}


/***/ }),
/* 149 */
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/format.js ***!
  \******************************************************/
/*! exports provided: toString, toISOString, inspect, format */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toString", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toISOString", function() { return toISOString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inspect", function() { return inspect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hooks */ 74);
/* harmony import */ var _utils_is_function__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/is-function */ 96);




_utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
_utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString(keepOffset) {
    if (!this.isValid()) {
        return null;
    }
    var utc = keepOffset !== true,
        m = utc ? this.clone().utc() : this;
    if (m.year() < 0 || m.year() > 9999) {
        return Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["formatMoment"])(
            m,
            utc
                ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }
    if (Object(_utils_is_function__WEBPACK_IMPORTED_MODULE_2__["default"])(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        if (utc) {
            return this.toDate().toISOString();
        } else {
            return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                .toISOString()
                .replace('Z', Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["formatMoment"])(m, 'Z'));
        }
    }
    return Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["formatMoment"])(
        m,
        utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
    );
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect() {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment',
        zone = '',
        prefix,
        year,
        datetime,
        suffix;
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    prefix = '[' + func + '("]';
    year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
    datetime = '-MM-DD[T]HH:mm:ss.SSS';
    suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format(inputString) {
    if (!inputString) {
        inputString = this.isUtc()
            ? _utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].defaultFormatUtc
            : _utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].defaultFormat;
    }
    var output = Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["formatMoment"])(this, inputString);
    return this.localeData().postformat(output);
}


/***/ }),
/* 150 */
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/from.js ***!
  \****************************************************/
/*! exports provided: from, fromNow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromNow", function() { return fromNow; });
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../duration/create */ 136);
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/local */ 76);
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moment/constructor */ 91);




function from(time, withoutSuffix) {
    if (
        this.isValid() &&
        ((Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_2__["isMoment"])(time) && time.isValid()) || Object(_create_local__WEBPACK_IMPORTED_MODULE_1__["createLocal"])(time).isValid())
    ) {
        return Object(_duration_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])({ to: this, from: time })
            .locale(this.locale())
            .humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow(withoutSuffix) {
    return this.from(Object(_create_local__WEBPACK_IMPORTED_MODULE_1__["createLocal"])(), withoutSuffix);
}


/***/ }),
/* 151 */
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/to.js ***!
  \**************************************************/
/*! exports provided: to, toNow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "to", function() { return to; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNow", function() { return toNow; });
/* harmony import */ var _duration_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../duration/create */ 136);
/* harmony import */ var _create_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../create/local */ 76);
/* harmony import */ var _moment_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moment/constructor */ 91);




function to(time, withoutSuffix) {
    if (
        this.isValid() &&
        ((Object(_moment_constructor__WEBPACK_IMPORTED_MODULE_2__["isMoment"])(time) && time.isValid()) || Object(_create_local__WEBPACK_IMPORTED_MODULE_1__["createLocal"])(time).isValid())
    ) {
        return Object(_duration_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])({ from: this, to: time })
            .locale(this.locale())
            .humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow(withoutSuffix) {
    return this.to(Object(_create_local__WEBPACK_IMPORTED_MODULE_1__["createLocal"])(), withoutSuffix);
}


/***/ }),
/* 152 */
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/locale.js ***!
  \******************************************************/
/*! exports provided: locale, lang, localeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lang", function() { return lang; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeData", function() { return localeData; });
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locale/locales */ 92);
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/deprecate */ 94);



// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale(key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = Object(_locale_locales__WEBPACK_IMPORTED_MODULE_0__["getLocale"])(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_1__["deprecate"])(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData() {
    return this._locale;
}


/***/ }),
/* 153 */
/*!************************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/start-end-of.js ***!
  \************************************************************/
/*! exports provided: startOf, endOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startOf", function() { return startOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endOf", function() { return endOf; });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ 109);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/hooks */ 74);



var MS_PER_SECOND = 1000,
    MS_PER_MINUTE = 60 * MS_PER_SECOND,
    MS_PER_HOUR = 60 * MS_PER_MINUTE,
    MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

// actual modulo - handles negative numbers (for dates before 1970):
function mod(dividend, divisor) {
    return ((dividend % divisor) + divisor) % divisor;
}

function localStartOfDate(y, m, d) {
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return new Date(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
        return new Date(y, m, d).valueOf();
    }
}

function utcStartOfDate(y, m, d) {
    // Date.UTC remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0) {
        // preserve leap years using a full 400 year cycle, then reset
        return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
    } else {
        return Date.UTC(y, m, d);
    }
}

function startOf(units) {
    var time, startOfDate;
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeUnits"])(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
    }

    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
        case 'year':
            time = startOfDate(this.year(), 0, 1);
            break;
        case 'quarter':
            time = startOfDate(
                this.year(),
                this.month() - (this.month() % 3),
                1
            );
            break;
        case 'month':
            time = startOfDate(this.year(), this.month(), 1);
            break;
        case 'week':
            time = startOfDate(
                this.year(),
                this.month(),
                this.date() - this.weekday()
            );
            break;
        case 'isoWeek':
            time = startOfDate(
                this.year(),
                this.month(),
                this.date() - (this.isoWeekday() - 1)
            );
            break;
        case 'day':
        case 'date':
            time = startOfDate(this.year(), this.month(), this.date());
            break;
        case 'hour':
            time = this._d.valueOf();
            time -= mod(
                time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                MS_PER_HOUR
            );
            break;
        case 'minute':
            time = this._d.valueOf();
            time -= mod(time, MS_PER_MINUTE);
            break;
        case 'second':
            time = this._d.valueOf();
            time -= mod(time, MS_PER_SECOND);
            break;
    }

    this._d.setTime(time);
    _utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].updateOffset(this, true);
    return this;
}

function endOf(units) {
    var time, startOfDate;
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeUnits"])(units);
    if (units === undefined || units === 'millisecond' || !this.isValid()) {
        return this;
    }

    startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

    switch (units) {
        case 'year':
            time = startOfDate(this.year() + 1, 0, 1) - 1;
            break;
        case 'quarter':
            time =
                startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3) + 3,
                    1
                ) - 1;
            break;
        case 'month':
            time = startOfDate(this.year(), this.month() + 1, 1) - 1;
            break;
        case 'week':
            time =
                startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7
                ) - 1;
            break;
        case 'isoWeek':
            time =
                startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7
                ) - 1;
            break;
        case 'day':
        case 'date':
            time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case 'hour':
            time = this._d.valueOf();
            time +=
                MS_PER_HOUR -
                mod(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                ) -
                1;
            break;
        case 'minute':
            time = this._d.valueOf();
            time += MS_PER_MINUTE - mod(time, MS_PER_MINUTE) - 1;
            break;
        case 'second':
            time = this._d.valueOf();
            time += MS_PER_SECOND - mod(time, MS_PER_SECOND) - 1;
            break;
    }

    this._d.setTime(time);
    _utils_hooks__WEBPACK_IMPORTED_MODULE_1__["hooks"].updateOffset(this, true);
    return this;
}


/***/ }),
/* 154 */
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/to-type.js ***!
  \*******************************************************/
/*! exports provided: valueOf, unix, toDate, toArray, toObject, toJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueOf", function() { return valueOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unix", function() { return unix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return toDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toArray", function() { return toArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toObject", function() { return toObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJSON", function() { return toJSON; });
function valueOf() {
    return this._d.valueOf() - (this._offset || 0) * 60000;
}

function unix() {
    return Math.floor(this.valueOf() / 1000);
}

function toDate() {
    return new Date(this.valueOf());
}

function toArray() {
    var m = this;
    return [
        m.year(),
        m.month(),
        m.date(),
        m.hour(),
        m.minute(),
        m.second(),
        m.millisecond(),
    ];
}

function toObject() {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds(),
    };
}

function toJSON() {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}


/***/ }),
/* 155 */
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/valid.js ***!
  \*****************************************************/
/*! exports provided: isValid, parsingFlags, invalidAt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValid", function() { return isValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parsingFlags", function() { return parsingFlags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidAt", function() { return invalidAt; });
/* harmony import */ var _create_valid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create/valid */ 86);
/* harmony import */ var _utils_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/extend */ 87);
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/parsing-flags */ 89);




function isValid() {
    return Object(_create_valid__WEBPACK_IMPORTED_MODULE_0__["isValid"])(this);
}

function parsingFlags() {
    return Object(_utils_extend__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(this));
}

function invalidAt() {
    return Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_2__["default"])(this).overflow;
}


/***/ }),
/* 156 */
/*!*************************************************************!*\
  !*** ./node_modules/moment/src/lib/moment/creation-data.js ***!
  \*************************************************************/
/*! exports provided: creationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creationData", function() { return creationData; });
function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
    };
}


/***/ }),
/* 157 */
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/units/era.js ***!
  \**************************************************/
/*! exports provided: localeEras, localeErasParse, localeErasConvertYear, getEraName, getEraNarrow, getEraAbbr, getEraYear, erasNameRegex, erasAbbrRegex, erasNarrowRegex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeEras", function() { return localeEras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeErasParse", function() { return localeErasParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localeErasConvertYear", function() { return localeErasConvertYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEraName", function() { return getEraName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEraNarrow", function() { return getEraNarrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEraAbbr", function() { return getEraAbbr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEraYear", function() { return getEraYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erasNameRegex", function() { return erasNameRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erasAbbrRegex", function() { return erasAbbrRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "erasNarrowRegex", function() { return erasNarrowRegex; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parse/regex */ 114);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/token */ 115);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ 116);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ 74);
/* harmony import */ var _locale_locales__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locale/locales */ 92);
/* harmony import */ var _create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../create/parsing-flags */ 89);
/* harmony import */ var _utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/has-own-prop */ 81);









Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('N', 0, 0, 'eraAbbr');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('NN', 0, 0, 'eraAbbr');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('NNN', 0, 0, 'eraAbbr');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('NNNN', 0, 0, 'eraName');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('NNNNN', 0, 0, 'eraNarrow');

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('y', ['y', 1], 'yo', 'eraYear');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('y', ['yy', 2], 0, 'eraYear');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('y', ['yyy', 3], 0, 'eraYear');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('y', ['yyyy', 4], 0, 'eraYear');

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('N', matchEraAbbr);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('NN', matchEraAbbr);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('NNN', matchEraAbbr);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('NNNN', matchEraName);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('NNNNN', matchEraNarrow);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_2__["addParseToken"])(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (
    input,
    array,
    config,
    token
) {
    var era = config._locale.erasParse(input, token, config._strict);
    if (era) {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__["default"])(config).era = era;
    } else {
        Object(_create_parsing_flags__WEBPACK_IMPORTED_MODULE_6__["default"])(config).invalidEra = input;
    }
});

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('y', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchUnsigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('yy', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchUnsigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('yyy', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchUnsigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('yyyy', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchUnsigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('yo', matchEraYearOrdinal);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_2__["addParseToken"])(['y', 'yy', 'yyy', 'yyyy'], _constants__WEBPACK_IMPORTED_MODULE_3__["YEAR"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_2__["addParseToken"])(['yo'], function (input, array, config, token) {
    var match;
    if (config._locale._eraYearOrdinalRegex) {
        match = input.match(config._locale._eraYearOrdinalRegex);
    }

    if (config._locale.eraYearOrdinalParse) {
        array[_constants__WEBPACK_IMPORTED_MODULE_3__["YEAR"]] = config._locale.eraYearOrdinalParse(input, match);
    } else {
        array[_constants__WEBPACK_IMPORTED_MODULE_3__["YEAR"]] = parseInt(input, 10);
    }
});

function localeEras(m, format) {
    var i,
        l,
        date,
        eras = this._eras || Object(_locale_locales__WEBPACK_IMPORTED_MODULE_5__["getLocale"])('en')._eras;
    for (i = 0, l = eras.length; i < l; ++i) {
        switch (typeof eras[i].since) {
            case 'string':
                // truncate time
                date = Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"])(eras[i].since).startOf('day');
                eras[i].since = date.valueOf();
                break;
        }

        switch (typeof eras[i].until) {
            case 'undefined':
                eras[i].until = +Infinity;
                break;
            case 'string':
                // truncate time
                date = Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"])(eras[i].until).startOf('day').valueOf();
                eras[i].until = date.valueOf();
                break;
        }
    }
    return eras;
}

function localeErasParse(eraName, format, strict) {
    var i,
        l,
        eras = this.eras(),
        name,
        abbr,
        narrow;
    eraName = eraName.toUpperCase();

    for (i = 0, l = eras.length; i < l; ++i) {
        name = eras[i].name.toUpperCase();
        abbr = eras[i].abbr.toUpperCase();
        narrow = eras[i].narrow.toUpperCase();

        if (strict) {
            switch (format) {
                case 'N':
                case 'NN':
                case 'NNN':
                    if (abbr === eraName) {
                        return eras[i];
                    }
                    break;

                case 'NNNN':
                    if (name === eraName) {
                        return eras[i];
                    }
                    break;

                case 'NNNNN':
                    if (narrow === eraName) {
                        return eras[i];
                    }
                    break;
            }
        } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
            return eras[i];
        }
    }
}

function localeErasConvertYear(era, year) {
    var dir = era.since <= era.until ? +1 : -1;
    if (year === undefined) {
        return Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"])(era.since).year();
    } else {
        return Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"])(era.since).year() + (year - era.offset) * dir;
    }
}

function getEraName() {
    var i,
        l,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].name;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].name;
        }
    }

    return '';
}

function getEraNarrow() {
    var i,
        l,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].narrow;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].narrow;
        }
    }

    return '';
}

function getEraAbbr() {
    var i,
        l,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        // truncate time
        val = this.startOf('day').valueOf();

        if (eras[i].since <= val && val <= eras[i].until) {
            return eras[i].abbr;
        }
        if (eras[i].until <= val && val <= eras[i].since) {
            return eras[i].abbr;
        }
    }

    return '';
}

function getEraYear() {
    var i,
        l,
        dir,
        val,
        eras = this.localeData().eras();
    for (i = 0, l = eras.length; i < l; ++i) {
        dir = eras[i].since <= eras[i].until ? +1 : -1;

        // truncate time
        val = this.startOf('day').valueOf();

        if (
            (eras[i].since <= val && val <= eras[i].until) ||
            (eras[i].until <= val && val <= eras[i].since)
        ) {
            return (
                (this.year() - Object(_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"])(eras[i].since).year()) * dir +
                eras[i].offset
            );
        }
    }

    return this.year();
}

function erasNameRegex(isStrict) {
    if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__["default"])(this, '_erasNameRegex')) {
        computeErasParse.call(this);
    }
    return isStrict ? this._erasNameRegex : this._erasRegex;
}

function erasAbbrRegex(isStrict) {
    if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__["default"])(this, '_erasAbbrRegex')) {
        computeErasParse.call(this);
    }
    return isStrict ? this._erasAbbrRegex : this._erasRegex;
}

function erasNarrowRegex(isStrict) {
    if (!Object(_utils_has_own_prop__WEBPACK_IMPORTED_MODULE_7__["default"])(this, '_erasNarrowRegex')) {
        computeErasParse.call(this);
    }
    return isStrict ? this._erasNarrowRegex : this._erasRegex;
}

function matchEraAbbr(isStrict, locale) {
    return locale.erasAbbrRegex(isStrict);
}

function matchEraName(isStrict, locale) {
    return locale.erasNameRegex(isStrict);
}

function matchEraNarrow(isStrict, locale) {
    return locale.erasNarrowRegex(isStrict);
}

function matchEraYearOrdinal(isStrict, locale) {
    return locale._eraYearOrdinalRegex || _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchUnsigned"];
}

function computeErasParse() {
    var abbrPieces = [],
        namePieces = [],
        narrowPieces = [],
        mixedPieces = [],
        i,
        l,
        eras = this.eras();

    for (i = 0, l = eras.length; i < l; ++i) {
        namePieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].name));
        abbrPieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].abbr));
        narrowPieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].narrow));

        mixedPieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].name));
        mixedPieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].abbr));
        mixedPieces.push(Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["regexEscape"])(eras[i].narrow));
    }

    this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
    this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
    this._erasNarrowRegex = new RegExp(
        '^(' + narrowPieces.join('|') + ')',
        'i'
    );
}


/***/ }),
/* 158 */
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/week-year.js ***!
  \********************************************************/
/*! exports provided: getSetWeekYear, getSetISOWeekYear, getISOWeeksInYear, getISOWeeksInISOWeekYear, getWeeksInYear, getWeeksInWeekYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetWeekYear", function() { return getSetWeekYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetISOWeekYear", function() { return getSetISOWeekYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOWeeksInYear", function() { return getISOWeeksInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getISOWeeksInISOWeekYear", function() { return getISOWeeksInISOWeekYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeeksInYear", function() { return getWeeksInYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeeksInWeekYear", function() { return getWeeksInWeekYear; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ 109);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ 110);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ 114);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ 115);
/* harmony import */ var _week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./week-calendar-utils */ 120);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/to-int */ 112);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/hooks */ 74);
/* harmony import */ var _create_date_from_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../create/date-from-array */ 122);










// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken(token, getter) {
    Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg', 'weekYear');
addWeekYearFormatToken('ggggg', 'weekYear');
addWeekYearFormatToken('GGGG', 'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('weekYear', 'gg');
Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('isoWeekYear', 'GG');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('weekYear', 1);
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('isoWeekYear', 1);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('G', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchSigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('g', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["matchSigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('GG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('gg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('GGGG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to4"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('gggg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to4"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match4"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('GGGGG', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to6"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match6"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('ggggg', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to6"], _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match6"]);

Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (
    input,
    week,
    config,
    token
) {
    week[token.substr(0, 2)] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_6__["default"])(input);
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addWeekParseToken"])(['gg', 'GG'], function (input, week, config, token) {
    week[token] = _utils_hooks__WEBPACK_IMPORTED_MODULE_7__["hooks"].parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(
        this,
        input,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
    );
}

function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(
        this,
        input,
        this.isoWeek(),
        this.isoWeekday(),
        1,
        4
    );
}

function getISOWeeksInYear() {
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weeksInYear"])(this.year(), 1, 4);
}

function getISOWeeksInISOWeekYear() {
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weeksInYear"])(this.isoWeekYear(), 1, 4);
}

function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weeksInYear"])(this.year(), weekInfo.dow, weekInfo.doy);
}

function getWeeksInWeekYear() {
    var weekInfo = this.localeData()._week;
    return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weeksInYear"])(this.weekYear(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weekOfYear"])(this, dow, doy).year;
    } else {
        weeksTarget = Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["weeksInYear"])(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = Object(_week_calendar_utils__WEBPACK_IMPORTED_MODULE_5__["dayOfYearFromWeeks"])(weekYear, week, weekday, dow, doy),
        date = Object(_create_date_from_array__WEBPACK_IMPORTED_MODULE_8__["createUTCDate"])(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}


/***/ }),
/* 159 */
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/units/quarter.js ***!
  \******************************************************/
/*! exports provided: getSetQuarter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetQuarter", function() { return getSetQuarter; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ 109);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ 110);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ 114);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ 115);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ 116);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/to-int */ 112);








// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('Q', 0, 'Qo', 'quarter');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('quarter', 'Q');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('quarter', 7);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('Q', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addParseToken"])('Q', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_5__["MONTH"]] = (Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_6__["default"])(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter(input) {
    return input == null
        ? Math.ceil((this.month() + 1) / 3)
        : this.month((input - 1) * 3 + (this.month() % 3));
}


/***/ }),
/* 160 */
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/day-of-month.js ***!
  \***********************************************************/
/*! exports provided: getSetDayOfMonth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetDayOfMonth", function() { return getSetDayOfMonth; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ 108);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ 109);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ 110);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ 114);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ 115);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ 116);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-int */ 112);









// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('D', ['DD', 2], 'Do', 'date');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('date', 'D');

// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('date', 9);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('D', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('DD', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict
        ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
        : locale._dayOfMonthOrdinalParseLenient;
});

Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['D', 'DD'], _constants__WEBPACK_IMPORTED_MODULE_6__["DATE"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])('Do', function (input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["DATE"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(input.match(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"])[0]);
});

// MOMENTS

var getSetDayOfMonth = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('Date', true);


/***/ }),
/* 161 */
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/day-of-year.js ***!
  \**********************************************************/
/*! exports provided: getSetDayOfYear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetDayOfYear", function() { return getSetDayOfYear; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aliases */ 109);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./priorities */ 110);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../parse/regex */ 114);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/token */ 115);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/to-int */ 112);







// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_1__["addUnitAlias"])('dayOfYear', 'DDD');

// PRIORITY
Object(_priorities__WEBPACK_IMPORTED_MODULE_2__["addUnitPriority"])('dayOfYear', 4);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('DDD', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match1to3"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_3__["addRegexToken"])('DDDD', _parse_regex__WEBPACK_IMPORTED_MODULE_3__["match3"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_4__["addParseToken"])(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_5__["default"])(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear(input) {
    var dayOfYear =
        Math.round(
            (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
        ) + 1;
    return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
}


/***/ }),
/* 162 */
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/minute.js ***!
  \*****************************************************/
/*! exports provided: getSetMinute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetMinute", function() { return getSetMinute; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ 108);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ 109);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ 110);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ 114);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ 115);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ 116);








// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('m', ['mm', 2], 0, 'minute');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('minute', 'm');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('minute', 14);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('m', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('mm', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['m', 'mm'], _constants__WEBPACK_IMPORTED_MODULE_6__["MINUTE"]);

// MOMENTS

var getSetMinute = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('Minutes', false);


/***/ }),
/* 163 */
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/second.js ***!
  \*****************************************************/
/*! exports provided: getSetSecond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetSecond", function() { return getSetSecond; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ 108);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ 109);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ 110);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ 114);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ 115);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ 116);








// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('s', ['ss', 2], 0, 'second');

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('second', 's');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('second', 15);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('s', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('ss', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to2"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(['s', 'ss'], _constants__WEBPACK_IMPORTED_MODULE_6__["SECOND"]);

// MOMENTS

var getSetSecond = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('Seconds', false);


/***/ }),
/* 164 */
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/millisecond.js ***!
  \**********************************************************/
/*! exports provided: getSetMillisecond */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetMillisecond", function() { return getSetMillisecond; });
/* harmony import */ var _moment_get_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../moment/get-set */ 108);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aliases */ 109);
/* harmony import */ var _priorities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./priorities */ 110);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parse/regex */ 114);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../parse/token */ 115);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ 116);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/to-int */ 112);









// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSS', 3], 0, 'millisecond');
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
Object(_format_format__WEBPACK_IMPORTED_MODULE_1__["addFormatToken"])(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});

// ALIASES

Object(_aliases__WEBPACK_IMPORTED_MODULE_2__["addUnitAlias"])('millisecond', 'ms');

// PRIORITY

Object(_priorities__WEBPACK_IMPORTED_MODULE_3__["addUnitPriority"])('millisecond', 16);

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('S', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to3"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('SS', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to3"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match2"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])('SSS', _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match1to3"], _parse_regex__WEBPACK_IMPORTED_MODULE_4__["match3"]);

var token, getSetMillisecond;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    Object(_parse_regex__WEBPACK_IMPORTED_MODULE_4__["addRegexToken"])(token, _parse_regex__WEBPACK_IMPORTED_MODULE_4__["matchUnsigned"]);
}

function parseMs(input, array) {
    array[_constants__WEBPACK_IMPORTED_MODULE_6__["MILLISECOND"]] = Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_7__["default"])(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    Object(_parse_token__WEBPACK_IMPORTED_MODULE_5__["addParseToken"])(token, parseMs);
}

getSetMillisecond = Object(_moment_get_set__WEBPACK_IMPORTED_MODULE_0__["makeGetSet"])('Milliseconds', false);




/***/ }),
/* 165 */
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/units/timezone.js ***!
  \*******************************************************/
/*! exports provided: getZoneAbbr, getZoneName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneAbbr", function() { return getZoneAbbr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getZoneName", function() { return getZoneName; });
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 102);


// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('z', 0, 0, 'zoneAbbr');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}


/***/ }),
/* 166 */
/*!******************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/locale.js ***!
  \******************************************************/
/*! exports provided: getSetGlobalLocale, defineLocale, updateLocale, getLocale, listLocales, listMonths, listMonthsShort, listWeekdays, listWeekdaysShort, listWeekdaysMin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ 167);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales */ 92);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetGlobalLocale", function() { return _locales__WEBPACK_IMPORTED_MODULE_1__["getSetGlobalLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineLocale", function() { return _locales__WEBPACK_IMPORTED_MODULE_1__["defineLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateLocale", function() { return _locales__WEBPACK_IMPORTED_MODULE_1__["updateLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return _locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listLocales", function() { return _locales__WEBPACK_IMPORTED_MODULE_1__["listLocales"]; });

/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists */ 169);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listMonths", function() { return _lists__WEBPACK_IMPORTED_MODULE_2__["listMonths"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listMonthsShort", function() { return _lists__WEBPACK_IMPORTED_MODULE_2__["listMonthsShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listWeekdays", function() { return _lists__WEBPACK_IMPORTED_MODULE_2__["listWeekdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listWeekdaysShort", function() { return _lists__WEBPACK_IMPORTED_MODULE_2__["listWeekdaysShort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "listWeekdaysMin", function() { return _lists__WEBPACK_IMPORTED_MODULE_2__["listWeekdaysMin"]; });

/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/deprecate */ 94);
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/hooks */ 74);
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en */ 170);
// Side effect imports











_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"].lang = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__["deprecate"])(
    'moment.lang is deprecated. Use moment.locale instead.',
    _locales__WEBPACK_IMPORTED_MODULE_1__["getSetGlobalLocale"]
);
_utils_hooks__WEBPACK_IMPORTED_MODULE_4__["hooks"].langData = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_3__["deprecate"])(
    'moment.langData is deprecated. Use moment.localeData instead.',
    _locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"]
);




/***/ }),
/* 167 */
/*!*********************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/prototype.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ 97);
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar */ 100);
/* harmony import */ var _formats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formats */ 101);
/* harmony import */ var _invalid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invalid */ 104);
/* harmony import */ var _ordinal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ordinal */ 105);
/* harmony import */ var _pre_post_format__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pre-post-format */ 168);
/* harmony import */ var _relative__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./relative */ 106);
/* harmony import */ var _set__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./set */ 95);
/* harmony import */ var _units_era__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../units/era */ 157);
/* harmony import */ var _units_month__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../units/month */ 107);
/* harmony import */ var _units_week__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../units/week */ 119);
/* harmony import */ var _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../units/day-of-week */ 123);
/* harmony import */ var _units_hour__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../units/hour */ 124);


var proto = _constructor__WEBPACK_IMPORTED_MODULE_0__["Locale"].prototype;









proto.calendar = _calendar__WEBPACK_IMPORTED_MODULE_1__["calendar"];
proto.longDateFormat = _formats__WEBPACK_IMPORTED_MODULE_2__["longDateFormat"];
proto.invalidDate = _invalid__WEBPACK_IMPORTED_MODULE_3__["invalidDate"];
proto.ordinal = _ordinal__WEBPACK_IMPORTED_MODULE_4__["ordinal"];
proto.preparse = _pre_post_format__WEBPACK_IMPORTED_MODULE_5__["preParsePostFormat"];
proto.postformat = _pre_post_format__WEBPACK_IMPORTED_MODULE_5__["preParsePostFormat"];
proto.relativeTime = _relative__WEBPACK_IMPORTED_MODULE_6__["relativeTime"];
proto.pastFuture = _relative__WEBPACK_IMPORTED_MODULE_6__["pastFuture"];
proto.set = _set__WEBPACK_IMPORTED_MODULE_7__["set"];

// Eras

proto.eras = _units_era__WEBPACK_IMPORTED_MODULE_8__["localeEras"];
proto.erasParse = _units_era__WEBPACK_IMPORTED_MODULE_8__["localeErasParse"];
proto.erasConvertYear = _units_era__WEBPACK_IMPORTED_MODULE_8__["localeErasConvertYear"];
proto.erasAbbrRegex = _units_era__WEBPACK_IMPORTED_MODULE_8__["erasAbbrRegex"];
proto.erasNameRegex = _units_era__WEBPACK_IMPORTED_MODULE_8__["erasNameRegex"];
proto.erasNarrowRegex = _units_era__WEBPACK_IMPORTED_MODULE_8__["erasNarrowRegex"];

// Month


proto.months = _units_month__WEBPACK_IMPORTED_MODULE_9__["localeMonths"];
proto.monthsShort = _units_month__WEBPACK_IMPORTED_MODULE_9__["localeMonthsShort"];
proto.monthsParse = _units_month__WEBPACK_IMPORTED_MODULE_9__["localeMonthsParse"];
proto.monthsRegex = _units_month__WEBPACK_IMPORTED_MODULE_9__["monthsRegex"];
proto.monthsShortRegex = _units_month__WEBPACK_IMPORTED_MODULE_9__["monthsShortRegex"];

// Week

proto.week = _units_week__WEBPACK_IMPORTED_MODULE_10__["localeWeek"];
proto.firstDayOfYear = _units_week__WEBPACK_IMPORTED_MODULE_10__["localeFirstDayOfYear"];
proto.firstDayOfWeek = _units_week__WEBPACK_IMPORTED_MODULE_10__["localeFirstDayOfWeek"];

// Day of Week


proto.weekdays = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["localeWeekdays"];
proto.weekdaysMin = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["localeWeekdaysMin"];
proto.weekdaysShort = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["localeWeekdaysShort"];
proto.weekdaysParse = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["localeWeekdaysParse"];

proto.weekdaysRegex = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["weekdaysRegex"];
proto.weekdaysShortRegex = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["weekdaysShortRegex"];
proto.weekdaysMinRegex = _units_day_of_week__WEBPACK_IMPORTED_MODULE_11__["weekdaysMinRegex"];

// Hours


proto.isPM = _units_hour__WEBPACK_IMPORTED_MODULE_12__["localeIsPM"];
proto.meridiem = _units_hour__WEBPACK_IMPORTED_MODULE_12__["localeMeridiem"];


/***/ }),
/* 168 */
/*!***************************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/pre-post-format.js ***!
  \***************************************************************/
/*! exports provided: preParsePostFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preParsePostFormat", function() { return preParsePostFormat; });
function preParsePostFormat(string) {
    return string;
}


/***/ }),
/* 169 */
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/lists.js ***!
  \*****************************************************/
/*! exports provided: listMonths, listMonthsShort, listWeekdays, listWeekdaysShort, listWeekdaysMin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listMonths", function() { return listMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listMonthsShort", function() { return listMonthsShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listWeekdays", function() { return listWeekdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listWeekdaysShort", function() { return listWeekdaysShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listWeekdaysMin", function() { return listWeekdaysMin; });
/* harmony import */ var _utils_is_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/is-number */ 83);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales */ 92);
/* harmony import */ var _create_utc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../create/utc */ 88);




function get(format, index, field, setter) {
    var locale = Object(_locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"])(),
        utc = Object(_create_utc__WEBPACK_IMPORTED_MODULE_2__["createUTC"])().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl(format, index, field) {
    if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_0__["default"])(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get(format, index, field, 'month');
    }

    var i,
        out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl(localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_0__["default"])(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (Object(_utils_is_number__WEBPACK_IMPORTED_MODULE_0__["default"])(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = Object(_locales__WEBPACK_IMPORTED_MODULE_1__["getLocale"])(),
        shift = localeSorted ? locale._week.dow : 0,
        i,
        out = [];

    if (index != null) {
        return get(format, (index + shift) % 7, field, 'day');
    }

    for (i = 0; i < 7; i++) {
        out[i] = get(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths(format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort(format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}


/***/ }),
/* 170 */
/*!**************************************************!*\
  !*** ./node_modules/moment/src/lib/locale/en.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ 167);
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locales */ 92);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ 112);




Object(_locales__WEBPACK_IMPORTED_MODULE_1__["getSetGlobalLocale"])('en', {
    eras: [
        {
            since: '0001-01-01',
            until: +Infinity,
            offset: 1,
            name: 'Anno Domini',
            narrow: 'AD',
            abbr: 'AD',
        },
        {
            since: '0000-12-31',
            until: -Infinity,
            offset: 1,
            name: 'Before Christ',
            narrow: 'BC',
            abbr: 'BC',
        },
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (number) {
        var b = number % 10,
            output =
                Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])((number % 100) / 10) === 1
                    ? 'th'
                    : b === 1
                    ? 'st'
                    : b === 2
                    ? 'nd'
                    : b === 3
                    ? 'rd'
                    : 'th';
        return number + output;
    },
});


/***/ }),
/* 171 */
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/duration.js ***!
  \**********************************************************/
/*! exports provided: createDuration, isDuration, getSetRelativeTimeRounding, getSetRelativeTimeThreshold */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototype */ 172);
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create */ 136);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDuration", function() { return _create__WEBPACK_IMPORTED_MODULE_1__["createDuration"]; });

/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructor */ 137);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDuration", function() { return _constructor__WEBPACK_IMPORTED_MODULE_2__["isDuration"]; });

/* harmony import */ var _humanize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./humanize */ 180);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetRelativeTimeRounding", function() { return _humanize__WEBPACK_IMPORTED_MODULE_3__["getSetRelativeTimeRounding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSetRelativeTimeThreshold", function() { return _humanize__WEBPACK_IMPORTED_MODULE_3__["getSetRelativeTimeThreshold"]; });

// Side effect imports









/***/ }),
/* 172 */
/*!***********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/prototype.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ 137);
/* harmony import */ var _abs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abs */ 173);
/* harmony import */ var _add_subtract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-subtract */ 174);
/* harmony import */ var _as__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./as */ 175);
/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bubble */ 176);
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clone */ 178);
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get */ 179);
/* harmony import */ var _humanize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./humanize */ 180);
/* harmony import */ var _iso_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./iso-string */ 181);
/* harmony import */ var _moment_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../moment/locale */ 152);
/* harmony import */ var _valid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./valid */ 138);
/* harmony import */ var _utils_deprecate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/deprecate */ 94);


var proto = _constructor__WEBPACK_IMPORTED_MODULE_0__["Duration"].prototype;












proto.isValid = _valid__WEBPACK_IMPORTED_MODULE_10__["isValid"];
proto.abs = _abs__WEBPACK_IMPORTED_MODULE_1__["abs"];
proto.add = _add_subtract__WEBPACK_IMPORTED_MODULE_2__["add"];
proto.subtract = _add_subtract__WEBPACK_IMPORTED_MODULE_2__["subtract"];
proto.as = _as__WEBPACK_IMPORTED_MODULE_3__["as"];
proto.asMilliseconds = _as__WEBPACK_IMPORTED_MODULE_3__["asMilliseconds"];
proto.asSeconds = _as__WEBPACK_IMPORTED_MODULE_3__["asSeconds"];
proto.asMinutes = _as__WEBPACK_IMPORTED_MODULE_3__["asMinutes"];
proto.asHours = _as__WEBPACK_IMPORTED_MODULE_3__["asHours"];
proto.asDays = _as__WEBPACK_IMPORTED_MODULE_3__["asDays"];
proto.asWeeks = _as__WEBPACK_IMPORTED_MODULE_3__["asWeeks"];
proto.asMonths = _as__WEBPACK_IMPORTED_MODULE_3__["asMonths"];
proto.asQuarters = _as__WEBPACK_IMPORTED_MODULE_3__["asQuarters"];
proto.asYears = _as__WEBPACK_IMPORTED_MODULE_3__["asYears"];
proto.valueOf = _as__WEBPACK_IMPORTED_MODULE_3__["valueOf"];
proto._bubble = _bubble__WEBPACK_IMPORTED_MODULE_4__["bubble"];
proto.clone = _clone__WEBPACK_IMPORTED_MODULE_5__["clone"];
proto.get = _get__WEBPACK_IMPORTED_MODULE_6__["get"];
proto.milliseconds = _get__WEBPACK_IMPORTED_MODULE_6__["milliseconds"];
proto.seconds = _get__WEBPACK_IMPORTED_MODULE_6__["seconds"];
proto.minutes = _get__WEBPACK_IMPORTED_MODULE_6__["minutes"];
proto.hours = _get__WEBPACK_IMPORTED_MODULE_6__["hours"];
proto.days = _get__WEBPACK_IMPORTED_MODULE_6__["days"];
proto.weeks = _get__WEBPACK_IMPORTED_MODULE_6__["weeks"];
proto.months = _get__WEBPACK_IMPORTED_MODULE_6__["months"];
proto.years = _get__WEBPACK_IMPORTED_MODULE_6__["years"];
proto.humanize = _humanize__WEBPACK_IMPORTED_MODULE_7__["humanize"];
proto.toISOString = _iso_string__WEBPACK_IMPORTED_MODULE_8__["toISOString"];
proto.toString = _iso_string__WEBPACK_IMPORTED_MODULE_8__["toISOString"];
proto.toJSON = _iso_string__WEBPACK_IMPORTED_MODULE_8__["toISOString"];
proto.locale = _moment_locale__WEBPACK_IMPORTED_MODULE_9__["locale"];
proto.localeData = _moment_locale__WEBPACK_IMPORTED_MODULE_9__["localeData"];

// Deprecations


proto.toIsoString = Object(_utils_deprecate__WEBPACK_IMPORTED_MODULE_11__["deprecate"])(
    'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
    _iso_string__WEBPACK_IMPORTED_MODULE_8__["toISOString"]
);
proto.lang = _moment_locale__WEBPACK_IMPORTED_MODULE_9__["lang"];


/***/ }),
/* 173 */
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/abs.js ***!
  \*****************************************************/
/*! exports provided: abs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abs", function() { return abs; });
var mathAbs = Math.abs;

function abs() {
    var data = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);

    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);

    return this;
}


/***/ }),
/* 174 */
/*!**************************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/add-subtract.js ***!
  \**************************************************************/
/*! exports provided: add, subtract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subtract", function() { return subtract; });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ 136);


function addSubtract(duration, input, value, direction) {
    var other = Object(_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add(input, value) {
    return addSubtract(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract(input, value) {
    return addSubtract(this, input, value, -1);
}


/***/ }),
/* 175 */
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/as.js ***!
  \****************************************************/
/*! exports provided: as, valueOf, asMilliseconds, asSeconds, asMinutes, asHours, asDays, asWeeks, asMonths, asQuarters, asYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "as", function() { return as; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueOf", function() { return valueOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asMilliseconds", function() { return asMilliseconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asSeconds", function() { return asSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asMinutes", function() { return asMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asHours", function() { return asHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asDays", function() { return asDays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asWeeks", function() { return asWeeks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asMonths", function() { return asMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asQuarters", function() { return asQuarters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asYears", function() { return asYears; });
/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ 176);
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/aliases */ 109);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/to-int */ 112);




function as(units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days,
        months,
        milliseconds = this._milliseconds;

    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_1__["normalizeUnits"])(units);

    if (units === 'month' || units === 'quarter' || units === 'year') {
        days = this._days + milliseconds / 864e5;
        months = this._months + Object(_bubble__WEBPACK_IMPORTED_MODULE_0__["daysToMonths"])(days);
        switch (units) {
            case 'month':
                return months;
            case 'quarter':
                return months / 3;
            case 'year':
                return months / 12;
        }
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(Object(_bubble__WEBPACK_IMPORTED_MODULE_0__["monthsToDays"])(this._months));
        switch (units) {
            case 'week':
                return days / 7 + milliseconds / 6048e5;
            case 'day':
                return days + milliseconds / 864e5;
            case 'hour':
                return days * 24 + milliseconds / 36e5;
            case 'minute':
                return days * 1440 + milliseconds / 6e4;
            case 'second':
                return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond':
                return Math.floor(days * 864e5) + milliseconds;
            default:
                throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf() {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_2__["default"])(this._months / 12) * 31536e6
    );
}

function makeAs(alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms'),
    asSeconds = makeAs('s'),
    asMinutes = makeAs('m'),
    asHours = makeAs('h'),
    asDays = makeAs('d'),
    asWeeks = makeAs('w'),
    asMonths = makeAs('M'),
    asQuarters = makeAs('Q'),
    asYears = makeAs('y');




/***/ }),
/* 176 */
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/bubble.js ***!
  \********************************************************/
/*! exports provided: bubble, daysToMonths, monthsToDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daysToMonths", function() { return daysToMonths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthsToDays", function() { return monthsToDays; });
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abs-floor */ 113);
/* harmony import */ var _utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/abs-ceil */ 177);



function bubble() {
    var milliseconds = this._milliseconds,
        days = this._days,
        months = this._months,
        data = this._data,
        seconds,
        minutes,
        hours,
        years,
        monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (
        !(
            (milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0)
        )
    ) {
        milliseconds += Object(_utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__["default"])(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(milliseconds / 1000);
    data.seconds = seconds % 60;

    minutes = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(seconds / 60);
    data.minutes = minutes % 60;

    hours = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(minutes / 60);
    data.hours = hours % 24;

    days += Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(hours / 24);

    // convert days to months
    monthsFromDays = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(daysToMonths(days));
    months += monthsFromDays;
    days -= Object(_utils_abs_ceil__WEBPACK_IMPORTED_MODULE_1__["default"])(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(months / 12);
    months %= 12;

    data.days = days;
    data.months = months;
    data.years = years;

    return this;
}

function daysToMonths(days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return (days * 4800) / 146097;
}

function monthsToDays(months) {
    // the reverse of daysToMonths
    return (months * 146097) / 4800;
}


/***/ }),
/* 177 */
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/utils/abs-ceil.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return absCeil; });
function absCeil(number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}


/***/ }),
/* 178 */
/*!*******************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/clone.js ***!
  \*******************************************************/
/*! exports provided: clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ 136);


function clone() {
    return Object(_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(this);
}


/***/ }),
/* 179 */
/*!*****************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/get.js ***!
  \*****************************************************/
/*! exports provided: get, milliseconds, seconds, minutes, hours, days, months, years, weeks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milliseconds", function() { return milliseconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutes", function() { return minutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hours", function() { return hours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "days", function() { return days; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "years", function() { return years; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weeks", function() { return weeks; });
/* harmony import */ var _units_aliases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/aliases */ 109);
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/abs-floor */ 113);



function get(units) {
    units = Object(_units_aliases__WEBPACK_IMPORTED_MODULE_0__["normalizeUnits"])(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds'),
    seconds = makeGetter('seconds'),
    minutes = makeGetter('minutes'),
    hours = makeGetter('hours'),
    days = makeGetter('days'),
    months = makeGetter('months'),
    years = makeGetter('years');



function weeks() {
    return Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_1__["default"])(this.days() / 7);
}


/***/ }),
/* 180 */
/*!**********************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/humanize.js ***!
  \**********************************************************/
/*! exports provided: getSetRelativeTimeRounding, getSetRelativeTimeThreshold, humanize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetRelativeTimeRounding", function() { return getSetRelativeTimeRounding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSetRelativeTimeThreshold", function() { return getSetRelativeTimeThreshold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humanize", function() { return humanize; });
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ 136);


var round = Math.round,
    thresholds = {
        ss: 44, // a few seconds to seconds
        s: 45, // seconds to minute
        m: 45, // minutes to hour
        h: 22, // hours to day
        d: 26, // days to month/week
        w: null, // weeks to month
        M: 11, // months to year
    };

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime(posNegDuration, withoutSuffix, thresholds, locale) {
    var duration = Object(_create__WEBPACK_IMPORTED_MODULE_0__["createDuration"])(posNegDuration).abs(),
        seconds = round(duration.as('s')),
        minutes = round(duration.as('m')),
        hours = round(duration.as('h')),
        days = round(duration.as('d')),
        months = round(duration.as('M')),
        weeks = round(duration.as('w')),
        years = round(duration.as('y')),
        a =
            (seconds <= thresholds.ss && ['s', seconds]) ||
            (seconds < thresholds.s && ['ss', seconds]) ||
            (minutes <= 1 && ['m']) ||
            (minutes < thresholds.m && ['mm', minutes]) ||
            (hours <= 1 && ['h']) ||
            (hours < thresholds.h && ['hh', hours]) ||
            (days <= 1 && ['d']) ||
            (days < thresholds.d && ['dd', days]);

    if (thresholds.w != null) {
        a =
            a ||
            (weeks <= 1 && ['w']) ||
            (weeks < thresholds.w && ['ww', weeks]);
    }
    a = a ||
        (months <= 1 && ['M']) ||
        (months < thresholds.M && ['MM', months]) ||
        (years <= 1 && ['y']) || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof roundingFunction === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize(argWithSuffix, argThresholds) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var withSuffix = false,
        th = thresholds,
        locale,
        output;

    if (typeof argWithSuffix === 'object') {
        argThresholds = argWithSuffix;
        argWithSuffix = false;
    }
    if (typeof argWithSuffix === 'boolean') {
        withSuffix = argWithSuffix;
    }
    if (typeof argThresholds === 'object') {
        th = Object.assign({}, thresholds, argThresholds);
        if (argThresholds.s != null && argThresholds.ss == null) {
            th.ss = argThresholds.s - 1;
        }
    }

    locale = this.localeData();
    output = relativeTime(this, !withSuffix, th, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}


/***/ }),
/* 181 */
/*!************************************************************!*\
  !*** ./node_modules/moment/src/lib/duration/iso-string.js ***!
  \************************************************************/
/*! exports provided: toISOString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toISOString", function() { return toISOString; });
/* harmony import */ var _utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abs-floor */ 113);

var abs = Math.abs;

function sign(x) {
    return (x > 0) - (x < 0) || +x;
}

function toISOString() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs(this._milliseconds) / 1000,
        days = abs(this._days),
        months = abs(this._months),
        minutes,
        hours,
        years,
        s,
        total = this.asSeconds(),
        totalSign,
        ymSign,
        daysSign,
        hmsSign;

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(seconds / 60);
    hours = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years = Object(_utils_abs_floor__WEBPACK_IMPORTED_MODULE_0__["default"])(months / 12);
    months %= 12;

    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

    totalSign = total < 0 ? '-' : '';
    ymSign = sign(this._months) !== sign(total) ? '-' : '';
    daysSign = sign(this._days) !== sign(total) ? '-' : '';
    hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

    return (
        totalSign +
        'P' +
        (years ? ymSign + years + 'Y' : '') +
        (months ? ymSign + months + 'M' : '') +
        (days ? daysSign + days + 'D' : '') +
        (hours || minutes || seconds ? 'T' : '') +
        (hours ? hmsSign + hours + 'H' : '') +
        (minutes ? hmsSign + minutes + 'M' : '') +
        (seconds ? hmsSign + s + 'S' : '')
    );
}


/***/ }),
/* 182 */
/*!****************************************************!*\
  !*** ./node_modules/moment/src/lib/units/units.js ***!
  \****************************************************/
/*! exports provided: normalizeUnits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _day_of_month__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./day-of-month */ 160);
/* harmony import */ var _day_of_week__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day-of-week */ 123);
/* harmony import */ var _day_of_year__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./day-of-year */ 161);
/* harmony import */ var _hour__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hour */ 124);
/* harmony import */ var _millisecond__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./millisecond */ 164);
/* harmony import */ var _minute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./minute */ 162);
/* harmony import */ var _month__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./month */ 107);
/* harmony import */ var _offset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offset */ 140);
/* harmony import */ var _quarter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quarter */ 159);
/* harmony import */ var _second__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./second */ 163);
/* harmony import */ var _timestamp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timestamp */ 183);
/* harmony import */ var _timezone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timezone */ 165);
/* harmony import */ var _week_year__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./week-year */ 158);
/* harmony import */ var _week__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./week */ 119);
/* harmony import */ var _year__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./year */ 121);
/* harmony import */ var _aliases__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./aliases */ 109);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeUnits", function() { return _aliases__WEBPACK_IMPORTED_MODULE_15__["normalizeUnits"]; });

// Side effect imports





















/***/ }),
/* 183 */
/*!********************************************************!*\
  !*** ./node_modules/moment/src/lib/units/timestamp.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _format_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../format/format */ 102);
/* harmony import */ var _parse_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../parse/regex */ 114);
/* harmony import */ var _parse_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parse/token */ 115);
/* harmony import */ var _utils_to_int__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/to-int */ 112);





// FORMATTING

Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('X', 0, 0, 'unix');
Object(_format_format__WEBPACK_IMPORTED_MODULE_0__["addFormatToken"])('x', 0, 0, 'valueOf');

// PARSING

Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('x', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchSigned"]);
Object(_parse_regex__WEBPACK_IMPORTED_MODULE_1__["addRegexToken"])('X', _parse_regex__WEBPACK_IMPORTED_MODULE_1__["matchTimestamp"]);
Object(_parse_token__WEBPACK_IMPORTED_MODULE_2__["addParseToken"])('X', function (input, array, config) {
    config._d = new Date(parseFloat(input) * 1000);
});
Object(_parse_token__WEBPACK_IMPORTED_MODULE_2__["addParseToken"])('x', function (input, array, config) {
    config._d = new Date(Object(_utils_to_int__WEBPACK_IMPORTED_MODULE_3__["default"])(input));
});


/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map