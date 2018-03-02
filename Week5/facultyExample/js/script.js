function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.ID = Math.floor(Math.random() * (99999 - 10000) + 10000);
}

Person.prototype.getData = function () {
    return this.name + " " + this.surname + ", " + this.ID;
}

function Employee(employeeID, salary) {
    Person.call(this, name, surname, ID);
    this.employeeID = employeeID;
    this.salary = salary;
}

Employee.prototype.getData = function () {
    return preson.getData() + ", " + this.employeeID + ", " + this.salary;
}

function Professor(officeNumber) {
    Employee.call(this, name, surname, ID, employeeID, salary)
    officeNumber = officeNumber;

}

Professor.prototype.getData = function () {
    return employee.getdata() + ", " + this.officeNumber;

}

function Exam(subject, professor, date, grade) {
    this.subject = subject;
    this.professor = professor;
    this.date = new Date(date);
    this.grade = grade;
}

Exam.prototype.getdata = function () {
    var date = this.date.getDate() + "." + this.date.getMonth() + "." + this.date.getFullYear();
    return this.subject + ", " + this.professor + ", " + date + ", " + this.grade;
}

function Student(indexNumber, status) {
    this.indexNumber = indexNumber;
    this.listOfPassedExams = [];
    this.status = status;
}

Student.prototype.addExam = function (exam) {
    this.listOfPassedExams.push(exam);
}

Student.prototype.getData = function () {
    return this.indexNumber + ", " + this.status;
}

function Faculty(name) {
    this.name = name;
    this.number = [];
    this.studentList = [];
    this.listOfProfessors = [];
}

var studentStatus = Object.freeze({
    REGULAR: "regular",
    REMOTE: "remote",
    GRADUATED: "graduated"
})

