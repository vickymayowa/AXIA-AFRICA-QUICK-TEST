// 1. Ternary array: I understand that a ternary array is not a standard term in JavaScript.
// However, I assume it refers to an array that uses the ternary operator (conditional operator)
// to perform operations on its elements. The ternary operator is a concise way to write
// conditional statements, and it can be used to manipulate array elements.

// 2. Here are 5 array methods:
// - filter(): creates a new array with all elements that pass the test implemented by the provided function.
// - map(): creates a new array with the results of applying the provided function on every element in the calling array.
// - reduce(): executes a user-supplied function on each element of the array (from left to right) so as to reduce it to a single output value.
// - find(): returns the value of the first element in the array that satisfies the provided testing function.
// - some(): returns true if at least one element in the array satisfies the provided testing function.

// 3. Create dummy data and apply array methods
const dummyData = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 20 },
  { id: 4, name: "Alice", age: 35 },
  { id: 5, name: "Mike", age: 28 },
];

// Filter: Get users older than 30
const olderThan30 = dummyData.filter((user) => user.age > 30);
console.log("Older than 30:", olderThan30);

// Map: Get an array of user names
const userNames = dummyData.map((user) => user.name);
console.log("User Names:", userNames);

// Reduce: Calculate the sum of user ages
const sumOfAges = dummyData.reduce((acc, user) => acc + user.age, 0);
console.log("Sum of Ages:", sumOfAges);

// Find: Get the first user with age 25
const userWithAge25 = dummyData.find((user) => user.age === 25);
console.log("User with Age 25:", userWithAge25);

// Some: Check if at least one user is older than 30
const hasOlderThan30 = dummyData.some((user) => user.age > 30);
console.log("Has Older than 30:", hasOlderThan30);
