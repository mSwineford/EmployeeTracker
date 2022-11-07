/* departments */
INSERT INTO department (department_name)
VALUES ("Management");
INSERT INTO department (department_name)
VALUES ("Sales");
INSERT INTO department (department_name)
VALUES ("Engineering");
INSERT INTO department (department_name)
VALUES ("Finance");
INSERT INTO department (department_name)
VALUES ("Legal");

/* roles */
INSERT INTO role (title, salary, department_id)
VALUES (Manager, 150000, 001);
INSERT INTO role (title, salary, department_id)
VALUES (Engineer, 120000, 002);
INSERT INTO role (title, salary, department_id)
VALUES (Accountant, 120000, 003);
INSERT INTO role (title, salary, department_id)
VALUES (Salesperson, 80000, 004)
INSERT INTO role (title, salary, department_id)
VALUES (Lawyer, 250000, 005);

/* employees */
INSERT INTO employee (first_name, last_name, role, manager_id)
VALUES ("Mike", "Chan", 1, 001);
INSERT INTO employee (first_name, last_name, role, manager_id);
VALUES ("Kevin", "Tupik", 2, 002);
/* will add more later */
