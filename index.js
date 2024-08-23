// 1. Ternary array: I understand that a ternary array is not a standard term in JavaScript.
// However, I assume it refers to an array that uses the ternary operator (conditional operator)
// to perform operations on its elements. The ternary operator is a concise way to write
// conditional statements, and it can be used to manipulate array elements.

// 2. Here are 5 common array methods:
// - push(): adds one or more elements to the end of an array.
// - pop(): removes the last element from an array.
// - shift(): removes the first element from an array.
// - unshift(): adds one or more elements to the beginning of an array.
// - splice(): adds or removes elements from an array.

// 3. Create dummy data and apply array methods
const dummyData = [1, 2, 3, 4, 5];

// Push: Add 6 to the end of the array
dummyData.push(6);
console.log("After push:", dummyData);

// Pop: Remove the last element from the array
dummyData.pop();
console.log("After pop:", dummyData);

// Shift: Remove the first element from the array
dummyData.shift();
console.log("After shift:", dummyData);

// Unshift: Add 0 to the beginning of the array
dummyData.unshift(0);
console.log("After unshift:", dummyData);

// Splice: Remove the element at index 2
dummyData.splice(2, 1);
console.log("After splice:", dummyData);
