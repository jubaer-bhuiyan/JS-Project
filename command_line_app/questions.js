const fs = require("fs");
const path = require("path");

const readQuestions = () => {
    console.log("Reading questions from the file...");
    fs.readFile(
        path.join(__dirname, "./questions.json"), 
        {
            encoding: "utf-8",
        }, 
        (err, data) => {
            console.log("err", err)
            console.log("data", data);
        }  
    )
}

module.exports = {
    readQuestions,
}