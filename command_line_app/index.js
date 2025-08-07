const { gameState } = require("./gameState.js");
const { startRound } = require("./startRound.js");
const { makeGuess } = require("./makeGuess.js");
const { addPlayer, removeLatestAddedPlayer } = require("./players.js");
const { gatherResults } = require("./gatherResults.js");
const { caculateFinalResults } = require("./caculateFinalResults.js");
const prompts = require('prompts');

const main = async () => {
    console.log("This is my First JS Project");

    const response = await prompts([
        {
            type: 'text',
            name: 'playerOne',
            message: 'What is your name, player one?',
        },
        {
            type: 'text',
            name: 'playerTwo',
            message: 'What is your name, player two?',
        },
    ])

    const gatherPlayerGuess = async (playerName) => {
    const promptInput = await prompts([
            {
                type: 'number',
                name: 'guess',
                message: `What is your guess? ${playerName}`,
            },
        ])
        return promptInput.guess;
    }

    const playerOne = response.playerOne;
    const playerTwo = response.playerTwo;

    console.log("Current players in the game:", gameState.players);
    addPlayer(playerOne);
    addPlayer(playerTwo);
    addPlayer("The person with bad internet");
    console.log("Players after adding in the game:", gameState.players);

    const removedPlayer = removeLatestAddedPlayer();
    console.log("Players after removing the latest added player:", gameState.players);
    console.log("Removed player:", removedPlayer);

    const welcomePlayer = (player) => {
        console.log(`Welcome to our game, ${player}!`);
    }

    console.log(`Game Name: ${gameState.gameName}`);
    console.log(`Copyright Year: ${gameState.copyrightYear}`);

    welcomePlayer(playerOne);
    welcomePlayer(playerTwo);

    startRound(0);
    const playerOneRoundZeroGuess = await gatherPlayerGuess(playerOne);
    const playerTwoRoundZeroGuess = await gatherPlayerGuess(playerTwo);
    makeGuess(0, playerOne, playerOneRoundZeroGuess);
    makeGuess(0, playerTwo, playerTwoRoundZeroGuess);
    const firstRoundResults = gatherResults(0);
    console.log("Round results", JSON.stringify(firstRoundResults, undefined, 2));

    startRound(1);
    const playerOneRoundOneGuess = await gatherPlayerGuess(playerOne);
    const playerTwoRoundOneGuess = await gatherPlayerGuess(playerTwo);
    makeGuess(1, playerOne, playerOneRoundOneGuess);
    makeGuess(1, playerTwo, playerTwoRoundOneGuess);
    const secondRoundResults = gatherResults(1);
    console.log("Round results", JSON.stringify(secondRoundResults, undefined, 2));

    startRound(2);
    const playerOneRoundTwoGuess = await gatherPlayerGuess(playerOne);
    const playerTwoRoundTwoGuess = await gatherPlayerGuess(playerTwo);
    makeGuess(2, playerOne, playerOneRoundTwoGuess);
    makeGuess(2, playerTwo, playerTwoRoundTwoGuess);
    const thirdRoundResults = gatherResults(2);
    console.log("Round results", JSON.stringify(thirdRoundResults, undefined, 2));

    const finalResults = caculateFinalResults();
    console.log("\nFinal results", finalResults);
}

main();