const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const writeFile = require('./utils/generate-site.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const managerQuestions = [
	{
		type: 'input',
		name: 'name',
		message: "Enter the team manager's name: ",
	},
	{
		type: 'input',
		name: 'id',
		message: "Enter the team manager's id number: ",
	},
	{
		type: 'input',
		name: 'email',
		message: "Enter the team manager's email address: ",
	},
	{
		type: 'input',
		name: 'officeNumber',
		message: "Enter the team manager's office number: ",
	},
	{
		type: 'list',
		name: 'nextEmployee',
		message: 'Enter another employee on the team: ',
		choices: ['Engineer', 'Intern', 'No other employees'],
	},
];
const engineerQuestions = [
	{
		type: 'input',
		name: 'name',
		message: "Enter the engineer's name: ",
	},
	{
		type: 'input',
		name: 'id',
		message: "Enter the engineer's id number: ",
	},
	{
		type: 'input',
		name: 'email',
		message: "Enter the engineer's email address: ",
	},
	{
		type: 'input',
		name: 'github',
		message: "Enter the engineer's github username: ",
	},
	{
		type: 'list',
		name: 'nextEmployee',
		message: 'Enter another employee on the team?: ',
		choices: ['Engineer', 'Intern', 'No other employees'],
	},
];
const internQuestions = [
	{
		type: 'input',
		name: 'name',
		message: "Enter the intern's name: ",
	},
	{
		type: 'input',
		name: 'id',
		message: "Enter the intern's id number: ",
	},
	{
		type: 'input',
		name: 'email',
		message: "Enter the intern's email address: ",
	},
	{
		type: 'input',
		name: 'school',
		message: "Enter the intern's school: ",
	},
	{
		type: 'list',
		name: 'nextEmployee',
		message: 'Enter another employee on the team: ',
		choices: ['Engineer', 'Intern', 'No other employees'],
	},
];

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
			const {name, id, email, github} = employeeData;
			const engineer = new Engineer(name, id, email, github);
			data.employees.push(engineer);
			if (employeeData.nextEmployee !== 'No other employees') {
				return promptEmployees(data);
			} else {
				return data;
			}
		});
	} else if (data.nextEmployee === 'Intern') {
		return inquirer.prompt(internQuestions).then(employeeData => {
			const {name, id, email, school} = employeeData;
			const intern = new Intern(name, id, email, school);
			data.employees.push(intern);
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
		console.log(pageHTML);
	});
