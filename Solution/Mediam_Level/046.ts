// 46. Create a TypeScript program to implement a basic calculator(addition, subtraction, multiplication, and division).
class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }

    multiply(a: number, b: number): number {
        return a * b;
    }

    divide(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

// Example usage
const calculator = new Calculator();

const additionResult = calculator.add(5, 3);
console.log(`Addition: ${additionResult}`);

const subtractionResult = calculator.subtract(8, 3);
console.log(`Subtraction: ${subtractionResult}`);

const multiplicationResult = calculator.multiply(4, 6);
console.log(`Multiplication: ${multiplicationResult}`);

const divisionResult = calculator.divide(9, 3);
console.log(`Division: ${divisionResult}`);
