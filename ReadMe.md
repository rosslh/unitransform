# UniTransform

Visually uniform color transformations through HSLuv color space

## JavaScript color function library

UniTransform is a library that allows you to perform common color operations (like darken or saturate).

UniTransform is unique in that instead of performing these functions in HSL color space, they are done in [HSLuv](http://www.hsluv.org/), meaning that the same function performed on two different colors will have visually consistent results.

The color modification functions provided take any valid CSS color string as input and output the transformed color as hexadecimal.

You can read more about HSLuv and perceptually uniform colorspaces [here](https://programmingdesignsystems.com/color/perceptually-uniform-color-spaces/).
