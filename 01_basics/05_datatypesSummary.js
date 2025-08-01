// Primitive
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

// let bigNumber=12345n;//bigInt

// const myobjr=["shaktiman", "naagraj", "doga"]

// let myobj={
//     name: "john doe",
//     age: 25,
//     email: "johndoe2000@example.com",
// }

// const someonesFunction = function(){
//     console.log("hello ji");
// }
// let mySymbol=Symbol("789")
// console.log(typeof bigNumber);
// console.log(typeof null);
// console.log(typeof someonesFunction);
// console.log(typeof mySymbol);
// console.log(typeof myobj.name);



// Reference (non-Primitive)
// Array, Objects, Functions

//********************* 
//stack (primitive), heap (non-primitive)

let myNaam= "jaunty outsider";  
let anotherNaam=myNaam;
anotherNaam="broken";
console.log(myNaam);
console.log(anotherNaam);

let user1={
    name:"johndoe",
    upi:"johndoe@ptsbi",
};

let user2=user1;

user2.upi="jd@okaxis"

console.log(user1.upi);
console.log(user2.upi);
