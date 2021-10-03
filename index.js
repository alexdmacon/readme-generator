// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "What's the title of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "Please describe your project:",
  },
  {
    name: "installation",
    type: "input",
    message: "How do you install this project?",
  },
  {
    name: "usage",
    type: "input",
    message: "How do you use this project?",
  },
  {
    name: "contribution",
    type: "input",
    message: "How can other developers contribute to this project?",
  },
  {
    name: "npm",
    type: "input",
    message: "What npm packages need to be installed?",
    default: "npm i inquirer",
  },
  {
    name: "tests",
    type: "input",
    message: "How do you test whether this thing is working?",
    default: "npm test",
  },
  {
    name: "license",
    type: "list",
    message: "How are you licensing your project?",
    choices: [
      "MIT",
      "GNU General Public License",
      "Eclipse Public License",
      "I'm not licensing my project",
    ],
  },
  {
    name: "github",
    type: "input",
    message: "What's your GitHub username?",
  },
  {
    name: "email",
    type: "input",
    message: "What's your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log("ERROR:", err);
        } else {console.log("Success")};
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(`${answers.title}.md`);
            writeToFile(`${answers.title}.md`, generateMarkdown({...answers}))
        })
    

}

// Function call to initialize app
init() 
;
