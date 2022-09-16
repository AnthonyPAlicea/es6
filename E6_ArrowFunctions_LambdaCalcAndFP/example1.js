let compose = (x, y) => z => x(y(z));
let sayHello = (s) => `Hello ${s}`;
let goodMorning = (s) => `${s}, good morning!`;

let talk = compose(goodMorning, sayHello);
let words = talk('Tony');
console.log(words);