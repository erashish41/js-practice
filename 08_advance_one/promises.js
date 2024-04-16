// fetch().then().catch().finally()
// .then have direct solution with resolve
// if response come it will come in then and if error comes it will comes in catch
// Promises are object
// Pomises can be created and consumes
// new Promise have callback function and callback have callback then again callback

const promiseOne = new Promise(function(resolve, reject){
    //do an async task           DB cals, cryptograph, network
    setTimeout(function(){
        console.log('Async task is complete');
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise resolved");
})