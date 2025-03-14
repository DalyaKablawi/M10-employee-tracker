const inquirer = require('inquirer');

async function main() {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
        "Exit",
      ],
    },
  ]);

  console.log(action);

  switch (action) {
    case "View All Departments":
      console.log("Displaying all departments...");
      break;
    case "Exit":
      console.log("Goodbye!");
      process.exit();
    default:
      console.log("Option selected:", action);
      break;
  }

  main();
}

main();
