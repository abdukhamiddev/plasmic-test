'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var registerComponent = _interopDefault(require('@plasmicapp/host/registerComponent'));
var React = _interopDefault(require('react'));
var react = require('@lite-embed/react');

function ensure(x) {
  if (x === null || x === undefined) {
    debugger;
    throw new Error("Value must not be undefined or null");
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-lite-embed";
var LiteEmbedMeta = {
  name: "LiteEmbed",
  displayName: "Lite Embed",
  importName: "LiteEmbed",
  importPath: modulePath,
  providesData: true,
  description: "Embedding YouTube and Vimeo  videon on your website",
  props: {
    service: {
      type: "choice",
      options: ["Vimeo", "Youtube"]
    },
    urlOrId: {
      type: "string",
      displayName: "Video url or Id",
      description: "Id or url of the video which you want to embed"
    },
    adNetwork: {
      type: "boolean",
      displayName: "Ads",
      description: "By default the ads are disabled to respect the privacy of the users. You can enable them by setting this to true",
      defaultValue: false
    }
  }
};
function LiteEmbed(_ref) {
  var service = _ref.service,
      urlOrId = _ref.urlOrId,
      adNetwork = _ref.adNetwork,
      className = _ref.className;
  var video;

  if (!urlOrId) {
    return React.createElement("div", null, "Please enter URL or ID of the video");
  }

  if (service === 'Vimeo') {
    video = React.createElement(react.VimeoLite, {
      urlOrId: urlOrId,
      adNetwork: adNetwork
    });
  } else {
    video = React.createElement(react.YoutubeLite, {
      urlOrId: urlOrId,
      adNetwork: adNetwork
    });
  }

  return React.createElement("div", {
    className: className
  }, video);
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
    _registerComponent(LiteEmbed, LiteEmbedMeta);
  }
}

exports.LiteEmbed = LiteEmbed;
exports.LiteEmbedMeta = LiteEmbedMeta;
exports.ensure = ensure;
exports.registerAll = registerAll;
//# sourceMappingURL=plasmic-lite-embed.cjs.development.js.map
