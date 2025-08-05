const { gameState } = require("./gameState.js")

const makeGuess = (roundNumber, playerName, guess) => {
    if (! gameState.rounds[roundNumber]) {
        throw new Error("Dummy error: Round does not exist");
    }

    gameState.rounds[roundNumber].guesses.push({
        player: playerName,
        guess: guess,
    })
}

module.exports = {
    makeGuess,
}