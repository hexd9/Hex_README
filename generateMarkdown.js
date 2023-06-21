// License Badge Function
function renderLicenseBadge(license) {}


function renderLicenseLink(license) {}


function renderLicenseSection(license) {}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `![license](https://img.shields.io/badge/license-${data.license}-brightgreen)
# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.instalaltion}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

## Test

${data.test}

## Questions

${data.questions}
`;
}

module.exports = generateMarkdown;
