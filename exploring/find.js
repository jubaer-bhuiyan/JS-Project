const animals = [
    {
        name: "Dog",
    },
    {
        name: "Cat",
        color: "Grey",
    },
    {
        name: "Cat",
        color: "Black",
    },
    {
        name: "Bird",
    },
]

const foundAnimal = animals.find((animal) => {
    return animal.name === "Cat"
})

console.log(foundAnimal)