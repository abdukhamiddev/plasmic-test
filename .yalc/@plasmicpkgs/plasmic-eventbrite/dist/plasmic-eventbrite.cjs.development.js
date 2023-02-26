'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var registerComponent = _interopDefault(require('@plasmicapp/host/registerComponent'));
var React = _interopDefault(require('react'));
var uuid = require('uuid');

var TAG_ID = "EB_SCRIPT_" + /*#__PURE__*/uuid.v4();
var SCRIPT_URL = "https://www.eventbrite.com/static/widgets/eb_widgets.js";

var useEventbrite = function useEventbrite(_ref) {
  var eventId = _ref.eventId,
      modal = _ref.modal,
      onOrderComplete = _ref.onOrderComplete,
      promoCode = _ref.promoCode;
  var id = "EB_" + uuid.v4();

  var _React$useState = React.useState(false),
      isLoaded = _React$useState[0],
      setLoaded = _React$useState[1];

  var onLoad = React.useCallback(function () {
    return setLoaded(true);
  }, [setLoaded]);
  var onErr = React.useCallback(function (e) {
    console.error("Failed to load Eventbrite script from " + SCRIPT_URL);
    console.error(e);
    setLoaded(false);
  }, [setLoaded]);
  React.useEffect(function () {
    var _globalThis$window;

    //@ts-ignore
    if ((_globalThis$window = globalThis.window) != null && _globalThis$window.EBWidgets) {
      setLoaded(true);
      return;
    }

    var existing = document.getElementById(TAG_ID);

    if (existing) {
      existing.remove();
    }

    var script = document.createElement("script");
    script.id = TAG_ID;
    script.async = true;
    script.src = SCRIPT_URL;
    script.addEventListener("load", onLoad);
    script.addEventListener("error", onErr);
    script.addEventListener("abort", onErr);
    document.head.appendChild(script);
    return function () {
      script.removeEventListener("load", onLoad);
      script.removeEventListener("error", onErr);
      script.removeEventListener("abort", onErr);
      script.remove();
      setLoaded(false);
    };
  }, [setLoaded, onLoad, onErr]);
  React.useEffect(function () {
    var _globalThis$window2;

    if (!isLoaded) {
      return;
    }

    var config = {
      widgetType: "checkout",
      eventId: eventId,
      onOrderComplete: onOrderComplete,
      modal: modal
    };

    if (modal) {
      config.modalTriggerElementId = id;
    } else {
      config.iframeContainerId = id;
    }

    if (promoCode) {
      config.promoCode = promoCode;
    } //@ts-ignore


    (_globalThis$window2 = globalThis.window) == null ? void 0 : _globalThis$window2.EBWidgets.createWidget(config);
  }, [isLoaded]);
  return isLoaded ? {
    id: id
  } : null;
};

function ensure(x) {
  if (x === null || x === undefined) {
    debugger;
    throw new Error("Value must not be undefined or null");
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-eventbrite";
var EventbriteMeta = {
  name: "Eventbrite",
  displayName: "EventBrite",
  importName: "Eventbrite",
  importPath: modulePath,
  providesData: true,
  description: "Shows Eventbrite checkout on your website",
  defaultStyles: {
    color: "#ffffff",
    fontSize: "12px",
    width: "100px",
    height: "25px",
    borderWidth: "0px",
    backgroundColor: "#19aee7",
    borderRadius: "4px"
  },
  props: {
    eventId: {
      type: "string",
      displayName: "Event ID",
      description: "Learn how to get event ID (\"https://www.eventbrite.com/platform/docs/events\")",
      defaultValue: "463676879027",
      helpText: "In the URL field at the top, you see something like https://www.eventbrite.com/myevent?eid=123456789 . The number after eid= is the Event ID"
    },
    text: {
      type: "string",
      displayName: "Label",
      description: "Label",
      defaultValue: "Buy tickets"
    }
  }
};
function Eventbrite(_ref) {
  var className = _ref.className,
      text = _ref.text,
      eventId = _ref.eventId;

  if (!eventId) {
    return React.createElement("div", null, "Please enter Event Id");
  }

  var handleOrderCompleted = React.useCallback(function () {
    console.log("Order was completed successfully");
  }, []);
  var modalButtonCheckout = useEventbrite({
    eventId: "" + eventId,
    modal: true,
    onOrderComplete: handleOrderCompleted
  });
  return React.createElement("button", {
    className: className,
    id: modalButtonCheckout == null ? void 0 : modalButtonCheckout.id,
    type: "button"
  }, text);
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
    _registerComponent(Eventbrite, EventbriteMeta);
  }
}

exports.Eventbrite = Eventbrite;
exports.EventbriteMeta = EventbriteMeta;
exports.ensure = ensure;
exports.registerAll = registerAll;
//# sourceMappingURL=plasmic-eventbrite.cjs.development.js.map
