var exam = (function () {

    class Exam {
        constructor(subjectObj, studentObj, grade) {
            this.subjectObj = subjectObj;
            this.studentObj = studentObj;
            this.grade = grade;
        }
        getExamInfo() {
            return `${this.subjectObj.name} ${this.studentObj.getStudentData()}`
        }
        hasPassed() {
            return this.grade > 5;
        }
    }

    return {
        getExamInfo: getExamInfo,
        hasPassed: hasPassed
    }

})();