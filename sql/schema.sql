### Schema
DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE IF NOT EXISTS employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE IF NOT EXISTS department(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS role(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
    salary DECIMAL,
    department_id INTEGER REFERENCES department(id)
);

CREATE TABLE IF NOT EXISTS employee
(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    role_id INTEGER REFERENCES role(id),
    manager_id INTEGER REFERENCES employee(id)
);

-- INSERT INTO department(name) VALUES ('Information Services');
-- INSERT INTO role(title, salary, department_id) VALUES ('Engineer', 12, 1);
-- INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Francisco', 'Ortiz', 1, NULL);