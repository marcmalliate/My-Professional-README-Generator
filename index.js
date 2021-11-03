// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input
const promptUser = () => {

    return inquirer.prompt([{
        type: 'input',
        name: 'username',
        message: "What is your Github username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is you email address?"
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Provide write a short description of your project"
    },
    {
        type: "list",
        name: "license",
        message: 'What kind of license should your project have?',
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
        ]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?'
    },
    {
        type: "input",
        name: "repo",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?"
    },
]);
};

// Function to write README file

const init = () => {
    promptUser()

    .then((data) => fs.writeFileSync('README.md', generateMarkdown(data)))
    .then(() => console.log("Your professional README.md has been created!"))
    .catch((err) => console.error(err))
};















// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
init();
