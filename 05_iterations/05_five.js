const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (element) {
//     console.log(element);
// } );

// coding.forEach( (element) => {
//     console.log(element);
// } );

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item,index, arr) => (
//     console.log(`${item} at ${index} from ${arr}`)
// ))


const myCoding = [
    {
        language: "javascript",
        languageFileExt:"js"
    },
    {
        language: "java",
        languageFileExt:"java"
    },
    {
        language: "python",
        languageFileExt:"py"
    }
]

myCoding.forEach( (element) => {
    console.log(`${element.languageFileExt} is used for ${element.language}`);
    
})
myCoding.forEach( (element) => {
    for(const i in element){
        console.log(element[i]);
    }
})