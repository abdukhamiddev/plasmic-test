import registerComponent from '@plasmicapp/host/registerComponent';
import React from 'react';

function ensure(x) {
  if (x === null || x === undefined) {
    debugger;
    throw new Error("Value must not be undefined or null");
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-hubspot";
var HubspotSignupFormMeta = {
  name: "HubspotSignupForm",
  displayName: "Hubspot Signup Form",
  importName: "HubspotSignupForm",
  importPath: modulePath,
  providesData: true,
  description: "Shows a sign up form to users for subscribe your to newsletter",
  props: {
    url: {
      type: "string",
      displayName: "URL",
      description: "Copy your share link from your Hubspot form.Learn how (\"https://knowledge.hubspot.com/forms/how-can-i-share-a-hubspot-form-if-im-using-an-external-site\")",
      defaultValue: "https://share.hsforms.com/1Y7nnYY8aSkuXgoeWA16-ZQdvi9r",
      helpText: "You can learn how to get share link.(\"https://knowledge.hubspot.com/forms/how-can-i-share-a-hubspot-form-if-im-using-an-external-site\")"
    }
  }
};
function HubspotSignupForm(_ref) {
  var className = _ref.className,
      url = _ref.url;
  return React.createElement("iframe", {
    src: url,
    width: "100%",
    frameBorder: "0",
    marginHeight: 0,
    scrolling: "no",
    marginWidth: 0,
    height: "600px",
    className: className
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
    _registerComponent(HubspotSignupForm, HubspotSignupFormMeta);
  }
}

export { HubspotSignupForm, HubspotSignupFormMeta, ensure, registerAll };
//# sourceMappingURL=plasmic-hubspot.esm.js.map
