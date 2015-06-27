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
    return move || getInput(); 
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove, computerMove) {
    var winner;
  
    if (playerMove === computerMove) {
        return 'tie';
    } else if (playerMove === 'rock') {
        if (computerMove === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'scissors') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
 
}

function playToFive() {
    console.log("Let\'s play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    function whoJustWon() {
        if (playerWins > computerWins) {
            return "Player wins";
        } else if (computerWins > playerWins) {
            return "Computer wins";
        } else {
            return "It is a tie";
        }
    }

    while (playerWins < 5 && computerWins < 5) {
        var computerMove = getComputerMove();
        var playerMove = getPlayerMove();
        var winner = getWinner(playerMove, computerMove);

        if (winner === 'player') {
            playerWins += 1;
        } else if (winner === "computer") {
            computerWins +=1;
        } else {
            console.log('Bummer - it is a tie.');
        }
      
      console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    console.log('The score is currently ' + playerWins + ' to ' + computerWins);
    }


    return [playerWins, computerWins];
}

playToFive();