// Using rest parameters to gather all arguments into an array
function add(...numbers) {
  return numbers;
}

console.log(add(1, 2, 3));
console.log(add(10, 20, 30, 40));

// Collect specific arguments and the rest
function greet(first, second, ...others) {
  console.log("First:", first);
  console.log("Second:", second);
  console.log("Others:", others);
}

greet("Hello", "Tony", "How", "Are", "You");
