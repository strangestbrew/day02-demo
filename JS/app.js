'use strict';

var friendName = prompt('First off, what is your name?');
console.log( friendName );
alert( "Well, " + friendName + ", do you want to play a yes/no guessing game?");

<<<<<<< HEAD
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

 //setting variables for the y/n guessing game 

 var guessCounter = 0
 var totalTries = 0
 var correctAnswer = 13

 while (totalTries < 4 ){
   console.log(guesses);
   var guesses = prompt("Can you guess how many states I've visited? It's between 1 and 20.");
 	if (parseInt(guesses) === correctAnswer) {
     alert("Yes, that's right!");
     break; 
   }
   if (guesses > "13") {
     alert("nope, too high");
 }
   if (guesses < "13") {
     alert("sorry, too low");
 }
 guessCounter --;
 }

//starts the array guessing game (question 7 from lab 3)

//var userAnswer = prompt("Can you guess any of the states I've visited?").toUpperCase();
var correctStates = ["alaska", "washington", "california", "oregon", "florida", "mississippi", "lousianna", "hawaii", "idaho", "nevada", "missouri", "illinois", "arizona"];

for(var guessNumber = 0 ; guessNumber < 1; guessNumber++){
  console.log("Outer Loop");
  var userAnswer = prompt("Can you guess any of the states I've visited?");
  var counter = 0;
  while (counter < correctStates.length){
    console.log("inner loop " +correctStates[counter] + " " + userAnswer);
    if (userAnswer == correctStates[counter]){
      prompt("Great guess!");
      console.log("Correct Answer " +userAnswer);
    }else{
      console.log("guess again");
    }
    counter++;
  }
}
  
=======
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


>>>>>>> ac690c98c32ec8d7158bcdeea5e822feee933fa3
