const person = { name: "Tony", job: "Instructor" };
const personCopy = { ...person };

console.log("Person Copy:", personCopy);

const additionalInfo = { site: "Udemy", website: "tonyalicea.dev" };
const mergedPerson = { ...person, ...additionalInfo };

console.log("Merged Person:", mergedPerson);

const updatedPerson = { ...person, job: "Speaker" };
console.log("Updated Person:", updatedPerson);