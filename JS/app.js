'use strict';

var friendName = prompt( 'First off, what is your name?' );
console.log( friendName );

var gameCode =  confirm( "Well, " + friendName + ", do you want to play a yes/no guessing game?");
console.log( gameCode );

//if ( gamecode ) =  true, contine with game
//else ( gamecode ) = false, confirm "well rude" dialogue 

/* var whatvar = prompt( (y/n) "question 1" ).charAt(0).toLowerCase();
if (whatvar) !=="Y" && whatvar !=="N" ) {alert ('bad input')} */ 

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


//var standardquestionTwo = questionTwo.toLowerCase();
//if starnd === yes
//alert( response)
//else waherver