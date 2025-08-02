console.log("This is my First JS Project");

const playerOne = "Jubaer";
const playerTwo = "Junaed";

const gameState = {
    gameName: "Our amazing guessing game",
    copyrightYear: 2025,
}

console.log("Hello, welcome to our game:", playerOne);
console.log("Hello, welcome to our game:", playerTwo);

const welcomePlayer = (player) => {
    console.log(`Welcome to our game, ${player}!`);
}

console.log(`Game Name: ${gameState.gameName}`);
console.log(`Copyright Year: ${gameState.copyrightYear}`);

welcomePlayer(playerOne);