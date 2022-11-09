const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const consoleTable = require("console.table");
const Connection = require("mysql2/typings/mysql/lib/Connection");

const db = mysql2.createConnection(
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
    Connection.query("SELECT * FROM Departments", function (err, results) {
        if (err) throw err;
        console.table(results);
        mainMenue();
    });
};
const viewEmployees = () => {
    Connection.query("SELECT * FROM Employees", function (err, results) {
        if (err) throw err;
        console.table(results);
        mainMenue();
    });
};
const viewJobs = () => {
    Connection.query("SELECT * FROM Jobs", function (err, results) {
        if (err) throw err;
        console.table(results);
        mainMenue();
    });
};

const addDepartments = () => {
    inquirer.prompt ([{
        name: "department_name",
        type: "input",
        message: "Please type the name of the Department you wish to add."
    }
    ])
    .then(response => {
        Connection.query("INSERT INTO department (department_name)", [response.department],
        function (err, results) {
            if (err) throw err;
            console.log("A new Department has been added.");
            mainMenue();
        }
        );
    });
};
const addEmployees = () => {
    inquirer.prompt([
        {
            name: "first_name",
            type: "input",
            message: "Please enter their first name."
        },
        {
            name: "last_name",
            type: "input",
            message: "Please enter their last name."
        },
        {
            name: "job_id",
            type: "input",
            message: "Please enter the employees job id."
        },
        {
            name: "manager_id",
            type: "input",
            message: "Please enter their manager id. If they have one."
        }
    ])
    .then(response => {
        Connection.query("INSERT INTO employee (first_name, last_name, job_id, manager_id)", 
        [response.first_name, response.last_name, response.job_id, response.manager_id],
        function (err, results) {
            if (err) throw err;
            console.log("A new Employee has been hired.");
            mainMenue();
        }
        );
    });
}
const addJobs = () => {
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What is your occupation?"
        },
        {
            name: "salary",
            type: "input",
            message: "Type in the annual salary for this job."
        },
        {
            name: "department_id",
            type: "input",
            message: "Please type in the department id."
        }
    ])
    .then(response => {
        Connection.query("INSERT INTO job (title, salary, department_id)",
        [response.title, response.salary, response.department_id],
            function (err, results) {
                if(err) throw err;
                console.log("A new job has been added.");
                mainMenue();
            }
        );
    });
};

