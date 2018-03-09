var student = (function () {

    class Student {
        constructor(name, surname) {
            this.name = name;
            this.surname = surname;
        }

        getStudentData() {
            return `${this.name} ${this.surname}`
        }

    }

    return {
        getStudentData: getStudentData
    }

})();