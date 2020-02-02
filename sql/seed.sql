INSERT INTO department(name) VALUES ('Operations');
INSERT INTO department(name) VALUES ('Sales');
INSERT INTO department(name) VALUES ('Finance');
INSERT INTO department(name) VALUES ('Production');
INSERT INTO department(name) VALUES ('Quality');
INSERT INTO department(name) VALUES ('Maintenance');
INSERT INTO department(name) VALUES ('Warehouse');
INSERT INTO department(name) VALUES ('Human Resources');
INSERT INTO department(name) VALUES ('Information Services');

INSERT INTO role(title, salary, department_id) VALUES ('VP of Operations', 12, 1);
INSERT INTO role(title, salary, department_id) VALUES ('VP of Sales', 12, 2);
INSERT INTO role(title, salary, department_id) VALUES ('Controller', 12, 3);
INSERT INTO role(title, salary, department_id) VALUES ('Accountant', 12, 3);
INSERT INTO role(title, salary, department_id) VALUES ('Manager', 12, 4);
INSERT INTO role(title, salary, department_id) VALUES ('Operator', 12, 4);
INSERT INTO role(title, salary, department_id) VALUES ('QA Technician', 12, 5);
INSERT INTO role(title, salary, department_id) VALUES ('Maintenance Technician', 12, 6);
INSERT INTO role(title, salary, department_id) VALUES ('HR Specialist', 12, 7);
INSERT INTO role(title, salary, department_id) VALUES ('Engineer', 12, 8);

INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Armando', 'Strozzi', 1, NULL);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Leticia', 'Magdaleno', 2, NULL);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Jeff', 'Kirkland', 3, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Irma', 'Alvarez', 4, 3);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Maribel', 'Tovar', 5, 1);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Francisco', 'Ortiz', 10, 3);
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('Amparo', 'Perrin', 9, 1);