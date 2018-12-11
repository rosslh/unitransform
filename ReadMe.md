# UniTransform

Visually uniform color transformations through HSLuv color space

## JavaScript color function library

UniTransform is a library that allows you to perform common color operations (like darken or saturate).

UniTransform is unique in that instead of performing these functions in HSL color space, they are done in [HSLuv](http://www.hsluv.org/), meaning that the same function performed on two different colors will have visually consistent results.

The color modification functions provided take any valid CSS color string as input and output the transformed color as hexadecimal.

You can read more about HSLuv and perceptually uniform colorspaces [here](https://programmingdesignsystems.com/color/perceptually-uniform-color-spaces/).

## Usage

```js
// color inputs can be any valid CSS color string

darken(color, 15); // returns hex

desaturate(color, 15); // returns hex

lighten(color, 15); // returns hex

rotate(color, 15); // returns hex

saturate(color, 15); // returns hex

getHsluv(color); // returns array of floats

getHue(color); // returns float from 0 to 360

getLightness(color); // returns float from 0 to 100

getSaturation(color); // returns float from 0 to 100

setHue(color, 180); // returns hex

setLightness(color, 50); // returns hex

setSaturation(color, 50); // returns hex

// returns color1 with specified properties replaced the properties of color2
// accepts a permutation of "hsl" as properties, returns hex
useProperties(color1, color2, properties);
```
