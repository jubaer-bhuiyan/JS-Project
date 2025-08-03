console.log("This is my First JS Project");

const playerOne = "Jubaer";
const playerTwo = "Junaed";

const gameState = {
    gameName: "Our amazing guessing game",
    copyrightYear: 2025,
    players: [],
}

const questions = [
    {
        prompt: "In which year was the first Star Wars movie released?",
        answer: 1977,
    },
    {
        prompt: "At the time of release, Titanic (1997) was the highest-grossing film of all time. How much did it gross worldwide in USD?",
        answer: 2187463944,
    },
    {
        prompt: "How many people did Arnold Schwarzenegger kill on screen in the Terminator franchise? (Data by jabhuiyan.com",
        answer: 895,
    },
];

const startRound = (roundNumber) => {
    console.log("Round Number: ", roundNumber);
    console.log("Here is your questions!");
    const specificQuestion = questions[roundNumber];
    console.log(specificQuestion.prompt);
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

console.log(`Game Name: ${gameState.gameName}`);
console.log(`Copyright Year: ${gameState.copyrightYear}`);

welcomePlayer(playerOne);
welcomePlayer(playerTwo);

startRound(0);