const prompts = require('prompts');

const askForUserName = async () => {
    const response = await prompts({
    type: 'text',
    name: 'playerOne',
    message: 'What is your name, player one?',
});

console.log("response from prompts", response);
}

askForUserName()