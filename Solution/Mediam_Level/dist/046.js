// 46. Create a TypeScript program to implement a basic calculator(addition, subtraction, multiplication, and division).
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.subtract = function (a, b) {
        return a - b;
    };
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    Calculator.prototype.divide = function (a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    };
    return Calculator;
}());
// Example usage
var calculator = new Calculator();
var additionResult = calculator.add(5, 3);
console.log("Addition: " + additionResult);
var subtractionResult = calculator.subtract(8, 3);
console.log("Subtraction: " + subtractionResult);
var multiplicationResult = calculator.multiply(4, 6);
console.log("Multiplication: " + multiplicationResult);
var divisionResult = calculator.divide(9, 3);
console.log("Division: " + divisionResult);
