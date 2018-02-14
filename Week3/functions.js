// (
//     function(mood) {
//         console.log("Go Home, you are " + mood);

//     }
// )("stressed")

// (
//     function (victim) {
//         console.log("I'm gonna kill " + victim);

//     }
// )("Marka")

// var res = function addone(mood) {
//     return function (mood) {
//         console.log("Go Home, you are " + mood);
//         return true;
//     }
// }

// console.log(typeof res);
// console.log(typeof res()());

var test = (
    function (outerParam) {
        // function inner(innerParam) {
        //     return innerParam + "!!!!!";
        // }

        var spaces = "     ";
        return inner(outerParam + spaces);
    }
)("Ljuba");

var innerF = inner("Ljuba     ");

function inner(innerParam) {
    return innerParam + "???????????????";
}

console.log(innerF);


// console.log(test);
