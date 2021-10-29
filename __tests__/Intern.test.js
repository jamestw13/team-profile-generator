const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
	const intern = new Intern('Jim', 1, 'jim@gmail.com', 'SUNY');

	expect(intern.name).toBe('Jim');
	expect(intern.id).toEqual(expect.any(Number));
	expect(intern.email).toEqual(expect.any(String));
	expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's name", () => {
	const intern = new Intern('Jim', 1, 'jim@gmail.com', 'SUNY');
	expect(intern.getName()).toEqual('Jim');
});

test("gets intern's id number", () => {
	const intern = new Intern('Jim', 1, 'jim@gmail.com', 'SUNY');
	expect(intern.getId()).toEqual(1);
});

test("gets intern's email address", () => {
	const intern = new Intern('Jim', 1, 'jim@gmail.com', 'SUNY');
	expect(intern.getEmail()).toEqual('jim@gmail.com');
});

test("gets intern's school", () => {
	const intern = new Intern('Jim', 1, 'jim@gmail.com', 'SUNY');
	expect(intern.getSchool()).toEqual('SUNY');
});

test("gets intern's role", () => {
	const intern = new Intern('Jim', 1, 'jim@gmail.com', 'SUNY');
	expect(intern.getRole()).toEqual('Intern');
});
