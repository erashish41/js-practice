const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => {return num + 10})

// Chaining : means we can use two three methods combine
const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)      // value start with previous value + 1(11)
                .filter((num) => num >= 40)
console.log(newNums);


