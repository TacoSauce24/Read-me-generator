// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
.prompt([
    {
        type: 'input',
        message: 'what is the title of this project.',
        name: 'title',
    },
    {
        type:'input',
        message: 'enter discription of project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'installation instructions',
        name: 'install',
    },
    {
        type: 'input',
        message: 'what is the usage of this project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'contribuators to project',
        name: 'contrabution',
    },
    // {
    //     type:'input',
    //     message: 'test instuctions',
    //     name: 'test',
    // },
    {
        type: 'list',
        choices: ['unlicense', 'mit', 'apache', 'berkeley source distrabution', 'Mozilla'],
        name: 'license',
        message: 'please choose a licence'
    },
    {
        type: 'input',
        message: 'please input email.',
        name: 'email'
    },
    {
        type: 'input',
        message: 'please input github link.',
        name: 'github'
    },
 ]) .then((data) => {
        console.log(data);
        fs.writeFile('README.md', generateMarkdown(data),
        error =>{
            if(error) {
                console.log('please input data.')
            }
            console.log('ReadMe has been created!')
        }
    )})

