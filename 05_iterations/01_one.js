//for

for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element==7){
        // console.log('thala for a reason');
    }
    // console.log(element);       
}

for(let i = 1; i <= 10; i++){
    // console.log(`table: ${i}`);
    
    for(let j = 1; j <= 10; j++){
        // console.log(`${i} X ${j} = ${i*j}`);
        
    }
}

let myArray=["shaktiman", "ironman", "batman", "spiderman"];
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}



//break & continue

for(let i = 1; i<=20; i++){
    if(i==5){
        console.log(`${i} detected`);
        continue;
    }
    console.log(`value of i is ${i}`);
    
}