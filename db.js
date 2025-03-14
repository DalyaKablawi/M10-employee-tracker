const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "employee_db",
  password: "bootcamp",
  port: 5432,
});

client.connect();


const viewDepartments = async () => {
  const result = await client.query("SELECT * FROM department");
  console.table(result.rows);
};

const viewRoles = async () => {
  const result = await client.query(
    "SELECT role.title, role.id, department.name AS department, role.salary FROM role JOIN department ON role.department_id = department.id"
  );
  console.table(result.rows);
};


const viewEmployees = async () => {
  const result = await client.query(
    `SELECT employee.id, employee.first_name, employee.last_name, role.title AS job_title, department.name AS department, role.salary, manager.first_name AS manager 
     FROM employee
     JOIN role ON employee.role_id = role.id
     JOIN department ON role.department_id = department.id
     LEFT JOIN employee manager ON employee.manager_id = manager.id`
  );
  console.table(result.rows);
};

module.exports = { viewDepartments, viewRoles, viewEmployees };
