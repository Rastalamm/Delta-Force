var chai = require("chai");

var should = chai.should();
var expect = chai.expect;

// {
//   timer : Timer,
//   tickHandler : tickHandler
// };


var incomingObj = require('../js/delta.js');



describe('Delta Force', function () {

  describe('Define the Timer Class', function () {
    it('Timer should be a function', function () {
      incomingObj.Timer.should.be.a.function;
    });
  });

  describe('Basic Timer', function () {
    it('should be a function', function () {
      incomingObj.tickHandler.should.be.a.function;
    });
    it('should be an instance of Timer', function () {
      incomingObj.myTimer.should.be.an.instanceof(incomingObj.eventEmitter);
    });
  });


});