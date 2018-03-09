var subject = (function () {

    class Subject {
        constructor(name) {
            this.name = name;
        }

        getSubjectName() {
            return this.name;
        }
    }

    return {
        getSubjectName: getSubjectName
    }

})();