var rgba = require("color-rgba");
var hsluv = require("hsluv");

function clamp100(num) {
  return Math.min(Math.max(num, 0), 100);
}

function clampHue(hue) {
  return (hue < 0 ? hue + 360 : hue) % 360;
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
  return formatColor(modifiedHsluv);
}

function formatColor(color) {
  return hsluv.hsluvToHex(color);
}

function lighten(color, adjustment) {
  color = getHsluv(color);
  color[2] = clamp100(color[2] + adjustment);
  return formatColor(color);
}

function darken(color, adjustment) {
  color = getHsluv(color);
  color[2] = clamp100(color[2] - adjustment);
  return formatColor(color);
}

function saturate(color, adjustment) {
  color = getHsluv(color);
  color[1] = clamp100(color[1] + adjustment);
  return formatColor(color);
}

function desaturate(color, adjustment) {
  color = getHsluv(color);
  color[1] = clamp100(color[1] - adjustment);
  return formatColor(color);
}

function rotate(color, adjustment) {
  color = getHsluv(color);
  color[0] = clampHue(color[0] + adjustment);
  return formatColor(color);
}

function setHue(color, hue) {
  color = getHsluv(color);
  color[0] = clampHue(hue);
  return formatColor(color);
}

function getHue(color) {
  return getHsluv(color)[0];
}

function setSaturation(color, saturation) {
  color = getHsluv(color);
  color[1] = clamp100(saturation);
  return formatColor(color);
}

function getSaturation(color) {
  return getHsluv(color)[1];
}

function setLightness(color, lightness) {
  color = getHsluv(color);
  color[2] = clamp100(lightness);
  return formatColor(color);
}

function getLightness(color) {
  return getHsluv(color)[2];
}

module.exports = {
  darken: darken,
  desaturate: desaturate,
  getHsluv: getHsluv,
  getHue: getHue,
  getLightness: getLightness,
  getSaturation: getSaturation,
  lighten: lighten,
  rotate: rotate,
  saturate: saturate,
  setHue: setHue,
  setLightness: setLightness,
  setSaturation: setSaturation,
  useProperties: useProperties
};
