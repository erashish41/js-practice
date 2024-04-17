// fetch().then().catch().finally()
// .then have a direct solution with a resolve
// if a response come it will come in then and if the error comes it will come in catch
// Promises are object
// Pomises can be created and consumes
// new Promise have callback function and callback have callback then again callback

// Promise One
const promiseOne = new Promise(function(resolve, reject){
    //do an async task           DB cals, cryptograph, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()     // by resolve mehtod we can connect then to resolve
    }, 1000);
})
promiseOne.then(function(){
    console.log("Promise resolved");
})


// Promise Two
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2 complete");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


// Promise Three
// we can pass object, array and function in resolve method and can fetch the data also
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "ashish", email: "erashish41@gmail.com"})
    },1000)
})

promiseThree.then(function(e){
    console.log(e);
})


// Promise Four      (used for error file or not)
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"bhardwaj", password: "123"})
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The promise is resovled or rejected");
})


// Promise Five
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript", password: "123"})
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.

consumePromiseFive()
