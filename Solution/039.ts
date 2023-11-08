// 39. Implement a TypeScript function to find the largest prime number in an array.
const isPrime = (num: number): boolean => {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false
    }
    for (let i = 5; i <= Math.sqrt(num); i += 6) {
        if (num % i == 0 || num % (i + 2) == 0) {
            return false
        }
    }
    return true
}

const largestPrimeNumber = (arr: number[]): number => {
    let primeNums: number[] = []
    for (let j = 0; j < arr.length; j++) {
        if (isPrime(arr[j])) {
            primeNums.push(arr[j])
        }
    }
    let sortedPrimeNums: number[] = primeNums.sort((a, b) => a - b)
    return sortedPrimeNums[sortedPrimeNums.length - 1]
}

const arr: number[] = [12, 3, 1, 83, 2, 4, 6, 7, 8, 89]
console.log(largestPrimeNumber(arr))

export { }