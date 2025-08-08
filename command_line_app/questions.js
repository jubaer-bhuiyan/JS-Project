const fs = require("fs");
const path = require("path");

const readQuestions = () => {
    return new Promise((resolve, reject) => {
        console.log("Reading questions from the file...");
        fs.readFile(
            path.join(__dirname, "./questions.json"), 
            {
                encoding: "utf-8",
            }, 
            (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(JSON.parse(data));
                }
            }  
        )
    })
}

module.exports = {
    readQuestions,
}