const { gameState } = require("./gameState.js");
const { startRound } = require("./startRound.js");
const { makeGuess } = require("./makeGuess.js");
const { addPlayer, removeLatestAddedPlayer } = require("./players.js");

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

console.log(JSON.stringify(gameState, undefined, 2));