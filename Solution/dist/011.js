// 11. Implement a TypeScript function to check if a given year is a leap year.
var isLeapYear = function (year) {
    // Leap years are divisible by 4
    // But years divisible by 100 are not leap years unless they are divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};
// Example usage:
var yearToCheck = 2024; // Change to the year you want to check
if (isLeapYear(yearToCheck)) {
    console.log(yearToCheck + " is a leap year.");
}
else {
    console.log(yearToCheck + " is not a leap year.");
}
