// for_in = key (used to get the key from Array and Object)
// for_of = value (used to get the value mostly from Array)

// for_in with object
const myObject = {
    js: 'javascript',
    rb: 'ruby',
    swift: "swift by apple"
}
for (const key in myObject) {
//    console.log(myObject[key]);
}

// for_in with Array
const programming = ["js", "rb", "py", "java"]
for (const key in programming) {
    // console.log(programming[key]);
}

// // for_in with Maps  :    we can do iteration with Maps
// const map = new Map()                 // Map is object
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('Cn', "Canada")
// for (const key in map) {
//     console.log(map[key]);
// }

const home = [ "father", "mother", "brother", "sister"]
for(const key of home) {
    console.log(key);
}