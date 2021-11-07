// JEST TEST FOR EMPLOYEE OBJECT
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
	const employee = new Employee('Jim', 1, 'jim@gmail.com');

	expect(employee.name).toBe('Jim');
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
	const employee = new Employee('Jim', 1, 'jim@gmail.com');
	expect(employee.getName()).toEqual('Jim');
});

test("gets employee's id number", () => {
	const employee = new Employee('Jim', 1, 'jim@gmail.com');
	expect(employee.getId()).toEqual(1);
});

test("gets employee's email address", () => {
	const employee = new Employee('Jim', 1, 'jim@gmail.com');
	expect(employee.getEmail()).toEqual('jim@gmail.com');
});

test("gets employee's role", () => {
	const employee = new Employee('Jim', 1, 'jim@gmail.com');
	expect(employee.getRole()).toEqual('Employee');
});
