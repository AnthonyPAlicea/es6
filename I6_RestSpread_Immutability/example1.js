function doSomething(o) {
  o.name = "Anthony";
}

let person = { name: "Tony" };
let person2 = { name: "Tony" };
doSomething(person);
doSomething({ ...person2 });
console.log(person);
console.log(person2);

// Nested immutability
const complexUser = {
  name: "Tony",
  preferences: { theme: "dark", language: "en" },
};
const updatedComplexUser = {
  ...complexUser,
  preferences: { ...complexUser.preferences, theme: "light" },
};

console.log("Original:", complexUser);
console.log("Updated:", updatedComplexUser);