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
var modulePath = "@plasmicpkgs/plasmic-audio";
var Html5AudioMeta = {
  name: "Html5Audio",
  displayName: "Html5 Audio",
  importName: "Html5Audio",
  importPath: modulePath,
  providesData: true,
  description: "Play audio on your website",
  props: {
    src: {
      type: "string",
      displayName: "Source URL",
      description: "URL to audio file",
      defaultValue: "http://mrclan.com/fastdl/tfc/sound/forest4.wav"
    },
    autoPlay: {
      type: 'boolean',
      displayName: "Auto Play",
      description: "Whether the audio automatically start playing when the player loads."
    },
    muted: {
      type: "boolean",
      displayName: "Muted",
      description: "Whether audio should be muted"
    }
  }
};
function Html5Audio(_ref) {
  var className = _ref.className,
      src = _ref.src,
      autoPlay = _ref.autoPlay,
      muted = _ref.muted;
  return React.createElement("audio", {
    className: className,
    controls: true,
    muted: muted,
    autoPlay: autoPlay
  }, React.createElement("source", {
    src: src
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
    _registerComponent(Html5Audio, Html5AudioMeta);
  }
}

export { Html5Audio, Html5AudioMeta, ensure, registerAll };
//# sourceMappingURL=plasmic-audio.esm.js.map
