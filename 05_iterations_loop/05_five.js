// forEach loop

// forEach loop with Array with function
const coding = ["js", "py", "rb", "c"]
//callback function don't have function name -- (  function name() {}) name is missing 
coding.forEach(  function (item) {
    // console.log(item);

})

// forEach loop with Array with Arrow function  // greet = () => { }
coding.forEach(   (arr) =>  { 
    // console.log(arr);
})


// // we can make reference of function 
// function money (price){
//     console.log(price);
// }

// coding.forEach( money)

// coding.forEach( (item, index, arr) => {              // item, index, arr are parameter
//     console.log(item, index, arr);
// })


// [{}, {}, {}]
const myCoding = [
    {
    languageName: "javascript",
    languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})