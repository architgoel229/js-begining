const user = {
    username: "helloJi",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`);    // usage of `this` keyword
        console.log(this);
        
    },
};
// user.welcomeMessage();
// user["username"]="sayyan";
// user.welcomeMessage();

// console.log(this);  //here(node) --> empty object, browser --> window object

// function chai() {
//     let username="hitesh"
//     console.log(this.username);
    
// }

// chai();

// const chai=function(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }

// chai();

// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
    
// }

// chai();

// const addTwo = (num1, num2) =>  (num1 + num2);

const addTwo = (num1, num2) =>  ({username: "hitesh"})


console.log(addTwo(123456789,9876543210));


const myArr = [2,3,4,5,6,7,8,9]

// myArr.forEach();
