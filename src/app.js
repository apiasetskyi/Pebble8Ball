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
start.on('accelTap', function(e) {
  //Intiate answers
  var answers = ['Yes',
                 'No',
                 'Not sure, try again',
                 'Better try than not',
                 'Ask the stranger',
                 'You already know the answer',
                 'I would not do that',
                 'Do the first step'];
  var index = Math.floor(Math.random() * (answers.length));
  
  //Update screen
  start.subtitle(' ');
  start.banner('');
  start.body('');
  if (answers[index].length <= 15) {
    start.subtitle('\n' + answers[index]);
  }
  else {
    start.subtitle(answers[index]);
    start.title(' ');
  }
  
});
