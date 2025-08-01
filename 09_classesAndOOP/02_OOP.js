const user = {
    username: "johnDoe",
    loginCount: 7,
    signedIn: true,
    getUserDetails:function(){
        // console.log("got user details");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
    }
}
const user2 = {
    username: "johnDoe",
    loginCount: 7,
    signedIn: true,
    getUserDetails:function(){
        // console.log("got user details");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(users.username);
// console.log(user.getUserDetails());
// console.log(this);

let User = function(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn=isLoggedIn
    this.greet = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this
}

const userOne = new User("masterBee", 14, true);
const userTwo = new User("hockeyStick", 9, false);

userOne.greet()

// console.log(userOne.constructor);
// console.log(userTwo);
