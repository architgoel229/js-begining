const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift By Apple",
}

// for (const key in myObject) {
//     console.log(`${key} is Short Form of for ${myObject[key]}`);
    
// }

const myArray=["js","rb","swift","cpp", "py"];

for( const lang in myArray){
    console.log(myArray[lang]);
    
}

// map cant be iterated by forin