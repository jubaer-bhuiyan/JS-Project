const { gameState } = require("./gameState.js")

const gatherResults = (roundNumber) => {
    const round = gameState.rounds[roundNumber]

    if (!round) {
        throw new Error(`There was no such round with number ${roundNumber}`)
    }

    if (round.guesses.length === 0) {
        throw new Error(`The round with number ${roundNumber} had no gusses`)
    }

    const results = {}

    for (let index = 0; index < round.guesses.length; index++) {
        const guess = round.guesses[index];

        const offFromSolution = Math.abs(round.question.answer - guess.guess);

        results[guess.player] = offFromSolution;
    }

    return results
}

module.exports = {
    gatherResults,
}