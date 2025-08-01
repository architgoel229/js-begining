// for of

// [{},{},{}]
// ["","",""]


// const arr = ["superman", "batman", "flash"];

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world";

// for(const greet of greetings){
//     console.log(`Each char of greetings is ${greet}`);
    
// }

// Maps -  same as objects but it can only have unique keys

const map = new Map();

map.set('DL','Delhi');
map.set('MH','Maharashtra');
map.set('RJ','Rajasthan');
map.set('CH','Chandigarh');
map.set('HR','Haryana');
map.set('UP','Uttar Pradesh');
map.set('JK','Jammu & Kashmir');

// console.log(map);

for (const [key, value] of map) {
    console.log(`${key} ==> ${value}`);
}

const myObject = {
    Game1: `Need For Speed`,
    Game2: `Resident Evil`,
    Game3: `Grand Theft Auto`,
    Game4: `Tomb Raider`,
    Game5: `Street Fighter`,
    Game6: `Uncharted`,
    Game7: `Mortal Kombat`,
};

// for (const {key,value} of myObject) {   //Error - Not Iteratable
// console.log(key, `:-`, value);          //Error - Not Iteratable
// }                                       //Error - Not Iteratable