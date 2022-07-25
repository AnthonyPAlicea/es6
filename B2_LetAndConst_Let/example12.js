// from the slides for this lecture

let a = 2, b = 2, c = 2;

if (a===b) {
  
    console.log(myVar); // error: although hoisted, in a lower lexical environment, so no reference to it!

    if (b===c) {

        let myVar = 1;

    }
  
}