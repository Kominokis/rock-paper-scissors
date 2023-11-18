// 1. Komputer musi wybrać jedną z trzech rzeczy --zrobione
// 2. uzytkownik wpisuje swój wybór -- zrobione
// 3. Obydwa wybory są porównywane -- zrobione
// 4. Sprawdzamy kto wygrał -- zrobione
// 5. rozegraj jedna runde -- zrobione

let userScore = 0;
let computerScore = 0;
let roundCount = 1;


function checkInput(){
    let numberOfRound = document.getElementById('numberOfRounds').value;
    let linkToGame = document.getElementById('linkToGame');
    // console.log(numberOfRound);
    if(isNaN(numberOfRound) == false){
        numberOfRound = parseInt(numberOfRound);
        location.assign('./rounds.html');
    }else{
        console.log('Input area is empty or is NaN');
    }

    console.log(numberOfRound);
    return numberOfRound
}




function getComputerChoice(){
    let number = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    // console.log(number);
    let computerChoice

    if (number == 1){
        computerChoice = 'Rock';
    } else if(number == 2){
        computerChoice = 'Paper';
    } else if(number == 3){
        computerChoice = 'Scissors';
    }


    return computerChoice
}


// console.log(getComputerChoice());

function playRound(){
    let userChoice = prompt('Your turn (rock, paper, scissors): ').toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();
    // console.log(userChoice);
    // console.log(computerChoice);
    let win = `Round: ${roundCount} - YOU WON`;
    let loose = `Round: ${roundCount} - YOU LOST`;
    
    if(userChoice == computerChoice){
        console.log(`Round: ${roundCount} - DRAW, no points`);
    }else if((userChoice == 'rock') && (computerChoice == 'scissors')){
        console.log(win);
        userScore++;
    }else if((userChoice == 'paper') && (computerChoice == 'rock')){
        console.log(win);
        userScore++;
    }else if((userChoice == 'scissors') && (computerChoice == 'paper')){
        console.log(win);
        userScore++
    }else{
        console.log(loose);
        computerScore++;
    }
    roundCount++;
    return userScore, computerScore
}


function game(){
    let i = 1;
    while(i <= maxRound){
        playRound();
        i++;
    }

    if(userScore === computerScore){
        console.log(`Game result: TIE !!!`)
    }else if(userScore < computerScore){
        console.log('Game result: COMPUTER WINS !!!')
    }else{
        console.log('Game result: USER WINS !!!')
    }
}



// game();
// console.log('-----Here are your points-----');
// console.log(`Twój wynik: ${userScore}`);
// console.log(`Wynik komputera: ${computerScore}`);
// console.log('------------------------------');