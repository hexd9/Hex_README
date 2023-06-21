// TODO: Include packages needed for this application
const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");
const markdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message:
      "Provide a short description explaining the what, why, and how of your project?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use.",
  },
  {
    type: "list",
    name: "license",
    message: "choose a license?",
    choices: ["MIT", "GNU", "Apache"],
  },
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute?",
  },
  {
    type: "input",
    name: "test",
    message: "What test have been completed?",
  },
  {
    type: "input",
    name: "questions",
    message: "Please enter any questions.",
  },
];

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
  await writeFile(fileName, data);
}

// TODO: Create a function to initialize app
async function init() {
  const responses = await inquirer.prompt(questions);
  const readMEText = markdown(responses);
  writeToFile("README.md", readMEText);
}

// Function call to initialize app
init();
