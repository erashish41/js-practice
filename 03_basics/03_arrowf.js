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

 function chai (){
        let username = "ashish"
        console.log(this.username);
    }
chai()