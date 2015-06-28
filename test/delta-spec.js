var chai = require("chai");
chai.use(require('chai-eventemitter'))

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

  describe('Controls', function () {

    beforeEach(function () {
      timer = new incomingObj.Timer;
    });

    it('should be an instance of the event emitter', function () {
      expect(timer instanceof incomingObj.eventEmitter).to.be.true;
    });

    // it('should count and stuff', function (done) {



    // });

  });


});