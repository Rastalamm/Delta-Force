var EventEmitter = require('events');
var util = require('util');

function Timer () {
  EventEmitter.call(this);
}

util.inherits(Timer, EventEmitter);

Timer.prototype.start = function() {
  var self = this;

  intervalId =  setInterval(function () {
  startTime = Date.now();
  self.emit('start', {startTime : startTime});
  }, 1000);

};

Timer.prototype.stopNow = function() {
  endTime = Date.now();
  myTimer.emit('stop', {endTime : endTime});
  clearInterval(intervalId);

};



var myTimer = new Timer();

function tickHandler(event){
  console.log(event);
}

myTimer.addListener('tick', tickHandler);
myTimer.addListener('start', tickHandler);
myTimer.addListener('stop', tickHandler);

myTimer.start();

var goodBye = setTimeout(myTimer.stopNow, 2000);

module.exports = {
  eventEmitter : EventEmitter,
  Timer : Timer,
  tickHandler : tickHandler,
  myTimer : myTimer
};
