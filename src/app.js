/* 

This is small, but still useful
pebble decision maker for noncritical quetions

Version 1.1

*/

var UI = require('ui');
//Create screen
var start = new UI.Card({
  subtitle: 'Think about your question',
  body: 'and shake your hand',
  style: 'large',
  banner: 'images/8ball-resized.png'
});

//Show card
start.show();

//Initiating accelerometer
var Accel = require('ui/accel');

Accel.init();
Accel.config({
  rate:10,
  samples:1
});

//Shake handler
start.on('accelVibe', function(e) {
  return;
});
start.on('accelTap', function(e) {
  if (Accel.vibe) {
    return;
  }
  else {
    //Intiate answers
    var answers = ['Yes',
                   'No',
                   'Not sure, try shaking your hand again',
                   'Better try than not. What you lose?',
                   'Ask the stranger. Yes the firstone.',
                   'You already know the answer',
                   'I would not do that, but if you want...',
                   'Do the first step, please. Just do it!'];
    var index = Math.floor(Math.random() * (answers.length));
  
    //Update screen
    start.subtitle(' ');
    start.banner('');
    start.body('');
    if (answers[index].length <= 14) {
      start.title(' ');
      start.subtitle('\n' + answers[index]);
    }
    else {
      start.subtitle(answers[index]);
      start.title(' ');
    }
  }
});
