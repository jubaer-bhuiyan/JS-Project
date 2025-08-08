export const helloHandler = (request, response) => {
    response.status(404).send("Hello from our first app")
}