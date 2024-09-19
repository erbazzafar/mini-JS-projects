function f1(){
    return 2;
}

function f2(){
    return 4;
}

let a = (f1(), f2());
console.log(a); //first a is assigned 2, then it will be overwrite by 4, hence Output = 4

const arr = ["one", "two", "three"]
const str = "hello";

const check1 = arr.includes("on");  
const check2 = arr.includes('two'); 
const check3 = str.includes('hl');   

console.log(check1);    //false
console.log(check2);    //true
console.log(check3);    //false

console.log('1' == 1);  //true, here it is only checking the value not its data type
console.log('1' === 1); //false, because it will check the data type also
console.log(true == '');    //false

let f= 10;
let b = new Number(10);
let c =10;
console.log(f === b);   //false

// let a2 = (name :'erbaz');
// let z = {...a2};
// z.name = "zafar";
// console.log(a2.name);   //erbaz (ShallowCopy)

console.log(+true); //1
console.log(!"");    //true
console.log(!"xyz");    //false

//simpleFunction
function area(l, w, h){
    return l*w*h;
}
const h = area(2,4,5);
console.log(h);

//curryingFunction
function length(l){
    return function(w){
        const mult = l*w;
        return function(h){
            const o = mult * h;
            return o;
        }
    }
}

const volume = length(2)(8)(6);
console.log(volume);

function lengthString(str1){
    let i =0 
    let m = 0;
    for (i; i<str1.length; i++){
            m++;
    }
    return m;
}

//mergeStringAlternately
const len = lengthString('erbaz');
console.log(len);

function mergeString(str1, str2){

    let fStr = '';
    let i = 0;

    for(i; i<str1.length && i<str2.length; i++){
        fStr = fStr + str1[i]; 
        fStr = fStr + str2[i];
    }
    while(i<str1.length || i<str2.length){
        if (i<str1.length){
            fStr = fStr + str1[i];
            i++;
        }else{
            fStr = fStr + str2[i];
            i++;
        }
    }
    return fStr;
}
const merg = mergeString('erbazzafar', 'hello');    //ehreblalzozafar
console.log(merg);

function sum(a, b){
    return a+b;
}
console.log(sum((3), (4))); //7

//flatten the subarray
const arr3 = [[1,2], [3,4], 0];
const Farr = arr3.flat();
console.log(arr3[1]);
console.log(Farr);

function foo(){
    console.log("hello");
    return "hello returned";
}
const result = foo()
console.log(result);

let sumArr = [1, 2, 3, 4, 5];
let sum1 = 0;
for(let i=0; i<sumArr.length; i++){
    sum1 = sum1+ sumArr[i];
}
console.log(sum1);
