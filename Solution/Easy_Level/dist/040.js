//40. Create a TypeScript program to find the product of all numbers in an array.
var productOfNumbers = function (arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
};
var arr = [2, 3, 4, 5];
console.log(productOfNumbers(arr));
