const { isValidCode } = require("../../src/utils");

describe("isValidCode Helper", () => {
  it("should return true if code is valid", async () => {
    const result = isValidCode(123456);
    expect(result).toBe(true);
  });

  it("should return false if code is invalid", async () => {
    let result = isValidCode("123");
    expect(result).toBe(false);

    result = isValidCode(123457);
    expect(result).toBe(false);

    result = isValidCode(1);
    expect(result).toBe(false);
  });
});
