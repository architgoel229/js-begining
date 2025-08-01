const promiseOne = new Promise((resolve,reject)=>{
    // do an async task
        //DB calls, cryptography, network
        setTimeout(()=>{
            console.log("async task completed");
            resolve()
        }, 1000)
        
})

promiseOne.then(()=>{
    console.log("promise consumed");
    
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 1000);
}).then(()=>{
    console.log("async 2 resolved");
    
})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({username: "chai", mail:"chai@example.com"})
    }, 1000);
})

promiseThree.then((user)=>{
    console.log(user);
    
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username: "johnDoe", password:"johnDoe@123"})
        }else{
            reject('error something went wrong');
        }
    },2000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}).then((myUsername)=>{
    console.log(myUsername);
}).catch((err)=>{
    console.log(err);
    
}).finally(()=>console.log("the promise 4 is completed irrespective of failiure or pass")
)

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username: "javaScript", password:"JS@123"})
        }
        else{
            reject("ERROR: JS went wrong")
        }
    }, 1000);
})

async function consumePromiseFive(){
   try{const response = await promiseFive
   console.log(response);}
   catch(error){
    console.log(error);
    
   }
}

consumePromiseFive()





// async function getAllUsers(){
//     try{const response = await fetch("https://api.github.com/users");
//     const data = await response.json();
//     console.log(data);}
//     catch(error){
//         console.log(error);
//     }
    
// }

// getAllUsers();

fetch('https://api.github.com/users/architgoel229')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})
