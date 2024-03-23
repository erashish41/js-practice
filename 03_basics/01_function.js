// Function are block of code designed to perform a particular task

function addTwoNum(num1, num2){      // (num1, num2) = parameter
    let result = num1 + num2
    console.log("Ashish");
     return result                  // after return nothing will be print
 }

 const result = addTwoNum(7,1)         // (7,1) = argument
//  console.log(("Result : ", result));
 
//  both functions are same

function addTwoNum(num1, num2){     
    return num1 + num2
}
// console.log(addTwoNum(7,1));         



function unFit(per1, per2){
    let result = per1 + per2
    return result
    // return per1 + per2
}

let caliory = unFit(1,9)
// console.log(caliory);


function loginUser(username){
    return `${username} has just logged in`
}
// console.log(loginUser("Ashish"));
// console.log(loginUser());               //if nothing is pass then undefined will come


// when we make e-kart shopping app then we use like this

function calculateCartPrice(num){
    return num
}
// console.log(calculateCartPrice(2));

function calculateCartPrice(...num){   // ... is called spread and rest operator
    return num
}
// console.log(calculateCartPrice(200,40,100,33,66,54,500));

//passing Object
const user = {
    username : "ashish",
    height : 177
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and height is ${anyobject.height}`);
}
handleObject(user)

//passing Array
const Arr1 = [200, 44, 77, 778, 13, 500]

function returnSecondValue(anynum){
    return anynum[1]
}
console.log(returnSecondValue(Arr1));
