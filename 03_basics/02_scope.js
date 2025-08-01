var c=90;
let a = 70;
const b = 80;
if (true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log(`Inner: ${a}`)
    // console.log(`Inner: ${b}`)
    // console.log(`Inner: ${c}`)
}


// console.log(a);
// console.log(b);
// console.log(c); //scope is undefined

function one() {
    const username="jauntyOutsider"
    function two() {
        const website="https://play.google.com";
        console.log(username);
        
    }
    // console.log(website);
    two();
}

// one()

if(true){
    const username="BrokenTorque"
    if (username==="BrokenTorque") {
        const website=" Play games"
        // console.log(username+website);
    }
    // console.log(website);
    
}

// console.log(username);

// ++++++++++++++++++ Interesting ++++++++++++++++++++

console.log(addOne(5)); //working
function addOne(num) {
    return ++num;
}

console.log(addTwo(5)); //notWorking
const addTwo=function(num){
    return num+2;
}

