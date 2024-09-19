console.log(addOne(4));
function addOne(num){
    return num + 1;
}


console.log(sum2(4));
const sum2 = function addTwo(num){
    return num + 2;
}

//closure
function parent(){
    const str1 = "hello";
    function children(){
        const str2 = "erbaz";
        console.log(str1);
    }
    children();
}
parent();