"use strict";
// 6. Write a TypeScript function to count the number of words in a string.
// str="Dheeraj" //output: 7
exports.__esModule = true;
var numberOfWords = function (str) {
    var cleanedStr = str.replace(/\s+/g, ""); //
    console.log(cleanedStr);
    var count = 0;
    for (var i = 0; i < cleanedStr.length; i++) {
        count += 1;
    }
    return count;
};
var str = "Dheeraj Tiwari";
console.log(numberOfWords(str));
