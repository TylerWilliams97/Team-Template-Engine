// TODO: Write code to define and export the Employee class
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');




function getName() {
    inquirer
        .prompt({
            name:'name',
            type:'input',
           message:'Enter employee Name'
        }).then(ans => {
            return ans
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
            return ans
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
            return ans
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
class Employee{
    constructor(name, id, email, role){
        this.name = name,

        this.id = id,

        this.email = email

        this.role = role
    };
};
new Employee(getName(), getId(), getEmail(), getRole())
module.exports = Employee;