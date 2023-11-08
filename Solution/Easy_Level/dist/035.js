// 35. Write a TypeScript function to check if a string is a pangram(contains all letters of the alphabet).
var isPangram = function (str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (var _i = 0, alphabet_1 = alphabet; _i < alphabet_1.length; _i++) {
        var char = alphabet_1[_i];
        if (!str.toLowerCase().includes(char)) {
            return false;
        }
    }
    return true;
};
var inputString = "The quick brown fox jumps over the lazy dog";
var isPangramString = isPangram(inputString);
console.log("Is it a pangram? " + isPangramString);
