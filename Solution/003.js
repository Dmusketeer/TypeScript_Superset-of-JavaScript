// 3. Write a TypeScript program to find the sum of all numbers in an array.
// const ArrEleSum=(arr:number[]):number=>{
//     let total=0
//     for (let i=0; i<arr.length; i++){
//         total=arr[i]+total
//     }
//      return total
// }
// using reduce method
var ArrEleSum = function (arr) {
    return arr.reduce(function (sum, num) { return sum + num; }, 0);
};
// Driver code
var arra = [1, 2, 3, 4, 5];
console.log(ArrEleSum(arra));
