// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){

        // this.name = name

        // this.id = id

        // this.email = email
        super(name, id, email);
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return 'Manager'
    }
}


module.exports = Manager;