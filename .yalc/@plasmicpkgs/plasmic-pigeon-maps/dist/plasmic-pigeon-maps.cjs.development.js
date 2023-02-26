'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var registerComponent = _interopDefault(require('@plasmicapp/host/registerComponent'));
var pigeonMaps = require('pigeon-maps');
var React = _interopDefault(require('react'));

function ensure(x) {
  if (x === null || x === undefined) {
    debugger;
    throw new Error("Value must not be undefined or null");
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-pigeon-maps";
var PigeonMapsMeta = {
  name: "PigeonMaps",
  displayName: "Pigeon Maps",
  importName: "PigeonMaps",
  importPath: modulePath,
  providesData: true,
  defaultStyles: {
    width: "400px",
    height: "600px"
  },
  props: {
    latitude: {
      type: "number",
      displayName: "Latitude",
      description: "Latitude",
      defaultValue: 41.2825125
    },
    longitude: {
      type: "number",
      displayName: "Longitude",
      description: "Longitude",
      defaultValue: 69.139281
    },
    zoomLevel: {
      type: "number",
      displayName: "Zoom",
      description: "Current zoom level [1...18]",
      defaultValue: 10
    },
    animate: {
      type: "boolean",
      displayName: "Animations",
      description: "Animations enabled",
      defaultValue: true
    },
    zoomSnap: {
      type: "boolean",
      displayName: "Zoom Snap",
      description: "Snap to discrete zoom increments (14, 15, 16, etc) when scrolling with the mouse or pinching with touch events",
      defaultValue: true
    },
    metaWheelZoom: {
      type: "boolean",
      displayName: "Meta Wheel Zoom",
      description: "Zooming with the mouse wheel only works when you hold down the cmd or ctrl keys",
      defaultValue: false
    },
    twoFingerDrag: {
      type: "boolean",
      displayName: "Two Finger Drag",
      description: "Moving the map requires touching with two fingers",
      defaultValue: false
    }
  }
};
function PigeonMaps(_ref) {
  var latitude = _ref.latitude,
      longitude = _ref.longitude,
      zoomLevel = _ref.zoomLevel,
      animate = _ref.animate,
      zoomSnap = _ref.zoomSnap,
      metaWheelZoom = _ref.metaWheelZoom,
      twoFingerDrag = _ref.twoFingerDrag,
      className = _ref.className;

  var _React$useState = React.useState(zoomLevel),
      zoom = _React$useState[0],
      setZoom = _React$useState[1];

  return React.createElement("div", {
    className: className
  }, React.createElement(pigeonMaps.Map, {
    defaultCenter: [latitude, longitude],
    zoom: zoom,
    animate: animate,
    zoomSnap: zoomSnap,
    onBoundsChanged: function onBoundsChanged(_ref2) {
      var zoom = _ref2.zoom;
      setZoom(zoom);
    },
    metaWheelZoom: metaWheelZoom,
    twoFingerDrag: twoFingerDrag
  }, React.createElement(pigeonMaps.Marker, {
    width: 50,
    anchor: [latitude, longitude]
  })));
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
    _registerComponent(PigeonMaps, PigeonMapsMeta);
  }
}

exports.PigeonMaps = PigeonMaps;
exports.PigeonMapsMeta = PigeonMapsMeta;
exports.ensure = ensure;
exports.registerAll = registerAll;
//# sourceMappingURL=plasmic-pigeon-maps.cjs.development.js.map
