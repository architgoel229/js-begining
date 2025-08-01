// const tinderUser = new Object()  //singleton
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Super sayyan"
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser={
    email:"abc@example.com",
    fullname:{
        userFullName:{
            firstname:"John",
            lastName:"doe",
        }
    },
}
// console.log(regularUser.fullname.userFullName.firstname);

const obj1={1: "a", 2:"b"}
const obj2={3: "a", 4:"b"}
const obj4={5: "a", 6:"b"}

// // const obj3={obj1, obj2}
const obj3 = Object.assign({},obj1,obj2,obj4)

// const obj3={...obj1,...obj2,...obj4}
// console.log(obj3)

// const users = [
//     {
//         id:1,
//         email:"a@example.com",
//     },
//     {
//         id:2,
//         email:"b@example.com",
//     },
//     {
//         id:3,
//         email:"c@example.com",
//     },
// ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName:"Js in hindi",
    price: "999",
    courseInstructor:"hitesh"
}

// const {courseInstructor} = course
const {courseInstructor: Instructor} = course

// console.log(courseInstructor);
console.log(Instructor);


// {
//     "name": "hitesh",
//     "courseName": "js hindi",
//     "price": "free",
// }