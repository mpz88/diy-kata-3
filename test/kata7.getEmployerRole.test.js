const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  it("returns the employee's role in the company", () => {
    expect(
      getEmployerRole(
        "Satti",
        [
          { name: "Satti", role: "Developer" },
          { name: "Jenny", role: "Sales Associate" },
          { name: "Javid", role: "Human Recommended Reading Assistant" }
        ]
      )
    ).toBe("Developer");
  });
});