'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var registerComponent = _interopDefault(require('@plasmicapp/host/registerComponent'));
var host = require('@plasmicapp/host');
var React = _interopDefault(require('react'));

function ensure(x) {
  if (x === null || x === undefined) {
    debugger;
    throw new Error("Value must not be undefined or null");
  } else {
    return x;
  }
}
var modulePath = "@plasmicpkgs/plasmic-soundcloud";
var SoundCloudMeta = {
  name: "SoundCloud",
  displayName: "SoundCloud",
  importName: "SoundCloud",
  importPath: modulePath,
  providesData: true,
  description: "SoundCloud Player",
  props: {
    url: {
      type: "string",
      displayName: "URL",
      description: "Track URL",
      defaultValue: "https://soundcloud.com/vautdiscovery/ed-sheeran-thinking-out-loud-live-on-jools-holland"
    },
    visual: {
      type: "boolean",
      displayName: "Visual",
      description: "Visual or Classic player",
      defaultValue: true
    },
    autoPlay: {
      type: "boolean",
      displayName: "AutoPlay",
      description: "AutoPlay track",
      defaultValue: false
    },
    color: {
      type: "color",
      displayName: "Color",
      description: "Widget color,should be in hex format",
      noDeref: false
    },
    showUser: {
      type: "boolean",
      displayName: "Author",
      description: "Show/Hide the uploader name",
      defaultValue: false
    },
    showRelated: {
      type: "boolean",
      displayName: "Related",
      description: "Show/Hide related songs",
      defaultValue: false
    },
    showTeaser: {
      type: "boolean",
      displayName: "Teaser",
      description: "Show/Hide the teaser",
      defaultValue: false
    },
    showComments: {
      type: "boolean",
      displayName: "Comments",
      description: "Show/Hide the comments",
      defaultValue: false
    }
  }
};
function SoundCloud(_ref) {
  var className = _ref.className,
      url = _ref.url,
      autoPlay = _ref.autoPlay,
      color = _ref.color,
      showComments = _ref.showComments,
      showRelated = _ref.showRelated,
      showTeaser = _ref.showTeaser,
      showUser = _ref.showUser,
      visual = _ref.visual;
  var inEditor = host.usePlasmicCanvasContext();
  var play = inEditor ? false : autoPlay;
  var query = new URL(url);
  var parameters = new URLSearchParams(query.search);
  parameters.set("url", encodeURIComponent(url));
  parameters.set("show_comments", showComments.toString());
  parameters.set("show_user", showUser.toString());
  parameters.set("visual", visual.toString());
  parameters.set("auto_play", play.toString());
  parameters.set("show_teaser", showTeaser.toString());
  parameters.set("hide_related", (!showRelated).toString());
  parameters.set("color", color.toString());
  return React.createElement("iframe", {
    frameBorder: "0",
    scrolling: "no",
    width: "600px",
    height: "400px",
    src: "https://w.soundcloud.com/player?" + parameters.toString(),
    allow: "autoplay",
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
    _registerComponent(SoundCloud, SoundCloudMeta);
  }
}

exports.SoundCloud = SoundCloud;
exports.SoundCloudMeta = SoundCloudMeta;
exports.ensure = ensure;
exports.registerAll = registerAll;
//# sourceMappingURL=plasmic-soundcloud.cjs.development.js.map
