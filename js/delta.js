var EventEmitter = require('events');
var util = require('util');

function Timer () {
  EventEmitter.call(this);
  var self = this;
  this.i = 0;

  this.start = setInterval(function () {
                self.emit('tick', { interval : self.i++ });
              }, 1000);
}

util.inherits(Timer, EventEmitter);

var myTimer = new Timer();



function theTicker(event){
  process.stdout.write('tick ' + this.i + '\n');
  process.stdout.write('tick ' + Date.now() + '\n');
}

myTimer.on('tick', theTicker);


module.exports = {
  eventEmitter : EventEmitter,
  Timer : Timer,
  theTicker : theTicker,
  myTimer : myTimer

};

// below puts a limit on the amount of ticks
  // if(this.i == 5){
  //   this.removeListener('tick', tickHandler);
  // }
