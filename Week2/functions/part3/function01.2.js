// 1. Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function stringInsertion(startingString, stringToInsert, position) {
    finalString = "";
    position = position || 0;
        for (var i = 0; i < startingString.length; i++) {
            if (i === position) {
                finalString += stringToInsert;
            }
            finalString += startingString[i];
        }
        
        return finalString;
    }

console.log(stringInsertion("My random string", "JS "));
console.log(stringInsertion("My random string", "JS ", 10));
