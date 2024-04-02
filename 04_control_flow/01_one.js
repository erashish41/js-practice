// Control Flow
// if(){}

const inUserloggedIn = true

if(inUserloggedIn){
    // console.log(`executed`);
}

// <, >, <=, >=, !=, ==, ===

if(2 == "2"){
    // console.log(`equal`);
}


// const temp = 77
// if(temp === 41){
//     console.log("temp is less than 50")
// }else{
//     console.log("temp is greater than 50");
// }



// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }


// ----------------------  if, else if, else  ----------------------- 
// const balance = 1000
// // if(balance > 500) console.log("test");
// if(balance < 500) {
//     console.log("less than 500");
// }else if(balance < 750) {
//     console.log("less than 750");
// }else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard && 2 != 3){
    console.log("allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("user logged in");
}