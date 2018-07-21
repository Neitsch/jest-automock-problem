const working = require("./working");

it("Works", () => {
  working();
  expect(working).toHaveBeenCalled();
});
