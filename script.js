// 1. Komputer musi wybrać jedną z trzech rzeczy --zrobione
// 2. uzytkownik wpisuje swój wybór -- zrobione
// 3. Obydwa wybory są porównywane -- zrobione
// 4. Sprawdzamy kto wygrał -- zrobione
// 5. rozegraj jedna runde -- zrobione

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
    console.log(userChoice);
    console.log(computerChoice);
    let win = `YOU WON !!! ${userChoice} beats ${computerChoice}`;
    let loose = `YOU LOST !!! ${computerChoice} beats ${userChoice}`;

    if(userChoice == computerChoice){
        console.log('DRAW!!!');
    }else if((userChoice == 'rock') && (computerChoice == 'scissors')){
        console.log(win);
    }else if((userChoice == 'paper') && (computerChoice == 'rock')){
        console.log(win);
    }else if((userChoice == 'scissors') && (computerChoice == 'paper')){
        console.log(win);
    }else{
        console.log(loose);
    }
}

playRound()