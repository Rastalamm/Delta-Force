var EventEmitter = require('events');
var util = require('util');

function Timer () {
  EventEmitter.call(this);
  var self = this;
  this.i = 0;


  // setInterval(function () {
  //   self.emit('tick', { interval : self.i++ });
  // }, 1000);

  this.start = function(num, maxLag){
    var numCounter = 0;
    num = num || 10;
    maxLag = maxLag || 50;
    currTime = Date.now();

    intervalId =  setInterval(function () {
      numCounter++;

      self.emit('tick', {startTime : currTime});

      if(numCounter > num){
        completeTime = Date.now();
        clearInterval(intervalId)
        self.emit('complete', {completeTime : completeTime})
      }

      var lag = (Date.now()-((numCounter*1000)+currTime))
        console.log('predict time', (numCounter*1000)+currTime);
        console.log('actual  time', Date.now());
      if( lag > maxLag  ){

        self.emit('lag', { lagTime : lag})

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
myTimer.addListener('lag', tickHandler);


myTimer.start(12,1);
//setTimeout(myTimer.stop, 5000);





module.exports = {
  eventEmitter : EventEmitter,
  Timer : Timer,
  tickHandler : tickHandler,
  myTimer : myTimer
};