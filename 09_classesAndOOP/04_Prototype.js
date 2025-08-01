let myName = "Archit      ";
let myChannel = "   masterOoggyWay   ";

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.john = ()=>{
    console.log(`john is hiding everywhere`);
    
}
Array.prototype.heyJohn = ()=>{
    console.log(`john is saying hello`);
    
}

// heroPower.john()
// heroPower.heyjohn()
// myHeros.john()
// myHeros.heyJohn()

// inheritance


const user={
    name:"chai",
    mail:"chai@google.com"
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__=user


//Modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode      "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength();
myChannel.trueLength();
myName.trueLength();
" brokenTorque  ".trueLength()
"   chai   ".trueLength();