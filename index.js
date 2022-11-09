const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const consoleTable = require("console.table");
const Connection = require("mysql2/typings/mysql/lib/Connection");

const dataBase = mysql2.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "employeeTracker_db"
    },
    console.log("Connected to employeeTracker_db")
);

Connection.connect(err => {
    if (err) throw err;
    console.log("Welcome to my EmployeeTracker.");
    mainMenue();
});

const mainMenue = () => {
    inquirer.createPromptModule({
        name: "mainMenue",
        type: "list",
        choices: [
            "View Departments",
            "View Employees",
            "View Jobs",
            "Add a Department",
            "Add a New Employee",
            "Add a Job",
            "Update Employee Job",
            "Quit"
        ]
    })
    .then(response => {
        switch (response.mainMenue) {
            // view
            case "View Departments":
                viewDepartments();
            case "View Employees":
                viewEmployees();
            case "View Jobs":
                viewJobs();
            // add
            case "Add Departments":
                addDepartments();
            case "Add Employees":
                addEmployees();
            case "Add Jobs":
                addJobs();
            // quit
            case "Quit":
                Connection.end();
        }
    });
};

const viewDepartments = () => {
    
}