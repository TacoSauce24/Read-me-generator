// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'apache') {
    return '![licence: apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'mit') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license === 'berkeley source distrabution') {
    return '[![License: BSD](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
  if (license === 'Mozilla') {
    return '![licence: Mozilla](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  if (license === 'unlicense') {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

   ## Description
   -${data.description}

   ## Table Of Contents

   - [License](#License)
   - [installation](#installation)
   - [Usage](#Usage)
   - [Contributors](#Contributors)
   - [Test](#Test)
   - [contacts](#contacts)

   ## License

   -${renderLicenseBadge(data.license)}

   ## installation

   -${data.install}

   ## Usage

   -${data.usage}

   ## Contributors

   -${data.contrabution}

   ## Test
   adding video end post
   
   ## contacts

   If you have any questions please contact me at ${data.email}. Or to see any other projects of mine got to ${data.github}
`;
}

module.exports = generateMarkdown;
