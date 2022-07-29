class Person {
    #firstName;
    #lastName;
    
    constructor(fname, lname) {
        this.#firstName = fname;
        this.#lastName = lname;
    }

    get fname() {
        return this.#firstName;
    }

    set fname(fn) {
        this.#firstName = fn;
    }

    greet() {
        return `Hello, ${this.#firstName}`;
    }
}

let me = new Person('Tony', 'Alicea');
console.log(me.greet());
me.fname = 'Anthony';
console.log(me.greet());
console.log(me.fname);