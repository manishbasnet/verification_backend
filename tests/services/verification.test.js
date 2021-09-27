const { verify } = require("../../src/services/verification");

describe("verify service", () => {
  it("should return true if code is valid", async () => {
    const body = {
      code: 123456,
    };
    const result = await verify({}, body);
    expect(result).toBe(true);
  });

  const invalidCases = [
    [
      {
        code: "123",
      },
      "Invalid Request Arguments",
    ],
    [
      {
        code: 123457,
      },
      "Invalid Request Arguments",
    ],
    [
      {
        code: 1,
      },
      "Invalid Request Arguments",
    ],
  ];

  test.each(invalidCases)(
    "Should throw error if code is invalid: %p",
    async (body, errorMsg) => {
      let thrownError = "";
      try {
        await verify({}, body);
      } catch (error) {
        thrownError = error.message;
      }
      expect(thrownError).toBe(errorMsg);
    }
  );
});
