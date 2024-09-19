async function asyncFun(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data 1");
            resolve("success");
        }, 3000);
    })
}


async function asyncFun2(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data 2");
            resolve("success");
        }, 3000);
    })
}

//promise chainig

// console.log("fetching data1...");
// let a1 = asyncFun();
// a1.then((res) =>{
//     console.log(res);
//     console.log("fetching data2...");
//     asyncFun2().then(res)
// })

//promise chainig
//asyncFun().then((res) =>{
//     console.log("fetching data2...");
//     return asyncFun2();
// })
// .then((res) =>{
//     console.log(res);
// })
//

//async-await function returns a promise

// async function gettingData(){
//     console.log("fetching data1...");
//     await asyncFun()
//     console.log("fetching data2...");
//     await asyncFun2();
//  };

 //IIFE: Immediately invoked function expression
//this is an IIFE funtion, we dont need to call it and runs
//only single time
 (async function (){
    console.log("fetching data1...");
    await asyncFun()
    console.log("fetching data2...");
    await asyncFun2();
 })();