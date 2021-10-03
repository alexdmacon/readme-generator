// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

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

function renderLicenseSection(license, github) {
  if ((license, github)) {
    return `Copyright 2021 ©[${github}](https://github.com/${github}). Shared under the ${renderLicenseLink(
      license
    )} license.`;
  }
}

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

You'll need to install the following dependencies by entering this in your command line interface:
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

module.exports = generateMarkdown;
