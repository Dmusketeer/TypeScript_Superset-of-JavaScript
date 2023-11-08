// 38. Write a TypeScript function to remove a specific element from an array.
var removeSpecificElement = function (arr, number) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        if (!arr.includes(number)) {
            return number + " is not present in the array";
        }
        if (element == number) {
            arr.splice(arr.indexOf(element), 1);
        }
    }
    return arr;
};
var arr1 = [2, 4, 10, 3, 24];
console.log(removeSpecificElement(arr1, 3));
console.log(removeSpecificElement(arr1, 10));
console.log(removeSpecificElement(arr1, 23));
