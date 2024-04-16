// fetch().then().catch().finally()
// .then have direct solution with resolve
// if response come it will come in then and if error comes it will comes in catch
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