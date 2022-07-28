class Person {
    firstName;
    
    constructor(name) {
        this.firstName = name;
    }

    greet() {
        return `Hello, ${this.firstName}`;
    }

    static residence = 'Earth';

    static goodMorning() {
        return 'Good morning.';
    }
}

let me = new Person();
console.log(Person.goodMorning());
console.log(Person.residence);
console.log(me.__proto__); // no goodMorning
console.log(me.goodMorning()); // error