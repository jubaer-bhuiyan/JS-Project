console.log("This is my First JS Project");

const playerOne = "Jubaer";
const playerTwo = "Junaed";
//Exercise!!



const gameState = {
    gameName: "Our amazing guessing game",
    copyrightYear: 2025,
    players: [],
}

const addPlayer = (player) => {
    gameState.players.push(player);
}

console.log("Current players in the game:", gameState.players);
addPlayer(playerOne);
addPlayer(playerTwo);
console.log("Players after adding in the game:", gameState.players);

const welcomePlayer = (player) => {
    console.log(`Welcome to our game, ${player}!`);
}

console.log(`Game Name: ${gameState.gameName}`);
console.log(`Copyright Year: ${gameState.copyrightYear}`);

welcomePlayer(playerOne);