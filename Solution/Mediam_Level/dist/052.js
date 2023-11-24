// 52. Create a TypeScript program to calculate the standard deviation of a set of numbers.
var calculateMean = function (numbers) {
    var sum = numbers.reduce(function (sum, acc) { return sum + acc; }, 0);
    return sum / numbers.length;
};
var calculateStandardDeviation = function (numbers) {
    if (numbers.length < 2) {
        throw new Error("At least two numbers are required to calculate the standard deviation");
    }
    var mean = calculateMean(numbers);
    var squaredDifferences = numbers.map(function (num) { return Math.pow(num - mean, 2); });
    var sumSquaredDifferences = squaredDifferences.reduce(function (acc, squaredDiff) { return acc + squaredDiff; }, 0);
    var variance = sumSquaredDifferences / (numbers.length - 1);
    return Math.sqrt(variance);
};
// Example usage:
var numberSet = [2, 4, 4, 4, 5, 5, 7, 9];
try {
    var standardDeviation = calculateStandardDeviation(numberSet);
    console.log("Standard Deviation: " + standardDeviation.toFixed(2));
}
catch (error) {
    console.error(error.message);
}
