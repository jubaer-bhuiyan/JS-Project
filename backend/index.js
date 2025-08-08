import express from "express" 

const app = express()

app.get("/hello", (request, response) => {
    response.status(404).send("Hello from our first app")
})

console.log("Launcing app on port 3331")
app.listen(3331)