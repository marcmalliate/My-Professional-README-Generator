// LICENSE BADGE FUNCTION

function renderLicenseBadge(license) {
  if (license == 'none') {
    return '';
  }
  else if (license === "MIT") {
    return `![license: MIT](https://img.shields.io/badge/license-MIT-blue)`
  }

  else if (license === "APACHE 2.0") {
    return `![license: Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-green)`;

  } else if (license === "GPL v3.0") {
    return `![license: GNU General Public License v3.0](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-red)`

  }
}

renderLicenseBadge()


// LICENSE LINK FUNCTION

function renderLicenseLink(license) {
  if (license == 'none') {
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


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
