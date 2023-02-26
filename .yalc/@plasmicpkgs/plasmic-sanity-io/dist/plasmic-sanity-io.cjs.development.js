'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var registerComponent = _interopDefault(require('@plasmicapp/host/registerComponent'));
var registerGlobalContext = _interopDefault(require('@plasmicapp/host/registerGlobalContext'));
var host = require('@plasmicapp/host');
var query = require('@plasmicapp/query');
var sanityClient = _interopDefault(require('@sanity/client'));
var imageUrlBuilder = _interopDefault(require('@sanity/image-url'));
var changeCase = require('change-case');
var get = _interopDefault(require('dlv'));
var React = require('react');
var React__default = _interopDefault(React);

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

var runtime_1 = /*#__PURE__*/createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var runtime = function (exports) {

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
      define = function define(obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
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
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function () {
      return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
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
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    });
    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
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
          } // Be forgiving, per 25.3.3.3.3 of the spec:
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
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
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
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
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

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
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
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    define(Gp, iteratorSymbol, function () {
      return this;
    });
    define(Gp, "toString", function () {
      return "[object Generator]";
    });

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

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
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
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
          var i = -1,
              next = function next() {
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
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
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
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
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

          return !!caught;
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
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
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
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
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
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
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
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
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
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports );

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

var comparisonParameters = [{
  value: '==',
  label: 'Equality'
}, {
  value: '!=',
  label: 'Inequality'
}, {
  value: '>',
  label: 'Greater Than'
}, {
  value: '<',
  label: 'Lesser than'
}, {
  value: '<=',
  label: 'Less Than or Equal'
}, {
  value: '>=',
  label: 'Greater Than or Equal '
}];

function ensure(x) {
  if (x === null || x === undefined) {
    debugger;
    throw new Error("Value must not be undefined or null");
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-sanity-io";

var makeDataProviderName = function makeDataProviderName(docType) {
  return "currentSanity" + changeCase.pascalCase(docType) + "Item";
};

function makeSanityClient(creds) {
  var sanity = sanityClient({
    projectId: creds.projectId,
    dataset: creds.dataset,
    apiVersion: creds.apiVersion ? creds.apiVersion : "v1",
    token: creds.token,
    useCdn: creds.useCdn
  });
  return sanity;
}

var CredentialsContext = /*#__PURE__*/React__default.createContext(undefined);
var sanityCredentialsProviderMeta = {
  name: "SanityCredentialsProvider",
  displayName: "Sanity Credentials Provider",
  description: "Get your project ID, dataset, and token [here](https://www.sanity.io/manage).\n\nPlease also add 'https://host.plasmicdev.com' (or your app host origin) as an authorized host on the CORS origins section of your project.\n\n[Watch how to add Sanity data](https://www.youtube.com/watch?v=dLeu7I4RsYg).",
  importName: "SanityCredentialsProvider",
  importPath: modulePath,
  props: {
    projectId: {
      type: "string",
      displayName: "Project ID",
      defaultValueHint: "b2gfz67v",
      defaultValue: "b2gfz67v",
      description: "The ID of the project to use."
    },
    dataset: {
      type: "string",
      displayName: "Dataset",
      defaultValueHint: "production",
      defaultValue: "production",
      description: "The dataset to use."
    },
    apiVersion: {
      type: "string",
      displayName: "API Version",
      defaultValueHint: "v1",
      description: "The API version to use (if not set, 'v1' will be used) - see https://www.sanity.io/docs/js-client#specifying-api-version."
    },
    token: {
      type: "string",
      displayName: "Token",
      description: "The token to use (or leave blank for unauthenticated usage) - you can create tokens in the API section of your project (i.e. https://www.sanity.io/manage/personal/project/PROJECT_ID/api#tokens)."
    },
    useCdn: {
      type: "boolean",
      displayName: "Use CDN?",
      defaultValueHint: false,
      description: "Whether you want to use CDN ('false' if you want to ensure fresh data)."
    }
  }
};
function SanityCredentialsProvider(_ref) {
  var projectId = _ref.projectId,
      dataset = _ref.dataset,
      apiVersion = _ref.apiVersion,
      token = _ref.token,
      useCdn = _ref.useCdn,
      children = _ref.children;
  return React__default.createElement(CredentialsContext.Provider, {
    value: {
      projectId: projectId,
      dataset: dataset,
      apiVersion: apiVersion,
      token: token,
      useCdn: useCdn
    }
  }, children);
}
var sanityFetcherMeta = {
  name: "SanityFetcher",
  displayName: "Sanity Fetcher",
  importName: "SanityFetcher",
  importPath: modulePath,
  providesData: true,
  description: "Fetches Sanity data and repeats content of children once for every row fetched. Query Cheat Sheet - GROQ <https://www.sanity.io/docs/query-cheat-sheet>",
  defaultStyles: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridRowGap: "8px",
    gridColumnGap: "8px",
    padding: "8px",
    maxWidth: "100%"
  },
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "vbox",
        styles: {
          padding: "8px"
        },
        children: {
          type: "component",
          name: "SanityField"
        }
      }
    },
    groq: {
      type: "string",
      displayName: "GROQ",
      description: "Query in GROQ.",
      defaultValueHint: "*[_type == 'movie']"
    },
    docType: {
      type: "choice",
      options: function options(props, ctx) {
        var _ctx$docTypes;

        return (_ctx$docTypes = ctx == null ? void 0 : ctx.docTypes) != null ? _ctx$docTypes : [];
      },
      displayName: "Document type",
      description: "Document type to be queried (*[_type == DOC_TYPE] shortcut)."
    },
    filterField: {
      type: "choice",
      displayName: "Filter field",
      description: "Field (from Collection) to filter by",
      options: function options(props, ctx) {
        var _ctx$sanityFields;

        return (_ctx$sanityFields = ctx == null ? void 0 : ctx.sanityFields) != null ? _ctx$sanityFields : [];
      },
      hidden: function hidden(props, ctx) {
        return !props.docType && !props.groq;
      }
    },
    filterParameter: {
      type: "choice",
      displayName: "Filter Parameter",
      description: "Filter Parameter filter by.Read more (https://www.sanity.io/docs/groq-operators#3b7211e976f6)",
      options: function options(props, ctx) {
        return comparisonParameters.map(function (item) {
          return {
            label: item == null ? void 0 : item.label,
            value: item == null ? void 0 : item.value
          };
        });
      },
      hidden: function hidden(props, ctx) {
        return !props.filterField;
      }
    },
    filterValue: {
      type: "string",
      displayName: "Filter value",
      description: "Value to filter by, should be of filter field type",
      hidden: function hidden(props, ctx) {
        return !props.filterParameter;
      }
    },
    limit: {
      type: "string",
      displayName: "Limit",
      description: "Limit (0...-1 for unlimited).",
      defaultValue: "0...-1",
      defaultValueHint: "lmStart...lmEnd"
    },
    noAutoRepeat: {
      type: "boolean",
      displayName: "No auto-repeat",
      description: "Do not automatically repeat children for every category.",
      defaultValue: false
    },
    noLayout: {
      type: "boolean",
      displayName: "No layout",
      description: "When set, Sanity Fetcher will not layout its children; instead, the layout set on its parent element will be used. Useful if you want to set flex gap or control container tag type.",
      defaultValue: false
    }
  }
};
function SanityFetcher(_ref2) {
  var _allDataTypes$data, _data$data;

  var groq = _ref2.groq,
      docType = _ref2.docType,
      filterField = _ref2.filterField,
      filterValue = _ref2.filterValue,
      filterParameter = _ref2.filterParameter,
      limit = _ref2.limit,
      noAutoRepeat = _ref2.noAutoRepeat,
      children = _ref2.children,
      className = _ref2.className,
      noLayout = _ref2.noLayout,
      setControlContextData = _ref2.setControlContextData;
  var projectIdRegex = new RegExp(/^[-a-z0-9]+$/i);
  var datasetRegex = new RegExp(/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/);
  var dateRegex = new RegExp(/^\d{4}-\d{2}-\d{2}$/);
  var creds = ensure(React.useContext(CredentialsContext));

  if (!creds.projectId || !projectIdRegex.test(creds.projectId)) {
    return React__default.createElement("div", null, "Please specify a valid projectId, it can only contain only a-z, 0-9 and dashes.");
  } else if (!creds.dataset || !datasetRegex.test(creds.dataset)) {
    return React__default.createElement("div", null, "Please specify a valid dataset, they can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters.");
  } else if (creds.apiVersion) {
    if (creds.apiVersion !== "v1" && creds.apiVersion !== "1" && creds.apiVersion !== "X") {
      var date = new Date(creds.apiVersion);

      if (!(dateRegex.test(creds.apiVersion) && date instanceof Date && date.getTime() > 0)) {
        return React__default.createElement("div", null, "Please specify a valid API version, expected `v1`, `1` or date in format `YYYY-MM-DD`.");
      }
    }
  }

  var filterUniqueDocTypes = function filterUniqueDocTypes(records) {
    return records.map(function (record) {
      return record._type;
    }).reduce(function (acc, type) {
      if (!acc.includes(type)) {
        acc.push(type);
      }

      return acc;
    }, []);
  };

  var allDataTypes = query.usePlasmicQueryData(JSON.stringify(creds) + "/SANITY_DOCTYPES", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee() {
    var sanity, resp;
    return runtime_1.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sanity = makeSanityClient(creds);
            _context.next = 3;
            return sanity.fetch("*{_type}").then(filterUniqueDocTypes);

          case 3:
            resp = _context.sent;
            return _context.abrupt("return", resp);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  var docTypes = (_allDataTypes$data = allDataTypes.data) != null ? _allDataTypes$data : false;

  if (!groq && docType) {
    groq = "*[_type=='" + docType + "'";
  }

  var cacheKey = JSON.stringify({
    docType: docType,
    filterField: filterField,
    filterValue: filterValue,
    filterParameter: filterParameter,
    limit: limit,
    groq: groq,
    creds: creds
  });
  var sanity = makeSanityClient(creds);
  var data = query.usePlasmicQueryData(cacheKey, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/runtime_1.mark(function _callee2() {
    var query, resp;
    return runtime_1.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (groq) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", null);

          case 2:
            if (docType && filterField && filterValue && filterParameter) {
              query = groq + " && " + filterField + " " + filterParameter + " " + filterValue + "]";
            } else {
              query = groq + "][" + limit + "]";
            }

            _context2.next = 5;
            return sanity.fetch(query);

          case 5:
            resp = _context2.sent;
            return _context2.abrupt("return", resp);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));

  if (!docTypes) {
    return React__default.createElement("div", null, "Please configure the Sanity provider with a valid projectId, dataset, and token (if necessary). Don't forget to add 'https://host.plasmicdev.com' as an authorized host on the CORS origins section of your project.");
  }

  setControlContextData == null ? void 0 : setControlContextData({
    docTypes: docTypes
  });

  if (!(data != null && data.data)) {
    return React__default.createElement("div", null, "Please specify a valid GROQ query or select a Document type.");
  }

  var sanityFields = (_data$data = data.data) == null ? void 0 : _data$data.map(function (item) {
    var fields = Object.keys(item).filter(function (field) {
      var value = get(item, field);
      return typeof value !== "object" || value._type !== "image";
    });
    console.log(fields);
    return fields;
  });
  console.log(sanityFields);
  setControlContextData == null ? void 0 : setControlContextData({
    docTypes: docTypes,
    sanityFields: sanityFields[0]
  });

  if (filterField && !filterParameter && !filterValue) {
    return React__default.createElement("div", null, "Please specify a Filter Parameter and a Filter Value");
  }

  if (filterField && filterParameter && !filterValue) {
    return React__default.createElement("div", null, "Please specify a Filter Value");
  }

  if (!filterField && !filterParameter && filterValue) {
    return React__default.createElement("div", null, "Please specify a Filter Field and a Filter Parameter");
  }

  if (!filterField && filterParameter && !filterValue) {
    return React__default.createElement("div", null, "Please specify a Filter Field and a Filter Value");
  }

  var repElements;
  var imageBuilder = imageUrlBuilder(sanity);

  if (filterParameter && filterField && filterValue) {
    if (data.data.length === 0) {
      return React__default.createElement("div", null, "No published types found");
    }

    repElements = data == null ? void 0 : data.data.map(function (item, index) {
      Object.keys(item).forEach(function (field) {
        if (item[field]._type === "image") {
          item[field].imgUrl = imageBuilder.image(item[field]).ignoreImageParams().toString();
        }
      });
      return React__default.createElement(host.DataProvider, {
        key: item._id,
        name: "sanityItem",
        data: item,
        hidden: true
      }, React__default.createElement(host.DataProvider, {
        name: makeDataProviderName(docType),
        data: item
      }, host.repeatedElement(index, children)));
    });
  } else {
    repElements = data == null ? void 0 : data.data.map(function (item, index) {
      Object.keys(item).forEach(function (field) {
        if (item[field]._type === "image") {
          item[field].imgUrl = imageBuilder.image(item[field]).ignoreImageParams().toString();
        }
      });
      return docType ? React__default.createElement(host.DataProvider, {
        key: item._id,
        name: "sanityItem",
        data: item,
        hidden: true
      }, React__default.createElement(host.DataProvider, {
        name: makeDataProviderName(docType),
        data: item
      }, host.repeatedElement(index, children))) : React__default.createElement(host.DataProvider, {
        key: item._id,
        name: "sanityItem",
        data: item
      }, host.repeatedElement(index, children));
    });
  }

  return React__default.createElement(host.DataProvider, {
    name: "sanityItems",
    data: data.data
  }, noAutoRepeat ? children : noLayout ? React__default.createElement(React__default.Fragment, null, " ", repElements, " ") : React__default.createElement("div", {
    className: className
  }, " ", repElements, " "));
}
var sanityFieldMeta = {
  name: "SanityField",
  displayName: "Sanity Field",
  importName: "SanityField",
  importPath: modulePath,
  props: {
    path: {
      type: "string",
      displayName: "Path",
      description: "Field path - see https://www.sanity.io/docs/ids.",
      defaultValueHint: "castMembers.0._key"
    },
    field: {
      type: "choice",
      options: function options(props, ctx) {
        var _ctx$fields;

        return (_ctx$fields = ctx == null ? void 0 : ctx.fields) != null ? _ctx$fields : [];
      },
      displayName: "Field",
      description: "Field to be displayed."
    }
  }
};
function SanityField(_ref5) {
  var className = _ref5.className,
      path = _ref5.path,
      field = _ref5.field,
      setControlContextData = _ref5.setControlContextData;
  var item = host.useSelector("sanityItem");

  if (!item) {
    return React__default.createElement("div", null, "SanityField must be used within a SanityFetcher");
  } // Getting only fields that aren't objects


  var displayableFields = Object.keys(item).filter(function (field) {
    var value = get(item, field);
    return typeof value !== "object" || value._type === "image";
  });
  setControlContextData == null ? void 0 : setControlContextData({
    fields: displayableFields,
    isImage: false
  });

  if (!path && !field) {
    return React__default.createElement("div", null, "Please specify a valid path or select a field.");
  }

  if (!path) {
    path = field;
  }

  var data = get(item, path);
  setControlContextData == null ? void 0 : setControlContextData({
    fields: displayableFields,
    isImage: (data == null ? void 0 : data._type) == "image"
  });

  if (!data) {
    return React__default.createElement("div", null, "Please specify a valid path.");
  } else if ((data == null ? void 0 : data._type) === "image") {
    return React__default.createElement("img", {
      className: className,
      src: data.imgUrl
    });
  } else {
    return React__default.createElement("div", {
      className: className
    }, data);
  }
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
    loader.registerGlobalContext(SanityCredentialsProvider, sanityCredentialsProviderMeta);
  } else {
    registerGlobalContext(SanityCredentialsProvider, sanityCredentialsProviderMeta);
  }

  _registerComponent(SanityFetcher, sanityFetcherMeta);

  _registerComponent(SanityField, sanityFieldMeta);
}

exports.SanityCredentialsProvider = SanityCredentialsProvider;
exports.SanityFetcher = SanityFetcher;
exports.SanityField = SanityField;
exports.ensure = ensure;
exports.registerAll = registerAll;
exports.sanityCredentialsProviderMeta = sanityCredentialsProviderMeta;
exports.sanityFetcherMeta = sanityFetcherMeta;
exports.sanityFieldMeta = sanityFieldMeta;
//# sourceMappingURL=plasmic-sanity-io.cjs.development.js.map
