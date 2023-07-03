const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(50, 20)).toBe("I should be there in 2.5 hours.");
  });
});