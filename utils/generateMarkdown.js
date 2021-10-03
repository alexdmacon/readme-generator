// creates image of License badge. Argument (license) is being passed from the generateMarkdown function below.
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (license === "GNU GPL v3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  } else if (license === "Eclipse Public License 1.0") {
    return `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]`;
  } else {
    return "";
  }
}

// creates hyperlink to license within text of chosen license. argument passed from the generateMarkdown function below.
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[${license}](https://opensource.org/licenses/MIT)`;
  } else if (license === "GNU GPL v3") {
    return `[${license}](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "Eclipse Public License 1.0") {
    return `[${license}]((https://opensource.org/licenses/EPL-1.0))`;
  } else {
    return "";
  }
}

// creates markdown with link to user's GitHub page, copyright info, and license info. arguments passed from generateMarkdown fucntion below.
function renderLicenseSection(license, github) {
  if ((license, github)) {
    return `Copyright 2021 ©[${github}](https://github.com/${github}). Shared under the ${renderLicenseLink(
      license
    )} license.`;
  }
}

// this is the function that creates the actual markdown template literal that will incorporate user input where indicated with ${expressions}. The (data) argument is being passed from code written in index.js: all the "answers" given by the user in response to the inquirer prompt.
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

You'll need to install the necessary dependencies by entering this in your command line interface:
- ${data.npm}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${renderLicenseSection(data.license, data.github)}

## Contributing

${data.contribution}

## Tests

To run tests, enter this in your command line interface: 
- ${data.tests}

## Questions

Got questions? Just reach out and ask.

- Email: ${data.email}
- GitHub: [${data.github}](https://github.com/${data.github})
`;
}

// allows us to export the generateMarkdown function to index.js, which is the script we're technically gonna be running using node from the terminal.
module.exports = generateMarkdown;