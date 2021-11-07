const inquirer = require('inquirer');
const {managerQuestions, engineerQuestions, internQuestions} = require('./src/questions.js');
const generatePage = require('./src/page-template.js');
const writeFile = require('./utils/generate-site.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const promptManager = () => {
	return inquirer.prompt(managerQuestions);
};

const promptEmployees = data => {
	if (!data.employees) {
		data.employees = [];
		const {name, id, email, officeNumber} = data;
		const manager = new Manager(name, id, email, officeNumber);
		data.employees.push(manager);
	}

	if (data.nextEmployee === 'Engineer') {
		return inquirer.prompt(engineerQuestions).then(employeeData => {
			const {name, id, email, github, nextEmployee} = employeeData;
			const engineer = new Engineer(name, id, email, github);
			data.nextEmployee = nextEmployee;
			data.employees.push(engineer);
			if (employeeData.nextEmployee !== 'No other employees') {
				return promptEmployees(data);
			} else {
				return data;
			}
		});
	} else if (data.nextEmployee === 'Intern') {
		return inquirer.prompt(internQuestions).then(employeeData => {
			const {name, id, email, school, nextEmployee} = employeeData;
			const intern = new Intern(name, id, email, school);
			data.employees.push(intern);
			data.nextEmployee = nextEmployee;
			if (employeeData.nextEmployee !== 'No other employees') {
				return promptEmployees(data);
			} else {
				return data;
			}
		});
	} else {
		return data;
	}
};

promptManager()
	.then(promptEmployees)
	.then(teamData => {
		return generatePage(teamData);
	})
	.then(pageHTML => {
		return writeFile(pageHTML);
	})
	.then(writeFileResponse => {
		console.log(writeFileResponse.message);
	})
	.catch(err => {
		console.log(err);
	});
