// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB Connected`);
    
})();


( (name)=>{
    // unnamed IIFE
    console.log(`DB2 Connected ${name.toUpperCase()}`);
    
})("sayyan");

// (<definition>)(<execution call>)


// chai();