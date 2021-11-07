/* File containing questions for inquirer prompts
- managerQuestions
- engineerQuestions
- internQuestions
 */
const managerQuestions = [
	{
		type: 'input',
		name: 'name',
		message: "Enter the team manager's name: ",
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log('This is required.');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'id',
		message: "Enter the team manager's id number: ",
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log('This is required.');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'email',
		message: "Enter the team manager's email address: ",
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log('This is required.');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'officeNumber',
		message: "Enter the team manager's office number: ",
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log('This is required.');
				return false;
			}
		},
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
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log('This is required.');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'id',
		message: "Enter the engineer's id number: ",
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log('This is required.');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'email',
		message: "Enter the engineer's email address: ",
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log('This is required.');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'github',
		message: "Enter the engineer's github username: ",
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log('This is required.');
				return false;
			}
		},
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
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log('This is required.');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'id',
		message: "Enter the intern's id number: ",
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log('This is required.');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'email',
		message: "Enter the intern's email address: ",
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log('This is required.');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'school',
		message: "Enter the intern's school: ",
		validate: input => {
			if (input) {
				return true;
			} else {
				console.log('This is required.');
				return false;
			}
		},
	},
	{
		type: 'list',
		name: 'nextEmployee',
		message: 'Enter another employee on the team: ',
		choices: ['Engineer', 'Intern', 'No other employees'],
	},
];

module.exports = {managerQuestions, engineerQuestions, internQuestions};
