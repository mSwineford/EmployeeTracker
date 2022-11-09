const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const consoleTable = require("console.table");

const db = mysql2.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "",
        database: "employeeTracker_db"
    },
    console.log("Connected to employeeTracker_db")
);

