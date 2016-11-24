var expect = require("chai").expect;
var hello = require("../app/js/index");

describe("Hello", function() {
  beforeEach(function () {
    
  });

  it("says hello world if no subject passed", function() {
    expect(hello()).to.equal("hello world");
  });
  it("says hello to the subject passed", function() {
    expect(hello('you')).to.equal("hello you");
  });
});
