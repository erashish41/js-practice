// **************   Arraya   ***************

const myArr = [0,1,2,3,4,5]
// console.log(myArr);

const myArr2 = new Array(5,6,7,8,9)
// console.log(myArr2[2]);


//// **************   Array methods   ***********

// myArr.push(8)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9));
// // includes it used to check boolean value(true or false)



// const newArr = myArr.join()

// console.log(newArr);
// console.log(typeof newArr);


// slice and splice
// The slice() method returns a shallow copy of a portion of an array into a new array object. It does not modify the original array.
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
//splice(1,3) this means remove element from 1 position and remove 3 elements from 1 to 3

console.log("C", myArr);
console.log(myn2);

