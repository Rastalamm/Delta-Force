var EventEmitter = require('events');
var util = require('util');

function Timer () {
  EventEmitter.call(this);
  var self = this;
  this.i = 0;
  setInterval(function () {
    self.emit('tick', { interval : self.i++ });
  }, 1000);
}
util.inherits(Timer, EventEmitter);

var myTimer = new Timer();

function tickHandler(event){
  process.stdout.write('tick ' + this.i + '\n');
  // if(this.i == 5){
  //   this.removeListener('tick', tickHandler);
  // }
}
myTimer.addListener('tick', tickHandler);


module.exports = {
  eventEmitter : EventEmitter,
  Timer : Timer,
  tickHandler : tickHandler,
  myTimer : myTimer

};

