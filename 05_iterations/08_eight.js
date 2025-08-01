const arr=[0,1,2,3];
let i=5;

// const sum = arr.reduce((accumulator,currentValue)=> {
//     console.log(`Accumulator: ${accumulator} \nCurrent Value:${currentValue}`);
    
//     return accumulator + currentValue;
// },0);

const sum = arr.reduce((acc,curr)=>(acc+curr),i);

// console.log(sum);

const shoppingCart = [
    {
        item: "Web Dev",
        price:199,
    },
    {
        item: "Mobile Dev",
        price:2999,
    },
    {
        item: "Python analyst ",
        price:5999,
    },
    {
        item: "Data science",
        price:12999,
    }
]

const total = shoppingCart.reduce( (accumulator,currentValue) => accumulator+currentValue.price,0);

console.log(total);
