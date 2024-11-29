// Spread works with any iterable, not just arrays
const word = "hello";
const chars = [...word]; // String is iterable

console.log("Characters:", chars); // Output: ["h", "e", "l", "l", "o"]

// Set (another iterable)
const numbersSet = new Set([1, 2, 3]);
const numbersArray = [...numbersSet]; // Convert Set to Array

console.log("Array from Set:", numbersArray); // Output: [1, 2, 3]

// Custom Iterable Example
let numbers = {
  [Symbol.iterator]: function() {
      const start = 1;
      const end = 5;
      let nextValue = start;
      return {
          next: () => {
              if (nextValue <= end) {
                  let nextObj = { value: nextValue, done: false };
                  nextValue++;
                  return nextObj;
              }
              return { value: nextValue, done: true };
          }
      }
  }
}

console.log("Custom Iterable with for...of:");
for (const num of numbers) {
  console.log(num); // Output: 1 2 3 4 5
}

console.log("Using spread with custom iterable:");
console.log([...numbers]); // Output: [1, 2, 3, 4, 5]
