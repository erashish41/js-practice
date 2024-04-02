// for of

// ["" ,"" ,""]
// [{}, {}, {}]

// const arr = [ 1, 2, 3, 4, 5]
// for (const num of arr) {
//     // console.log(num);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(greet);
// }



// Maps:    is used for unique values and shows in same order as shown
const map = new Map()                 // Map is object
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('Cn', "Canada")

console.log(map);

for (const [key] of map) {
    console.log(key);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Naruto'
}
// for (const [key, value] of myObjectbject) {
//     console.log(key,  ':-', value);
// }