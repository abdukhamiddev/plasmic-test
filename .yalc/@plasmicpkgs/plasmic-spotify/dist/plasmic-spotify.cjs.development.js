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
var modulePath = "@plasmicpkgs/plasmic-spotify";
var SpotifyMeta = {
  name: "Spotify",
  displayName: "Spotify",
  importName: "Spotify",
  importPath: modulePath,
  providesData: true,
  description: "Spotify Player",
  props: {
    url: {
      type: "string",
      displayName: "URL",
      description: "Song URL",
      defaultValue: "https://open.spotify.com/embed/track/3rmo8F54jFF8OgYsqTxm5d"
    },
    theme: {
      type: "boolean",
      displayName: "Theme",
      description: "Theme"
    }
  }
};
function Spotify(_ref) {
  var className = _ref.className,
      url = _ref.url,
      theme = _ref.theme;
  var value = theme ? "1" : "0";
  var query = url + "?utm_source=generator&theme=" + value;
  return React.createElement("iframe", {
    src: query,
    frameBorder: "0",
    scrolling: "no",
    width: "400",
    height: "166",
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
    _registerComponent(Spotify, SpotifyMeta);
  }
}

exports.Spotify = Spotify;
exports.SpotifyMeta = SpotifyMeta;
exports.ensure = ensure;
exports.registerAll = registerAll;
//# sourceMappingURL=plasmic-spotify.cjs.development.js.map
