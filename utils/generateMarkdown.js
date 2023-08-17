// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "apache":{return "https://img.shields.io/badge/License-Apache_2.0-blue.svg" }
    case "mit":{return "https://img.shields.io/badge/License-MIT-yellow.svg" }
    case "gnu":{return "https://img.shields.io/badge/License-GPLv3-blue.svg" }

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "apache":{return "https://opensource.org/licenses/Apache-2.0" }
    case "mit":{return "https://opensource.org/licenses/MIT" }
    case "gnu":{return "https://www.gnu.org/licenses/gpl-3.0" }
    
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license=="none"){return "N/A"}  
  let badge = renderLicenseBadge (license)
  let link = renderLicenseLink (license)
  return `[![License](${badge})](${link})`
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title}

## Description
${data.description}


## Table of Contents 


- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Github](#github)
- [Email](#email)

## Installation
${data.installation}


## Usage
${data.usage}
    
    
## Contributing
${data.contributing}


## License

${renderLicenseSection(data.license)}

    
## Tests
${data.tests}


## github
${data.github}


## email
${data.email}
`;
}

module.exports = generateMarkdown;
