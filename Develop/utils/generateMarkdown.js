// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var escapedLicense = 
    license
      .replace(' ', '%20')
      .replace('&', '%26');
  return `https://img.shields.io/static/v1?label=license&message=${escapedLicense}&color=hotpink`;
}
 


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://choosealicense.com/licenses/${license.replace(' ', '-')}/`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";    
  }
  return `## License
  [![license ${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})
  <br>
  Licensed under the ${license} license
`;
}





// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## ${data.description}

### Table of content 
* [Installation](#installation)
* [usage](#usage)
* [license](#license)
* [test](#test)
* [Aditional information](#aditional-information)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Test
${data.test}

## aditional information
GitHub: ${data.github}
<br> Email: ${data.email}

`;
}

module.exports = generateMarkdown;
