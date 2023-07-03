const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("return 'Yes' when passed true", () => {
    expect(booleanToWord(true)).toEqual("Yes");
  });

  it("return 'No' when passed false", () => {
    expect(booleanToWord(false)).toEqual("No");
  });
});