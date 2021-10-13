let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
    return Math.floor(Math.random() * 10)
};
    //console.log(generateTarget()); //test

let humanNum = '';
let computerNum = generateTarget();
let targetNumber = generateTarget();

    //console.log(`Human # =${humanNum}. Computer # =${computerNum}. Target # =${targetNumber}.`); //test

let compareGuesses = (humanNum, computerNum) => {
    if((Math.abs(humanNum - targetNumber)) <= (Math.abs(computerNum - targetNumber))) {
        
        return true;  
    } else {
        return false;
    }
};
    //console.log(compareGuesses(humanNum, computerNum)); //test

let updateScore = () => {
    if(compareGuesses(humanNum, computerNum) === true) {
        humanScore++;
    } else if(compareGuesses(humanNum, computerNum) === false) {
        computerScore++;
    }; 
};

let advanceRound = () => {
    currentRoundNumber +=1;
    //for (i = 1; i < currentRoundNumber; i++);
    
};

    // updateScore();
    // advanceRound();
    // console.log(`Human Score: ${humanScore}. Computer Score: ${computerScore}. Round # ${currentRoundNumber}.`); //test
