// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown =require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            //makes sure user includes request info
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log('Please enter project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter description of your project (Required)',
            validate: descInput => {
                if(descInput) {
                    return true;
                } else {
                    console.log('Please enter project description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'table',
            message: 'Would you like to add a table of contents?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter the installation instructions for your project (Required)',
            validate: installationInput => {
                if(installationInput) {
                    return true;
                } else {
                    console.log('Please enter installation instruction!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter user usage instructions (Required)',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage instructions!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license',
            choices: ['MIT', 'Apache', 'GPL', 'BSD-3-Clause', 'None'],
            default: 'None'
        },
        {
            type: 'confirm',
            name: 'contributions',
            message: 'Do you want to include contributions?',
            default: false
        },
        {
            type: 'input',
            name: 'contributionInput',
            message: 'Enter contributions in your project',
            when: ({ contributions }) => contributions,
            validate: contriInput => {
                if(contriInput) {
                    return true;
                } else {
                    console.log('Please enter contributions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter tests used to ensure project functioned properly (Required)',
            validate: testRes => {
                if(testRes) {
                    return true;
                } else {
                    console.log('Please enter tests used!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide email associated with GitHub (Required)',
            validate: gitEmail => {
                if(gitEmail) {
                    return true;
                } else {
                    console.log('Enter email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter GitHub username',
            validate: gitnameInput => {
                if(gitnameInput) {
                    return true;
                } else {
                    console.log('Please enter Github username!');
                    return false;
                }
            }
        },
    ]);
};
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}
    
// Function call to initialize app
init();
