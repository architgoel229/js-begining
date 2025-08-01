const marvelHeros=["Thor","Ironman","Spiderman"];
const dcHeros=["Superman","Flash","Batman"]

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

// let allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

const allNewHeros=[...marvelHeros,...dcHeros];
// const allNewHeros=[marvelHeros,dcHeros];
console.log(allNewHeros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const realAnotherArray = anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("hello"));
console.log(Array.from("hello"));
console.log(Array.from({name:"hello"}));
console.log(Array.of(marvelHeros,dcHeros,anotherArray));
