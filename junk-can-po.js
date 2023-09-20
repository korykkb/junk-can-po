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




