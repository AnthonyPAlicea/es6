let longExpression = x => y => z => z ? y : x;

let longExpression2 = function(x) {
    return function(y) {
        return function(z) {
            return z ? y : x;
        }
    }
}

let result1 = longExpression('Tony')('Anthony')(true);
let result2 = longExpression('Tony')('Anthony')(false);
let result3 = longExpression2('Tony')('Anthony')(true);

console.log(result1);
console.log(result2);
console.log(result3);


let me = {
    firstName: 'Tony',
    greet: function() {
        console.log(this.firstName);
        console.log(this);
    },
    greet2: () => {
        console.log(this.firstName);
        console.log(this);
    }
}

me.greet();
me.greet2();

class Person {
    constructor(fname) {
        this.firstName = fname;
        this.greet = () => {
            console.log(this.firstName);
        }
    }
}

let me2 = new Person('Anthony');
me2.greet();