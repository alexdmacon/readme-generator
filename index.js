// importing the modules, functions, and npm packages we'll need: inquirer to get user input in response to our questions on the command line, generateMarkdown script to create the template literal incorporating user input, and fs to actually write the README.
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array holding questions user will answer via inquirer prompt.
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

// actually creates the file, using arguments passed through init function below: fileName is `${answers.title}.md` and data is spread answers to inquirer prompt, as run through the generateMarkdown function.
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("ERROR: ", err);
    } else {
      console.log("It worked! Creating README.");
    }
  });
}

// prompts user to answer questions in above array. passes answers into callback functions that will generate the markdown and write the files.
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(`${answers.title}.md`);
    writeToFile(`${answers.title}.md`, generateMarkdown({ ...answers }));
  });
}

// Function call to initialize app
init();
