// 4. Implement a TypeScript function to reverse a string.
var reverseString = function (str) {
    var revStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    return revStr;
};
var str = "Dheeraj";
console.log(reverseString(str));
