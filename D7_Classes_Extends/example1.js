class Person {
    firstName;
    
    constructor(name) {
        this.firstName = name;
    }

    greet() {
        return `Hello, ${this.firstName}`;
    }
}

class Tony extends Person {
    meet() {
        return `Nice to meet you.`;
    }
}

let me = new Tony('Tony');

console.log(me.greet());
console.log(me.meet());
console.log(me.__proto__); // Tony
console.log(me.__proto__.__proto__); // Person
console.log(Tony.prototype.__proto__ === Person.prototype) // true
console.log(Tony.__proto__);

let me2 = new Person('Anthony');
console.log(me2.meet()); // error

// extend a built-in type
class myNumber extends Number {
    addOne() {
        return this + 1;
    }
}

let num = new myNumber(3.053);
console.log(num.toFixed(1));
console.log(num.addOne());