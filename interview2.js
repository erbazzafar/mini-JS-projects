var x = 20
async function foo() {
    console.log(x);
    var x = 10;
}
let result = foo();
console.log(result);

// let a = 12;
// console.log(a);

// console.log("start");
// setTimeout(() =>{
//     console.log("timeOut");
    
// }, 0)
// console.log("end");

// setTimeout(() =>{
//     console.log("timeOut");
    
// }, 0)
// Promise.reject().then(()=>{
//     console.log("promise");
// })
// console.log("end");

// async function foo() {
//     return "Hello, World !!";
// }
// async function getResult() {
//     let res = await foo();
//     console.log(res);
// }
// getResult();

// console.log([1,2] == [1,2]); //false, because it will check the reference not the value

const user1 = {
    name : "rizwan",
    age: 35,
};
const user2 = user1;
user2.name = "erbaz"
user2.age = 24;
console.log(user1);
console.log(user2);

// const numArr = [1,2,3,4,5,6]
// let arr = numArr.filter((i)=>i<4).map((val)=>val+4);
// console.log(arr);

// const str = "hi i am erbaz";
// let arr = str.split(' ');
// console.log(arr);
// const newArr = arr.map((val)=>{
//     return val[0].toUpperCase() + val.slice(1);
// })
// console.log(newArr);
