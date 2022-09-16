let pipe = (y, x) => z => x(y(z));
let sayHello = (s) => `Hello ${s}`;
let goodMorning = (s) => `${s}, good morning!`;

let talk = pipe(sayHello, goodMorning);
let words = talk('Tony');
console.log(words);