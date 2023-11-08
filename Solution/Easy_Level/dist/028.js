// 28. Create a TypeScript program to generate a random array of numbers.
var randomArray = function (len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
        arr.push(Math.floor(Math.random() * 11));
    }
    return arr;
};
console.log(randomArray(8));
