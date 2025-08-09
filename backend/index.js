import express from "express" 
import { helloHandler } from "./handlers/hello.js"

const app = express()

app.get("/hello", helloHandler)

console.log("Launcing app on port 3331")
app.listen(3331)