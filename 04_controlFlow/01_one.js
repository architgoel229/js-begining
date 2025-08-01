// if
const isUserLoggedIn= true;
const temperature = 51;

// if(temperature<50){
//     console.log("less than 50");
// }else{
//     console.log("greater than 50");
// }

// console.log("Executed");



// <, >, <=, >=, ==, !=, ===

// const score = 200;

// if (score>100){
//     let power ="fly";
//     console.log(`User Power: ${power}`);
    
// }
// console.log(`User Power: ${power}`);


const balance=10000;

// if (balance >5000) console.log("test"),console.log("test2");

// if (balance < 5000){
//     console.log("less than 5000");
    
// }else if(balance < 7500){
//     console.log("less than 7500");
    
// }else if(balance < 9000){
//     console.log("less than 9000");
    
// }else if(balance < 12000){
//     console.log("less than 12000");
    
// }else{
//     console.log("greater than 11999");
    
// }

const userLoggedIn=false;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if ((userLoggedIn||loggedInFromGoogle||loggedInFromEmail) && debitCard){
    console.log("Allowed to buy");
    
}