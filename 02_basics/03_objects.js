// singleton
// Object.create

// object literals

const mySym=Symbol("key1")

const jsUser={
    name:"John",
    "full name":"John Doe",
    [mySym]: "mykey1",
    age:18,
    location: "New York City",
    email:"Doe2006john@hotmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(jsUser.name);   //not a recomended way
// console.log(jsUser["full name"]);   //recomended way
// console.log(jsUser[mySym]);

jsUser["email"]="johndoe2006@hotmail.com"
// Object.freeze(jsUser);
// console.log(jsUser["email"]);
// jsUser["email"]="johndoe06@hotmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello!! JS User");
}
jsUser.greetingtwo = function(){
    console.log(`Hello!! JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
