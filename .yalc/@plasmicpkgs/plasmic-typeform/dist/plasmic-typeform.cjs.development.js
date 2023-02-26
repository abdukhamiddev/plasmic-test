'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var registerComponent = _interopDefault(require('@plasmicapp/host/registerComponent'));
var React = _interopDefault(require('react'));
var embedReact = require('@typeform/embed-react');

function ensure(x) {
  if (x === null || x === undefined) {
    debugger;
    throw new Error("Value must not be undefined or null");
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-typeform";
var TypeformMeta = {
  name: "TypeForm",
  displayName: "Typeform",
  importName: "Typeform",
  importPath: modulePath,
  providesData: true,
  description: "Embed Typeform on your website",
  defaultStyles: {
    width: "600px",
    height: "700px"
  },
  props: {
    formId: {
      type: "string",
      displayName: "Form ID",
      description: "ID of your form in Typeform",
      defaultValue: "R2s5BM",
      helpText: "You can find <form-id> from the public URL of your form. For example (https://form.typeform.com/to/<form-id>). Or from admin panel URL (https://admin.typeform.com/form/<form-id>/*)"
    }
  }
};
function Typeform(_ref) {
  var className = _ref.className,
      formId = _ref.formId;

  if (!formId) {
    return React.createElement("div", null, "Please specify a Form ID");
  }

  return React.createElement("div", {
    className: className
  }, React.createElement(embedReact.Widget, {
    id: formId,
    style: {
      width: "100%",
      height: "100%"
    },
    className: className
  }));
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
    _registerComponent(Typeform, TypeformMeta);
  }
}

exports.Typeform = Typeform;
exports.TypeformMeta = TypeformMeta;
exports.ensure = ensure;
exports.registerAll = registerAll;
//# sourceMappingURL=plasmic-typeform.cjs.development.js.map
