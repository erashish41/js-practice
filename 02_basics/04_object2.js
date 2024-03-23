/*  a.when we make object in literals then their is no singleton
    b. when we make object in constructor then their is singleton
     Singletons are classes which can be instantiated once, and can be accessed globally. */

     const tinderUser = {}
     
     tinderUser.id = "125abc"
     tinderUser.name = "zayn"
     tinderUser.isLoggedIn = false

    // // console.log(tinderUser);

    // const regularUser = {
    //     email : "some@gmail.com",
    //     fullname: {
    //         userfullname: {
    //             firstname: "Ashish",
    //             lastname: "bhardwaj",
    //         }
    //     }
    // }

    // console.log(regularUser.fullname.userfullname.lastname)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = Object.assign({}, obj1, obj2)
// // const obj3 = {...obj1, ...obj2}
// console.log(obj3);



// Array of object
//  when values come from database

const users = [
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 2,
        email: "some@gmail.com"
    },
    {
        id: 3,
        email: "some@gmail.com"
    },
    {
        id: 4,
        email: "some@gmail.com"
    },
    {
        id: 5,
        email: "some@gmail.com"
    },
    {
        id: 6,
        email: "some@gmail.com"
    },
]

console.log(users[5].email)

console.log(Object.keys(tinderUser));  // output will be in form of array
console.log(Object.values(tinderUser));  
