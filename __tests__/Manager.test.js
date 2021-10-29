const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
	const manager = new Manager('Jim', 1, 'jim@gmail.com', 10);

	expect(manager.name).toBe('Jim');
	expect(manager.id).toEqual(expect.any(Number));
	expect(manager.email).toEqual(expect.any(String));
	expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's name", () => {
	const manager = new Manager('Jim', 1, 'jim@gmail.com', 10);
	expect(manager.getName()).toEqual('Jim');
});

test("gets manager's id number", () => {
	const manager = new Manager('Jim', 1, 'jim@gmail.com', 10);
	expect(manager.getId()).toEqual(1);
});

test("gets manager's email address", () => {
	const manager = new Manager('Jim', 1, 'jim@gmail.com', 10);
	expect(manager.getEmail()).toEqual('jim@gmail.com');
});

test("gets manager's office number", () => {
	const manager = new Manager('Jim', 1, 'jim@gmail.com', 10);
	expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

test("gets manager's role", () => {
	const manager = new Manager('Jim', 1, 'jim@gmail.com');
	expect(manager.getRole()).toEqual('Manager');
});
