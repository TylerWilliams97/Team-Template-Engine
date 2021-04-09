const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");
const teamArray = [];


function getName() {
    inquirer
        .prompt({
            name:'name',
            type:'input',
           message:'Enter employee Name'
        }).then(ans => {
            return new Promise(ans)
        }).catch(er =>{
            console.log(er);
        })
};
function getId() {
    inquirer
        .prompt({
            name:'id',
            type: 'number',
            message:'Enter employee Id'
        }).then(ans => {
            return new Promise(ans)
        })
        .catch(err => {
            console.log(err);
        })
};
function getEmail() {
    inquirer
        .prompt({
            name:'email',
            type:'input',
            message:'Enter employee email address'
        }).then(ans => {
            return new Promise(ans)
        }).catch(err => {
            console.log(err);
        })
};
function getRole() {
    inquirer
        .prompt({
            name:'role',
            type:'list',
            choices:['intern','engineer','manager', 'Employee']
        }).then(ans => {
            return ans
        }).catch(err => {
            console.log(err);
        })
};
function getGithub() {
    inquirer
        .prompt({
            name:'github',
            type:'input',
            message:'Enter employee github'
        }).then(ans => {
            return ans
        }).catch(err => {
            console.log(err);
        })
};
function getOfficeNumber() {
    inquirer
        .prompt({
            name:'officeNumber',
            type:'number',
            message:'Enter Office Number'
        }).then(ans =>{
            return ans
        }).catch(err => {
            console.log(err);
        })
};
function getSchool() {
    inquirer
        .prompt({
            name:'school',
            type:'input',
            message:'enter name of school'
        }).then(ans =>{
            return ans
        }).catch(err =>{
            console.log(err);
        })
};



function getIntern() {
    inquirer
        .prompt([{
            name:'internname',
            type:'input',
            message:'enter name'
        },
        {
            name:'internemail',
            type:'input',
            message:'enter email'
        },
        {
            name:'internid',
            type:'input',
            message:'enter id'
        },
        {
            name:'school',
            type:'input',
            message:'enter name of school'
        }
    ]).then(ans => {
        const newIntern = new Intern(ans.internname,ans.internid,ans.internemail,ans.school)
        teamArray.push(newIntern)
        assembleTeam()
        runApp()
    })
}
function getEngineer() {
    inquirer
        .prompt([{
            name:'engineername',
            type:'input',
            message:'enter name'
        },
        {
            name:'engineeremail',
            type:'input',
            message:'enter email'
        },
        {
            name:'engineerid',
            type:'input',
            message:'enter id'
        },
        {
            name:'github',
            type:'input',
            message:'enter github'
        }
    ]).then(ans => {
        const newEngineer = new Engineer(ans.engineername,ans.engineerid,ans.engineeremail,ans.github)
        teamArray.push(newEngineer)
        assembleTeam()
        runApp()
    })
}
function getManager() {
    inquirer
        .prompt([{
            name:'Managername',
            type:'input',
            message:'enter name'
        },
        {
            name:'Manageremail',
            type:'input',
            message:'enter email'
        },
        {
            name:'Managerid',
            type:'input',
            message:'enter id'
        },
        {
            name:'officenumber',
            type:'input',
            message:'enter office number'
        }
    ]).then(ans => {
        const newManager = new Manager(ans.Managername,ans.Managerid,ans.Manageremail,ans.officenumber)
        teamArray.push(newManager)
        assembleTeam()
        runApp()
    })
}
function getEmployee() {
    inquirer
        .prompt([{
            name:'name',
            type:'input',
            message:'enter name'
        },
        {
            name:'email',
            type:'input',
            message:'enter email'
        },
        {
            name:'id',
            type:'input',
            message:'enter id'
        }
    ]).then(ans => {
        const newEmployee = new Employee(ans.name,ans.id,ans.email)
        teamArray.push(newEmployee)
        assembleTeam()
        runApp()
    })
}
function assembleTeam() {
    fs.writeFileSync(outputPath, render(teamArray), "utf-8");
}

function runApp() {
    inquirer
        .prompt({
            name:'type',
            type:'list',
            message:'what type of employee are you adding?',
            choices:["Employee","Intern","Engineer","Manager"]
        }).then(ans => {
            if(ans.type === "Employee"){
                getEmployee();
            }
            if(ans.type === "Intern"){
                getIntern()
            }
            if(ans.type === "Engineer"){
                getEngineer()
            }
            if(ans.type === "Manager"){
                getManager()
            }
        })
}
runApp();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
