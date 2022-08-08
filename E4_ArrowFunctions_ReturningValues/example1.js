let greet = function(firstname, lastname) {
    return `Hi ${firstname} ${lastname}`;
}
 
let greet2 = (firstname, lastname) => {
    return `Hi ${firstname} ${lastname}`;
}

let greet3 = firstname => `Hi ${firstname}`;

console.log(greet3('Tony', 'Alicea'));

function logThis(fn) {
    console.log(fn(1, 2));
}

logThis((a, b) => {
    return a + b;
});

logThis((a, b) => a + b);