// someone else's code
const grt = Symbol('greet');
const fname = Symbol('fname');

class Person {
    [fname] =  'Tony';

    [grt]() {
        return `Hi ${this[fname]}`
    }
}

// my code
let tony = new Person();

const fname2 = Symbol('fname');
tony[fname2] = 'Anthony';

tony.greet = function() {
    return `Hello ${this[fname]}`;
}

console.log(tony[grt]());
console.log(tony.greet());

let me = {
    [fname]: 'Anthony'
}
console.log(me[fname]);

// "global" Symbols
const HAIR_STRAIGHT = Symbol.for('Straight');
const HAIR_CURLY = Symbol.for('Curly');
const HAIR_WAVY = Symbol.for('Wavy');

let curly = Symbol.for('Curly');
console.log(curly === HAIR_CURLY);

console.log(Symbol.keyFor(HAIR_CURLY));