const { expect } = chai;

chai.use(function (chai) {
  chai.Assertion.addMethod("anArrayOfSize", function (value) {
    this.assert(
      Array.isArray(this._obj) && this._obj.length === value,
      `expected #{this} to be an array with ${value} elements`,
      `expected #{this} not to be an array with ${value} elements`
    );
  });
  chai.Assertion.addProperty("anArray", function () {
    this.assert(
      Array.isArray(this._obj),
      `expected #{this} to be an array`,
      `expected #{this} not to be an array`
    );
  });
});

/* Usage:

test("Custom Matcher", () => {
  expect(["a"]).to.be.anArrayOfSize(1);
  expect([]).to.be.anArray;
});

*/
