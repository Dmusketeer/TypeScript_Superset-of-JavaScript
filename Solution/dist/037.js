// 37. Create a TypeScript program to generate a random string of a given length.
var randomString = function (length) {
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var newStr = "";
    for (var i = 0; i < length; i++) {
        var randomindex = Math.floor(Math.random() * charset.length);
        newStr += charset[randomindex];
    }
    return newStr;
};
console.log(randomString(7));
