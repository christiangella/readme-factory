const inquirer = require('inquirer');
const fs = require('fs');

console.log("\n\n✧ * ━━━━━━━━━━━━━━━━━━━━\n\n       welcome to the\n       README FACTORY.\n\n   ━━━━━━━━━━━━━━━━━━━━━ *.\n")

const generateDoc = (data) =>
`# **${data.project}**

## Description

${data.desc}

[![License: ${data.license}](https://shields.io/badge/License-${data.license}-gold.svg)](https://opensource.org/licenses/${data.license})

<div style='text-align: center;'>
· · ────────────────── · ·
</div>

## Table of Contents
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Roadmap](#roadmap)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)
  - [License](#license)

## Features

The deployed application and repository contains the following features:

${data.features}

## Roadmap

The application could be improved by integrating the following:

- ${data.roadmap}

## Installation

${data.install}

A copy of this repository can be cloned using either of the following codes:

- HTTPS: https://github.com/${data.github}/${data.project}.git
- SSH: git@github.com:${data.github}/${data.project}.git

## Usage

${data.usage}

## Contributing

${data.contr}

## Test

${data.test}

## Questions

This repository was created by ${data.name}. For further support, reach out by email at ${data.email} or by Github at ${data.github}.

## License

This project is covered by a(n) ${data.license} license.

[![License: ${data.license}](https://shields.io/badge/License-${data.license}-gold.svg)](https://opensource.org/licenses/${data.license})

<div style='text-align: center;'>
· · ────────────────── · ·
</div>

`

function initiate() {
inquirer.prompt([
    {
        name: 'name',
        type: 'input',
        message: 'What is your name?\n '
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is your github username?\n '
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email?\n '
    },
    {
        name: 'project',
        type: 'input',
        message: 'What is the title of your project/repository?\n '
    },
    {
        name: 'desc',
        type: 'input',
        message: 'Create a description for your project.\n '
    },
    {
        name: 'features',
        type: 'input',
        message: 'What are some technical features of the project?\n '
    },
    {
        name: 'roadmap',
        type: 'input',
        message: 'What are future improvements or features?\n '
    },
    {
        name: 'install',
        type: 'input',
        message: 'What are the steps to installing this project?\n '
    },
    {
        name: 'usage',
        type: 'input',
        message: 'What is the usage information for this project?\n '
    },
    {
        name: 'contr',
        type: 'input',
        message: 'What are the contributing guidelines for this project?\n '
    },
    {
        name: 'test',
        type: 'input',
        message: 'How can one test this project?\n '
    },
    {
        name: 'license',
        type: 'list',
        message: 'What license do you want for your project?\n ',
        choices: ['MIT', 'Unlicense', 'Zlib', 'ISC']
    },
]).then ((data) => {
    fs.writeFile('README.md', generateDoc(data), (err) => {
        if(err) {
            return console.log('\n\n✧ * ━━━━━━━━━━━━━━━━━━━━\n\n       OH-NO !\n       seems we had some trouble.\n       please see below.\n\n   ━━━━━━━━━━━━━━━━━━━━━ *.\n\n' + err)
        }
        return console.log(console.log("\n\n✧ * ━━━━━━━━━━━━━━━━━━━━\n\n       generated! thank you\n       for using the\n       README FACTORY.\n\n   ━━━━━━━━━━━━━━━━━━━━━ *.\n"))
    })
})
}

initiate()