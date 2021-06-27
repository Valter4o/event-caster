const { sanitizeParams } = require("../dist/helpers");

describe("helper functions suite", () => {
  describe("sanitize params suite", () => {
    test("should remove if there is private prop ( starting with _ )", () => {
      const unSanitizedParams = {
        publicPropKey: "publicPropValue",
        _privatePropKey: "privatePropValue",
      };

      const sanitizedParamsExpected = {
        publicPropKey: "publicPropValue",
      };

      const sanitizedParamsResult = sanitizeParams(unSanitizedParams);
      expect(sanitizedParamsExpected).toEqual(sanitizedParamsResult);
    });
    test("should return the same object if no private prop", () => {
      const unSanitizedParams = {
        publicPropKey1: "publicPropValue1",
        publicPropKey2: "publicPropValue2",
      };

      const sanitizedParamsExpected = unSanitizedParams;

      const sanitizedParamsResult = sanitizeParams(unSanitizedParams);
      expect(sanitizedParamsExpected).toEqual(sanitizedParamsResult);
    });
  });
});
