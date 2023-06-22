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
        type:"input",
        message:"how will you explain usage of README",
        name:"usage",
    },
    {
        type:"input",
        message:"what license did you use for this README",
        name:"license",
    },
    {
        type:"input",
        message:"what is the contribution for README",
        name:"contributing",
    },
    {
        type:"input",
        message:"what is the test for the README",
        name:"test",
    },
    {
        type:"input",
        message:"what question are there for this README project",
        name:"questions",
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
