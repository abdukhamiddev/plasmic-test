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
var modulePath = "@plasmicpkgs/plasmic-mailchimp";
var MailchimpSignupFormMeta = {
  name: "MailchimpSignupForm",
  displayName: "Mailchimp Signup Form",
  importName: "MailchimpSignupForm",
  importPath: modulePath,
  providesData: true,
  description: "Shows a sign up form to users for subscribe to your newsletter",
  props: {
    url: {
      type: "string",
      displayName: "URL",
      description: "Learn how to get your form url (\"https://mailchimp.com/help/host-your-own-signup-forms/\")",
      defaultValue: "http://eepurl.com/ic43yL",
      helpText: 'You can learn how.(https://mailchimp.com/help/share-your-signup-form/)'
    }
  }
};
function MailchimpSignupForm(_ref) {
  var className = _ref.className,
      url = _ref.url;

  if (!url) {
    return React.createElement("div", null, "Please specify URL");
  }

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
    _registerComponent(MailchimpSignupForm, MailchimpSignupFormMeta);
  }
}

export { MailchimpSignupForm, MailchimpSignupFormMeta, ensure, registerAll };
//# sourceMappingURL=plasmic-mailchimp.esm.js.map
