// Primitive datatypes 7 types
// String, Number, Boolean, null, undefined, Symbol, BigInt

const str1 = "ashu"

const num = 22

let boolean = true

const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// both the values of id and anotherId will be different 
console.log(id == anotherId);

const bigNumber = 878945462154554845154n
// n will make a number BigInt



// Non-Primitive (also called Reference)
// Array, Objects, Functions


const arr = ["html", 'css', 'bootstrap', 'js', 'react']


let myObj = {
    name: "ashish",
    age: "18",
    mobile: "iphone15 pro"
}


let fun = function(){
    console.log("kida ki hal chal");
}