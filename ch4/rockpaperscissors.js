// 0 = rock
// 1 = paper
// 2 = scissors

/*
    Setting up computer and player
*/
let computer = {
    name: "Computer",
    computerArr: [false, false, false]
}

let randomNum = Math.random()*2;
computer.computerArr[Math.round(randomNum)] = true;

let player = {
    name: "Player",
    playerArr: [false, false, false]
}

let playerChoice = prompt("Please type 'rock', 'paper', or 'scissors' to play");
switch(playerChoice) {
    case 'rock':
    case 'Rock':
        player.playerArr[0] = true;
        break;

    case 'paper':
    case 'Paper':
        player.playerArr[1] = true;
        break;

    case 'scissors':
    case 'Scissors':
    case 'scissor':
    case 'Scissor':
        player.playerArr[2] = true;
        break;
    
    default:
        playerChoice = prompt(`${playerChoice} is an invalid choice.`);
}

/*
    Game outcomes:
    Paper beats rock, rock beats scissors, scissors beats paper =>
    1 beats 0, 0 beats 2, 2 beats 1
*/
let computerNum = computer.computerArr.indexOf(true);
let playerNum = player.playerArr.indexOf(true);

let computerChoice = "";
switch(computerNum) {
    case 0:
        computerChoice = 'rock';
        break;
    case 1:
        computerChoice = 'paper';
        break;
    case 2:
        computerChoice = 'scissors';
        break;
}

if(playerNum === computerNum) {
    alert(`You and the computer tied with the same hand of ${playerChoice}.`);
} else if (playerNum > computerNum) {
    alert(`You won since the computer chose ${computerChoice}!`);
} else {
    alert(`Computer won since the computer chose ${computerChoice}.`);
}