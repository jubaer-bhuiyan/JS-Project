const questions = [
    {
        prompt: "In which year was the first Star Wars movie released?",
        answer: 1977,
        correctAnswerOffset: 0,
        closestAnswerOffset: 5,
    },
    {
        prompt: "At the time of release, Titanic (1997) was the highest-grossing film of all time. How much did it gross worldwide in Million USD?",
        answer: 210,
        correctAnswerOffset: 50,
        closestAnswerOffset: 100,
    },
    {
        prompt: "How many people did Arnold Schwarzenegger kill on screen in the Terminator franchise? (Data by jabhuiyan.com",
        answer: 895,
        correctAnswerOffset: 200,
        closestAnswerOffset: 500,
    },
];

module.exports = {
    questions,
}