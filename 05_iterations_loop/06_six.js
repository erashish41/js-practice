// // forEach don't return the value, its undefined
// const mobile = ["ipone", "samsung", "1+", "vivo", "oppo"]

// const values = mobile.forEach( (item) => {
//     console.log(item);
//     return item
// })
// // console.log(values);



// //filter
// const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums);


let countries = [
        {name1: "United States", capital: "Washington, D.C.", currency: "US Dollar"},
        {name1: "France", capital: "Paris", currency: "Euro"},
        {name1: "India", capital: "New Delhi", currency: "Rupees"},
        {name1: "China", capital: "Beijing", currency: "Renminbi" },
        {name1: "Brazil", capital: "Brasília", currency: "Brazilian Real"},
        {name1: "Australia", capital: "Canberra", currency: "Australian Dollar" },
        {name1: "India", capital: "Kolkata", currency: "Rupees"},
        
    ];

let userCountrys = countries.filter( (user) => { return user.name1 === "India"})
console.log(userCountrys);