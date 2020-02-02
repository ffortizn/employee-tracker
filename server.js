var orm = require("./config/orm.js");
const inquirer = require('inquirer');
const cTable = require('console.table');

var emplQuestions = [
    {
        type: 'input',
        name: 'fname',
        message: "First name:"
    },
    {
        type: 'input',
        name: 'lname',
        message: "Last Name:"
    }
]

var role;
var employee;
var department;

orm.select("*", "role", function (result) {
    role = result;
});

orm.select("*", "employee", function (result) {
    employee = result;
});

orm.select("*", "department", function (result) {
    department = result;
});

whatToDo = ['View department', 'View role', 'View employee', 'Add department', 'Add role', 'Add employee', 'Update employee roles', 'Exit']
const myAnswers = [];

var questions = [
    {
        type: 'list',
        name: 'whatToDo',
        choices: whatToDo,
        message: 'What to do?'
    }
    // ,
    // {
    //     type: 'input',
    //     name: 'dept',
    //     message: 'Department:',

    //     when: function (answers) {
    //         return answers.whatToDo === 'Add department';
    //     }
    // }
]

function ask() {
    inquirer
        .prompt({
            name: "whatToDo",
            type: "list",
            message: "What to do?",
            choices: whatToDo
        })
        .then(answers => {
            // based on their answer, either call the bid or the post functions
            console.log("\n");
            switch (answers.whatToDo) {
                case 'View department':
                    console.table(department);
                    break;
                case 'View role':
                    console.table(role);
                    break;
                case 'View employee':
                    console.table(employee);
                    break;
                case 'Add department':
                    inquirer
                        .prompt({ type: 'input', name: 'dept', message: "Department:" })
                        .then(function (answer) { orm.insert('department', 'name', answer.dept); });
                    break;
                case 'Add role':
                    inquirer
                        .prompt({ type: 'input', name: 'rl', message: "Role:" })
                        .then(function (rl) { orm.insert('role', 'title', rl); });
                    break;
                case 'Add employee':
                    inquirer
                        .prompt(emplQuestions)
                        .then(function (empl) { orm.insertEmployee(empl.fname, empl.lname); });
                    break;
                case 'Update employee roles':
                    break;
                case 'Exit':
                    return;
                default:
                    //ask();
                    break;
            }
            ask();
        });
}

ask();