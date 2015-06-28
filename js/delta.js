var EventEmitter = require('events');
var util = require('util');

function Timer () {
  EventEmitter.call(this);
  var self = this;
  this.i = 1;

  setInterval(function () {
    self.emit('tick', { tick : self.i++ });
  }, 1000);

}
util.inherits(Timer, EventEmitter);

var myTimer = new Timer();

function tickHandler(event){
  console.log(event);
  console.log(event.tick);
}
myTimer.addListener('tick', tickHandler);


module.exports = {
  eventEmitter : EventEmitter,
  Timer : Timer,
  tickHandler : tickHandler,
  myTimer : myTimer
};

