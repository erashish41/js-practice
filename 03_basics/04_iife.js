// 1. In JavaScript, an Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.
// 2. sometime we have problem with polution of global scope and to reduce the polution the variables of global scope we use IIFE 
// 3. when we have more then 1 IIFE then put ; in the end of the function



(function chai(){           // chai is named IIFE
    console.log(`DB connected`);
})();

// (  () => {} ) ()

( function ourCode(){     // ourCode is named IIFE
    console.log(`kida ki hal`);
})();

( (name1) => {
    console.log(`hello jnab ${name1}`);
})(`ashish`)