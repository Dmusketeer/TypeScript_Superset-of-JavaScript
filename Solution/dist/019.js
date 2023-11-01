// 19. Create a TypeScript function to check if a string contains only digits.
var containOnlyDigits = function (str) {
    var regex = /^\d+$/;
    return regex.test(str);
};
var str1 = "1234353423";
var str2 = "Dheera123";
console.log(containOnlyDigits(str1));
console.log(containOnlyDigits(str2));
