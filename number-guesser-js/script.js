let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
let generateTarget = () => {
    return Math.floor(Math.random() * 10)
};
    //console.log(generateTarget()); //test

let compareGuesses = (humanNum, computerNum, target) => {
    let humanSum = Math.abs(humanNum - target);
    let computerSum = Math.abs(computerNum - target);
    console.log(humanSum, computerSum);
    if(humanSum <= computerSum) {
        return true;  
    } else {
        return false;
    }
};
    //console.log(`Human # =${humanNum}. Computer # =${computerNum}. Target # =${target}.`); //test
    //console.log(compareGuesses(humanNum, computerNum)); //test

let updateScore = (winner) => {
    if(winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }; 
};

let advanceRound = () => {
    currentRoundNumber +=1;
};
    // updateScore();
    // advanceRound();
    // console.log(`Human Score: ${humanScore}. Computer Score: ${computerScore}. Round # ${currentRoundNumber}.`); //test
