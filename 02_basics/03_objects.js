/* 2 types of declaring Objects 
a. Literals       b. Constructor

a.when we make object in literals then their is no singleton
b. when we make object in constructor then their is singleton
Singletons are classes which can be instantiated once, and can be accessed globally.

Object: whenever output is taken it will take element as string.
If we define a symbol and add to object it will declare as array in object and output will
be taken as array
*/
const mySym = Symbol ("naruto")

const JsUser = {
    name1: "Ashish",
    "full pta": "Ashish Bhardwaj",
    age: 18,
    [mySym]: "myNatuto",
    location: "Chandigar",
    email: "erashish41@gmail.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.age)
// console.log(JsUser.email)
// console.log(JsUser["name1"])        //name1 is treated as string
// console.log(JsUser["full pta"])

// console.log(JsUser[mySym]);

// JsUser.email = "erashish@google.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello kida")
}
JsUser.greeting1 = function(){
    console.log(`Hello kida ${this.name1}`)
}

console.log(JsUser.greeting());
console.log(JsUser.greeting1());