// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Intern extends Employee {
    constuctor(school){
        this.school = school,

        getSchool();

        getRole();
    }
}

module.exports = Intern;