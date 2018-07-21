jest.unmock("./index")

const index = require("./index")

it("Works", function() {
  expect(index).toBeTruthy();
});
