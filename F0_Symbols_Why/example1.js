// someone else's code
class Person {
    firstName = 'Tony';

    greet() {
        return `Hi ${this.firstName}`;
    }
}

// my code
let tony = new Person();
tony.__proto__.greet = function() {
    return `Hello ${this.firstName}`;
}

console.log(tony.greet());