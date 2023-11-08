// 16. Create a TypeScript function to remove duplicates from an array.
var removeDuplicates = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1); // 1=deleteCount, j=deleteindex
                j--;
            }
        }
    }
    return arr;
};
var arr = [2, 12, 4, 6, 2, 4, 7, 2, 0, 9, 7, 0];
var arr1 = [2, 1, 1, 1, 1];
var arr2 = [1, 1, 1, 1];
console.log(removeDuplicates(arr));
console.log(removeDuplicates(arr1));
console.log(removeDuplicates(arr2));
