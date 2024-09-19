// function runForTime(timeinms){
//     const startTime = Date.now();
//     while(Date.now() - startTime < timeinms ){
//         console.log(`loop ran for ${timeinms} milliseconds`);
//     }
// }
// runForTime(1000);

// function abc(name){
//     this.name = name;
// }
// const value = new abc()
// console.log(value); //an empty object will be printed


function abc(name){
    this.name = name;
}
const value = new abc("erbaz")
console.log(value); //erbaz will be printed in the object name

//factory function

function abc1(name1, age){
    const obj = {name1, age}
    return obj;
}
const val1 = abc1("rizwan", 22);
console.log(val1);
