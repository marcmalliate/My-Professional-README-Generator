// LICENSE BADGE FUNCTION

function renderLicenseBadge(license) {
  if (license == 'No License') {
    return '';
  }
  else if (license === "MIT") {
    return `![license: MIT](https://img.shields.io/badge/license-MIT-green)`
  }

  else if (license === "APACHE 2.0") {
    return `![license: Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-blue)`;

  } else if (license === "GPL v3.0") {
    return `![license: GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-red)`

  }
}

renderLicenseBadge()


// LICENSE LINK FUNCTION

function renderLicenseLink(license) {
  if (license == 'No License') {
    return '';
  }
  else if (license === "MIT") {
    return `[MIT License](https://opensource.org/licenses/MIT)`;

  }
  else if (license === "APACHE 2.0") {
    return `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license === "GPL v3.0") {
    return `[GNU General Public License v3.0](https://opensource.org/licenses/GPL-2.0)`;
  }

}
renderLicenseLink()



// Generate Markdown Function
function generateMarkdown(data) {
  return `# ${data.title}

  ************************

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  1.  [Installation](#Installation)
  2.  [Usage](#Usage)
  3.  [License](#License)
  4.  [Contributing](#Contributing)
  5.  [Tests](#Tests)
  6.  [Questions](#Questions)



  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
 This application has the following license:
 ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
${data.tests}

<br />

## Questions
*If you would like to know more or have a question you'd like to ask, please contact me via email ${data.email} or you may also like to checkout my work [here](https://github.com/${data.username})*

`;
}

// Stores variables
module.exports = generateMarkdown;
