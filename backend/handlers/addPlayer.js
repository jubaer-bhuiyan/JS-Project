import { gameState } from "../gameState/index.js"

export const addPlayerHandler = (request, response) => {
    console.log("inside addPlayerHandler")
    console.log("Request Body: ", request.body)

    if (!request.body.name) {
        response.status(400).send({
            message: "You need to send a 'name' property"
        })
        return
    }

    const playerWithSameName = gameState.players.find((player) => {
        return player.name === request.body.name
    })

    if (playerWithSameName) {
        response.status(400).send({
            message: `A player with the name "${request.body.name}" already exists`
        })
        return
    }

    gameState.players.push({
        name: request.body.name,
        points: 0,
    })

    response.status(201).send(gameState.players)
}