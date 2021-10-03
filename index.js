const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
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
    message: "What should the user enter in the command line to install dependencies?",
    default: "npm i",
  },
  {
    name: "tests",
    type: "input",
    message: "What should the user enter in the command line to run tests?",
    default: "npm test",
  },
  {
    name: "license",
    type: "list",
    message: "How are you licensing your project?",
    choices: [
      "MIT",
      "GNU GPL v3",
      "Eclipse Public License 1.0",
      "I'm not licensing my project because I'm a rebel who has no regard for copyright law.",
    ],
  },
  {
      name: "credits",
      type: "input",
      message: "Who worked on this project? What other resources should be credited?",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      console.log("It worked! Creating README.");
    }
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(`${answers.title}.md`);
    writeToFile(`${answers.title}.md`, generateMarkdown({ ...answers }));
  });
}

// Function call to initialize app
init();
