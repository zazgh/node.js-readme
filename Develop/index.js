// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
console.log("welcome to my README generator")
console.log("answer the following questions to generte a high quality README for your project");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name: "title",
        message: "what is the title of your project?",
        validate: your_Input => {
            if (your_Input) {
                return true;   
            } else {
                console.log("enter a title");
                return false;
            }
        }
    },
//description
{
    type: "input",
    name: "description",
    message: "description of the project",
    validate: your_description => {
        if (your_description) {
            return true;   
        } else {
            console.log("enter a project description");
            return false;
        }
    }
},
//installation
{
    type: "input",
    name: "installation",
    message: "how to install your project",
    validate: your_installation => {
        if (your_installation) {
            return true;   
        } else {
            console.log("enter how to install your project");
            return false;
        }
    }
},
//usage 
{
    type: "input",
    name: "usage",
    message: "how to usage this project",
    validate: your_usage => {
        if (your_usage) {
            return true;   
        } else {
            console.log("enter the information of how to use this project");
            return false;
        }
    }
},
//licensing 
{
    type: "list",
    name: "license",
    message: "chose a license for your project",
    choices: ["MPL 2.0", "apache 2.0", "MIT", "none"],
    validate: your_license => {
        if (your_license) {
            return true;   
        } else {
            console.log("chose a license for your project");
            return false;
        }
    }
},

//test 
{
    type: "input",
    name: "test",
    message: "how can users test this project",
    validate: your_test => {
        if (your_test) {
            return true;   
        } else {
            console.log("how can users test this project");
            return false;
        }
    }
},
//github username
{
    type: "input",
    name: "github",
    message: "enter your Github username",
    validate: gitbub_input => {
        if (gitbub_input) {
            return true;   
        } else {
            console.log("enter your Github username");
            return false;
        }
    }
},
//email address
{
    type: "input",
    name: "email",
    message: "enter your email address",
    validate: email_input => {
        if (email_input) {
            return true;   
        } else {
            console.log("enter your email address");
            return false;
        }
    }
},
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("You can now preview your README file");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput) {
        console.log(userInput)
        writeToFile("Output/README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
