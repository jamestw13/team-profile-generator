const generateManager = employees => {
	const managers = employees.filter(employee => {
		employee.getRole() === 'Manager';
	});

	if (managers) {
		return `
    <div class="d-flex justify-content-around bg-secondary mb-2 rounded-3 p-3">

    ${managers
			.map(({name, id, email, officeNumber}) => {
				return `
      <!-- Manager Card -->
      <div class="card" style="width: 18rem">
        <div class="card-header">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        </div>
        <div class="card-body">
          <p class="card-text">ID Number: ${id}</p>
          <p class="card-text">Office Number: ${officeNumber}</p>
          <a href="mailto:${email}" class="card-link">${email}</a>
        </div>
        </div>
        `;
			})
			.join('')}
      </div>
      `;
	}
};

const generateEngineers = employees => {
	const engineers = employees.filter(employee => {
		employee.getRole() === 'Engineer';
	});

	if (engineers) {
		return `
    <div class="d-flex justify-content-around bg-secondary mb-2 rounded-3 p-3">

    ${engineers
			.map(({name, id, email, github}) => {
				return `
      <!-- Manager Card -->
      <div class="card" style="width: 18rem">
        <div class="card-header">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        </div>
        <div class="card-body">
          <p class="card-text">ID Number: ${id}</p>
          <a href=":github.com/${github}" class="card-link">Engineer's github</a>
          <a href="mailto:${email}" class="card-link">${email}</a>
        </div>
        </div>
        `;
			})
			.join('')}
      </div>
      `;
	}
};

const generateInterns = employees => {
	const interns = employees.filter(employee => {
		employee.getRole() === 'Intern';
	});

	if (interns) {
		return `
    <div class="d-flex justify-content-around bg-secondary mb-2 rounded-3 p-3">

    ${interns
			.map(({name, id, email, school}) => {
				return `
      <!-- Manager Card -->
      <div class="card" style="width: 18rem">
        <div class="card-header">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        </div>
        <div class="card-body">
          <p class="card-text">ID Number: ${id}</p>
          <p class="card-text">School: ${school}</p>
          <a href="mailto:${email}" class="card-link">${email}</a>
        </div>
        </div>
        `;
			})
			.join('')}
      </div>
      `;
	}
};

module.exports = data => {
	const employees = data.employees;

	return `
  <!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<title>Team Profile</title>
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
			integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
			crossorigin="anonymous"
		/>
	</head>
	<body class="container py-4">
		<header class="p-5 mb-2 bg-primary rounded-3">
			<div class="container-fluid">
				<h1 class="display-5 fw-bold">My Team</h1>
				<p class="col-md-8 fs-4">You can view your team members and their details below</p>
			</div>
		</header>

		<!-- Manager Section -->
    ${generateManager(employees)}


		<!-- Engineer Section -->
    ${generateEngineers(employees)}


		<!-- Intern Section -->
    ${generateInterns(employees)}

		<script
			src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
			integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
			crossorigin="anonymous"
		></script>
		<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
			integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
			crossorigin="anonymous"
		></script>
	</body>
</html>
`;
};
