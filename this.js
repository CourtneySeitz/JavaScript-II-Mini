/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window or global object binding, when in global object the value of this will be the value of the global Object.
* 2. Implicit binding left of . refers to it. 
* 3. Explict binding- when this refers to explicitly to an object
* 4. New binding, when a new object from new is created, this points to the new object 
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
function hello(name){
    console.log(this);
    return name;
}

// Principle 2

// code example for Implicit Binding
function hello(name){
 //   console.log(this);
    return this.name;
}

// Principle 3

// code example for New Binding
let Animal = function( color, name, type){
    this.color = color;
    this.name = name;
    this.type = type;
}
let cat = new Amimal('brown', 'Garfield', 'feline');

// Principle 4

// code example for Explicit Binding
let sayHello = function () {
    console.log(this.name);
}

let name = {
    name: 'AD Faris',
    age: 34,
};

sayHello.call(name); // adfaris 