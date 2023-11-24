// 52. Create a TypeScript program to calculate the standard deviation of a set of numbers.

const calculateMean = (numbers: number[]): number => {
    const sum = numbers.reduce((sum, acc) => sum + acc, 0)
    return sum / numbers.length
}

const calculateStandardDeviation = (numbers: number[]): number => {
    if (numbers.length < 2) {
        throw new Error("At least two numbers are required to calculate the standard deviation")
    }
    const mean = calculateMean(numbers)
    const squaredDifferences = numbers.map((num) => Math.pow(num - mean, 2))
    const sumSquaredDifferences = squaredDifferences.reduce((acc, squaredDiff) => acc + squaredDiff, 0)
    const variance = sumSquaredDifferences / (numbers.length - 1)
    return Math.sqrt(variance)
}

// Example usage:
const numberSet = [2, 4, 4, 4, 5, 5, 7, 9];
try {
    const standardDeviation = calculateStandardDeviation(numberSet);
    console.log(`Standard Deviation: ${standardDeviation.toFixed(2)}`);
} catch (error) {
    console.error(error.message);
}