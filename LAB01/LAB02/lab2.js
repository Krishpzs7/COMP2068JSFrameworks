const prompt = require('prompt');

// Start the prompt
prompt.start();

// Get user input
prompt.get(['userSelection'], (err, result) => {
    if (err) {
        console.error(err);
        return;
    }

    // User's choice
    const userSelection = result.userSelection.toUpperCase();

    // Generate computer's choice
    const randomNum = Math.random();
    let computerSelection = '';
    if (randomNum < 0.34) {
        computerSelection = 'PAPER';
    } else if (randomNum < 0.67) {
        computerSelection = 'SCISSORS';
    } else {
        computerSelection = 'ROCK';
    }

    // Determine the winner
    let outcome = '';
    if (userSelection === computerSelection) {
        outcome = "It's a tie";
    } else if (
        (userSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (userSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (userSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        outcome = 'User Wins';
    } else {
        outcome = 'Computer Wins';
    }

    // Display results
    console.log(`User selection: ${userSelection}`);
    console.log(`Computer selection: ${computerSelection}`);
    console.log(outcome);
});
