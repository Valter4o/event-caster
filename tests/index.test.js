const caster = require("../dist/index");

describe("Basic caster functionalities", () => {
  test("on subscribe to event an event is created", () => {
    caster.on("test", () => {});
    expect(caster.events.hasOwnProperty("test")).toEqual(true);
  });
});
