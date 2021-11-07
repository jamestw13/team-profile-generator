const fs = require('fs');

const writeFile = fileContent => {
	return new Promise((resolve, reject) => {
		fs.writeFile('./dist/index.html', fileContent, err => {
			// if there's an error, reject the promise and sent the error to the catch function
			if (err) {
				reject(err);
				return;
			}
			// if successful, resolve and send the success message
			resolve({
				ok: true,
				message: 'HTML file created!',
			});
		});
	});
};

module.exports = writeFile;
