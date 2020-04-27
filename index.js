//Imports required NPM packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");


//Prompts questions to collect input of information to generate README
function promptUser() {
    return inquirer.prompt ([
    {
        type: 'input',
        name:: 'username',
        message: "What is your GitHub username?",
        default: "zyloh89",
        validate: function (input) {
            if (input === "") {
                return "Please enter GitHub username."
            }
            return true;
        }
    },
    {
        type: 'input',
        name:: 'email',
        message: "What is your email?",
        validate: function (input) {
            if (input === "") {
                return "Please enter email address."
            }
            return true;
        }
    },
    {
        type: 'input',
        name:: 'title',
        message: "What is your GitHub project title?",
        validate: function (input) {
            if (input === "") {
                return "Please enter GitHub project title."
            }
            return true;
        }
    },
    {
        type: 'input',
        name:: 'project_URL',
        message: "What is the URL to your project?" 
        validate: function (input) {
            if (input === "") {
                return "Please enter project URL."
            }
            return true;
        }
    },
    {
        type: 'input',
        name:: 'description',
        message: "Please write a short description of your project." 
    },
    {
        type: 'list',
        name:: 'license',
        message: "What kind of license should your project have? (Use arrow keys)" ,
        default: "MIT",
        choices: [
            "MIT APACHE 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ],         
    },
    { 
        type: 'input',
        name:: 'installation',
        message: "What command should be run to install dependencies?"
        default: "node index.js"
    },
    {
        type: 'input',
        name:: 'tests',
        message: "What command should be run to run tests? (eg. npm test)" 
    },
    {
        type: 'input',
        name:: 'usage',
        message: "What does the user need to know about using the repo?" 
    }, 
    {
        type: 'input',
        name:: 'contributing',
        message: "What does the user need to know about contributing to the repo?" 
    },

]);
}



async function init () {
    try{

        
    }
    writeToFile(fileName, data) {
}

function init() {

}

init();
