'use strict';

var friendName = prompt( 'First off, what is your name?' );
console.log( friendName );

var gameCode =  confirm( "Well, " + friendName + ", do you want to play a guessing game?");
console.log( gameCode );

//if ( gamecode ) =  true, contine with game
//else ( gamecode ) = false, confirm "well rude" dialogue 

if ( gameCode ) { 
  var questionOne = prompt( "Do I play any musical instruments?" );
  console.log( questionOne );
}

if ( gameCode ) { 
  var questionTwo = prompt( "Do I brew beer at home?" );
  console.log( questionTwo );
}

if ( gameCode ) { 
  var questionThree = prompt( "Do I own a labrador?" );
  console.log( questionThree );
}

if ( gameCode ) { 
  var questionFour = prompt( "Do I play Dungeons&Dragons?" );
  console.log( questionFour );
}

if ( gameCode ) { 
  var questionFive = prompt( "Do I love haunted things?" );
  console.log( questionFive );
}
