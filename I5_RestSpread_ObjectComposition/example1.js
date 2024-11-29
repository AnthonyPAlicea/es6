const base = { created: "2025-01-01" };
const person = { name: "Tony", job: "Instructor" };
const preferences = { theme: "dark", language: "en" };

const user = { ...base, ...person, ...preferences };
console.log("Composed Person:", user);

const updatedUser = { ...user, theme: "light" };
console.log("Updated User:", updatedUser);