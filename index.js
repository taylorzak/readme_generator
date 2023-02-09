// TODO: Include packages needed for this application
const fs = require("fs")
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"github",
        message:"what is your github username?",
    },
    {
        type:"input",
        name:"email",
        message:"what is your email address?",
    },
    {    
        type:"input",
        name:"table of contents",
        message:"table of contents",
    },
    {    
        type:"input",
        name:"title",
        message:"what is the title of your readme?",
    },
    {    
        type:"input",
        name:"description",
        message:"details of project",
    },
    {    
        type:"input",
        name:"installation",
        message:"installation instructions",
    },
    {    
        type:"input",
        name:"usage",
        message:"usage information",
    },
    {    
        type:"input",
        name:"contributing",
        message:"contributing guidelines",
    },
    {    
        type:"input",
        name:"tests",
        message:"tests",
    },
    // create a new question of type list
    // will have additional 'choices' field with an array of 3 open source licenses 
    // mit, apache 2.0, gpl 3.0 or none
    {    
        type:"list",
        name:"license",
        message:"what license did you use?",
        choices:["MIT","Apache_2.0","GPL","none"]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses)=>{
        console.log("generating Readme")
        console.log(inquirerResponses)
        writeToFile("README.md",generateMarkdown({...inquirerResponses}))
    })
}

// Function call to initialize app
init();