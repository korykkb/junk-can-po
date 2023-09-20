/* getComputerChoice randomly chooses either rock, paper, or scissors 
*/
function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < .33) {
        return "Rock";
    } else if (randomNumber < .66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
const randomResult = getComputerChoice();
console.log(randomResult)


/* 
*/

function game() {

function getPlayerChoice() {
    const playerAnswer = parseInt(prompt("Please enter Rock, Paper, or Scissors"));

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === "Paper" && computerSelection === "Rock") {
            return "You Won! Paper covers Rock";
        } 
        else if (playerSelection === "Rock" && computerSelection === "Scissors") {
            return "You Won! Rocks smashes Scissors";
        }
        else if (playerSelection === "Scissors" && computerSelection === "Paper") {
            return "You Won! Scissors cuts Paper";
        }
        else if (computerSelection === "Paper" && playerSelection === "Rock") {
            return "You Lost! Rock gets covered by Paper";
        }
        else if (computerSelection === "Rock" && playerSelection === "Scissors") {
            return "You Lost! Scissors is smashed by Rock";
        }
        else if (computerSelection === "Scissors" && playerSelection === "Paper") {
            return "You Lost! Paper is cut by Scissors";
        }
    }

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Won! Paper covers Rock";
    } 
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Won! Rocks smashes Scissors";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Won! Scissors cuts Paper";
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return "You Lost! Rock gets covered by Paper";
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return "You Lost! Scissors is smashed by Rock";
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return "You Lost! Paper is cut by Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Won! Paper covers Rock";
    } 
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Won! Rocks smashes Scissors";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Won! Scissors cuts Paper";
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return "You Lost! Rock gets covered by Paper";
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return "You Lost! Scissors is smashed by Rock";
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return "You Lost! Paper is cut by Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Won! Paper covers Rock";
    } 
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Won! Rocks smashes Scissors";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Won! Scissors cuts Paper";
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return "You Lost! Rock gets covered by Paper";
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return "You Lost! Scissors is smashed by Rock";
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return "You Lost! Paper is cut by Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Won! Paper covers Rock";
    } 
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Won! Rocks smashes Scissors";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Won! Scissors cuts Paper";
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return "You Lost! Rock gets covered by Paper";
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return "You Lost! Scissors is smashed by Rock";
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return "You Lost! Paper is cut by Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Won! Paper covers Rock";
    } 
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Won! Rocks smashes Scissors";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Won! Scissors cuts Paper";
    }
    else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return "You Lost! Rock gets covered by Paper";
    }
    else if (computerSelection === "Rock" && playerSelection === "Scissors") {
        return "You Lost! Scissors is smashed by Rock";
    }
    else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return "You Lost! Paper is cut by Scissors";
    }
}
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
}








