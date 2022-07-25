class Person {

}

let p = class {

};

function logClass(c) {
    console.log(c);
}

logClass(p);
logClass(class {

});