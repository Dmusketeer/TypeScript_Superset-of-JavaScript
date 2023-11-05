// 33. Implement a TypeScript function to count the occurrences of a character in a string.
var countCharacterOccurrences = function (inputStr, charToCount) {
    var count = 0;
    var inputString = inputStr.toLocaleLowerCase();
    var inputChar = charToCount.toLocaleLowerCase();
    for (var _i = 0, inputString_1 = inputString; _i < inputString_1.length; _i++) {
        var char = inputString_1[_i];
        if (char == inputChar) {
            count++;
        }
    }
    return count;
};
console.log(countCharacterOccurrences("Dheeraj Tiwart", "T"));
console.log(countCharacterOccurrences("Dheeraj Tiwari", "e"));
