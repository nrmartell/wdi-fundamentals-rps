////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
      return  move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
  
     if (playerMove === 'rock' && computerMove=== 'scissors') {
    winner = "player";
    console.log("You Win!!!");
      }
    else if (playerMove === 'rock' && computerMove=== 'rock')
    {
    winner = "tie";
    console.log("It's a tie....");
    }

    else if (playerMove === 'rock' && computerMove=== 'paper') {
    winner = "computer";
	console.log("Computer Wins!!!!");
    
 }
     else if (playerMove === 'paper' && computerMove==='paper') {         winner = "computer";
	 console.log("Computer Wins!!!!");
   
     }
     else if (playerMove === 'paper' && computerMove=== 'scissors') {
    winner = "computer";
	console.log("Computer Wins!!!!");
   
     }
     else if (playerMove === 'paper' && computerMove=== 'rock'){
    winner = "player";
	console.log("You Win!!!");
  }
     else if (playerMove === 'scissors' && computerMove=== 'scissors') {
    winner = "tie";
	console.log("It's a tie....");
    
     }
    else if (playerMove === 'scissors' && computerMove=== 'paper'){
    winner = "player";
	console.log("You Win!!!");
  
     } 
     else if (playerMove === 'scissors' && computerMove=== 'rock') {
    winner = "computer";
	console.log("Computer Wins!!!!");
	 }
	 return winner;
} 


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    
    while (playerWins < 5 && computerWins < 5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove,computerMove);

        if (winner === "player") {
            console.log("Player chose " + playerMove + " and computer chose " + computerMove + ". Player wins this round.");
            playerWins++;
        }
        else if (winner === "computer") {
            console.log("Player chose " + playerMove + " while computer chose " + computerMove + ". Computer wins this round.");
            computerWins++;
        }
        else if (winner === "tie") {
            console.log("Let's call this one a draw");
        }

        console.log("The score is " + playerWins + " to " + computerWins + ".");
    }
    

    return [playerWins, computerWins];
}
