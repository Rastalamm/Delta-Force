var chai = require("chai");
chai.use(require('chai-eventemitter'))
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
chai.use(sinonChai);

var should = chai.should();
var expect = chai.expect;

var incomingObj = require('../js/delta.js');



describe('Delta Force', function () {

  describe('Define the Timer Class', function () {
    it('Timer should be a function', function () {
      incomingObj.Timer.should.be.a.function;
    });
  });

  describe('Basic Timer', function () {

    beforeEach(function () {
      timer = new incomingObj.Timer;
    });

    it('should be a function', function () {
      timer.should.be.a.function;
    });
    it('should be an instance of Timer', function () {
      timer.should.be.an.instanceof(incomingObj.eventEmitter);
    });
    it('should release a tick', function () {
      expect(function(){ timer.emit('tick') }).to.cause(timer).to.emit('tick')
    });
  });


});