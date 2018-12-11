const assert = require("assert");
const unitransform = require("../unitransform.js");

// These are snapshot tests of unitransform's color outputs
// Do not update expected outputs of these tests without a major version bump

describe("lighten", () => {
  it("Matches snapshot", () => {
    const input = "#11871b";
    const expectedOutput = "#17a423";
    assert(unitransform.lighten(input, 10) === expectedOutput);
  });
});

describe("darken", () => {
  it("Matches snapshot", () => {
    const input = "#11871b";
    const expectedOutput = "#0b6b13";
    assert(unitransform.darken(input, 10) === expectedOutput);
  });
});

describe("saturate", () => {
  it("Matches snapshot", () => {
    const input = "#11871b";
    const expectedOutput = "#008811";
    assert(unitransform.saturate(input, 10) === expectedOutput);
  });
});

describe("desaturate", () => {
  it("Matches snapshot", () => {
    const input = "#11871b";
    const expectedOutput = "#27852c";
    assert(unitransform.desaturate(input, 10) === expectedOutput);
  });
});

describe("rotate", () => {
  it("Matches snapshot", () => {
    const input = "#11871b";
    const expectedOutput = "#cb18c9";
    assert(unitransform.rotate(input, 180) === expectedOutput);
  });
});

describe("useProperties", () => {
  it("Sets hue properly", () => {
    const inputOne = "#11871b";
    const inputTwo = "#e86e22";
    const properties = "h";
    const expectedOutput = "#bc5712";
    const actualOutput = unitransform.useProperties(
      inputOne,
      inputTwo,
      properties
    );
    assert(actualOutput === expectedOutput);
  });
});

describe("setHue", () => {
  it("Matches snapshot", () => {
    const input = "#11871b";
    const expectedOutput = "#138279";
    assert(unitransform.setHue(input, 180) === expectedOutput);
  });
});

describe("setSaturation", () => {
  it("Matches snapshot", () => {
    const input = "#11871b";
    const expectedOutput = "#507f51";
    assert(unitransform.setSaturation(input, 50) === expectedOutput);
  });
});

describe("setLightness", () => {
  it("Matches snapshot", () => {
    const input = "#11871b";
    const expectedOutput = "#128a1c";
    assert(unitransform.setLightness(input, 50) === expectedOutput);
  });
});

describe("getHsluv", () => {
  it("Matches snapshot", () => {
    const input = "#11871b";
    const expectedOutput = [129, 96, 49];
    const output = unitransform.getHsluv(input).map(x => Math.round(x));
    assert(
      output[0] === expectedOutput[0],
      output[1] === expectedOutput[1],
      output[2] === expectedOutput[2]
    );
  });
});

describe("getHue", () => {
  it("Matches snapshot", () => {
    const input = "#11871b";
    const expectedOutput = 129;
    const hue = Math.round(unitransform.getHue(input));
    assert(hue === expectedOutput);
  });
});

describe("getSaturation", () => {
  it("Matches snapshot", () => {
    const input = "#11871b";
    const expectedOutput = 96;
    const saturation = Math.round(unitransform.getSaturation(input));
    assert(saturation === expectedOutput);
  });
});

describe("getLightness", () => {
  it("Matches snapshot", () => {
    const input = "#11871b";
    const expectedOutput = 49;
    const lightness = Math.round(unitransform.getLightness(input));
    assert(lightness === expectedOutput);
  });
});
