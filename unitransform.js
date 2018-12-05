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

function lighten(color, adjustment) {
  console.log(color);
  color = getHsluv(color);
  console.log(color);
  color[2] = clamp100(color[2] + adjustment);
  console.log(color);
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
  const hue = (color[0] + adjustment) % 360;
  color[0] = hue < 0 ? hue + 360 : hue;
  return hsluv.hsluvToHex(color);
}

module.exports = {
  lighten: lighten,
  darken: darken,
  saturate: saturate,
  desaturate: desaturate,
  spin: spin
};
