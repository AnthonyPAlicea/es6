class Person {
    firstName;
    
    constructor(name) {
        this.firstName = name;
    }

    greet() {
        return `Hello, ${this.firstName}`;
    }
}

let me = new Person('Tony');
let me2 = new Person('Anthony');

console.log(me.greet());
console.log(me2.greet());