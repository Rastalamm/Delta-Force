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
    it('tickhandler should be a function', function () {
      incomingObj.tickHandler.should.be.a.function;
    });
    it('myTimer should be an instance of Timer', function () {
      incomingObj.myTimer.should.be.an.instanceof(incomingObj.eventEmitter);
    });
  });

  describe('Controls', function () {
    it('myController should be an instance of Timer', function () {
      incomingObj.myController.should.be.an.instanceof(incomingObj.eventEmitter);
    });
    it('should be a function', function () {
      incomingObj.turnOn.should.be.a.function;
    });
  });

});