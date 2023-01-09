/*
JavaScript Closures:--------------------
In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed.
*/


function greet(name) {
    function displayName() {
        return `Hi _ ${name}`
    }
    return displayName()
}
const calling = greet("dell");
console.log(calling);