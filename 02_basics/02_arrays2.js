const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros[3][1]);
// //this means that now their are only 4 elements not 6 elements
// // and this means take position of 1 of 3 element.

//spread operator: it will spread all the array in one line

const new_heros = [...marvel_heros, ...dc_heros]


console.log(new_heros);
console.log(Array.of(marvel_heros,dc_heros));
