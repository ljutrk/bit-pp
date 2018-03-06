function Person(name, surname, ID) {
    this.name = name;
    this.surname = surname;
    this.ID = Math.floor(Math.random() * (99999 - 10000) + 10000);
}

Person.prototype.getData = function () {
    return this.name + " " + this.surname + ", " + this.ID;
}


function Employee(name, surname, employeeID, salary) {
    Person.call(this, name, surname);
    this.employeeID = employeeID;
    this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getData = function () {
    return preson.getData() + ", " + this.employeeID + ", " + this.salary;
}


function Professor(name, surname, employeeID, salary, officeNumber) {
    Employee.call(this, name, surname, employeeID, salary)
    this.officeNumber = officeNumber;

}

Professor.prototype = Object.create(Employee.prototype);
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


function Student(name, surname, indexNumber, status) {
    Person.call(this, name, surname)
    this.indexNumber = indexNumber;
    this.listOfPassedExams = [];
    this.listOfFailedExams = [];
    this.status = status;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.addPassedExam = function (exam) {
    this.listOfPassedExams.push(exam);
}

Student.prototype.addFailedExam = function (exam) {
    this.listOfFailedExams.push(exam);
}

Student.prototype.getData = function () {
    var averageGrade = 0;
    var sumOfgrades = 0;
    this.listOfPassedExams.forEach(function (element) {
        sumOfgrades += parseInt(element.grade);
    })
    averageGrade = parseFloat((sumOfgrades / this.listOfPassedExams.length).toFixed(2));

    return this.indexNumber + ", " + this.name + " " + this.surname + ", " + averageGrade;
}

function Faculty(name) {
    this.name = name;
    this.number = [];
    this.studentList = [];
    this.listOfProfessors = [];
}

Faculty.prototype.addProfessor = function (professor) {
    var optionValue = this.listOfProfessors.push(professor) - 1;
    return optionValue;
}

Faculty.prototype.addStudent = function (student) {
    var optionValue = this.studentList.push(student) - 1;
    return optionValue;
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





var studentToExamCounter = 0;
var examList = [];

function createFaculty() {

    var facultyNameElement = document.querySelector("#facultyName");
    var facultyName = facultyNameElement.value;
    var feedbackDivFaculty = document.querySelector(".feedbackDivFaculty");
    var faculty = new Faculty(facultyName);


    if (!facultyName) {
        feedbackDivFaculty.style = "color:red;";
        feedbackDivFaculty.textContent = "Please enter faculty name!";
        return;
    }

    feedbackDivFaculty.style = "color:green;";
    feedbackDivFaculty.textContent = "Success!"
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

    var feedbackDivProfessor = document.querySelector(".feedbackDivProfessor");

    // var ID = 
    // var person = new Person(professorName, professorSurname, ID);
    // var employee = new Employee(professorName, professorSurname, ID, professorEmployeeID, professorSalary);
    var professor = new Professor(professorName, professorSurname, professorEmployeeID, professorSalary, professorOfficeNumber);





    if (!professorName) {
        feedbackDivProfessor.style = "color:red;";
        feedbackDivProfessor.textContent = "Please enter professor name!";
        return;
    } else if (!professorSurname) {
        feedbackDivProfessor.style = "color:red;";
        feedbackDivProfessor.textContent = "Please enter professor surname!";
        return;
    } else if (!professorEmployeeID) {
        feedbackDivProfessor.style = "color:red;";
        feedbackDivProfessor.textContent = "Please enter professor employee ID!";
        return;
    } else if (!professorSalary) {
        feedbackDivProfessor.style = "color:red;";
        feedbackDivProfessor.textContent = "Please enter professor salary!";
        return;
    } else if (!professorOfficeNumber) {
        feedbackDivProfessor.style = "color:red;";
        feedbackDivProfessor.textContent = "Please enter professor office number!";
        return;
    }

    feedbackDivProfessor.style = "color:green;";
    feedbackDivProfessor.textContent = "Success!"

    var optionValue = facultyList[0].addProfessor(professor); //!!!!!!!!!
    addProfessorToExam(examProfessorDropdownElement, professor, optionValue);
    //professorToExamCounter++;

}

function addProfessorToExam(examProfessorDropdownElement, professor, optionValue) {
    var newOption = document.createElement("option");
    newOption.value = optionValue;
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

    var professorFormElement = document.querySelector(".professorForm");

    var examStudentDropdownElement = document.querySelector("#examStudentDropdown");
    var examStudentDropdown = examStudentDropdownElement.value;

    var feedbackDivStudent = document.querySelector(".feedbackDivStudent");

    var student = new Student(studentName, studentSurname, studentIndexNumber, studentStatus);

    if (!studentName) {
        feedbackDivStudent.style = "color:red;";
        feedbackDivStudent.textContent = "Please enter student name!";
        return;
    } else if (!studentSurname) {
        feedbackDivStudent.style = "color:red;";
        feedbackDivStudent.textContent = "Please enter student surname!";
        return;
    } else if (!studentIndexNumber) {
        feedbackDivStudent.style = "color:red;";
        feedbackDivStudent.textContent = "Please enter student index number!";
        return;
    } else if (studentStatus === "none") {
        feedbackDivStudent.style = "color:red;";
        feedbackDivStudent.textContent = "Please enter student status!";
        return;
    }
    feedbackDivStudent.style = "color:green;";
    feedbackDivStudent.textContent = "Success!"


    var optionValue = facultyList[0].addStudent(student);
    addStudentToExam(examStudentDropdownElement, student, optionValue)
}

function addStudentToExam(examStudentDropdownElement, student, optionValue) {
    var newOption = document.createElement("option");
    newOption.value = optionValue;
    newOption.textContent = student.indexNumber + "," + student.name + " " + student.surname;
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

    var feedbackDivExam = document.querySelector(".feedbackDivExam");

    var exam = new Exam(examSubject, professor, student, examDate, examGradeDropdown);

    if()
    if (!examSubject) {
        feedbackDivExam.style = "color:red;";
        feedbackDivExam.textContent = "Please enter subject!";
        return;
    } else if (examProfessorDropdown === "none") {
        feedbackDivExam.style = "color:red;";
        feedbackDivExam.textContent = "Please choose professor!";
        return;
    } else if (examStudentDropdown === "none") {
        feedbackDivExam.style = "color:red;";
        feedbackDivExam.textContent = "Please choose student!";
        return;
    } else if (!examDate) {
        feedbackDivExam.style = "color:red;";
        feedbackDivExam.textContent = "Please enter exam date!";
        return;
    } else if (examGradeDropdown === "none") {
        feedbackDivExam.style = "color:red;";
        feedbackDivExam.textContent = "Please enter exam grade!";
        return;
    }
    feedbackDivExam.style = "color:green;";
    feedbackDivExam.textContent = "Success!"

    if (examGradeDropdown === "5") {
        student.addFailedExam(exam);
    } else {
        student.addPassedExam(exam);
    }
}