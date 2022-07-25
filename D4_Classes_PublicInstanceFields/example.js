class Person {
    firstName = 'Tony';
}

let me = new Person();

let me2 = new Person();
me2.firstName = 'Anthony';

console.log(me);
console.log(me2);