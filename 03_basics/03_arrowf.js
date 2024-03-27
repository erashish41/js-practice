// this keyword is used to access the current context || context means value

const user = {
    username: "ashish",
    price: 9999,

    // welcomeMessage is method

    welcomeMessage: function(){             
        console.log(`hello ${this.username}, welcome to the website`);
    }

}
// // user.welcomeMessage()
// // user.username = "ashu"
// // user.welcomeMessage()

// console.log(this);    //the global object is window object


// ***************  arrow function  ***********

//// function 1
// function chai (){
//     let username = "ashish"
//     console.log(username);
// }

// chai()

////function 2

//  function chai (){
//         let username = "ashish"
//         console.log(this.username);
//     }
// chai()      //output is undefined

//// function 3
 const chai  = () => {
        let username = "ashish"
        console.log(username);
    }

// chai()

//// arrow function
 const addTwo = (num1, num2) => {
    return num1 * num2
 }

 console.log(addTwo(1,2));

 const addTwo2 = (num1, num2) =>  num1 * num2
 console.log(addTwo(1,2));

 // if { } is used than have to write return and if ( ) is used than don't write return