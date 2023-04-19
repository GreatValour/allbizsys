// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
!function () {
  "use strict";

  function t() {
    return "cf-marker-" + Math.random().toString().slice(2);
  }
  function e() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    (n = console.warn || console.log).call.apply(n, [console, "[ROCKET LOADER] "].concat(t));
    var n;
  }
  function n(t, e) {
    var n = e.parentNode;
    n && h(t, n, e);
  }
  function r(t, e) {
    h(t, e, e.childNodes[0]);
  }
  function o(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
  }
  function i(t) {
    var e = t.namespaceURI === A ? "xlink:href" : "src";
    return t.getAttribute(e);
  }
  function a(t, e) {
    var n = t.type.substr(e.length);
    return !(n && !E[n.trim()]) && (!k || !t.hasAttribute("nomodule")) && !(!k && "module" === n);
  }
  function c(t) {
    return a(t, "");
  }
  function s(t, e) {
    return function (n) {
      if (e(), t) return t.call(this, n);
    };
  }
  function u(t, e) {
    t.onload = s(t.onload, e), t.onerror = s(t.onerror, e);
  }
  function p(t) {
    var e = document.createElementNS(t.namespaceURI, "script");
    e.async = t.hasAttribute("async"), e.textContent = t.textContent;
    for (var n = 0; n < t.attributes.length; n++) {
      var r = t.attributes[n];
      try {
        r.namespaceURI ? e.setAttributeNS(r.namespaceURI, r.name, r.value) : e.setAttribute(r.name, r.value);
      } catch (o) {}
    }
    return e;
  }
  function l(t, e) {
    var n = new I(e);
    t.dispatchEvent(n);
  }
  function d(e) {
    var n = e.namespaceURI === A,
      r = t();
    e.setAttribute(r, "");
    var i = n ? "<svg>" + e.outerHTML + "</svg>" : e.outerHTML;
    L.call(document, i);
    var a = document.querySelector("[" + r + "]");
    if (a) {
      a.removeAttribute(r);
      var c = n && a.parentNode;
      c && o(c);
    }
    return a;
  }
  function f(t) {
    if (t && "handleEvent" in t) {
      var e = t.handleEvent;
      return "function" == typeof e ? e.bind(t) : e;
    }
    return t;
  }
  function h(t, e, n) {
    var r = n ? function (t) {
      return e.insertBefore(t, n);
    } : function (t) {
      return e.appendChild(t);
    };
    Array.prototype.slice.call(t).forEach(r);
  }
  function v() {
    return /chrome/i.test(navigator.userAgent) && /google/i.test(navigator.vendor);
  }
  function y(t, e) {
    function n() {
      this.constructor = t;
    }
    H(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
  }
  function m(t) {
    return t instanceof Window ? ["load"] : t instanceof Document ? ["DOMContentLoaded", "readystatechange"] : [];
  }
  function b(t) {
    var e = t.getAttribute(R);
    if (!e) return null;
    var n = e.split(T);
    return {
      nonce: n[0],
      handlerPrefixLength: +n[1],
      bailout: !t.hasAttribute("defer")
    };
  }
  function g(t) {
    var e = B + t.nonce;
    Array.prototype.forEach.call(document.querySelectorAll("[" + e + "]"), function (n) {
      n.removeAttribute(e), Array.prototype.forEach.call(n.attributes, function (e) {
        /^on/.test(e.name) && "function" != typeof n[e.name] && n.setAttribute(e.name, e.value.substring(t.handlerPrefixLength));
      });
    });
  }
  function S() {
    var t = window;
    "undefined" != typeof Promise && (t.__cfQR = {
      done: new Promise(function (t) {
        return U = t;
      })
    });
  }
  function w(t) {
    var e = new N(t),
      n = new C(e);
    e.harvestScriptsInDocument(), new W(e, {
      nonce: t,
      blocking: !0,
      docWriteSimulator: n,
      callback: function callback() {}
    }).run();
  }
  function x(t) {
    var e = new N(t),
      n = new C(e);
    e.harvestScriptsInDocument();
    var r = new W(e, {
      nonce: t,
      blocking: !1,
      docWriteSimulator: n,
      callback: function callback() {
        window.__cfRLUnblockHandlers = !0, r.removePreloadHints(), P(t);
      }
    });
    r.insertPreloadHints(), M.runOnLoad(function () {
      r.run();
    });
  }
  function P(t) {
    var e = new O(t);
    M.simulateStateBeforeDeferScriptsActivation(), e.harvestDeferScriptsInDocument(), new W(e, {
      nonce: t,
      blocking: !1,
      callback: function callback() {
        M.simulateStateAfterDeferScriptsActivation(), U && U();
      }
    }).run();
  }
  var A = "http://www.w3.org/2000/svg",
    E = {
      "application/ecmascript": !0,
      "application/javascript": !0,
      "application/x-ecmascript": !0,
      "application/x-javascript": !0,
      "text/ecmascript": !0,
      "text/javascript": !0,
      "text/javascript1.0": !0,
      "text/javascript1.1": !0,
      "text/javascript1.2": !0,
      "text/javascript1.3": !0,
      "text/javascript1.4": !0,
      "text/javascript1.5": !0,
      "text/jscript": !0,
      "text/livescript": !0,
      "text/x-ecmascript": !0,
      "text/x-javascript": !0,
      module: !0
    },
    k = void 0 !== document.createElement("script").noModule,
    I = function () {
      var t = window;
      return t.__rocketLoaderEventCtor || Object.defineProperty(t, "__rocketLoaderEventCtor", {
        value: Event
      }), t.__rocketLoaderEventCtor;
    }(),
    L = document.write,
    _ = document.writeln,
    H = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    },
    D = function () {
      function t(t) {
        this.nonce = t, this.items = [];
      }
      return Object.defineProperty(t.prototype, "hasItems", {
        get: function get() {
          return this.items.length > 0;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.pop = function () {
        return this.items.pop();
      }, t.prototype.forEach = function (t) {
        this.items.forEach(function (e) {
          var n = e.script;
          return t(n);
        });
      }, t.prototype.harvestScripts = function (t, e) {
        var n = this,
          r = e.filter,
          o = e.mutate;
        Array.prototype.slice.call(t.querySelectorAll("script")).filter(r).reverse().forEach(function (t) {
          o(t), n.pushScriptOnStack(t);
        });
      }, t.prototype.pushScriptOnStack = function (t) {
        var e = t.parentNode,
          n = this.createPlaceholder(t),
          r = !!i(t);
        e.replaceChild(n, t), this.items.push({
          script: t,
          placeholder: n,
          external: r,
          async: r && t.hasAttribute("async"),
          executable: c(t)
        });
      }, t.prototype.hasNonce = function (t) {
        return 0 === (t.getAttribute("type") || "").indexOf(this.nonce);
      }, t.prototype.removeNonce = function (t) {
        t.type = t.type.substr(this.nonce.length);
      }, t.prototype.makeNonExecutable = function (t) {
        t.type = this.nonce + t.type;
      }, t.prototype.isPendingDeferScript = function (t) {
        return t.hasAttribute("defer") || t.type === this.nonce + "module" && !t.hasAttribute("async");
      }, t;
    }(),
    N = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return y(e, t), e.prototype.harvestScriptsInDocument = function () {
        var t = this;
        this.harvestScripts(document, {
          filter: function filter(e) {
            return t.hasNonce(e);
          },
          mutate: function mutate(e) {
            t.isPendingDeferScript(e) || t.removeNonce(e);
          }
        });
      }, e.prototype.harvestScriptsAfterDocWrite = function (t) {
        var e = this;
        this.harvestScripts(t, {
          filter: c,
          mutate: function mutate(t) {
            e.isPendingDeferScript(t) && e.makeNonExecutable(t);
          }
        });
      }, e.prototype.createPlaceholder = function (t) {
        return document.createComment(t.outerHTML);
      }, e;
    }(D),
    O = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }
      return y(e, t), e.prototype.harvestDeferScriptsInDocument = function () {
        var t = this;
        this.harvestScripts(document, {
          filter: function filter(e) {
            return t.hasNonce(e) && t.isPendingDeferScript(e);
          },
          mutate: function mutate(e) {
            return t.removeNonce(e);
          }
        });
      }, e.prototype.createPlaceholder = function (t) {
        var e = p(t);
        return this.makeNonExecutable(e), e;
      }, e;
    }(D),
    C = function () {
      function t(t) {
        this.scriptStack = t;
      }
      return t.prototype.enable = function (t) {
        var e = this;
        this.insertionPointMarker = t, this.buffer = "", document.write = function () {
          for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return e.write(t, !1);
        }, document.writeln = function () {
          for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
          return e.write(t, !0);
        };
      }, t.prototype.flushWrittenContentAndDisable = function () {
        document.write = L, document.writeln = _, this.buffer.length && (document.contains(this.insertionPointMarker) ? this.insertionPointMarker.parentNode === document.head ? this.insertContentInHead() : this.insertContentInBody() : e("Insertion point marker for document.write was detached from document:", "Markup will not be inserted"));
      }, t.prototype.insertContentInHead = function () {
        var t = new DOMParser(),
          e = "<!DOCTYPE html><head>" + this.buffer + "</head>",
          o = t.parseFromString(e, "text/html");
        if (this.scriptStack.harvestScriptsAfterDocWrite(o), n(o.head.childNodes, this.insertionPointMarker), o.body.childNodes.length) {
          for (var i = Array.prototype.slice.call(o.body.childNodes), a = this.insertionPointMarker.nextSibling; a;) i.push(a), a = a.nextSibling;
          document.body || L.call(document, "<body>"), r(i, document.body);
        }
      }, t.prototype.insertContentInBody = function () {
        var t = this.insertionPointMarker.parentElement,
          e = document.createElement(t.tagName);
        e.innerHTML = this.buffer, this.scriptStack.harvestScriptsAfterDocWrite(e), n(e.childNodes, this.insertionPointMarker);
      }, t.prototype.write = function (t, e) {
        var n = document.currentScript;
        n && i(n) && n.hasAttribute("async") ? (r = e ? _ : L).call.apply(r, [document].concat(t)) : this.buffer += t.map(String).join(e ? "\n" : "");
        var r;
      }, t;
    }(),
    j = function () {
      function t() {
        var t = this;
        this.simulatedReadyState = "loading", this.bypassEventsInProxies = !1, this.nativeWindowAddEventListener = window.addEventListener;
        try {
          Object.defineProperty(document, "readyState", {
            get: function get() {
              return t.simulatedReadyState;
            }
          });
        } catch (e) {}
        this.setupEventListenerProxy(), this.updateInlineHandlers();
      }
      return t.prototype.runOnLoad = function (t) {
        var e = this;
        this.nativeWindowAddEventListener.call(window, "load", function (n) {
          if (!e.bypassEventsInProxies) return t(n);
        });
      }, t.prototype.updateInlineHandlers = function () {
        this.proxyInlineHandler(document, "onreadystatechange"), this.proxyInlineHandler(window, "onload"), document.body && this.proxyInlineHandler(document.body, "onload");
      }, t.prototype.simulateStateBeforeDeferScriptsActivation = function () {
        this.bypassEventsInProxies = !0, this.simulatedReadyState = "interactive", l(document, "readystatechange"), this.bypassEventsInProxies = !1;
      }, t.prototype.simulateStateAfterDeferScriptsActivation = function () {
        var t = this;
        this.bypassEventsInProxies = !0, l(document, "DOMContentLoaded"), this.simulatedReadyState = "complete", l(document, "readystatechange"), l(window, "load"), this.bypassEventsInProxies = !1, window.setTimeout(function () {
          return t.bypassEventsInProxies = !0;
        }, 0);
      }, t.prototype.setupEventListenerProxy = function () {
        var t = this;
        ("undefined" != typeof EventTarget ? [EventTarget.prototype] : [Node.prototype, Window.prototype]).forEach(function (e) {
          return t.patchEventTargetMethods(e);
        });
      }, t.prototype.patchEventTargetMethods = function (t) {
        var e = this,
          n = t.addEventListener,
          r = t.removeEventListener;
        t.addEventListener = function (t, r) {
          for (var o = [], i = 2; i < arguments.length; i++) o[i - 2] = arguments[i];
          var a = m(this),
            c = r && r.__rocketLoaderProxiedHandler;
          if (!c) {
            var s = f(r);
            "function" == typeof s ? (c = function c(n) {
              if (e.bypassEventsInProxies || a.indexOf(t) < 0) return s.call(this, n);
            }, Object.defineProperty(r, "__rocketLoaderProxiedHandler", {
              value: c
            })) : c = r;
          }
          n.call.apply(n, [this, t, c].concat(o));
        }, t.removeEventListener = function (t, e) {
          for (var n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
          var i = e && e.__rocketLoaderProxiedHandler || e;
          r.call.apply(r, [this, t, i].concat(n));
        };
      }, t.prototype.proxyInlineHandler = function (t, e) {
        try {
          var n = t[e];
          if (n && !n.__rocketLoaderInlineHandlerProxy) {
            var r = this;
            t[e] = function (t) {
              if (r.bypassEventsInProxies) return n.call(this, t);
            }, Object.defineProperty(t[e], "__rocketLoaderInlineHandlerProxy", {
              value: !0
            });
          }
        } catch (o) {
          return void console.warn("encountered an error when accessing " + e + " handler:", o.message);
        }
      }, t;
    }(),
    M = function () {
      var t = window;
      return t.__rocketLoaderLoadProgressSimulator || Object.defineProperty(t, "__rocketLoaderLoadProgressSimulator", {
        value: new j()
      }), t.__rocketLoaderLoadProgressSimulator;
    }(),
    W = function () {
      function t(t, e) {
        this.scriptStack = t, this.settings = e, this.preloadHints = [];
      }
      return t.prototype.insertPreloadHints = function () {
        var t = this;
        this.scriptStack.forEach(function (e) {
          if (a(e, t.settings.nonce)) {
            var n = i(e),
              r = v() && e.hasAttribute("integrity");
            if (n && !r) {
              var o = document.createElement("link");
              o.setAttribute("rel", "preload"), o.setAttribute("as", "script"), o.setAttribute("href", n), e.crossOrigin && o.setAttribute("crossorigin", e.crossOrigin), document.head.appendChild(o), t.preloadHints.push(o);
            }
          }
        });
      }, t.prototype.removePreloadHints = function () {
        this.preloadHints.forEach(function (t) {
          return o(t);
        });
      }, t.prototype.run = function () {
        for (var t = this, e = this; this.scriptStack.hasItems;) {
          var n = function () {
            var n = e.settings.docWriteSimulator,
              r = e.scriptStack.pop();
            n && !r.async && n.enable(r.placeholder);
            var o = e.activateScript(r);
            return o ? r.external && r.executable && !r.async ? (u(o, function () {
              t.finalizeActivation(r), t.run();
            }), {
              value: void 0
            }) : void e.finalizeActivation(r) : (n && n.flushWrittenContentAndDisable(), "continue");
          }();
          if ("object" == _typeof(n)) return n.value;
        }
        this.scriptStack.hasItems || this.settings.callback();
      }, t.prototype.finalizeActivation = function (t) {
        this.settings.docWriteSimulator && !t.async && this.settings.docWriteSimulator.flushWrittenContentAndDisable(), M.updateInlineHandlers(), o(t.placeholder);
      }, t.prototype.activateScript = function (t) {
        var n = t.script,
          r = t.placeholder,
          o = t.external,
          i = t.async,
          a = r.parentNode;
        if (!document.contains(r)) return e("Placeholder for script \n" + n.outerHTML + "\n was detached from document.", "Script will not be executed."), null;
        var c = this.settings.blocking && o && !i ? d(n) : p(n);
        return c ? (a.insertBefore(c, r), c) : (e("Failed to create activatable copy of script \n" + n.outerHTML + "\n", "Script will not be executed."), null);
      }, t;
    }(),
    R = "data-cf-settings",
    T = "|",
    B = "data-cf-modified-",
    U = void 0;
  !function () {
    var t = document.currentScript;
    if (t) {
      var n = b(t);
      n ? (o(t), g(n), M.updateInlineHandlers(), n.bailout ? w(n.nonce) : (S(), x(n.nonce))) : e("Activator script doesn't have settings. No scripts will be executed.");
    } else e("Can't obtain activator script. No scripts will be executed.");
  }();
}();
},{}],"../../../Users/Oluwanifemi/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58977" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../../../Users/Oluwanifemi/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"], null)
//# sourceMappingURL=/rocket-loader.min.2531082f.js.map