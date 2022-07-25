class Person {
    firstName;
    
    constructor(name) {
        this.firstName = name;
    }
}

let me = new Person('Tony');
let me2 = new Person('Anthony');

console.log(me);
console.log(me2);
console.log(me.__proto__);
console.log(Person.prototype);
console.log(me.__proto__ === Person.prototype);
console.log(me2.__proto__ === Person.prototype);