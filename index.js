// TODO: Include packages needed for this application
const inquire = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input", 
        message: "What is the name of the README title",
        name: "title",
    },
    {
        type:"input",
       message: "What is the description of README",
        name:"description",

    },
    {
        type:"input",
        message: "what is the installation for the README",
        name:"installation",
    },
    {
        type:"usage"
        message:""
        name:
    },
    {
        type:"license"
        message:
        name:
    },
    {
        type:"contributing"
        message:
        name:
    },
    {
        type:"test"
        message:
        name:
    },
    {
        type:"questions"
        message:
        name:
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(error,data){
        console.log("job complete")
    })
}

// TODO: Create a function to initialize app
function init() {
inquire.prompt(questions)
.then(function(readAnswers){
    const readme = generateMarkdown(readAnswers)
    writeToFile("README.md", readme)
})
}

// Function call to initialize app
init();
