var assert = require('assert');
var cani = require('./index');
var mockFS = require('mock-fs');

mockFS({
  foo: mockFS.file({
    content: "I'm read only",
    mode: 0400
  })
});

describe("Test suite for cani", function() {
  it("should return proper boolean values", function () {
     assert.ok(!cani.exec('foo'));
     assert.ok(!cani.write('foo'));
     assert.ok(cani.read('foo'));
  });  
});
