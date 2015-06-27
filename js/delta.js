var EventEmitter = require('events');
var util = require('util');

function Timer () {
  EventEmitter.call(this);
  var self = this;
  this.i = 0;
  this.currTime;
  setInterval(function () {
    self.emit('tick', { interval : self.i++ });
  }, 1000);

  this.start = function(){
    intervalId =  setInterval(function () {
      currTime = Date.now();
      self.emit('start', currTime);
    }, 1000);
  }

  this.stop = function(){
    currTime = Date.now();
    self.emit('stop', currTime)
    clearInterval(intervalId)
  }

}

util.inherits(Timer, EventEmitter);

var myTimer = new Timer();

function tickHandler(event){
  process.stdout.write('tick ' + this.i + '\n');
}

myTimer.addListener('tick', tickHandler);


//Controls section

var myController = new Timer();

function turnOn (event){
  process.stdout.write('start ' + currTime + '\n');
}

myController.addListener('start', turnOn);
myController.start();

function turnOff(event){
  process.stdout.write('stop ' + currTime + '\n');
}
myController.addListener('stop', turnOff);

setTimeout(myController.stop, 5000);





module.exports = {
  eventEmitter : EventEmitter,
  Timer : Timer,
  tickHandler : tickHandler,
  myTimer : myTimer,
  myController : myController,
  turnOn : turnOn,
  turnOff : turnOff
};

// below puts a limit on the amount of ticks
  // if(this.i == 5){
  //   this.removeListener('tick', tickHandler);
  // }
