# TypeScript (Superset of JavaScript)

## Terminology

### Strongly typed languages & Loosely typed languages
------------------------------------------------------
Strongly typed languages and loosely typed languages are two different approaches to type systems in programming languages.

A `strongly typed language` is a language that has a rigid type system, which means that the type of a variable is fixed at compile-time and cannot be changed at run-time. This means that once a variable is declared with a certain type, it can only hold values of that type and cannot be assigned values of a different type without explicit type conversion.

For example, in a `strongly typed language` like Typescript,C++, if you declare a variable as an integer, you cannot assign a string value to it without explicit type conversion.
```ts
let age:number = 6;
age="5"
console.log(age); //Type 'string' is not assignable to type 'number'.
```
Strongly typed languages are often used in applications where type safety is critical, such as in embedded systems, financial applications, and operating systems. They provide a high level of type safety, which can help prevent errors and make code easier to understand and maintain.

On the other hand, a `loosely typed language` is a language that has a flexible type system, which means that the type of a variable can be changed at run-time. This means that a variable can be assigned values of different types without explicit type conversion.

For example, in a loosely typed language like JavaScript, you can assign a string value to a variable that was previously declared as an integer.
```js
var x = 5;
x = "hello"; // no error, x is now a string
```
Loosely typed languages are often used in web development, scripting languages, and rapid prototyping. They provide a high level of flexibility and can be easier to learn and use, but they can also lead to type errors and make code harder to understand and maintain.

In summary, strongly typed languages are more type-safe and provide a higher level of type safety, while loosely typed languages are more flexible and provide a higher level of flexibility. The choice between the two depends on the specific requirements of the project and the preferences of the developer.

### Static type language & Dynamic type language
------------------------------------------------

- A static type language is a programming language that checks the types of variables at compile-time, before the code is executed. This means that the type of a variable is determined when the code is compiled, and it cannot be changed at runtime.

For example, in a static type language like TypeScript,C++, if you declare a variable as an integer, it can only hold integer values. If you try to assign a string value to that variable, the compiler will generate an error.

- A dynamic type language is a programming language that checks the types of variables at runtime, while the code is being executed. This means that the type of a variable can change during the execution of the program.

For example, in a dynamic type language like JavaScript,Python, you can assign a string value to a variable that was previously declared as an integer. The type of the variable will change to string, and the program will continue to execute without generating an error.

Here are some key differences between static and dynamic type languages:

* Static type languages are more type-safe, which means that they are better at preventing type errors and ensuring that the code is correct.
* Dynamic type languages are more flexible, which means that they can be easier to use and more forgiving of mistakes.
* Static type languages are typically faster, because the type checking is done at compile-time rather than at runtime.
* Dynamic type languages are typically more flexible, because the type of a variable can be changed during the execution of the program.

Overall, the choice between a static type language and a dynamic type language depends on the specific requirements of the project and the preferences of the developer.


## INTRODUCTION

TypeScript Vs JavaScript
------------------------

TypeScript is a superset of JavaScript that adds static typing and other features to the language. It is designed to help developers catch errors early and improve code maintainability, thus making it a popular choice for large and complex applications.

Here are some key features of TypeScript:

1. Static typing: TypeScript is a statically typed language, which means that it checks the types of variables at compile-time. This can help catch errors before the code is run and make the code easier to understand and maintain.
2. Interoperability with JavaScript: TypeScript is designed to be fully interoperable with JavaScript, which means that you can use it alongside JavaScript code and integrate it into existing JavaScript projects.
3. Object-oriented programming: TypeScript supports object-oriented programming (OOP) concepts such as classes, interfaces, and inheritance.
4. Type annotations and inference: TypeScript allows you to add type annotations to your code to specify the types of variables, function parameters, and return values. It also includes type inference, which means that it can automatically infer the types of variables based on their usage in the code.
5. Modules and dependencies: TypeScript supports the use of modules and dependencies, which makes it easy to organize and structure your code.
6. Compile-time checking: TypeScript includes a compile-time type checker that can catch errors and inconsistencies in the code before it is run.

Overall, TypeScript is a powerful and flexible language that can help you catch errors, improve code maintainability, and scale your JavaScript applications.


TS and JS Interoperability
--------------------------

TypeScript and JavaScript are designed to be interoperable, meaning that you can use them together in the same project. In fact, TypeScript is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code.

Here are some ways in which TypeScript and JavaScript can be used together:

1. TypeScript can be used to add type annotations to JavaScript code. This can help catch errors and improve code readability.
2. TypeScript can be used to add classes, interfaces, and other features to JavaScript code. This can help improve the organization and structure of the code.
3. TypeScript can be used to add type checking to JavaScript code. This can help catch type errors at compile-time, rather than at runtime.
4. TypeScript can be used to generate JavaScript code. This can be useful for creating JavaScript libraries or frameworks that can be used in other projects.
5. TypeScript can be used to create a type-safe API for a JavaScript library. This can help ensure that the library is used correctly and prevent type errors.
6. TypeScript can be used to create a type-safe interface for a JavaScript library. This can help ensure that the library is used correctly and prevent type errors.
7. TypeScript can be used to create a type-safe implementation for a JavaScript library. This can help ensure that the library is used correctly and prevent type errors.
8. TypeScript can be used to create a type-safe wrapper for a JavaScript library. This can help ensure that the library is used correctly and prevent type errors.

Overall, TypeScript and JavaScript are designed to be interoperable, and you can use them together in a variety of ways to improve the development process and catch errors earlier.



Installation and Configuration
-------------------------------

Here's a step-by-step guide to installing and configuring TypeScript:

1. Install Node.js: TypeScript is built on top of Node.js, so you'll need to have it installed on your system. You can download the latest version of Node.js from the official website.
2. Install TypeScript: Once you have Node.js installed, you can use npm (the Node Package Manager) to install TypeScript. Open your terminal or command prompt and run the following command:

```bash
npm install -g typescript
```
This will install TypeScript globally on your system.
3. Create a new TypeScript project: To create a new TypeScript project, open your terminal or command prompt and run the following command:

```bash
tsc --init
```
This will create a new TypeScript project with a default configuration.

4. Configure TypeScript: Once you have created a new TypeScript project, you can configure it by editing the `tsconfig.json` file. This file contains the configuration options for your TypeScript project.

Here are some common configuration options you might want to set:

* `compilerOptions`: This option allows you to specify the compiler options for your TypeScript project. For example, you can set the `target` option to specify the ECMAScript version you want to use, or the `module` option to specify the module format you want to use.
* `include`: This option allows you to specify the files and directories that should be included in your TypeScript project. For example, you can set the `include` option to include all files in a specific directory.
* `exclude`: This option allows you to specify the files and directories that should be excluded from your TypeScript project. For example, you can set the `exclude` option to exclude all files in a specific directory.

Here's an example `tsconfig.json` file that includes the `compilerOptions`, `include`, and `exclude` options:
```ts
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "sourceMap": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules/**/*"]
}
```
5. Compile your TypeScript code: Once you have configured your TypeScript project, you can compile your TypeScript code using the `tsc` command. For example, to compile all TypeScript files in the `src` directory, you can run the following command:
```ts
tsc src/**/*.ts
```
This will compile all TypeScript files in the `src` directory and output the compiled JavaScript code to the `dist` directory.

That's it! With these steps, you should now have a basic understanding of how to install and configure TypeScript. Of course, there are many more configuration options and features available in TypeScript, but this should give you a good starting point.


Running TypeScript
------------------
Running TypeScript involves several steps, depending on the environment and tools you are using. Here are some general steps for running TypeScript:

1. Install TypeScript: You can install TypeScript using npm by running the following command:
```bash
npm install -g typescript
```
2. Create a TypeScript file: Create a new file with a `.ts` extension and write your TypeScript code in it.
3. Compile the TypeScript file: Use the `tsc` command to compile your TypeScript file to JavaScript. For example:
```bash
tsc myfile.ts
```
This will create a new file called `myfile.js` that contains the compiled JavaScript code.
4. Run the JavaScript file: You can run the compiled JavaScript file using Node.js or a web browser.

If you are using a development environment such as Visual Studio Code, you can also use the built-in TypeScript support to compile and run your TypeScript code.

Here are some additional steps for running TypeScript in different environments:

Here's a brief overview of each:

1. `tsc`: `tsc` is the TypeScript compiler. It takes TypeScript code as input and generates JavaScript code as output. You can use `tsc` to compile your TypeScript code and create a JavaScript bundle that can be run in the browser or with Node.js.

2. `ts-node`: `ts-node` is a package that allows you to run TypeScript code directly in Node.js without the need for a separate compilation step. It uses the TypeScript compiler to transpile your TypeScript code to JavaScript on the fly, and then runs the resulting JavaScript code in Node.js. This can be useful for rapid prototyping and development, as it allows you to write and test your code in TypeScript without the need to manually compile it to JavaScript each time.

3. `TS Playground`: TS Playground is an online environment for running TypeScript code. It allows you to write and run TypeScript code in your browser, without the need to install any software or set up a development environment. TS Playground provides a simple and easy-to-use interface for writing and running TypeScript code, and it also includes a number of features such as syntax highlighting, code completion, and error reporting.

Overall, `tsc` is a command-line tool for compiling TypeScript code to JavaScript, while `ts-node` is a package for running TypeScript code directly in Node.js. TS Playground is an online environment for running TypeScript code in your browser.



## TypeScript Types
-----------------

TypeScript is a superset of JavaScript that adds static typing and other features to the language. It is designed to help developers catch errors early and improve code maintainability, thus making it a popular choice for large and complex applications.

Here are some of the key types in TypeScript:

1. Boolean: A boolean type represents a value that can be either true or false.
2. Number: A number type represents a numerical value.
3. String: A string type represents a sequence of characters.
4. Array: An array type represents a collection of values of the same type.
5. Object: An object type represents a collection of key-value pairs.
6. Function: A function type represents a block of code that can be called multiple times.
7. Class: A class type represents a blueprint for creating objects.
8. Interface: An interface type represents a contract that defines a set of methods that must be implemented by any class that implements it.
9. Enum: An enum type represents a set of named values that can be used to represent a set of possible values.
10. Tuple: A tuple type represents a fixed-size array of values of different types.
11. Union: A union type represents a value that can be one of several types.
12. Intersection: An intersection type represents a value that is a combination of several types.
13. Type alias: A type alias is a way to give a type a new name.
14. Type parameter: A type parameter is a placeholder for a type that is not known until runtime.
15. Generic: A generic type is a type that can be instantiated with different types.

These are just a few of the types that are available in TypeScript. There are many more, and you can also create your own custom types.

Let's deeper dive into TypeScript Each Types One by one


# Primitive Types :

### 1.Boolean Type
------------------

In TypeScript, a boolean is a primitive data type that can have one of two values: `true` or `false`. Booleans are often used to represent a binary state, such as whether a condition is true or false.

Here are some examples of how to use booleans in TypeScript:

1. Declaring a boolean variable:
```ts
let isTrue: boolean = true;
```
2. Using a boolean in a conditional statement:
```ts
if (isTrue) {
  console.log("The condition is true");
} else {
  console.log("The condition is false");
}
```
3. Using a boolean in a logical expression:
```ts
let isTrue = true;
let isFalse = false;

if (isTrue && isFalse) {
  console.log("Both conditions are true");
} else {
  console.log("One or both conditions are false");
}
```
4. Using a boolean in a ternary expression:
```ts
let isTrue = true;
let isFalse = false;

let result = isTrue ? "The condition is true" : "The condition is false";
console.log(result);
```
5. Using a boolean in a function parameter:
```ts
function greet(name: string, isMorning: boolean) {
  if (isMorning) {
    console.log(`Good morning, ${name}!`);
  } else {
    console.log(`Good afternoon, ${name}!`);
  }
}

greet("John", true); // Output: Good morning, John!
greet("Jane", false); // Output: Good afternoon, Jane!
```
These are just a few examples of how to use booleans in TypeScript. Booleans are a fundamental data type in programming and are used in a wide variety of situations.


### 2.String Type
-------------------
In TypeScript, a string is a primitive data type that represents a sequence of characters. Strings can be defined using single quotes (`'`) or double quotes (`"`).

Here are some examples of strings in TypeScript:
```ts
let myString: string = 'Hello, world!';
let myOtherString: string = "This is a string.";
```
You can also use template literals to create multi-line strings or strings with expressions. Template literals are defined using backticks (`` ` ``).

Here's an example of a multi-line string using template literals:
```ts
let myString: string = `This is a multi-line
string.
It spans multiple lines.`;
```
You can also use expressions inside template literals. Here's an example:
```ts
let myString: string = `The answer is ${42}.`;
```
In this example, the expression `${42}` is evaluated and the result is inserted into the string.

You can also use the `String` class in TypeScript to create strings. Here's an example:
```ts
let myString: string = new String('Hello, world!');
```
In this example, the `String` class is used to create a new string object with the value `'Hello, world!'`.

It's worth noting that in TypeScript, strings are immutable, which means that once a string is created, its value cannot be changed. If you need to modify a string, you can create a new string with the modified value.


### 3. Number Type
----------------------------------------------------------------

In TypeScript, numbers can be represented in several ways, depending on the specific type of number being used. Here are some of the most common ways to represent numbers in TypeScript:

1. Integers: Integers are whole numbers, either positive or negative, without a fractional part. They can be represented in TypeScript using the `number` type. For example:
```ts
let x: number = 42;
```
2. Floating-point numbers: Floating-point numbers are numbers that have a fractional part. They can be represented in TypeScript using the `number` type. For example:
```ts
let x: number = 3.14;
```
3. BigInts: BigInts are integers that can be arbitrarily large. They are represented in TypeScript using the `bigint` type. For example:
```ts
let x: bigint = 123456789012345678901234567890n;
```
4. Decimals: Decimals are numbers that have a fractional part, but are not necessarily floating-point numbers. They can be represented in TypeScript using the `decimal` type. For example:
```ts
let x: decimal = 3.14;
```
5. Complex numbers: Complex numbers are numbers that have both a real and an imaginary part. They can be represented in TypeScript using the `complex` type. For example:
```ts
let x: complex = { real: 3, imaginary: 4 };
```
It's worth noting that TypeScript also has a `number` type that can be used to represent any type of number, including integers, floating-point numbers, and BigInts. However, using the specific types mentioned above can help with type checking and make the code more readable.


### 4.Void Type

 In TypeScript, `void` is a type that represents the absence of a value. It is often used as the return type of a function that does not return any value.

Here is an example of how to use `void` in TypeScript:
```ts
function greet(): void {
  console.log('Hello, world!');
}
```
In this example, the `greet` function does not return any value, so its return type is `void`.

You can also use `void` as a type for a variable that is not supposed to have a value. For example:
```ts
let name: void;
```
In this example, the `name` variable is declared with the type `void`, which means that it is not supposed to have a value.

It's worth noting that `void` is not the same as `undefined`. `undefined` is a value that represents the absence of a value, while `void` is a type that represents the absence of a value. In other words, `void` is a type that can be used to describe the absence of a value, while `undefined` is a value that can be used to represent the absence of a value.


### 5. Undefined Type
----------------------
 In TypeScript, the `undefined` type is a special type that represents the absence of a value. It is used to indicate that a variable or property has no value.

Here is an example of how to use the `undefined` type in TypeScript:
```ts
let name: undefined;
```
In this example, the `name` variable is declared with the type `undefined`, which means that it has no value.

You can also use the `undefined` type as a return type for a function that does not return any value:
```ts
function greet(): undefined {
  console.log('Hello, world!');
}
```
In this example, the `greet` function does not return any value, so its return type is `undefined`.

It's worth noting that `undefined` is not the same as `null`. `null` is a value that represents the absence of a value, while `undefined` is a type that represents the absence of a value. In other words, `null` is a value that can be used to represent the absence of a value, while `undefined` is a type that can be used to describe the absence of a value.

You can also use the `undefined` type as a type parameter for a generic function or class:
```ts
function greet<T extends undefined>(name: T): void {
  console.log(`Hello, ${name}!`);
}
```
In this example, the `greet` function is a generic function that takes a type parameter `T` that extends `undefined`. This means that the `name` parameter must be of type `undefined` or a subtype of `undefined`.

You can also use the `undefined` type as a type constraint for a generic class:
```ts
class Person<T extends undefined> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }
}
```
In this example, the `Person` class is a generic class that takes a type parameter `T` that extends `undefined`. This means that the `name` property must be of type `undefined` or a subtype of `undefined`.

It's important to note that the `undefined` type is not the same as the `void` type. `void` is a type that represents the absence of a value, while `undefined` is a type that represents the absence of a value that is not known at compile-time. In other words, `void` is used to indicate that a function or method does not return any value, while `undefined` is used to indicate that a variable or property has no value that is known at compile-time.


### 6. Null Type
--------------------

In TypeScript, the `null` type is a special type that represents the absence of a value. It is used to indicate that a variable or property has no value.

Here is an example of how to use the `null` type in TypeScript:
```ts
let name: null;
```
In this example, the `name` variable is declared with the type `null`, which means that it has no value.

You can also use the `null` type as a return type for a function that does not return any value:
```ts
function greet(): null {
  console.log('Hello, world!');
}
```
In this example, the `greet` function does not return any value, so its return type is `null`.

It's worth noting that `null` is not the same as `undefined`. `undefined` is a value that represents the absence of a value, while `null` is a type that represents the absence of a value. In other words, `undefined` is a value that can be used to represent the absence of a value, while `null` is a type that can be used to describe the absence of a value.

You can also use the `null` type as a type parameter for a generic function or class:
```ts
function greet<T extends null>(name: T): void {
  console.log(`Hello, ${name}!`);
}
```
In this example, the `greet` function is a generic function that takes a type parameter `T` that extends `null`. This means that the `name` parameter must be of type `null` or a subtype of `null`.

You can also use the `null` type as a type constraint for a generic class:
```ts
class Person<T extends null> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }
}
```
In this example, the `Person` class is a generic class that takes a type parameter `T` that extends `null`. This means that the `name` property must be of type `null` or a subtype of `null`.



# Object Types

### 1. Array Types
---------------------
How to use the `Array` type in TypeScript:

1. Declaring an array of numbers:
```ts
let numbers: number[] = [1, 2, 3];
```
2. Declaring an array of strings:
```ts
let strings: string[] = ["hello", "world"];
```
3. Declaring an array of objects:
```ts
let objects: object[] = [{ name: "John" }, { name: "Jane" }];
```
4. Declaring an array of functions:
```ts
let functions: Function[] = [() => console.log("Hello"), () => console.log("World")];
```
5. Declaring an array of arrays:
```ts
let arrays: Array<Array<number>> = [[1, 2], [3, 4]];
```
6. Declaring an array of tuples:
```ts
let tuples: [number, string][] = [[1, "one"], [2, "two"]];
```
7. Declaring an array of enums:
```ts
enum Color {
  Red,
  Green,
  Blue
}

let colors: Color[] = [Color.Red, Color.Green, Color.Blue];
```
8. Declaring an array of classes:
```ts
class Person {
  constructor(public name: string) {}
}

let people: Person[] = [new Person("John"), new Person("Jane")];
```
9. Declaring an array of interfaces:
```ts
interface Person {
  name: string;
}

let people: Person[] = [
  { name: "John" },
  { name: "Jane" }
];
```
10. Declaring an array of type aliases:
```ts
type Person = {
  name: string;
};

let people: Person[] = [
  { name: "John" },
  { name: "Jane" }
];
```
These are just a few examples of how you can use the `Array` type in TypeScript. The `Array` type is a powerful and flexible way to work with arrays in TypeScript, and it can be used in a variety of different contexts.

### 2.Interface Types

 In TypeScript, an interface is a type that defines a set of properties and methods that an object must have. Interfaces are used to define the structure of an object and to ensure that objects of a certain type have the same properties and methods.

Here is an example of an interface in TypeScript:
```ts
interface Person {
  name: string;
  age: number;
  sayHello(): void;
}
```
In this example, the `Person` interface defines three properties: `name`, `age`, and `sayHello`. The `name` property is a string, the `age` property is a number, and the `sayHello` method is a function that takes no arguments and returns nothing.

To use an interface in TypeScript, you can create an object that implements the interface:
```ts
let person: Person = {
  name: 'John',
  age: 30,
  sayHello() {
    console.log('Hello, my name is ' + this.name);
  }
};
```
In this example, the `person` object is created with the `name` and `age` properties, and the `sayHello` method is defined. The `person` object is then assigned to the `Person` interface, which ensures that it has the same properties and methods as the interface.

Interfaces can also be used to define the structure of an object that is passed as an argument to a function:
```ts
function greet(person: Person) {
  console.log('Hello, my name is ' + person.name);
}
```
In this example, the `greet` function takes a `Person` object as an argument, and it uses the `name` property of the object to print a greeting message. The `Person` interface is used to ensure that the `person` object has the same properties and methods as the interface.

Interfaces can also be used to define the structure of an object that is returned from a function:
```ts
function getPerson(): Person {
  return {
    name: 'John',
    age: 30,
    sayHello() {
      console.log('Hello, my name is ' + this.name);
    }
  };
}
```
In this example, the `getPerson` function returns a `Person` object, which is defined using the `Person` interface. The `Person` interface is used to ensure that the object returned by the function has the same properties and methods as the interface.

Overall, interfaces are a powerful tool in TypeScript that can be used to define the structure of objects and to ensure that objects have the same properties and methods. They can be used to improve the readability and maintainability of code, and to catch errors at compile-time.

### 3. Enum Types

An enum is a group of named constant values. Enum stands for enumerated type.

To define an enum, you follow these steps:

First, use the enum keyword followed by the name of the enum.
Then, define constant values for the enum.
The following shows the syntax for defining an enum:
```ts
enum name {constant1, constant2, ...};
```
In this syntax, the constant1, constant2, etc., are also known as the members of the enum.

In TypeScript, an `enum` is a special type that allows you to define a set of named values that can be used in your code. Enums are useful when you need to represent a set of values that are related to each other, but you don't need to create a separate type for each value.

Here's an example of how you can define an enum in TypeScript:
```ts
enum Color {
  Red,
  Green,
  Blue
}
```
In this example, we've defined an enum called `Color` with three values: `Red`, `Green`, and `Blue`. These values are the only valid values that can be used with the `Color` enum.

You can use enums in your code just like you would use any other type. For example, you can declare a variable of type `Color` and assign it one of the enum values:
```ts
let myColor: Color = Color.Red;
```
You can also use enums in switch statements to match against the enum values:
```ts
switch (myColor) {
  case Color.Red:
    console.log("Red");
    break;
  case Color.Green:
    console.log("Green");
    break;
  case Color.Blue:
    console.log("Blue");
    break;
}
```
Enums can also be used in type annotations to specify the type of a variable or function parameter. For example:
```ts
function printColor(color: Color): void {
  console.log(color);
}
```
In this example, the `printColor` function takes a `Color` enum value as a parameter, and prints it to the console.

Enums are a powerful feature in TypeScript that can help you write more expressive and maintainable code. They can be used to represent a wide range of values, from simple integers to complex objects, and they can be used in a variety of contexts, from simple variable declarations to complex type annotations.


### 4.Tuple Type

In TypeScript, tuples are a way to represent a fixed-size array of values, where each value has a specific type. Unlike arrays, tuples have a fixed number of elements, and each element can have a different type.

Here's an example of how to define a tuple in TypeScript:
```ts
let myTuple: [string, number, boolean];
```
In this example, `myTuple` is a tuple with three elements: a string, a number, and a boolean. The type of each element is specified in the tuple's type annotation.

You can also specify the types of the elements in the tuple using the `as` keyword:
```ts
let myTuple: [string as "hello", number as 42, boolean as true];
```
In this example, the types of the elements in the tuple are explicitly specified using the `as` keyword.

You can access the elements of a tuple using the same syntax as an array:
```ts
console.log(myTuple[0]); // Output: "hello"
console.log(myTuple[1]); // Output: 42
console.log(myTuple[2]); // Output: true
```
You can also use destructuring to extract the elements of a tuple into separate variables:
```ts
let [greeting, number, flag] = myTuple;
console.log(greeting); // Output: "hello"
console.log(number); // Output: 42
console.log(flag); // Output: true
```
In this example, the `greeting`, `number`, and `flag` variables are assigned the values of the corresponding elements in the `myTuple` tuple.

Overall, tuples in TypeScript provide a way to represent a fixed-size array of values with specific types, which can be useful in a variety of situations.


### 5.Class Type

In TypeScript, a class is a type that represents a blueprint or template for creating objects. A class is defined using the `class` keyword, and it can have properties, methods, and constructors.

Here is an example of a simple class in TypeScript:
```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}
```
In this example, the `Person` class has two properties: `name` and `age`, and a constructor that initializes these properties. The class also has a method called `greet` that logs a message to the console.

To create an instance of the `Person` class, you can use the `new` keyword:
```ts
const person = new Person('John', 30);
```
This will create a new instance of the `Person` class with the name "John" and age 30. You can then call the `greet` method on this instance:
```ts
person.greet();
```
This will log the message "Hello, my name is John and I am 30 years old." to the console.

TypeScript also supports inheritance, which allows you to create a new class that is a modified version of an existing class. For example:
```ts
class Employee extends Person {
  jobTitle: string;

  constructor(name: string, age: number, jobTitle: string) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I work as a ${this.jobTitle}.`);
  }
}
```
In this example, the `Employee` class is a subclass of the `Person` class, and it adds a new property called `jobTitle`. The `Employee` class also overrides the `greet` method to include the job title in the message.

To create an instance of the `Employee` class, you can use the `new` keyword:
```ts
const employee = new Employee('Jane', 25, 'Software Engineer');
```
This will create a new instance of the `Employee` class with the name "Jane", age 25, and job title "Software Engineer". You can then call the `greet` method on this instance:
```ts
employee.greet();
```
This will log the message "Hello, my name is Jane and I am 25 years old. I work as a Software Engineer." to the console.



# Other Types
### 1.Object Types
----------------------
In TypeScript, an object is a collection of properties, which are essentially key-value pairs. Each property has a name, and a value of a specific type. Objects are defined using curly braces `{}` and can be used to represent complex data structures.

Here is an example of an object in TypeScript:
```ts
let person = {
  name: "John",
  age: 30,
  occupation: "Software Engineer"
};
```
In this example, `person` is an object with three properties: `name`, `age`, and `occupation`. Each property has a specific type: `string`, `number`, and `string` respectively.

Objects can also have methods, which are functions that are associated with the object. Methods are defined using the `function` keyword and can be called using the dot notation.

Here is an example of an object with a method in TypeScript:
```ts
let person = {
  name: "John",
  age: 30,
  occupation: "Software Engineer",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

person.greet(); // Output: "Hello, my name is John"
```
In this example, `person` is an object with a method called `greet`. The method takes no arguments and logs a message to the console. The `this` keyword is used to refer to the object itself, so that the method can access the `name` property of the object.

Objects can also be used as interfaces, which define a set of properties and methods that an object must have in order to implement the interface. Interfaces are defined using the `interface` keyword and can be used to ensure that objects have the correct structure and behavior.

Here is an example of an interface in TypeScript:
```ts
interface Person {
  name: string;
  age: number;
  occupation: string;
  greet(): void;
}

let person: Person = {
  name: "John",
  age: 30,
  occupation: "Software Engineer",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};
```
In this example, `Person` is an interface that defines a set of properties and methods that an object must have in order to implement the interface. The `person` object is then defined as an instance of the `Person` interface, which means that it must have the same properties and methods as the interface.

Overall, objects are a fundamental part of TypeScript and are used to represent complex data structures and define interfaces for objects.


### 2.Any Type

In TypeScript, the `any` type is a special type that represents any value, including objects, functions, and primitives. It is similar to the `Object` type in JavaScript, but it is more flexible and can be used in a wider range of contexts.

Here are some examples of how the `any` type can be used in TypeScript:

1. As a function parameter type:
```ts
function myFunction(param: any) {
  // do something with param
}
```
In this example, the `myFunction` function takes a single parameter of type `any`, which means it can be called with any value, including objects, functions, and primitives.

2. As a variable type:
```ts
let myVar: any = 5;
```
In this example, the `myVar` variable is declared with type `any`, which means it can be assigned any value, including objects, functions, and primitives.

3. As a return type:
```ts
function myFunction(): any {
  return { foo: 'bar' };
}
```
In this example, the `myFunction` function returns an object with a `foo` property, but the return type is declared as `any`, which means the function can return any value, including objects, functions, and primitives.

4. As a type parameter:
```ts
function myFunction<T>(param: T): T {
  // do something with param
  return param;
}
```
In this example, the `myFunction` function takes a type parameter `T`, which is used as the type of the `param` parameter. The return type is also declared as `T`, which means the function can return any value, including objects, functions, and primitives.

It's important to note that using the `any` type can make your code less type-safe, because it allows any value to be assigned to a variable or passed as a parameter, without any type checking. It's generally recommended to use more specific types whenever possible, to improve code readability and maintainability.


### 3.Unknow Type

In TypeScript, an `unknown` type is a type that represents a value of any type. It is similar to the `any` type, but it is more specific and can only be used in certain contexts.

The unknown type is used to represent a value that has not been explicitly typed, but is known to be of a specific type. For example, if you have a function that takes an argument of type `unknown`, you can pass any value to that function, and the function will be able to determine the type of the value at runtime.

Here is an example of how you can use the unknown type in TypeScript:
```ts
function myFunction(arg: unknown) {
  if (typeof arg === 'string') {
    console.log('The argument is a string');
  } else if (typeof arg === 'number') {
    console.log('The argument is a number');
  } else {
    console.log('The argument is of an unknown type');
  }
}

myFunction('hello'); // Output: The argument is a string
myFunction(42); // Output: The argument is a number
myFunction(true); // Output: The argument is of an unknown type
```
In this example, the `myFunction` function takes an argument of type `unknown`, which means it can be called with any value. The function then uses the `typeof` operator to determine the type of the argument at runtime, and logs a message based on the type of the argument.

The unknown type is useful when you want to allow a function to accept any value, but still want to be able to determine the type of the value at runtime. It is also useful when you want to create a function that can be used with different types of arguments, but you don't want to have to create a separate function for each type of argument.


### 4.Never Type

 In TypeScript, you can use the `never` type to indicate that a variable or function should never be called or executed.

Here's an example of how you can use the `never` type to prevent a function from being called:
```ts
function myFunction(): never {
  throw new Error("This function should never be called");
}
```
In this example, the `myFunction` function is declared to return the `never` type, which means that it should never be called. If you try to call the function, it will throw an error indicating that it should never be called.

You can also use the `never` type to prevent a variable from being assigned a value. For example:
```ts
let myVariable: never;
```
In this example, the `myVariable` variable is declared to be of type `never`, which means that it should never be assigned a value. If you try to assign a value to the variable, it will throw an error indicating that it should never be assigned a value.

Using the `never` type can help you catch errors and prevent unexpected behavior in your code. It can also make your code more readable and easier to understand, as it clearly indicates which functions and variables should never be called or assigned a value.

# Assertions
-----------

In TypeScript, assertions are a way to tell the compiler that a certain condition is always true at a specific point in the code. This can be useful for a few reasons:

1. It can help the compiler understand the code better, which can lead to better error messages and better type checking.
2. It can help you catch errors earlier, by making it clear to the compiler that certain conditions are always true.
3. It can make the code easier to read and understand, by making it clear what the code is doing and why.

There are several different types of assertions that can be used in TypeScript, including:

1. `assert`: This is the most basic type of assertion, and it simply tells the compiler that a certain condition is always true. For example:
```ts
assert(x > 0);
```
This tells the compiler that the variable `x` is always greater than 0.

2. `assert.ok`: This is similar to `assert`, but it allows you to specify a message that will be displayed if the assertion fails. For example:
```ts
assert.ok(x > 0, "x must be greater than 0");
```
This tells the compiler that the variable `x` is always greater than 0, and if it's not, it will display the message "x must be greater than 0".

3. `assert.equal`: This is used to compare two values and make sure they are equal. For example:
```ts
assert.equal(x, 5);
```
This tells the compiler that the variable `x` is always equal to 5.

4. `assert.notEqual`: This is used to compare two values and make sure they are not equal. For example:
```ts
assert.notEqual(x, 5);
```
This tells the compiler that the variable `x` is never equal to 5.

5. `assert.strictEqual`: This is used to compare two values and make sure they are strictly equal (i.e., they have the same type and value). For example:
```ts
assert.strictEqual(x, 5);
```
This tells the compiler that the variable `x` is always strictly equal to 5.

6. `assert.notStrictEqual`: This is used to compare two values and make sure they are not strictly equal (i.e., they have different types or values). For example:
```ts
assert.notStrictEqual(x, 5);
```
This tells the compiler that the variable `x` is never strictly equal to 5.

7. `assert.instanceOf`: This is used to check if a value is an instance of a particular class. For example:
```ts
assert.instanceOf(x, MyClass);
```
This tells the compiler that the variable `x` is always an instance of the class `MyClass`.

8. `assert.notInstanceOf`: This is used to check if a value is not an instance of a particular class. For example:
```ts
assert.notInstanceOf(x, MyClass);
```
This tells the compiler that the variable `x` is never an instance of the class `MyClass`.

9. `assert.typeOf`: This is used to check the type of a value. For example:
```ts
assert.typeOf(x, "number");
```
This tells the compiler that the variable `x` is always a number.

10. `assert.notTypeOf`: This is used to check that a value is not of a particular type. For example:
```ts
assert.notTypeOf(x, "number");
```
This tells the compiler that the variable `x` is never a number.

These are just a few examples of the different types of assertions that can be used in TypeScript. By using assertions, you can make your code more expressive and easier to understand, and you can also help the compiler catch errors and inconsistencies that might otherwise go unnoticed.


# Type Inference
------------------
Type inference in TypeScript is a process where the type of a variable or expression is automatically inferred by the compiler based on the context in which it is used. This means that you don't have to explicitly specify the type of a variable or expression, as the compiler can infer it from the code.

Type inference is useful when you want to write concise code that is easy to read and understand. It can also help you catch errors and inconsistencies in your code, as the compiler will check the types of variables and expressions for you.

Here's an example of how type inference works in TypeScript:
```ts
let x = 5;
let y = "hello";

function add(a: number, b: number) {
  return a + b;
}

let result = add(x, y);
```
In this example, the type of `x` is inferred to be `number`, as it is initialized with a number literal. The type of `y` is inferred to be `string`, as it is initialized with a string literal. The type of `result` is inferred to be `number`, as it is the result of adding two numbers.

Type inference can also be used with function parameters. For example:
```ts
function add(a: number, b: number) {
  return a + b;
}

let result = add(5, "hello");
```
In this example, the type of `result` is inferred to be `number`, as it is the result of adding a number and a string.

Type inference can also be used with interfaces and classes. For example:
```ts
interface Person {
  name: string;
  age: number;
}

class Student implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let student = new Student("John", 25);
```
In this example, the type of `student` is inferred to be `Student`, as it is created using the `new` keyword and the `Student` class. The type of `student.name` is inferred to be `string`, as it is a property of the `Student` class. The type of `student.age` is inferred to be `number`, as it is a property of the `Student` class.

Type inference can also be used with generics. For example:
```ts
function identity<T>(arg: T): T {
  return arg;
}

let result = identity(5);
```
In this example, the type of `result` is inferred to be `number`, as it is the result of calling the `identity` function with a number argument.

Overall, type inference is a powerful feature of TypeScript that can help you write more concise and expressive code, while also catching errors and inconsistencies.


# Combining Types

### 1. Union Type

In TypeScript, union types are a way to represent a value that can be one of several different types. Union types are created by combining multiple types using the `|` (pipe) character.

For example, the following is a union type that represents a value that can be either a string or a number:
```ts
type MyUnionType = string | number;
```
This means that a variable of type `MyUnionType` can be assigned a value of either type `string` or type `number`.

Here are some examples of how to use union types in TypeScript:

1. Function parameters: You can use union types as function parameters to allow the function to accept multiple types of arguments. For example:
```ts
function myFunction(param: string | number) {
  // do something with param
}
```
This function can be called with either a string or a number as an argument.

2. Return types: You can use union types as return types to indicate that a function can return multiple types of values. For example:
```ts
function myFunction(): string | number {
  // do something
  return "hello";
}
```
This function can return either a string or a number.

3. Type aliases: You can use union types to create type aliases that represent a set of types. For example:
```ts
type MyUnionType = string | number;

function myFunction(param: MyUnionType) {
  // do something with param
}
```
This creates a type alias `MyUnionType` that represents a value that can be either a string or a number. The `myFunction` function can then be called with a value of type `MyUnionType`.

4. Intersection types: You can use union types in combination with intersection types to create a type that represents a value that can be either of multiple types, but also has certain properties in common. For example:
```ts
type MyUnionType = string | number;
type MyIntersectionType = MyUnionType & { name: string };

function myFunction(param: MyIntersectionType) {
  // do something with param
}
```
This creates a type `MyIntersectionType` that represents a value that can be either a string or a number, but also has a `name` property that is a string. The `myFunction` function can then be called with a value of type `MyIntersectionType`.

Union types are a powerful feature in TypeScript that can help you create more expressive and flexible types. By using union types, you can represent a value that can be one of several different types, and you can also use them in combination with other types to create more complex and expressive types.

### 2.Intersection Type

In TypeScript, intersection types are a way to combine multiple types into a single type. An intersection type is created by using the `&` (ampersand) symbol between two or more types.

For example, the following code defines an intersection type `MyIntersectionType` that combines the types `string` and `number`:
```ts
type MyIntersectionType = string & number;
```
This means that a value of type `MyIntersectionType` can be either a string or a number, but not both.

Here are some examples of how to use intersection types in TypeScript:

1. Function parameters: You can use intersection types as function parameters to allow the function to accept multiple types of arguments. For example:
```ts
function myFunction(param: string & number) {
  // do something with param
}
```
This function can be called with either a string or a number as an argument.

2. Return types: You can use intersection types as return types to indicate that a function can return multiple types of values. For example:
```ts
function myFunction(): string & number {
  // do something
  return "hello";
}
```
This function can return either a string or a number.

3. Type aliases: You can use intersection types to create type aliases that represent a set of types. For example:
```ts
type MyIntersectionType = string & number;

function myFunction(param: MyIntersectionType) {
  // do something with param
}
```
This creates a type alias `MyIntersectionType` that represents a value that can be either a string or a number. The `myFunction` function can then be called with a value of type `MyIntersectionType`.

4. Intersection types with other types: You can use intersection types in combination with other types to create more complex types. For example:
```ts
type MyIntersectionType = string & number & { name: string };

function myFunction(param: MyIntersectionType) {
  // do something with param
}
```
This creates a type `MyIntersectionType` that represents a value that can be either a string, a number, or an object with a `name` property that is a string. The `myFunction` function can then be called with a value of type `MyIntersectionType`.

Intersection types are a powerful feature in TypeScript that can help you create more expressive and flexible types. By using intersection types, you can represent a value that can be one of several different types, and you can also use them in combination with other types to create more complex and expressive types.

### 3.Type Aliases

Type aliases in TypeScript are a way to give a new name to an existing type.They are defined using the `type` keyword, followed by the name of the alias, and the type that it should be an alias for. This can be useful for a few reasons:

1. To simplify complex types: Type aliases can be used to give a simpler name to a complex type, making it easier to read and understand.
2. To avoid repetition: If you have a type that is used in multiple places in your code, you can define a type alias for it and use the alias instead of the full type. This can help to avoid repetition and make your code more concise.
3. To create a new type: Type aliases can also be used to create a new type that is a combination of existing types. For example, you can create a type alias for a tuple of two strings, or a type alias for a function that takes a string and returns a number.

```ts
type MyType = string;
```
This defines a type alias called MyType that is an alias for the string type. 

Here is an example of how to define a type alias in TypeScript:
```ts
type MyType = string | number;
```
This defines a type alias called `MyType` that is a union of the `string` and `number` types. You can use this type alias in your code like any other type:
```ts
function myFunction(param: MyType) {
  // do something with param
}
```
Type aliases can also be used with interfaces and classes, for example:
```ts
interface MyInterface {
  myProperty: MyType;
}
```
This defines an interface called `MyInterface` that has a property called `myProperty` of type `MyType`.

It's also possible to use type aliases with generics, for example:
```ts
type MyGenericType<T> = T | MyType;
```
This defines a generic type called `MyGenericType` that is a union of the type parameter `T` and the `MyType` type.

Here are some examples of how to use type aliases in TypeScript:

1. Defining a type alias for a complex type:
```ts
type MyComplexType = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: number;
  };
};
```
This defines a type alias called `MyComplexType` that is an alias for a complex type with four properties: `name`, `age`, `address`, and `zip`.

2. Using a type alias to avoid repetition:
```ts
type MyType = string;

function myFunction(param: MyType) {
  // do something with param
}

myFunction("hello");
```
This defines a type alias called `MyType` that is an alias for the `string` type. The `myFunction` function takes a parameter of type `MyType`, which is the same as the `string` type.

3. Creating a new type using type aliases:
```ts
type MyTuple = [string, number];

function myFunction(param: MyTuple) {
  // do something with param
}

myFunction(["hello", 123]);
```
This defines a type alias called `MyTuple` that is a tuple of two types: `string` and `number`. The `myFunction` function takes a parameter of type `MyTuple`, which is the same as the tuple type `[string, number]`.

4. Providing a more descriptive name for a type:
```ts
type MyType = {
  name: string;
  age: number;
};

function myFunction(param: MyType) {
  // do something with param
}

myFunction({ name: "John", age: 30 });
```
This defines a type alias called `MyType` that is an alias for a type with two properties: `name` and `age`. The `myFunction` function takes a parameter of type `MyType`, which is the same as the type with two properties.

Type aliases are a powerful feature in TypeScript that can help you to create more expressive and flexible types in your code. They can be used in a variety of ways, such as to simplify complex types, avoid repetition, create new types, and provide more descriptive names for types.


### 4. keyof operator

The `keyof` operator in TypeScript is used to get the keys of an object type as a union of string literals. It is often used in conjunction with the `in` operator to check if a property exists on an object.

Here is an example of how to use the `keyof` operator:
```ts
type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: 'John',
  age: 30
};

const keys: keyof Person = 'name' | 'age';

console.log(keys); // Output: 'name' | 'age'
```
In this example, the `keys` variable is assigned the value `'name' | 'age'`, which is a union of string literals that represents the keys of the `Person` object.

The `keyof` operator can also be used with interfaces and classes, like this:
```ts
interface Person {
  name: string;
  age: number;
}

class PersonImpl implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const person: Person = new PersonImpl('John', 30);

const keys: keyof Person = 'name' | 'age';

console.log(keys); // Output: 'name' | 'age'
```
In this example, the `keys` variable is assigned the value `'name' | 'age'`, which is a union of string literals that represents the keys of the `Person` interface.

The `keyof` operator is a powerful tool for working with objects in TypeScript, and it can help you to write more expressive and flexible code.



# Type guards / Narrowing 

Type guards and narrowing are two related concepts in TypeScript that help you to work with the type system more effectively.

Type guards are a way to narrow the type of a value based on a condition. They allow you to specify a condition that must be true for a value to be considered of a certain type. For example, you can use a type guard to ensure that a value is a string before trying to access its `length` property.

Here's an example of a type guard:
```ts
function isString(value: any): value is string {
  return typeof value === 'string';
}
```
This function takes a value of type `any` and returns a boolean indicating whether the value is a string. You can use this function to narrow the type of a value like this:
```ts
const value: any = 'hello';
if (isString(value)) {
  console.log(value.length); // value is now of type string
}
```
In this example, the `isString` function is used to narrow the type of the `value` variable from `any` to `string`. This allows you to access the `length` property of the string without getting a type error.

`Narrowing` is a related concept that refers to the process of reducing the range of possible types for a value based on a condition. Narrowing can be done using type guards, but it can also be done using other techniques such as using the `typeof` operator or using the `instanceof` operator.

Here's an example of narrowing using the `typeof` operator:
```ts
const value: any = 'hello';
if (typeof value === 'string') {
  console.log(value.length); // value is now of type string
}
```
In this example, the `typeof` operator is used to check if the value is a string. If it is, the type of the value is narrowed to `string`, and you can access the `length` property without getting a type error.

Narrowing can be useful when you need to work with a value that could have multiple types, but you know that it must be a specific type in a certain context. By narrowing the type of the value, you can ensure that you're working with the correct type and avoid type errors.


# Typescript Functions

In TypeScript, functions are first-class citizens, which means they can be treated like any other variable. Here are some key features of functions in TypeScript:

1. Function Declaration: Functions can be declared using the `function` keyword, followed by the function name and a list of parameters in parentheses. For example:
```ts
function add(x: number, y: number): number {
  return x + y;
}
```
2. Function Expressions: Functions can also be defined using function expressions, which are similar to function declarations but do not have a name. For example:
```ts
const add = function(x: number, y: number): number {
  return x + y;
};
```
3. Arrow Functions: TypeScript also supports arrow functions, which are a concise way to define functions. Arrow functions use the `=>` operator to separate the parameters from the function body. For example:
```ts
const add = (x: number, y: number): number => x + y;
```
4. Function Types: Functions can have types, which specify the types of the parameters and the return value. For example:
```ts
function add(x: number, y: number): number {
  return x + y;
}
```
In this example, the `add` function takes two `number` parameters and returns a `number`.

5. Generic Functions: TypeScript also supports generic functions, which can work with multiple types. For example:
```ts
function identity<T>(arg: T): T {
  return arg;
}
```
In this example, the `identity` function takes a single parameter of type `T` and returns a value of the same type.

6. Function Overloading: TypeScript also supports function overloading, which allows you to define multiple functions with the same name but different parameter lists. For example:
```ts
function add(x: number, y: number): number;
function add(x: string, y: string): string;
function add(x: any, y: any): any {
  return x + y;
}
```
In this example, the `add` function is defined with two overloads: one that takes two `number` parameters and returns a `number`, and another that takes two `string` parameters and returns a `string`. The implementation of the function is the same for both overloads.

7. Function Parameters: Functions can also have default parameters, which are used if the function is called with fewer arguments than the number of parameters. 
For example:
```ts
function add(x: number, y: number = 0): number {
  return x + y;
} 
```

In this example, the add function takes two number parameters, x and y, and returns their sum. If the function is called with only one argument, the value of y is set to 0.

8. Function Return Types: Functions can also have return types, which specify the type of the value that the function returns. For example:
```ts
function add(x: number, y: number): number {
  return x + y;
}
```
In this example, the add function takes two number parameters, x and y, and returns a number.

9. Function Rest Parameters: Functions can also have rest parameters, which allow you to pass an arbitrary number of arguments to a function. For example:
```ts
function add(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

```

In this example, the add function takes an arbitrary number of number arguments and returns their sum.

10. Function Spread Operator: Functions can also use the spread operator to pass an array of arguments to a function. For example:
```ts
function add(x: number, y: number): number {
  return x + y;
}

const numbers = [1, 2, 3, 4, 5];
const result = add(...numbers);
```
In this example, the add function takes two number parameters, x and y, and returns their sum. The numbers array is passed to the add function using the spread operator, which allows you to pass an arbitrary number of arguments to the function.

These are just a few examples of the features and capabilities of functions in TypeScript. With these features, you can write robust and maintainable code that is easy to read and understand.