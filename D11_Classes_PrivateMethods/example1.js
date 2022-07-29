class Person {
    #firstName;
    #lastName;
    
    constructor(fname, lname) {
        this.#lastName = lname;
        this.#firstName = fname;
    }

    get fname() {
        return this.#firstName;
    }

    set fname(fn) {
        this.#firstName = fn;
    }

    #getPersonInfo() {
        // get data from a server
        return {
            id: 1
        }
    }

    greet() {
        return `Hello, ${this.#firstName} ${this.#lastName}: ${this.#getPersonInfo().id}`;
    }
}

let me = new Person('Tony', 'Alicea');
console.log(me.greet());