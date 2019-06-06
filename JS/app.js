'use strict';

var friendName = prompt( 'First off, what is your name?' );
console.log( friendName );

var gameCode =  confirm( "Well, " + friendName + ", do you want to play a yes/no guessing game?");
console.log( gameCode );

if ( gameCode ) { 
  var questionOne = prompt( "Do I play any musical instruments?" );
  var stdQuestionOne = questionOne.toLowerCase();
  console.log( questionOne );
   
  if  ( stdQuestionOne === "yes" ){ 
      alert( "WRONG" );
      }  else 
      { alert ( "Good Job!" ) 
      }
               }

if ( gameCode ) { 
  var questionTwo = prompt( "Do I brew beer at home?" );
  var stdQuestionTwo = questionTwo.toLowerCase();
  console.log( questionTwo );
  
  if  ( stdQuestionTwo === "yes" ){ 
    alert( "Good Job!" );
    }  else 
    { alert ( "WRONG" ) 
    }
               }

if ( gameCode ) { 
  var questionThree = prompt( "Do I own a labrador?" );
  var stdQuestionThree = questionThree.toLowerCase();
  console.log( questionThree );
  
  if  ( stdQuestionThree === "yes" ){ 
    alert( "WRONG" );
    }  else 
    { alert ( "Good Job!" ) 
    }
               }

if ( gameCode ) { 
  var questionFour = prompt( "Do I play Dungeons&Dragons?" );
  var stdQuestionOne = questionOne.toLowerCase();
  console.log( questionOne );
                  
  if  ( stdQuestionOne === "yes" ){ 
    alert( "Good Job!" );
    }  else 
    { alert ( "WRONG" ) 
    }
                }

if ( gameCode ) { 
  var questionFive = prompt( "Do I love haunted things?" );
  var stdQuestionFive = questionFive.toLowerCase();
  console.log( questionFive );
    
  if  ( stdQuestionFive === "yes" ){ 
    alert( "Good Job!" );
    }  else 
    { alert ( "WRONG" ) 
    }
} 

// var statesActual = 13
// var guessCount = 0
// var userResponse = prompt("Can you guess how many states I've visited? It's between 1 and 20.")
// var convertedGuess = parseInt(userResponse) 

// while ( guessCount !== 4 || userResponse === statesActual ) {
//  guessCount++
//  console.log(guessCount)
//   if ( userResponse > statesActual ) {
//    convertedGuess = prompt ("guess was too high")); 
//   }  
//   else if ( userResponse < statesActual ) {
//     convertedGuess = prompt ("guess too low" ));
//   }

// };

// var userAnswer = prompt("Can you guess any of the states I've visited?").toUpperCase();
// var correctStates = ["alaska", "washington", "california", "oregon", "florida", "mississippi", "lousianna", "hawaii", "idaho", "nevada", "missouri", "illinois", "arizona"];
// var guesses = 0 

// while (userAnswer === correctStates || guesses <= 6) {
//    guesses++
//    console.log(guesses)
//    for (var i = 0; i < correctStates.length; i++) {
           
//     if (userAnswer == correctStates[i]) {
//       prompt("Great guess!");
//       break;
//     }
//   }

//   if ( userAnswer !== correctStates[i] ) {
//     prompt("Try again");
//   }

//   else if (guesses >= 6) {
//     alert(correctStates)
//   };
// }