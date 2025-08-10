import express from "express" 
import { helloHandler } from "./handlers/hello.js"
import { stateHandler } from "./handlers/state.js"
import { getPlayersHandler } from "./handlers/getPlayers.js"

const app = express()

app.get("/hello", helloHandler)
app.get("/state", stateHandler)
app.get("/players", getPlayersHandler)

console.log("Launcing app on port 3331")
app.listen(3331)