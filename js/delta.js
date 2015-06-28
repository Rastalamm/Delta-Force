var EventEmitter = require('events');
var util = require('util');

//Declaring Constants
var COUNT_INTERVAL = 1000;
var STOP_INTERVAL = 2000;

function Timer () {
  EventEmitter.call(this);
}

util.inherits(Timer, EventEmitter);

Timer.prototype.start = function() {
  var self = this;

  intervalId =  setInterval(function () {
  startTime = Date.now();
  self.emit('start', {startTime : startTime});
  }, COUNT_INTERVAL);

};

Timer.prototype.stopNow = function() {
  endTime = Date.now();
  clearInterval(intervalId);
  myTimer.emit('stop', {endTime : endTime});

};

var myTimer = new Timer();

function tickHandler(event){
  console.log(event);
}

myTimer.addListener('tick', tickHandler);
myTimer.addListener('start', tickHandler);
myTimer.addListener('stop', tickHandler);

myTimer.start();

setTimeout(myTimer.stopNow, STOP_INTERVAL);

module.exports = {
  eventEmitter : EventEmitter,
  Timer : Timer,
  tickHandler : tickHandler,
  myTimer : myTimer
};
