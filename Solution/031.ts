// 31. Create a TypeScript program to find the sum of all prime numbers in an array.
function isPrime(num: number): boolean {
    if (num <= 1) {
        return false; // 0 and 1 are not prime
    }
    if (num <= 3) {
        return true; // 2 and 3 are prime
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }

    // Check for primality using a loop starting from 5 and incrementing by 6
    for (let i = 5; i <= Math.sqrt(num); i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

const sumOfAllPrimes = (arr: number[]): number => {
    let sum = 0
    for (const num of arr) {
        if (isPrime(num)) {
            sum += num
        }
    }
    return sum
}

const arr: number[] = [4, 3, 6, 9, 13]
console.log(sumOfAllPrimes(arr))

export { }