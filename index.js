const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const questions = [
  {
    type: 'input',
  name: 'name',
  message: 'Enter the team manager\'s name: ',
  },
  {
    type: 'input',
  name: 'id',
  message: 'Enter the team manager\'s id number: ',
  }
  {
    type: 'input',
  name: 'email',
  message: 'Enter the team manager\'s email address: ',
  },
  {
    type: 'input',
  name: 'officeNumber',
  message: 'Enter the team manager\'s office number: ',
  }
],
const init = () => {
  inquirer.prompt(questions).then(userInput =>{
    console.log(userInput)
  }).catch((error)=>{
    console.log(error)
  })
}

init();
