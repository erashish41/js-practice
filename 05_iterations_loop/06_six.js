// // forEach don't return the value, its undefined
// const mobile = ["ipone", "samsung", "1+", "vivo", "oppo"]

// const values = mobile.forEach( (item) => {
//     console.log(item);
//     return item
// })
// // console.log(values);

//filter
const myNums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);