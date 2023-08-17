
// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {type:"input",name:"project_title",message:"what is the name of your project?"},
    {type:"input",name:"description",message:"what is the description"},
    {type:"input",name:"installation",message:"what is the installation instructions"},
    {type:"input",name:"usage",message:"how do you use the project?"},
    {type:"input",name:"contributing",message:"how to contribute to the project?"},
    {type:"list",name:"license",message:"license",choices:["apache","mit","gnu","none"]},
    {type:"input",name:"tests",message:"what is the command to run tests?"},
    {type:"input",name:"github",message:"what is your github username?"},
    {type:"input",name:"email",message:"what is your email?"},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {


    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log ("successfully wrote file")
    });
}

// TODO: Create a function to initialize app
function init() {

    console.log("Hello World")
    inquirer
  .prompt(questions)
  .then((answers) => {
    console.log (answers)
    var markdown = generateMarkdown(answers) 




    writeToFile ("./output/README.md",markdown)
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
      console.log(error)
    }
  });
}

// Function call to initialize app
init();
