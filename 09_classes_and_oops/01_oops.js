const user = {
    username: "ashish",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){                     // getUserDetails is method
        // console.log("Got user details from Database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());
//Object literal  has collection   --- An object literal is a list of property names and
//  their values enclosed in curly braces, separated by commas and colons. 


//A constructor is a special function that creates and initializes an object instance of a class. 
// In JavaScript, a constructor gets called when an object is created using the new keyword. 
// The purpose of a constructor is to create a new object and set values for any existing object properties.
const user2 = {
    username: "ashish",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){                     // getUserDetails is method
        // console.log("Got user details from Database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
console.log(user.username);
console.log(user.getUserDetails());



function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);