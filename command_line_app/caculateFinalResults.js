const { gameState } = require("./gameState.js");
const { gatherResults } = require("./gatherResults.js");

const caculateFinalResults = () => {
    const results = {}

    gameState.rounds.forEach((round, index) => {
        const roundResults = gatherResults(index);

        const playerNames = Object.keys(roundResults)

        //["Jubaer", "Junaed"]
        playerNames.forEach((player) => {
            // Jubaer OR Junaed
            if (results[player] === undefined) {
                results[player] = roundResults[player];
            }
            else {
                results[player] += roundResults[player];
            }
        })
    })

    return results;
}

module.exports = {
    caculateFinalResults,
}