// 42. Implement a TypeScript program to find the unique elements in an array.
var uniqueElement = function (arr) {
    var uniqueElements = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        if (!uniqueElements.includes(element)) {
            uniqueElements.push(element);
        }
    }
    return uniqueElements;
};
var inputArray = [4, 2, 8, 2, 4, 9, 8, 7];
var uniqueElements = uniqueElement(inputArray);
console.log("Original Array:", inputArray);
console.log("Unique Elements:", uniqueElements);
