function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("C");
    console.log("H");
    console.log("I");
    console.log("T");
}
// sayMyName();

function addTwoNumbers(number1,number2) {
    // let result=number1+number2;
    return number1+number2;
}

// addTwoNumbers(123456789,987654322)
const result = addTwoNumbers(1,2)
// addTwoNumbers(123456789,"a")
// console.log(result)

function loginMessage(username="sayyan"){
    if (!username){
        console.log("please enter a username");
        return;
    }
        return `${username} has just logged in`;
}

// console.log(loginMessage());
// console.log(loginMessage(""));
// console.log(loginMessage("lallu-pappu"));

function calculatedCartPrice(val1,...num1) {
    return num1;
}
console.log(calculatedCartPrice(200,400,500));

const user={
    username: "benStoke",
    price: 199,
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)