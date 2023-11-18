// 1. Komputer musi wybrać jedną z trzech rzeczy --zrobione
// 2. uzytkownik wpisuje swój wybór -- zrobione
// 3. Obydwa wybory są porównywane -- zrobione
// 4. Sprawdzamy kto wygrał -- zrobione
// 5. rozegraj jedna runde -- zrobione


let userScore = 0;
let computerScore = 0;
let roundCount = 1;

let playerSelection;
let computerSelection;

let numberOfRounds = 0;


function checkInput(){
    let numberOfRound = document.getElementById('numberOfRounds').value;
    // console.log(numberOfRound);

    if((isNaN(numberOfRound) != true) && (numberOfRound != '')){
        numberOfRound = parseInt(numberOfRound);
        // -----Pozwala przeniesc zmienna na inna strone----
        sessionStorage.setItem("numberOfRound", numberOfRound);
        // -------------------------------------------------
        location.assign('./rounds.html');
    }else{
        console.log('Input area is empty or is NaN');
    }

    // console.log(numberOfRound); 
}



function playerChoice(playerSelectionLocal){
    if(playerSelectionLocal.id == 'rock'){
        playerSelectionLocal = 'rock';
    } else if(playerSelectionLocal.id == 'paper'){
        playerSelectionLocal = 'paper';
    } else if(playerSelectionLocal.id == 'scissors'){
        playerSelectionLocal = 'scissors';
    }
    // console.log(playerSelection);
    

    return playerSelection = playerSelectionLocal, game()
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


    return computerSelection = computerChoice;
}


// console.log(getComputerChoice());

function playRound(player, computer){
    // playerChoice = playerChoice();
    // computerChoice = getComputerChoice().toLowerCase();
    // console.log(userChoice);
    // console.log(computerChoice);
    // playerChoice(playerSelection);
    let win = `Round: ${roundCount} - YOU WON`;
    let loose = `Round: ${roundCount} - YOU LOST`;
    
    if(player == computer){
        console.log(`Round: ${roundCount} - DRAW, no points`);
    }else if((player == 'rock') && (computer == 'scissors')){
        console.log(win);
        userScore++;
    }else if((player == 'paper') && (computer == 'rock')){
        console.log(win);
        userScore++;
    }else if((player == 'scissors') && (computer == 'paper')){
        console.log(win);
        userScore++
    }else{
        console.log(loose);
        computerScore++;
    }
    roundCount++;
    return userScore, computerScore;
}


function game(){
    let i = 1;
    getComputerChoice().toLowerCase();
    let numberOfRounds = sessionStorage.getItem("numberOfRound");

    // console.log('gra rozpoczeta');
    // console.log(playerSelection);
    // console.log(computerSelection.toLowerCase());
    while(i <= numberOfRounds){
        playRound(playerSelection, computerSelection);
        i++;
        }

        // if(userScore === computerScore){
        //     console.log(`Game result: TIE !!!`)
        // }else if(userScore < computerScore){
        //     console.log('Game result: COMPUTER WINS !!!')
        // }else{
        //     console.log('Game result: USER WINS !!!')
        // }
}



// game();
// console.log('-----Here are your points-----');
// console.log(`Twój wynik: ${userScore}`);
// console.log(`Wynik komputera: ${computerScore}`);
// console.log('------------------------------');