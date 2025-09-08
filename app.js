console.log("Hello world!");
function sayHelloTo(userName) {
  console.log("Hello " + userName + "!");
}

sayHelloTo("Bob"); // Output: Hello Bob!
sayHelloTo("Jimmy"); // Output: Hello Jimmy!
sayHelloTo("Alice"); // Output: Hello Alice!
function greet(greeting, userName) {
  console.log(greeting + " " + userName + "!");
}

greet("Good morning", "Bob"); // Output: Good morning Bob!
greet("Buenos dias", "Alice"); // Output: Buenos dias Alice!
greet("Bonjour", "Charlie"); // Output: Bonjour Charlie!

function add(a, b) {
  return a + b;
}
const result = add(1, 5);
console.log("The result is", result); // Output: The result is 6
const anotherResult = add(2, 10);
console.log("Another result is", anotherResult); // Output: Another result

function sayHello() {
  const myName = "Bob";
  console.log("Hello " + myName + "!");
}
sayHello(); // Output: Hello Bob!

console.log(myName); // Output: Uncaught ReferenceError: myName is not defined
