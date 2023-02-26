import registerComponent from '@plasmicapp/host/registerComponent';
import React, { useRef, useState, useEffect } from 'react';
import { InlineWidget, PopupWidget } from 'react-calendly';

function ensure(x) {
  if (x === null || x === undefined) {
    debugger;
    throw new Error("Value must not be undefined or null");
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-calendly";
var CalendlyInlineWidgetMeta = {
  name: "CalendlyInlineWidget",
  displayName: "Calendly Inline Widget",
  importName: "CalendlyInlineWidget",
  importPath: modulePath,
  providesData: true,
  defaultStyles: {
    height: "700px",
    width: "600px"
  },
  props: {
    accountLink: {
      type: "string",
      displayName: "Link",
      description: "The Link of your Calendly account. Get it from (https://calendly.com/account/settings/link)",
      defaultValue: "plasmic-calendly-demo"
    },
    hideEventTypeDetails: {
      type: "boolean",
      displayName: "Hide Event Type",
      description: "Hide Details of the Event Type",
      defaultValue: false
    },
    hideGdprBanner: {
      type: "boolean",
      displayName: "Hide Cookie Banner",
      description: "Hide Cookie Banner",
      defaultValue: false
    },
    hideLandingPageDetails: {
      type: "boolean",
      displayName: "Hide Details",
      description: "Hide Details of the LandingPage",
      defaultValue: false
    }
  }
};
function CalendlyInlineWidget(_ref) {
  var accountLink = _ref.accountLink,
      hideEventTypeDetails = _ref.hideEventTypeDetails,
      hideGdprBanner = _ref.hideGdprBanner,
      hideLandingPageDetails = _ref.hideLandingPageDetails,
      className = _ref.className;

  if (!accountLink) {
    return React.createElement("div", null, "Please enter the the URL of your Calendly Account");
  }

  return React.createElement("div", {
    className: className
  }, React.createElement(InlineWidget, {
    pageSettings: {
      hideEventTypeDetails: hideEventTypeDetails,
      hideGdprBanner: hideGdprBanner,
      hideLandingPageDetails: hideLandingPageDetails
    },
    url: "https://calendly.com/" + accountLink
  }));
}
var CalendlyCornerPopupMeta = {
  name: "CalendlyCornerPopup",
  displayName: "Calendly Corner Popup ",
  importName: "CalendlyCornerPopup",
  description: "Shows Popup button on corner of the webpage",
  importPath: modulePath,
  providesData: true,
  styleSections: false,
  props: {
    accountLink: {
      type: "string",
      displayName: "Link or Page",
      description: "The Link of your Calendly account. Get it from (https://calendly.com/account/settings/link)",
      defaultValue: "plasmic-calendly-demo"
    },
    text: {
      type: "string",
      displayName: "Text",
      description: "Text of the PopupWidget",
      defaultValue: "Open Calendly"
    },
    color: {
      type: "color",
      displayName: "Color",
      description: "Color of the PopupWidget."
    },
    textColor: {
      type: "color",
      displayName: "Text Color",
      description: "Color of the text"
    },
    branding: {
      type: "boolean",
      displayName: "Brand",
      description: "Hide/Show brand of Calendly",
      defaultValue: true
    },
    hideEventTypeDetails: {
      type: "boolean",
      displayName: "Event Type",
      description: "Hide/Show details of the event type",
      defaultValue: false
    },
    hideGdprBanner: {
      type: "boolean",
      displayName: "Cookie Banner",
      description: "Hide/Show Cookie Banner",
      defaultValue: false
    },
    hideLandingPageDetails: {
      type: "boolean",
      displayName: "Details",
      description: "Hide/Show Details of the LandingPage",
      defaultValue: false
    }
  }
};
function CalendlyCornerPopup(_ref2) {
  var accountLink = _ref2.accountLink,
      branding = _ref2.branding,
      text = _ref2.text,
      color = _ref2.color,
      hideEventTypeDetails = _ref2.hideEventTypeDetails,
      hideGdprBanner = _ref2.hideGdprBanner,
      hideLandingPageDetails = _ref2.hideLandingPageDetails,
      textColor = _ref2.textColor,
      className = _ref2.className;

  if (!accountLink) {
    return React.createElement("div", null, "Please enter the the URL of your Calendly Account");
  }

  var container = useRef(null);

  var _useState = useState(container.current),
      wrapper = _useState[0],
      setWrapper = _useState[1];

  useEffect(function () {
    setWrapper(container.current);
  }, [container]);
  return React.createElement("div", {
    className: className,
    ref: container
  }, React.createElement(PopupWidget, {
    branding: branding,
    color: color,
    pageSettings: {
      hideEventTypeDetails: hideEventTypeDetails,
      hideGdprBanner: hideGdprBanner,
      hideLandingPageDetails: hideLandingPageDetails
    },
    rootElement: wrapper,
    text: text,
    textColor: textColor,
    url: "https://calendly.com/" + accountLink
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
    _registerComponent(CalendlyInlineWidget, CalendlyInlineWidgetMeta);

    _registerComponent(CalendlyCornerPopup, CalendlyCornerPopupMeta);
  }
}

export { CalendlyCornerPopup, CalendlyCornerPopupMeta, CalendlyInlineWidget, CalendlyInlineWidgetMeta, ensure, registerAll };
//# sourceMappingURL=plasmic-calendly.esm.js.map
