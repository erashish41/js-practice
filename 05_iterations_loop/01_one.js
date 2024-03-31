// for loop

// let index = 0; --- means variable is declared
// index < array.length; --- condition check (after condition check it will go to inside of loop
//   and after that it will go to index++)
// index++ ---

// ----------------------------

// for (let index = 0; index <= 10; index++) {            // block scope
//     const element = index;
//     console.log(element);
// }

// // console.log(element);


//// loop in loop
// for (let i = 0; i <= 6; i++ ){
//     const element1 = i;
//     if(element1 == 3){
//         console.log("5 is the best number");
//     }
//     console.log(element1);
// }


// for (let i = 0; i <=  5; i++) {
//     console.log(`Outer loop value is ${i}`);
//     for (let j = 0; j <=5; j++) {
//         // console.log(`Inner loop value is ${i}`);
//         console.log(i + '*' + j  +  ' = ' +  i*j);
        
//     }    
// }

// for array
let myArray = [ "flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}



// break and continue
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
    
}

for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
}