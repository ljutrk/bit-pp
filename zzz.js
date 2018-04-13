//FILTER function

// BUILT-IN
// var arr = [1, 2, 3, 4, 5];
// var z = arr.filter(function (element) {
//     return element > 2;
// })
// console.log(z);

// MY-FILTER
// Array.prototype.myFilter = function(f){
//     var newArr = [];
//     for (var i = 0; i < this.length; i++) {
//         if(f(this[i])){
//             newArr[newArr.length] = this[i];
//         }        
//     }
//     return newArr;
// }
// var z = arr.myFilter(function (element) {
//     return element > 3;
// })
// console.log(z);



//MAP FUNCTION

//BUILT-IN
// var arr = [1, 2, 3, 4, 5];
// var z = arr.map(function (element) {
//     return element + 10;
// })
// console.log(z);

//MY-MAP
// Array.prototype.myMap = function (f) {
//     var newArr = [];
//     for (var i = 0; i < this.length; i++) {
//         newArr[i] = f(this[i]);
//     }
//     return newArr;
// }
// var z = arr.myMap(function (element) {
//     return element + 5
// })
// console.log(z);



// PUSH FUNCTION

// BUILT-IN
// var arr = [1, 2, 3, 4, 5];
// var z = arr.push(10);
// console.log(arr);
// console.log(z);

// MY-PUSH
// var arr = [1, 2, 3];
// Array.prototype.myPush = function (element) {
//     this[this.length] = element;
//     return this.length;
// }
// var z = arr.myPush(20);
// console.log(arr);
// console.log(z);



// INCLUDES FUNCTION

//BUILT-IN
// var string = "marathon"
// console.log(string.includes("tho"));
// console.log(string.includes("thor"));

//MY-INCLUDES
// var string = "marathon"
// String.prototype.myIncludes = function (str) {
//     var strCheck;
//     var counter = 0;
//     for (var i = 0; i < this.length; i++) {
//         if (this[i] === str[0]) {
//             for (var j = 0; j < str.length; j++) {
//                 if (this[i + j] === str[j]) {                    
//                     counter++
//                 }
//             }
//             if (counter === str.length) {
//                 return true
//             } else {
//                 counter = 0
//             }
//         }
//     }
//     return false
// }
// console.log(string.myIncludes("tho"));



// INDEXOF FUNCTION

// BUILT-IN
// var string = "marathon";
// console.log(string.indexOf("t"));
// console.log(string.indexOf("z"));

// MY-INDEXOF
// var string = "marathon";
// String.prototype.myIndexOf = function (element) {  
//     for (let i = 0; i < this.length; i++) {
//         if(this[i] === element) {
//             return i;
//         }
//     }
//     return -1
// }
// console.log(string.myIndexOf("r"));
// console.log(string.myIndexOf("z"));



// LASTINDEXOF FUNCTION

// BUILT-IN
// var string = "marathon";
// console.log(string.lastIndexOf("a"));
// console.log(string.lastIndexOf("1"));

// MY-LASTINDEXOF
// var string = "laboratory";
// String.prototype.myIndexOf = function (element) {  
//     for (let i = this.length; i >= 0; i--) {
//         if(this[i] === element) {
//             return i;
//         }
//     }
//     return -1
// }
// console.log(string.myIndexOf("a"));
// console.log(string.myIndexOf("1"));



//POP FUNCTION

//BUILT-IN
// var arr = [0, 1, 2, 3, 4, 5, 10];
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);

// MY-POP
// var arr = [0, 1, 2, 3, 4, 5, 10];
// Array.prototype.myPop = function(){
//     var poppedElement = this[this.length-1]
//     this.length = this.length-1
//     return poppedElement;
// }
// console.log(arr.myPop());
// console.log(arr);



//REVERSE FUNCTION

//BUILT-IN
// var arr = [0, 1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.reverse());
// console.log(arr);

// MY-REVERSE
// var arr = [0, 1, 2, 3, 4, 5];
// Array.prototype.myReverse = function () {
//     var newArr = []
//     for (var i = 0; i < this.length; i++) {
//         newArr[i] = this[(this.length - 1) - i];
//     }
//     for (var i = 0; i < newArr.length; i++) {
//         this[i] = newArr[i];
//     }
//     return this
// }
// console.log(arr);
// console.log(arr.myReverse());
// console.log(arr);



// SLICE FUNCTION

// BUILT-IN
// var arr = [0, 1, 2, 3, 4, 5];
// console.log(arr.slice(2, 5));
// console.log(arr.slice(3, 10));
// console.log(arr);

// MY-SLICE
// var arr = [0, 1, 2, 3, 4, 5];
// Array.prototype.mySlice = function (start, end) {
//     var slicedPart = []
//     if (end > this.length) {
//         end = this.length
//     }
//     for (let i = start; i < end; i++) {
//         slicedPart[slicedPart.length] = this[i];
//     }
//     return slicedPart
// }
// console.log(arr.mySlice(2, 10));
// console.log(arr.mySlice(1, 4));
// console.log(arr);



//SPLICE FUNCTION

// BUILT-IN
// var arr = [0, 1, 2, 3];
// console.log(arr);
// console.log(arr.splice(-2,10, "cat"));
// console.log(arr);

// MY-SPLICE
var arr = [0, 1, 2, 3]
Array.prototype.mySplice = function (startIndex, numberOfDeletedElements, AddedInsteadOfDeletedElements) {
    var newArr = []
    var removedElements = [];
    for (var k = 0; k < this.length; k++) {
        newArr[k] = this[k]
    }
    for (let i = 0; i < newArr.length; i++) {
        if (i === startIndex) {
            for (let j = 0; j <= numberOfDeletedElements; j++) {
                removedElements[removedElements.length] = this[i+j];
            }
        }

    }



    return removedElements
}
// arr.splice()

console.log(arr);
console.log(arr.mySplice(0, 2));
console.log(arr);
