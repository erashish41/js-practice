// Reduce method
// const initialValue = 0;
// const sumWithInital = myNums.reduce(
//     (accumulation, currentValue) => accumulation + currentValue,
//     initalValue
// );


const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function (acc, currval){
    console.log(`acc ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
// console.log(myTotal);


const shoppingCart = [ 
    {itemName: "js",
    price: 3299},
    {itemName: "cpp",
    price: 2199},
    {itemName: "mobile developer",
    price: 7299},
    {itemName: "python",
    price: 9099}
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0 )
console.log(priceToPay);