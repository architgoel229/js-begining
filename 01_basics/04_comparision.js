// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);   

// console.log("2">3);  //f
// console.log("2">1);  //t
// console.log("02">1); //t

console.log(null == 0); //f
console.log(null > 0);  //f
console.log(null >= 0); //t
console.log(null < 0);  //f

//this is because the == operater compares the both variable and <,>,<=,>= compares 2 variables by converting them to a number and null is treated as 0 when converted from null to number

console.log(undefined == 0) //f
console.log(undefined > 0)  //f
console.log(undefined < 0)  //f
console.log(undefined <= 0)  //f

console.log("2"==2) //checks value only
console.log("2"===2)//checks both value and datatype
