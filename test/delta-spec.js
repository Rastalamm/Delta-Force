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

    var testTimer;
    beforeEach(function () {
      testTimer = new incomingObj.Timer();
    });

    it('Timer should be a function', function () {
      incomingObj.Timer.should.be.a.function;
    });
    it('should have a start method', function () {
      testTimer.start.should.be.a.function;
    });

    it('should have a stop method', function () {
      testTimer.stop.should.be.a.function;
    });
  });

  describe('Basic Timer', function () {

    var testTimer;
    beforeEach(function () {
      testTimer = new incomingObj.Timer();
    });

    it('tickhandler should be a function', function () {
      incomingObj.tickHandler.should.be.a.function;
    });
    it('myTimer should be an instance of Timer', function () {
      incomingObj.myTimer.should.be.an.instanceof(incomingObj.eventEmitter);
    });


  });

  describe('Controls', function () {
    it('it should emit a start', function () {
      console.log('dafdssf',incomingObj.myTimer.start)
     //expect(function(){ incomingObj.myTimer.emit('tick') }).to.cause(incomingObj.myTimer.start).to.emit('tick')
     //expect(function(){ emitter.emit('test') }).to.cause(emitter).to.emit('test')
    });

  });

  describe('Time Limit', function () {


  });

});