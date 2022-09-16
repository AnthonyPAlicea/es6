function greet1(fname = 'Tony', lname = 'Alicea', phrase = () => { return `Hi ${fname} ${lname}` }) {
    return phrase();
}

let greeting1 = greet1();
console.log(greeting1);

function greet2(fname = 'Tony', phrase = () => { return `Hi ${fname} ${lname}` }, lname = 'Alicea') {
    return phrase();
}

let greeting2 = greet2();
console.log(greeting2);

function greet3(fname = 'Tony', phrase = `Hi ${fname} ${lname}`, lname = 'Alicea') {
    return phrase;
}

let greeting3 = greet3();
console.log(greeting3);