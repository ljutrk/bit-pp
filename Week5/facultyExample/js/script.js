function Person(name, surname, ID) {
    this.name = name;
    this.surname = surname;
    this.ID = ID;
}

Person.prototype.getData = function () {
    return this.name + " " + this.surname + ", " + this.ID;
}

Employee.prototype = Object.create(Person.prototype);

function Employee(name, surname, ID, employeeID, salary) {
    Person.call(this, name, surname, ID);
    this.employeeID = employeeID;
    this.salary = salary;
}

Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
    return preson.getData() + ", " + this.employeeID + ", " + this.salary;
}

Professor.prototype = Object.create(Employee.prototype);

function Professor(name, surname, ID, employeeID, salary, officeNumber) {
    Employee.call(this, name, surname, ID, employeeID, salary)
    this.officeNumber = officeNumber;

}

Professor.prototype.constructor = Professor;

Professor.prototype.getData = function () {
    return this.name + ", " + this.surname + ", " + this.officeNumber;

}

function Exam(subject, professor, student, date, grade) {
    this.subject = subject;
    this.professor = professor;
    this.student = student;
    this.date = new Date(date);
    this.grade = grade;
}

Exam.prototype.getdata = function () {
    var date = this.date.getDate() + "." + this.date.getMonth() + "." + this.date.getFullYear();
    return this.subject + ", " + this.professor + ", " + date + ", " + this.grade;
}

Student.prototype = Object.create(Person.prototype);

function Student(name, surname, ID, indexNumber, status) {
    Person.call(this, name, surname, ID)
    this.indexNumber = indexNumber;
    this.listOfPassedExams = [];
    this.listOfFailedExams = [];
    this.status = status;
}

Student.prototype.constructor = Student;

Student.prototype.addPassedExam = function (exam) {
    this.listOfPassedExams.push(exam);
}

Student.prototype.addFailedExam = function (exam) {
    this.listOfFailedExams.push(exam);
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

Faculty.prototype.addProfessor = function (professor) {
    this.listOfProfessors.push(professor);
}

Faculty.prototype.addStudent = function (student) {
    this.studentList.push(student);
}

var studentStatus = Object.freeze({
    REGULAR: "regular",
    REMOTE: "remote",
    GRADUATED: "graduated"
})

var addFaculty = document.querySelector("#addFaculty");
var addProfessor = document.querySelector("#addProfessor");
var addStudent = document.querySelector("#addStudent");
var addExam = document.querySelector("#addExam");

var facultyDiv = document.querySelector(".faculty");
var professorDiv = document.querySelector(".professor");
var studentDiv = document.querySelector(".student");
var examDiv = document.querySelector(".exam");

addFaculty.addEventListener("click", createFaculty);
addProfessor.addEventListener("click", createProfessor);
addStudent.addEventListener("click", createStudent);
addExam.addEventListener("click", createExam);

var facultyList = [];



var studentList = [];
var professorToExamCounter = 0;
var studentToExamCounter = 0;
var examList = [];

function createFaculty() {

    var facultyNameElement = document.querySelector("#facultyName");
    var facultyName = facultyNameElement.value;
    var feedbackDiv = document.querySelector(".feedbackDiv");
    var faculty = new Faculty(facultyName);
    

    if (!faculty.name) {
        feedbackDiv.style = "color:red;";
        feedbackDiv.textContent = "Please enter faculty name!";
        return;
    }

    feedbackDiv.style = "color:green;";
    feedbackDiv.textContent = "Success!"
    facultyList.push(faculty);
    


    
    facultyNameElement.value = "";
}

function createProfessor() {
    var professorNameElement = document.querySelector("#professorName");
    var professorName = professorNameElement.value;
    var professorSurnameElement = document.querySelector("#professorSurname");
    var professorSurname = professorSurnameElement.value;
    var professorEmployeeIDElement = document.querySelector("#professorEmployeeID");
    var professorEmployeeID = professorEmployeeIDElement.value;
    var professorSalaryElement = document.querySelector("#professorSalary");
    var professorSalary = professorSalaryElement.value;
    var professorOfficeNumberElement = document.querySelector("#professorOfficeNumber");
    var professorOfficeNumber = professorOfficeNumberElement.value;

    var examProfessorDropdownElement = document.querySelector("#examProfessorDropdown");
    var examProfessorDropdown = examProfessorDropdownElement.value;

    var ID = Math.floor(Math.random() * (99999 - 10000) + 10000);
    var person = new Person(professorName, professorSurname, ID);
    var employee = new Employee(professorName, professorSurname, ID, professorEmployeeID, professorSalary);
    var professor = new Professor(professorName, professorSurname, ID, professorEmployeeID, professorSalary, professorOfficeNumber);

    addProfessorToExam(examProfessorDropdownElement, professor);
    professorToExamCounter++;
    facultyList[0].addProfessor(professor); //!!!!!!!!!
}

function addProfessorToExam(examProfessorDropdownElement, professor) {
    var newOption = document.createElement("option");
    newOption.value = professorToExamCounter;
    newOption.textContent = professor.getData();
    examProfessorDropdownElement.add(newOption);
}

function createStudent() {
    var studentNameElement = document.querySelector("#studentName");
    var studentName = studentNameElement.value;
    var studentSurnameElement = document.querySelector("#studentSurname");
    var studentSurname = studentSurnameElement.value;
    var studentIndexNumberElement = document.querySelector("#studentIndexNumber");
    var studentIndexNumber = studentIndexNumberElement.value;
    var studentStatusElement = document.querySelector("#studentStatus");
    var studentStatus = studentStatusElement.value;

    var examStudentDropdownElement = document.querySelector("#examStudentDropdown");
    var examStudentDropdown = examStudentDropdownElement.value;

    var ID = Math.floor(Math.random() * (99999 - 10000) + 10000);

    var person = new Person(studentName, studentSurname, ID);
    var student = new Student(studentName, studentSurname, ID, studentIndexNumber, studentStatus);
    addStudentToExam(examStudentDropdownElement, student)
    studentToExamCounter++;
    facultyList[0].addStudent(student);
}

function addStudentToExam(examStudentDropdownElement, student) {
    var newOption = document.createElement("option");
    newOption.value = studentToExamCounter;
    newOption.textContent = student.getData();
    examStudentDropdownElement.add(newOption);
}

function createExam() {
    var examSubjectElement = document.querySelector("#examSubject");
    var examSubject = examSubjectElement.value;
    var examProfessorDropdownElement = document.querySelector("#examProfessorDropdown");
    var examProfessorDropdown = examProfessorDropdownElement.value;
    var examStudentDropdownElement = document.querySelector("#examStudentDropdown");
    var examStudentDropdown = examStudentDropdownElement.value;
    var examDateElement = document.querySelector("#examDate");
    var examDate = examDateElement.value;
    var examGradeDropdownElement = document.querySelector("#examGradeDropdown");
    var examGradeDropdown = examGradeDropdownElement.value;

    var professor = facultyList[0].listOfProfessors[examProfessorDropdown];
    var student = facultyList[0].studentList[examStudentDropdown];

    var exam = new Exam(examSubject, professor, student, examDate, examGradeDropdown);
    if (examGradeDropdown === "5") {
        student.addFailedExam(exam);
    } else {
        student.addPassedExam(exam);
    }
}
