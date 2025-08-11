import express from "express" 
import { helloHandler } from "./handlers/hello.js"
import { stateHandler } from "./handlers/state.js"
import { getPlayersHandler } from "./handlers/getPlayers.js"
import { addPlayerHandler } from "./handlers/addPlayer.js"

const app = express()

app.use(express.json()) //passing JSON on Request

app.get("/hello", helloHandler)
app.get("/state", stateHandler)
app.get("/players", getPlayersHandler)
app.post("/players", addPlayerHandler)

console.log("Launcing app on port 3331")
app.listen(3331)