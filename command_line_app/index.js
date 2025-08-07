const { gameState } = require("./gameState.js");
const { startRound } = require("./startRound.js");
const { makeGuess } = require("./makeGuess.js");
const { addPlayer, removeLatestAddedPlayer } = require("./players.js");
const { gatherResults } = require("./gatherResults.js");
const { caculateFinalResults } = require("./caculateFinalResults.js");

console.log("This is my First JS Project");

const playerOne = "Jubaer";
const playerTwo = "Junaed";

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
makeGuess(0, playerOne, 1969);
makeGuess(0, playerTwo, 1978);
const firstRoundResults = gatherResults(0);
console.log(JSON.stringify(firstRoundResults, undefined, 2));

startRound(1);
makeGuess(1, playerOne, 850);
makeGuess(1, playerTwo, 300);
const secondRoundResults = gatherResults(1);
console.log(JSON.stringify(secondRoundResults, undefined, 2));

startRound(2);
makeGuess(2, playerOne, 600);
makeGuess(2, playerTwo, 800);
const thirdRoundResults = gatherResults(2);
console.log(JSON.stringify(thirdRoundResults, undefined, 2));

const finalResults = caculateFinalResults();
console.log(finalResults);