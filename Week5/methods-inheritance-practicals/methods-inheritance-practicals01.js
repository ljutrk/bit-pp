// Employees and Managers

// Create constructor functions with properties representing the following:
// Employee: name, surname, specialization, salary
// Manager: name, surname, department, salary

// All employees should inherit method:
// getSpecialization which prints out the name of the specialization

// All managers should inherit methods:
// getDepartment which prints out the name of the department
// changeDepartment which sets the department value on the given value

// All employees and managers should inherit methods:
// getData which prints out the name and surname 
// getSalary which prints out the salary
// increaseSalary which increases the salary by 10% 

function Worker(name, surname, salary) {
    this.name = name;
    this.surname = surname;
    this.salary = salary;
}

Worker.prototype.getData = function () {
    return this.name + "" + this.surname;
}

Worker.prototype.getSalary = function () {
    return this.salary;
}

Worker.prototype.increaseSalary = function () {
    this.salary = this.salary * 1.1;
}

Employee.prototype = Object.create(Worker.prototype);

function Employee(name, surname, specialization, salary) {
    Worker.call(this, name, surname, salary);
    this.specialization = specialization;
}

Employee.prototype.constructor = Employee;

Employee.prototype.getSpecialization = function () {
    return this.specialization;
}

Manager.prototype = Object.create(Worker.prototype);

function Manager(name, surname, department, salary) {
    Worker.call(this, name, surname, salary);
    this.department = department;
}
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
    return this.department;
}
Manager.prototype.changeDepartment = function (newDepartment) {
    this.department = newDepartment;
}


var ljuba = new Manager ("ljubomir", "trkulja", "bit", 50000);
var ljuba2 = new Employee ("ljubomir2", "trkulja2", "bit2", 25000);

// console.log(ljuba);

// ljuba.increaseSalary();

// console.log(ljuba.salary);

// ljuba.changeDepartment("adasd");

// console.log(ljuba.department);

// console.log(ljuba2);

 
console.log(ljuba2.getSpecialization());


