let greet = function(firstname, lastname) {
    return `Hi ${firstname} ${lastname}`;
}
 
let greet2 = (firstname, lastname) => {
    return `Hi ${firstname} ${lastname}`;
}

console.log(greet2('Tony', 'Alicea'));

() => { return 1 };
(() => { return 1 })();
console.log((() => { return 1 })());

function logThis(fn) {
    console.log(fn(1, 2));
}

logThis(() => {
    let a = 1;
    return a;
});

logThis((a, b) => {
    return a + b;
});