class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`Username:  ${this.username}`);
    }
    static createID(){
        return `123`
    }
}

const chai = new User("dharmesh")
// console.log(chai.createID())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email;
    }
}

const motorola=new Teacher("Motorola", "motorola@g54.com")
console.log(User.createID())
motorola.logMe()
console.log(motorola.createID());  //err