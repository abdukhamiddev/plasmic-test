import registerComponent from '@plasmicapp/host/registerComponent';
import React from 'react';

var DEFAULT_WIDTH_IN_PX = 380;
var DEFAULT_SITTING_HEIGHT_IN_PX = 400;
var DEFAULT_STANDING_HEIGHT_IN_PX = 480;
var POSTURE_OPTION_SITTING = "sitting";
var DIRECTION_OPTION_LEFT = "left";
var SITTING_HEIGHT_ADJUSTMENT_IN_PX = 24;
var STANDING_HEIGHT_ADJUSTMENT_IN_PX = 31;
var ASSET_ROOT_DIRECTORY = "./body-parts/";
var HEAD_DIRECTORY_SUFFIX = "head/";
var TORSO_DIRECTORY_SUFFIX = "torso/";
var SITTING_DIRECTORY_SUFFIX = "sitting/";
var STANDING_DIRECTORY_SUFFIX = "standing/";
var STANDING_HEIGHT_TO_WIDTH_RATIO = DEFAULT_STANDING_HEIGHT_IN_PX / DEFAULT_WIDTH_IN_PX;
var SITTING_HEIGHT_TO_WIDTH_RATIO = DEFAULT_SITTING_HEIGHT_IN_PX / DEFAULT_WIDTH_IN_PX;

function setHeightFromSizeAndPosture(size, posture) {
  var width = size || DEFAULT_WIDTH_IN_PX;
  var heightToWidthRatio = setHeigthToWidthRatioFromPosture(posture);
  return width * heightToWidthRatio;
}

function setHeightAdjustmentFromPosture(posture) {
  var heightAdjustment = posture === POSTURE_OPTION_SITTING ? SITTING_HEIGHT_ADJUSTMENT_IN_PX : STANDING_HEIGHT_ADJUSTMENT_IN_PX;
  return "translate(40.000000, " + heightAdjustment + ")";
}

function setHeigthToWidthRatioFromPosture(posture) {
  return posture === POSTURE_OPTION_SITTING ? SITTING_HEIGHT_TO_WIDTH_RATIO : STANDING_HEIGHT_TO_WIDTH_RATIO;
}

function setHorizontalDirection(direction) {
  if (direction === DIRECTION_OPTION_LEFT) {
    return "translate(190.000000, 200.500000) scale(-1, 1) translate(-190.000000, -200.500000)";
  } else {
    return "";
  }
}

function setViewBox(posture) {
  var height = posture === POSTURE_OPTION_SITTING ? DEFAULT_SITTING_HEIGHT_IN_PX : DEFAULT_STANDING_HEIGHT_IN_PX;
  return "0 0 " + DEFAULT_WIDTH_IN_PX + " " + height;
}

function setBottomDirectory(posture) {
  var bottomSuffix = posture === POSTURE_OPTION_SITTING ? SITTING_DIRECTORY_SUFFIX : STANDING_DIRECTORY_SUFFIX;
  return ASSET_ROOT_DIRECTORY + bottomSuffix;
}

var Human = function Human(_ref) {
  var size = _ref.size,
      head = _ref.head,
      skinColor = _ref.skinColor,
      hairColor = _ref.hairColor,
      torso = _ref.torso,
      bottom = _ref.bottom,
      posture = _ref.posture,
      direction = _ref.direction,
      className = _ref.className;
  var height = setHeightFromSizeAndPosture(size, posture);
  var heightAdjustFromPosture = setHeightAdjustmentFromPosture(posture);
  var horizontalDirectionModifier = setHorizontalDirection(direction);
  var viewBox = setViewBox(posture);
  var Head = React.lazy(function () {
    return import("" + ASSET_ROOT_DIRECTORY + HEAD_DIRECTORY_SUFFIX + head);
  });
  var Torso = React.lazy(function () {
    return import("" + ASSET_ROOT_DIRECTORY + TORSO_DIRECTORY_SUFFIX + torso);
  });
  var Bottom = React.lazy(function () {
    return import("" + setBottomDirectory(posture) + bottom);
  });
  var svgContainer = React.createElement("svg", {
    height: height,
    width: size || DEFAULT_WIDTH_IN_PX,
    version: "1.1",
    viewBox: viewBox,
    xmlns: "http://www.w3.org/2000/svg",
    fill: "#66ccee"
  }, React.createElement("g", {
    id: "humaaans",
    fillRule: "evenodd",
    strokeWidth: "1"
  }, React.createElement("g", {
    id: "a-" + posture + "-human",
    transform: horizontalDirectionModifier + " " + heightAdjustFromPosture
  }, React.createElement("g", {
    id: "HEAD",
    transform: "translate(82.000000, 0.000000)"
  }, //@ts-ignore
  React.createElement(Head, {
    skinColor: skinColor,
    hairColor: hairColor
  })), React.createElement("g", {
    id: "BOTTOM",
    transform: "translate(0.000000, 187.000000)"
  }, //@ts-ignore
  React.createElement(Bottom, {
    skinColor: skinColor
  })), React.createElement("g", {
    id: "TORSO",
    transform: "translate(22.000000, 82.000000)"
  }, //@ts-ignore
  React.createElement(Torso, {
    skinColor: skinColor
  })))));
  return React.createElement("div", {
    className: className
  }, svgContainer);
};

var heads = [{
  label: "Afro",
  value: "Afro Airy"
}, {
  label: "Caesar",
  value: "Caesar"
}, {
  label: "Chongo",
  value: "Chongo"
}, {
  label: "Curly",
  value: "Curly"
}, {
  label: "Hijab",
  value: "Hijab"
}, {
  label: "Hijab2",
  value: "Hijab2"
}, {
  label: "Long",
  value: "Long"
}, {
  label: "NoHair",
  value: "NoHair"
}, {
  label: "Pony",
  value: "Pony"
}, {
  label: "Rad",
  value: "Rad"
}, {
  label: "Short",
  value: "Short"
}, {
  label: "Short2",
  value: "Short2"
}, {
  label: "Short Beard",
  value: "ShortBeard"
}, {
  label: "Top",
  value: "Top"
}, {
  label: "Turban",
  value: "Turban"
}, {
  label: "Turban2",
  value: "Turban2"
}, {
  label: "Wavy",
  value: "Wavy"
}];
var torsos = [{
  label: "Hoodie",
  value: "Hoodie"
}, {
  label: "Jacket",
  value: "Jacket"
}, {
  label: "Jacket2",
  value: "Jacket2"
}, {
  label: "LabCoat",
  value: "LabCoat"
}, {
  label: "LongSleeve",
  value: "LongSleeve"
}, {
  label: "Pointing",
  value: "PointingForward"
}, {
  label: "Pointing Up",
  value: "PointingUp"
}, {
  label: "Pregnant",
  value: "Pregnant"
}, {
  label: "Trench",
  value: "TrenchCoat"
}, {
  label: "Turtle",
  value: "TurtleNeck"
}];
var sittingBottom = [{
  label: "Baggy",
  value: "BaggyPants"
}, {
  label: "Skinny",
  value: "BaggyPants"
}, {
  label: "Sweat",
  value: "SweatPants"
}, {
  label: "Wheelchair",
  value: "Wheelchair"
}];
var standingBottom = [{
  label: "Baggy",
  value: "BaggyPants"
}, {
  label: "Jogging",
  value: "Jogging"
}, {
  label: "Shorts",
  value: "Shorts"
}, {
  label: "Skinny",
  value: "SkinnyJeans"
}, {
  label: "Skinny2",
  value: "SkinnyJeansWalk"
}, {
  label: "Skirt",
  value: "Skirt"
}, {
  label: "Sprint",
  value: "Sprint"
}, {
  label: "Sweat",
  value: "SweatPants"
}];

var modulePath = "@plasmicpkgs/humaaans";
var HumaaansMeta = {
  name: "Humaaans",
  displayName: "Humaaans",
  importName: "Humaaans",
  importPath: modulePath,
  providesData: true,
  description: "Humaaans Player",
  props: {
    head: {
      type: "choice",
      displayName: "Head",
      description: "Head",
      options: function options(props, ctx) {
        return heads.map(function (item) {
          return {
            label: item == null ? void 0 : item.label,
            value: item == null ? void 0 : item.value
          };
        });
      },
      defaultValue: "Afro"
    },
    torso: {
      type: "choice",
      displayName: "Torso",
      description: "Torso",
      options: function options(props, ctx) {
        return torsos.map(function (item) {
          return {
            label: item == null ? void 0 : item.label,
            value: item == null ? void 0 : item.value
          };
        });
      },
      defaultValue: "Hoodie"
    },
    posture: {
      type: "choice",
      displayName: "Position",
      description: "Position",
      options: function options(props, ctx) {
        return ["sitting", "standing"];
      },
      defaultValue: "sitting"
    },
    bottomSitting: {
      type: "choice",
      displayName: "Bottom",
      description: "Bottom",
      options: function options(props, ctx) {
        return sittingBottom.map(function (item) {
          return {
            label: item == null ? void 0 : item.label,
            value: item == null ? void 0 : item.value
          };
        });
      },
      defaultValue: "Baggy",
      hidden: function hidden(props, ctx) {
        return props.posture !== "sitting";
      }
    },
    bottomStanding: {
      type: "choice",
      displayName: "Bottom",
      description: "Bottom",
      options: function options(props, ctx) {
        return standingBottom.map(function (item) {
          return {
            label: item == null ? void 0 : item.label,
            value: item == null ? void 0 : item.value
          };
        });
      },
      defaultValue: "Baggy",
      hidden: function hidden(props, ctx) {
        return props.posture !== "standing";
      }
    },
    direction: {
      type: "choice",
      displayName: "Direction",
      description: "Direction",
      options: function options(props, ctx) {
        return ["right", "left"];
      },
      defaultValue: "right"
    },
    skinColor: {
      type: "string",
      displayName: "Skin",
      description: "Skin Color",
      defaultValue: "#B28B67"
    },
    hairColor: {
      type: "string",
      displayName: "Hair",
      description: "Hair Color",
      defaultValue: "#191847"
    }
  }
};
function Humaaans(_ref) {
  var head = _ref.head,
      torso = _ref.torso,
      direction = _ref.direction,
      posture = _ref.posture,
      bottomStanding = _ref.bottomStanding,
      bottomSitting = _ref.bottomSitting,
      hairColor = _ref.hairColor,
      skinColor = _ref.skinColor,
      className = _ref.className;
  var rendered;

  if (posture === "sitting") {
    rendered = React.createElement(Human, {
      posture: posture,
      head: head,
      direction: direction,
      torso: torso,
      bottom: bottomSitting,
      skinColor: skinColor,
      hairColor: hairColor,
      className: className
    });
  } else {
    rendered = React.createElement(Human, {
      posture: posture,
      head: head,
      direction: direction,
      torso: torso,
      bottom: bottomStanding,
      className: className
    });
  }

  console.log(rendered);
  return React.createElement("div", {
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
    _registerComponent(Humaaans, HumaaansMeta);
  }
}

export { Humaaans, HumaaansMeta, registerAll };
//# sourceMappingURL=humaaans.esm.js.map
