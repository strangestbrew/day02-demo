'use strict';

var friendName = prompt( 'First off, what is your name?' );
console.log( friendName );

var gameCode =  confirm( "Well, " + friendName + ", do you want to play a yes/no guessing game?");
console.log( gameCode );

function question1(useranswer){
  if(useranswer === 'Y'){
    return alert('Wrong');
  }
  return alert('Good Job!');
}
var firstAnswer = prompt('Do i play any musical instruments?').charAt(0).toUpperCase();
question1(firstAnswer);

function question2(useranswer){
  if(useranswer === 'Y'){
    return alert('Good Job!');
  }
  return alert('Wrong');
}

var secondAnswer = prompt('Do i brew beer at home?').charAt(0).toUpperCase();
question2(secondAnswer);

function question3(useranswer){
  if(useranswer === 'Y'){
    return alert('Wrong');
  }
  return alert('Good Job!');
}

var thirdAnswer = prompt('Do i own a labrador?').charAt(0).toUpperCase();
question3(thirdAnswer);

function question4(useranswer){
  if(useranswer === 'Y'){
    return alert('Good job!!');
  }
  return alert('Wrong!');
}

var fourthAnswer = prompt('Do i play dungeons and dragons?').charAt(0).toUpperCase();
question4(fourthAnswer);

function question5(useranswer){
  if(useranswer === 'Y'){
    return alert('Good job');
  }
  return alert('Wrong');
}

var fifthAnswer = prompt('Do i love haunted things?').charAt(0).toUpperCase();
question5(fifthAnswer);


