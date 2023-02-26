'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var registerComponent = _interopDefault(require('@plasmicapp/host/registerComponent'));
var reactUseIntercom = require('react-use-intercom');
var React = _interopDefault(require('react'));

function ensure(x) {
  if (x === null || x === undefined) {
    debugger;
    throw new Error("Value must not be undefined or null");
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-intercom";
var IntercomProviderMeta = {
  name: "IntercomProvider",
  displayName: "Intercom Provider",
  importName: "IntercomProvider",
  importPath: modulePath,
  providesData: true,
  props: {
    appId: {
      type: "string",
      displayName: "App ID",
      description: "ID of your workspace"
    },
    shouldInitialize: {
      type: "boolean",
      displayName: "Intercom Initialize",
      description: "indicates if the Intercom should be initialized. Can be used in multistaged environment"
    },
    initializeDelay: {
      type: "number",
      displayName: "Delay",
      description: "Indicates if the intercom initialization should be delayed, delay is in ms, defaults to 0"
    },
    apiBase: {
      type: "string",
      displayName: "Api Base",
      description: "If you need to route your Messenger requests through a different endpoint than the default. Generally speaking, this is not need"
    }
  }
};
function IntercomProvider(_ref) {
  var apiBase = _ref.apiBase,
      shouldInitialize = _ref.shouldInitialize,
      initializeDelay = _ref.initializeDelay,
      appId = _ref.appId;

  if (!appId) {
    return React.createElement("div", null, "Please enter your APP ID");
  }

  return React.createElement(reactUseIntercom.IntercomProvider, {
    appId: appId,
    autoBoot: true,
    apiBase: apiBase,
    shouldInitialize: shouldInitialize,
    initializeDelay: initializeDelay
  });
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
    _registerComponent(IntercomProvider, IntercomProviderMeta);
  }
}

exports.IntercomProvider = IntercomProvider;
exports.IntercomProviderMeta = IntercomProviderMeta;
exports.ensure = ensure;
exports.registerAll = registerAll;
//# sourceMappingURL=plasmic-intercom.cjs.development.js.map
