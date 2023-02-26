'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var registerComponent = _interopDefault(require('@plasmicapp/host/registerComponent'));
var React = _interopDefault(require('react'));

function ensure(x) {
  if (x === null || x === undefined) {
    debugger;
    throw new Error("Value must not be undefined or null");
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-google-maps";
var GoogleMapsMeta = {
  name: "GoogleMaps",
  displayName: "Google Maps ",
  importName: "GoogleMaps",
  importPath: modulePath,
  providesData: true,
  description: "Shows Google Maps",
  defaultStyles: {
    maxWidth: "100%"
  },
  props: {
    coordinates: {
      type: "string",
      displayName: "Coordinates",
      description: "The latitude, longitude of the map location.Learn how to get latitude and longitude (\"https://support.google.com/maps/answer/18539\")",
      defaultValue: "51.51634532635064, -0.1332152112055726",
      helpText: "You can get latitude and longitude of your location from this website (\"https://www.gps-coordinates.net/\")"
    }
  }
};
function GoogleMaps(_ref) {
  var coordinates = _ref.coordinates,
      className = _ref.className;

  if (!coordinates) {
    return React.createElement("div", null, "Please enter your coordinates");
  }

  var query = "https://maps.google.com/maps?q=" + coordinates + "&t=&z=13&ie=UTF8&iwloc=&output=embed";
  return React.createElement("iframe", {
    title: "google",
    width: "100%",
    height: "600",
    id: "gmap_canvas",
    src: query,
    className: className,
    frameBorder: "0",
    marginHeight: 0,
    marginWidth: 0,
    scrolling: "no"
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

  _registerComponent(GoogleMaps, GoogleMapsMeta);
}

exports.GoogleMaps = GoogleMaps;
exports.GoogleMapsMeta = GoogleMapsMeta;
exports.ensure = ensure;
exports.registerAll = registerAll;
//# sourceMappingURL=plasmic-google-maps.cjs.development.js.map
