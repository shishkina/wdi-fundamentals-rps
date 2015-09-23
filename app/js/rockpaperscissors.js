////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
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
    
    return move || getInput();
}

function getComputerMove(move) {
    
	return move || randomPLay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.


    if (playerMove === computerMove)
	winner = "tie";

	else if(playerMove === "rock"){
		if (computerMove === "paper")
		   winner = "computer";
		   else
			winner = "player";
		}

	else if (playerMove === "paper"){
		if (computerMove === "scissors")
			winner = "computer";
			else 
			     winner = "player";
		}
	else if (playerMove === "scissors"){
		if (computerMove === "rock")
			winner = "computer";
			else 
			     winner = "player";
		}
    return winner;
}

function playToFive() {
    
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;


	for (var i = 0; i < 20; i++){
		playerMove = getPlayerMove();
		computerMove = getComputerMove();
		winner = getWinner(playerMove, computerMove);
  		
			console.log("Player chose: " + playerMove + ". Computer chose: " + computerMove + ".");
        	
		if (winner === "player") {
			playerWins++;
            		console.log("Current Score: Player: " + playerWins + ". Computer: " + computerWins + ".");
     				
				if (playerWins === 5 || computerWins === 5){
				console.log("FINAL SCORE! Player: " + playerWins + ". Computer: " + computerWins + ". The winner is: " + winner "!");
				}	
        	}	
        	else if (winner === "computer") {
            		computerWins++;
			console.log("Current Score: Player: " + playerWins + ". Computer: " + computerWins + ".");
          		
				if (playerWins === 5 || computerWins === 5){
                		console.log("FINAL SCORE! Player: " + playerWins + ". Computer: " + computerWins + ". The winner is: " + winner "!");
                		}	    
        		}
		else if (winner === 'tie')
	   		 console.log("It's a tie!");
      
    	}
   
    return [playerWins, computerWins];
}

