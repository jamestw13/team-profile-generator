const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
	const engineer = new Engineer('Jim', 1, 'jim@gmail.com', 'devjim');

	expect(engineer.name).toBe('Jim');
	expect(engineer.id).toEqual(expect.any(Number));
	expect(engineer.email).toEqual(expect.any(String));
	expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's name", () => {
	const engineer = new Engineer('Jim', 1, 'jim@gmail.com', 'devjim');
	expect(engineer.getName()).toEqual('Jim');
});

test("gets engineer's id number", () => {
	const engineer = new Engineer('Jim', 1, 'jim@gmail.com', 'devjim');
	expect(engineer.getId()).toEqual(1);
});

test("gets engineer's email address", () => {
	const engineer = new Engineer('Jim', 1, 'jim@gmail.com', 'devjim');
	expect(engineer.getEmail()).toEqual('jim@gmail.com');
});

test("gets engineer's github profile", () => {
	const engineer = new Engineer('Jim', 1, 'jim@gmail.com', 'devjim');
	expect(engineer.getGithub()).toEqual('devjim');
});

test("gets engineer's role", () => {
	const engineer = new Engineer('Jim', 1, 'jim@gmail.com', 'devjim');
	expect(engineer.getRole()).toEqual('Engineer');
});
