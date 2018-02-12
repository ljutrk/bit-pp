function vowelCount(str) {
    var counter=0;
    for( var i = 0; i < str.length; i++){
        switch (str[i]){
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
            case "A":
            case "E":
            case "I":
            case "O":
            case "U":
            counter ++;
            break;
            

        }
        
    }
    
    return counter;
    
}

console.log(vowelCount("laborAtory"));
