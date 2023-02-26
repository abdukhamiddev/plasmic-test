import registerComponent from '@plasmicapp/host/registerComponent';
import registerGlobalContext from '@plasmicapp/host/registerGlobalContext';
import React, { useContext } from 'react';
import { usePlasmicQueryData } from '@plasmicapp/query';
import L from 'lodash-es';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

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
  exports.wrap = wrap;

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
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

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
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
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
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
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
        return new PromiseImpl(function(resolve, reject) {
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
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
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
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
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
        context.arg = undefined$1;
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

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

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

  exports.keys = function(object) {
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

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
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
          context.arg = undefined$1;
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
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
});

function ensure(x) {
  if (x === null || x === undefined) {
    debugger;
    throw new Error("Value must not be undefined or null");
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-yotpo";
var CredentialsContext = /*#__PURE__*/React.createContext(undefined);
var YotpoCredentialsProviderMeta = {
  name: "Yotpo",
  displayName: "Yotpo Credentials Provider",
  description: "Your app key is sometimes referred to as your Store ID.[get your App Key](https://support.yotpo.com/en/article/finding-your-yotpo-app-key-and-secret-key).",
  importName: "Yotpo",
  importPath: modulePath,
  props: {
    appKey: {
      type: "string",
      displayName: "App Key",
      description: "App Key of your Yotpo Store "
    },
    uToken: {
      type: "string",
      displayName: "UToken",
      description: "Utoken is required in non-public API calls to ensure private account data is accessible only by authorized users."
    }
  }
};
function YotpoCredentialsProvider(_ref) {
  var appKey = _ref.appKey,
      uToken = _ref.uToken,
      children = _ref.children;
  return React.createElement(CredentialsContext.Provider, {
    value: {
      appKey: appKey,
      uToken: uToken
    }
  }, children);
}
var YotpoReviewsMeta = {
  name: "Yotpo Reviews",
  displayName: "Yotpo Reviews",
  importName: "YotpoReviews",
  importPath: modulePath,
  providesData: true,
  description: "Yotpo Reviews for your product pages ",
  defaultStyles: {
    width: "400px",
    height: "600px"
  },
  props: {
    reviewId: {
      type: "choice",
      options: function options(props, ctx) {
        var _ctx$reviews$map, _ctx$reviews;

        return (_ctx$reviews$map = ctx == null ? void 0 : (_ctx$reviews = ctx.reviews) == null ? void 0 : _ctx$reviews.map(function (item) {
          return {
            label: item == null ? void 0 : item.name,
            value: item == null ? void 0 : item.id
          };
        })) != null ? _ctx$reviews$map : [];
      },
      displayName: "Review",
      description: "Review Widget which to be displayed"
    },
    productPrice: {
      type: "string",
      displayName: "Price",
      description: "Price of the Product"
    },
    currency: {
      type: "string",
      displayName: "Currency",
      description: "Currency"
    }
  }
};
function YotpoReviews(_ref2) {
  var reviewId = _ref2.reviewId,
      setControlContextData = _ref2.setControlContextData,
      productPrice = _ref2.productPrice,
      currency = _ref2.currency,
      className = _ref2.className;
  var creds = ensure(useContext(CredentialsContext));
  var cacheKey = JSON.stringify({
    creds: creds,
    reviewId: reviewId
  });
  React.useEffect(function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = "(function e(){var e=document.createElement(\"script\");e.type=\"text/javascript\",e.async=true,e.src=\"//staticw2.yotpo.com/" + creds.appKey + "/widget.js\";var t=document.getElementsByTagName(\"script\")[0];t.parentNode.insertBefore(e,t)})();";
    document.body.appendChild(script);
    return function () {
      document.body.removeChild(script);
    };
  }, [creds]);

  var _usePlasmicQueryData = usePlasmicQueryData(cacheKey + "/reviews", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
    var options, res;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = {
              method: "GET",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json"
              }
            };
            _context.next = 3;
            return fetch("https://api.yotpo.com/v1/apps/" + creds.appKey + "/reviews?utoken=" + creds.uToken, options);

          case 3:
            res = _context.sent;
            return _context.abrupt("return", res.json());

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))),
      reviewsData = _usePlasmicQueryData.data;

  var _usePlasmicQueryData2 = usePlasmicQueryData(cacheKey + "/review", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
    var options, res;
    return runtime_1.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (reviewId) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", undefined);

          case 2:
            options = {
              method: "GET",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json"
              }
            };
            _context2.next = 5;
            return fetch("https://api.yotpo.com/reviews/" + reviewId + "?utoken=" + creds.uToken, options);

          case 5:
            res = _context2.sent;
            return _context2.abrupt("return", res.json());

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }))),
      reviewData = _usePlasmicQueryData2.data;

  if (!reviewsData) {
    return React.createElement("div", null, "Please configure the Yotpo Credentials provider with valid AppKey.");
  }

  var data = Object.values(reviewsData).map(function (item) {
    return item;
  });
  setControlContextData == null ? void 0 : setControlContextData({
    reviews: data[0] || []
  });

  if (!creds.uToken || !creds.appKey) {
    return React.createElement("div", null, "Please specify a valid API Credentials: uToken,appKey");
  }

  if (!reviewData) {
    return React.createElement("div", null, "Please choose the reviewId");
  }

  if (!productPrice || !currency) {
    return React.createElement("div", null, " Please enter Product price and Currency");
  }

  var review = Object.values(reviewsData).flatMap(function (item, i) {
    return (L.isArray(item) ? item : [item]).filter(function (review) {
      return review.id === reviewId;
    });
  });
  var renderedData = reviewData == null ? void 0 : reviewData.response.review.products.map(function (item) {
    var _review$;

    var imageUrl = item == null ? void 0 : item.Product.images.map(function (image) {
      return image.image_url;
    });
    return React.createElement("div", {
      key: item.Product.id,
      className: "yotpo yotpo-main-widget",
      "data-product-id": (_review$ = review[0]) == null ? void 0 : _review$.sku,
      "data-price": productPrice,
      "data-currency": currency,
      "data-name": item == null ? void 0 : item.Product.name,
      "data-url": item == null ? void 0 : item.Product.shorten_url,
      "data-image-url": imageUrl
    });
  });
  return React.createElement("div", {
    className: className
  }, renderedData);
}
var YotpoStarRatingMeta = {
  name: "Yotpo Star Rating",
  displayName: "Yotpo Star Rating",
  importName: "YotpoStarRating",
  importPath: modulePath,
  providesData: true,
  description: "Yotpo Star Rating for your product pages ",
  props: {
    productId: {
      type: "choice",
      options: function options(props, ctx) {
        var _ctx$reviews$map2, _ctx$reviews2;

        return (_ctx$reviews$map2 = ctx == null ? void 0 : (_ctx$reviews2 = ctx.reviews) == null ? void 0 : _ctx$reviews2.map(function (item) {
          return {
            label: item == null ? void 0 : item.name,
            value: item == null ? void 0 : item.id
          };
        })) != null ? _ctx$reviews$map2 : [];
      },
      displayName: "Product",
      description: "Product which you want to show rating"
    }
  }
};
function YotpoStarRating(_ref5) {
  var productId = _ref5.productId,
      className = _ref5.className,
      setControlContextData = _ref5.setControlContextData;
  var creds = ensure(useContext(CredentialsContext));
  var cacheKey = JSON.stringify({
    creds: creds,
    productId: productId
  });
  React.useEffect(function () {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = "(function e(){var e=document.createElement(\"script\");e.type=\"text/javascript\",e.async=true,e.src=\"//staticw2.yotpo.com/" + creds.appKey + "/widget.js\";var t=document.getElementsByTagName(\"script\")[0];t.parentNode.insertBefore(e,t)})();";
    document.body.appendChild(script);
    return function () {
      document.body.removeChild(script);
    };
  }, [creds]);

  var _usePlasmicQueryData3 = usePlasmicQueryData(cacheKey + "/starReviews", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee3() {
    var options, res;
    return runtime_1.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            options = {
              method: "GET",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json"
              }
            };
            _context3.next = 3;
            return fetch("https://api.yotpo.com/v1/apps/" + creds.appKey + "/reviews?utoken=" + creds.uToken, options);

          case 3:
            res = _context3.sent;
            return _context3.abrupt("return", res.json());

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }))),
      reviews = _usePlasmicQueryData3.data;

  var _usePlasmicQueryData4 = usePlasmicQueryData(cacheKey + "/starReview", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee4() {
    var options, res;
    return runtime_1.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (productId) {
              _context4.next = 2;
              break;
            }

            return _context4.abrupt("return", undefined);

          case 2:
            options = {
              method: "GET",
              headers: {
                accept: "application/json",
                "Content-Type": "application/json"
              }
            };
            _context4.next = 5;
            return fetch("https://api.yotpo.com/reviews/" + productId + "?utoken=" + creds.uToken, options);

          case 5:
            res = _context4.sent;
            return _context4.abrupt("return", res.json());

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }))),
      review = _usePlasmicQueryData4.data;

  if (!creds.uToken || !creds.appKey) {
    return React.createElement("div", null, "Please specify a valid API Credentials: uToken,appKey");
  }

  if (!reviews) {
    return React.createElement("div", null, "Please configure the Yotpo Credentials provider with valid AppKey.");
  }

  var data = Object.values(reviews).map(function (item) {
    return item;
  });
  setControlContextData == null ? void 0 : setControlContextData({
    reviews: data[0] || []
  });

  if (!review) {
    return React.createElement("div", null, "Please configure the Yotpo Credentials provider with valid AppKey.");
  }

  var product = Object.values(reviews).flatMap(function (item, i) {
    return (L.isArray(item) ? item : [item]).filter(function (review) {
      return review.id === productId;
    });
  });
  var renderedData = review == null ? void 0 : review.response.review.products.map(function (item) {
    var _product$;

    return React.createElement("div", {
      className: "yotpo bottomLine",
      "data-product-id": (_product$ = product[0]) == null ? void 0 : _product$.sku,
      "data-url": item.Product.product_url
    });
  });
  return React.createElement("div", {
    className: className
  }, renderedData);
}

function registerAll(loader) {
  var _registerComponent = function _registerComponent(Component, defaultMeta) {
    if (loader) {
      loader.registerComponent(Component, defaultMeta);
    } else {
      registerComponent(Component, defaultMeta);
    }
  };

  if (loader) {
    loader.registerGlobalContext(YotpoCredentialsProvider, YotpoCredentialsProviderMeta);
  } else {
    registerGlobalContext(YotpoCredentialsProvider, YotpoCredentialsProviderMeta);
  }

  _registerComponent(YotpoReviews, YotpoReviewsMeta);

  _registerComponent(YotpoStarRating, YotpoStarRatingMeta);
}

export { YotpoCredentialsProvider, YotpoCredentialsProviderMeta, YotpoReviews, YotpoReviewsMeta, YotpoStarRating, YotpoStarRatingMeta, ensure, registerAll };
//# sourceMappingURL=plasmic-yotpo.esm.js.map
