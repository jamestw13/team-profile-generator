// DEPENDENCIES //
const inquirer = require('inquirer');
const {managerQuestions, engineerQuestions, internQuestions} = require('./src/questions.js');
const generatePage = require('./src/page-template.js');
const writeFile = require('./utils/generate-site.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// FUNCTIONS //

// Uses inquirer to prompt user for manager information. Returns promise
const promptManager = () => {
	return inquirer.prompt(managerQuestions);
};

// Recursive function to add engineer and intern information to employees array to the promptManager promise
const promptEmployees = data => {
	// If first time:
	if (!data.employees) {
		// Create the employee array in the promise data
		data.employees = [];
		// Create a manager object from promise data
		const {name, id, email, officeNumber} = data;
		const manager = new Manager(name, id, email, officeNumber);
		// Add manager object to employee array
		data.employees.push(manager);
	}

	// If Engineer was selected in previous inquirer prompt:
	if (data.nextEmployee === 'Engineer') {
		// Ask user for engineer information
		return inquirer.prompt(engineerQuestions).then(employeeData => {
			// Create an engineer object from user input
			const {name, id, email, github, nextEmployee} = employeeData;
			const engineer = new Engineer(name, id, email, github);
			// Add engineer object to the employee array
			data.employees.push(engineer);
			// Update nextEmployee value for next inquirer prompt
			data.nextEmployee = nextEmployee;
			// Recurse!
			return promptEmployees(data);
		});
		// If Intern was selected in previous inquirer prompt
	} else if (data.nextEmployee === 'Intern') {
		// Ask user for intern information
		return inquirer.prompt(internQuestions).then(employeeData => {
			// create an intern object from user input
			const {name, id, email, school, nextEmployee} = employeeData;
			const intern = new Intern(name, id, email, school);
			// Add intern object to the employee array
			data.employees.push(intern);
			// Update nextEmployee value for the next inquirer prompt
			data.nextEmployee = nextEmployee;
			// Recurse!
			return promptEmployees(data);
		});
		// Recursive base case
	} else {
		return data;
	}
};

// INITIALIZE APP

// Gather user input about employees
promptManager()
	.then(promptEmployees)
	// Create HTML data from user input and template
	.then(teamData => {
		return generatePage(teamData);
	})
	// Write HTML data to a file
	.then(pageHTML => {
		return writeFile(pageHTML);
	})
	// Validate fileWrite
	.then(writeFileResponse => {
		console.log(writeFileResponse.message);
	})
	// Return any errors
	.catch(err => {
		console.log(err);
	});
