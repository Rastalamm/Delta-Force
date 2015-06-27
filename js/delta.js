var EventEmitter = require('events');
var util = require('util');

function Timer () {
  EventEmitter.call(this);
  var self = this;
  this.i = 0;


  // setInterval(function () {
  //   self.emit('tick', { interval : self.i++ });
  // }, 1000);

  this.start = function(num){
    var counter = 0;
    num = num || 10;
    currTime = Date.now();

    intervalId =  setInterval(function () {
      counter++;
      self.emit('tick', {startTime : currTime});

      if(counter > num){
        completeTime = Date.now();
        clearInterval(intervalId)
        self.emit('complete', {completeTime : completeTime})
      }

    }, 1000);

  }

  this.stop = function(){
    currTime = Date.now();
    self.emit('stop', {stopTime : currTime})
    clearInterval(intervalId)
  }

}

util.inherits(Timer, EventEmitter);

var myTimer = new Timer();

function tickHandler(event){
  console.log(event);
}
myTimer.addListener('tick', tickHandler);
myTimer.addListener('complete', tickHandler);
myTimer.addListener('stop', tickHandler);


myTimer.start();
//setTimeout(myTimer.stop, 5000);





module.exports = {
  eventEmitter : EventEmitter,
  Timer : Timer,
  tickHandler : tickHandler,
  myTimer : myTimer
};