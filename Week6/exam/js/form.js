var form = (function () {

    function getFormData() {
        var subjectElement = document.querySelector();
        var subject = subjectElement.value;
        var studentElement = document.querySelector();
        var student = studentElement.value;
        var gradeElement = document.querySelector();
        var grade = gradeElement.value;

        return {
            subject,
            student,
            grade
        }
    }

    function showError(input) {
        if (!input.subject) {

        }
        if (!input.student) {

        }
        if (!input.grade) {

        }

        document.querySelector().textContent = errorMessage;

    }

    function addExamToList(input) {
        var examDiv = document.querySelector();
        var p = document.createElement("p");
        p.textContent = input;
        examDiv.appendChild(p);
    }

    function showStatistics(input) {
        var examDiv = document.querySelector();
        var p = document.createElement("p");
        var p2 = document.createElement("p");
        p.textContent = input;
        p2.textContent = input;
        examDiv.appendChild(p);
    }

    return {
        getFormData: getFormData,
        showError: showError,
        addExamToList: addExamToList,
        showStatistics
    }
    
})();