console.log("This is my First JS Project");

const playerOne = "Jubaer";
const playerTwo = "Junaed";

const gameState = {
    gameName: "Our amazing guessing game",
    copyrightYear: 2025,
    players: [],
}

const addPlayer = (player) => {
    gameState.players.push(player);
}

const removeLatestAddedPlayer = () => {
    return gameState.players.pop();
}

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

welcomePlayer(playerOne);
welcomePlayer(playerTwo);

console.log(`Game Name: ${gameState.gameName}`);
console.log(`Copyright Year: ${gameState.copyrightYear}`);