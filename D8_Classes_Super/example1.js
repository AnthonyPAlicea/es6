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
    constructor() {
        super('Tony');
    }

    greet() {
        let greeting = super.greet();
        return `${greeting}. I'm Tony`;
    }

    meet() {
        return `Nice to meet you.`;
    }
}

let me = new Tony();
console.log(me.greet());