var chai = require("chai");

var should = chai.should();
var expect = chai.expect;

var delta = require('../js/delta.js');

describe('Delta Force', function () {
  describe('Basic Timer', function () {
    it('should be a function', function () {
      delta.should.be.a.function;
    });
  });
});