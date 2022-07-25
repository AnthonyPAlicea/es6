let firstname = 'Tony';

{
    console.log(firstname); // error! 'uninitialized' error means the declaration hasn't been processed yet during the execution phase, it does not mean 'you haven't set a value'
    let firstname = 'Anthony';
}

console.log(firstname);