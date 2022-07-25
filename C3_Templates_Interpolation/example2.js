function greet(strings, firstname, lastname) {
    let firstNameType;

    firstNameType = firstname === 'Tony' ? "short" : "long";

    return `${strings[0]}${firstname}${strings[1]}${lastname}. You used your ${firstNameType} name.`;
}

const firstname = 'Anthony';
const lastname = 'Alicea';
const greeting = greet`Hello, ${firstname} ${lastname}`;

console.log(greeting);