var rgba = require("color-rgba");
var hsluv = require("hsluv");

function clamp100(num) {
  return Math.min(Math.max(num, 0), 100);
}

function getHsluv(color) {
  return hsluv.rgbToHsluv(
    rgba(color)
      .slice(0, 3)
      .map(x => x / 255)
  );
}

function useProperties(modified, modifier, properties) {
  properties = properties.toLowerCase();
  if (!/^[hsl]{1,3}$/.test(properties)) {
    throw new Error(
      "Properties must be 3 chars and only can include h, s, or l"
    );
  }
  var modifiedHsluv = getHsluv(modified);
  var modifierHsluv = getHsluv(modifier);
  for (var i = 0; i < properties.length; i++) {
    var index = "hsl".indexOf(properties.charAt(i));
    modifiedHsluv[index] = modifierHsluv[index];
  }
  return hsluv.hsluvToHex(modifiedHsluv);
}

function lighten(color, adjustment) {
  color = getHsluv(color);
  color[2] = clamp100(color[2] + adjustment);
  return hsluv.hsluvToHex(color);
}

function darken(color, adjustment) {
  color = getHsluv(color);
  color[2] = clamp100(color[2] - adjustment);
  return hsluv.hsluvToHex(color);
}

function saturate(color, adjustment) {
  color = getHsluv(color);
  color[1] = clamp100(color[1] + adjustment);
  return hsluv.hsluvToHex(color);
}

function desaturate(color, adjustment) {
  color = getHsluv(color);
  color[1] = clamp100(color[1] - adjustment);
  return hsluv.hsluvToHex(color);
}

function spin(color, adjustment) {
  color = getHsluv(color);
  var hue = (color[0] + adjustment) % 360;
  color[0] = hue < 0 ? hue + 360 : hue;
  return hsluv.hsluvToHex(color);
}

module.exports = {
  lighten: lighten,
  darken: darken,
  saturate: saturate,
  desaturate: desaturate,
  spin: spin,
  useProperties: useProperties
};
