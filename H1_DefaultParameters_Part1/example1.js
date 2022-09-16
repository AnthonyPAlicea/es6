function greet(fname = 'Tony', lname = 'Alicea') {
    return `Hi ${fname} ${lname}`;
}

let greeting1 = greet();
console.log(greeting1);

let greeting2 = greet('Anthony');
console.log(greeting2);

let greeting3 = greet(null, 'P. Alicea');
console.log(greeting3);

let greeting4 = greet(undefined, 'P. Alicea');
console.log(greeting4);