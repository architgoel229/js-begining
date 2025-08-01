const userEmail="helloji.storyteller";

if(userEmail){
    console.log("got user email");
}else{
    console.log("Don't have user email");
}

// falsy values
// false, 0, "", -0, BigInt 0n, null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

let arr=[]

if(arr.length === 0){
    console.log("array is empty");
    
}

const emptyObj={};
if(Object.keys(emptyObj).length === 0){
    console.log("empty object");
    
}


// Nullish Coalescencing Operator (??): null undefined
 
let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = null ?? undefined;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;




console.log(val1);


// Terniary operator
// if else alternative
// condition ? true : false;
const icedTeaPrice=100;
console.log(icedTeaPrice <=80?"less than 80":"greater than 80");

