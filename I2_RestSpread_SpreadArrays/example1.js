// Using spread to copy an array
const original = [1, 2, 3];
const copy = [...original];

console.log("Copy:", copy);

// Combine arrays with spread
const moreNumbers = [4, 5, 6];
const combined = [...original, ...moreNumbers];

console.log("Combined:", combined);
