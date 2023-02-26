import registerComponent from '@plasmicapp/host/registerComponent';
import React from 'react';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded = ["className"],
    _excluded2 = ["className"];
function ensure(x) {
  if (x === null || x === undefined) {
    debugger;
    throw new Error("Value must not be undefined or null");
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-revue";
var RevueSignupFormMeta = {
  name: "RevueSignupForm",
  displayName: "Revue Signup Form",
  importName: "RevueSignupForm",
  importPath: modulePath,
  providesData: true,
  description: "Shows a sign up form to users for subscribe to newsletter",
  defaultStyles: {
    display: "flex",
    margin: "-4px -5px"
  },
  props: {
    emailInput: {
      type: "slot",
      defaultValue: {
        type: "vbox",
        styles: {
          padding: "0px",
          margin: "4px 5px",
          width: "200%"
        },
        children: {
          type: "component",
          name: "FormInput"
        }
      }
    },
    subscribeButton: {
      type: "slot",
      defaultValue: {
        type: "vbox",
        styles: {
          padding: "0px",
          margin: "4px 5px"
        },
        children: {
          type: "component",
          name: "SubscribeButton"
        }
      }
    },
    name: {
      type: "string",
      displayName: "Account Name",
      description: "Go to your account Revue page and copy your name from top left corner",
      defaultValue: "abdukhamidl"
    }
  }
};
function RevueSignupForm(_ref) {
  var className = _ref.className,
      subscribeButton = _ref.subscribeButton,
      emailInput = _ref.emailInput,
      name = _ref.name;
  return React.createElement(React.Fragment, null, React.createElement("form", {
    action: "https://www.getrevue.co/profile/" + name + "/add_subscriber",
    method: "post",
    id: "revue-form",
    name: "revue-form",
    target: "_blank",
    className: className
  }, emailInput, subscribeButton));
}
var SubscribeButton = function SubscribeButton(_ref2) {
  var className = _ref2.className,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded);

  return React.createElement("input", Object.assign({
    className: className
  }, props, {
    type: "submit",
    name: "member[subscribe]",
    id: "member_submit",
    value: "Subscribe"
  }));
};
var SubscribeButtonMeta = {
  name: "SubscribeButton",
  displayName: "Subscribe Button",
  importName: "SubscribeButton",
  importPath: modulePath,
  props: {},
  defaultStyles: {
    height: "42px",
    width: "100%",
    fontFamily: "Roboto",
    fontSize: "14px",
    backgroundColor: "#2BBDF5",
    borderWidth: "0",
    color: "#ffffff",
    borderRadius: "4px"
  }
};
var FormInput = function FormInput(_ref3) {
  var className = _ref3.className,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded2);

  return React.createElement("input", Object.assign({
    className: className
  }, props, {
    type: "email",
    name: "member[email]",
    placeholder: "Enter your email",
    required: true
  }));
};
var FormInputMeta = {
  name: "FormInput",
  displayName: "Form Input",
  importName: "FormInput",
  importPath: modulePath,
  props: {},
  defaultStyles: {
    height: "40px",
    width: "100%",
    borderWidth: "1px",
    borderColor: "#2BBDF5",
    borderStyle: "solid",
    borderRadius: "4px",
    padding: "0 5px"
  }
};

function registerAll(loader) {
  var _registerComponent = function _registerComponent(Component, defaultMeta) {
    if (loader) {
      loader.registerComponent(Component, defaultMeta);
    } else {
      registerComponent(Component, defaultMeta);
    }
  };

  if (loader) {
    _registerComponent(RevueSignupForm, RevueSignupFormMeta);

    _registerComponent(SubscribeButton, SubscribeButtonMeta);

    _registerComponent(FormInput, FormInputMeta);
  }
}

export { FormInput, FormInputMeta, RevueSignupForm, RevueSignupFormMeta, SubscribeButton, SubscribeButtonMeta, ensure, registerAll };
//# sourceMappingURL=plasmic-revue.esm.js.map
